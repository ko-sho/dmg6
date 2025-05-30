import { describe, it, expect } from 'vitest';
import { DamageCalculator } from './DamageCalculator';
import type { DamageParameters } from './DamageCalculator';

describe('DamageCalculatorのテスト', () => {
  const baseParams: DamageParameters = {
    baseWeaponMultiplier: 200,
    additionAttackBonus: 0,
    attackMultiplierBonus: 1.0,
    motionValue: 30,
    sharpnessModifier: 1.0,
    elementalSharpnessModifier: 1.0, // 追加
    criticalDamageModifier: 1.25,
    criticalRate: 0,
    criticalRateBonus: 0,
    slashHitZone: 60,
    bluntHitZone: 50,
    shotHitZone: 40,
    attackType: 'slash', // 型: 'slash' | 'blunt' | 'shot'
    baseElementValue: 20,
    elementMultiplier: 1.0,
    elementAddition: 0,
    elementModifier: 1.0,
    elementalHitZone: 25,
    minHitZone: 0,
    maxHitZone: 100,
    applicableStates: ['normal'],
    elementalCriticalModifier: 1.0,
    hitcount: 1,
  };

  it('斬撃の物理ダメージを計算できる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash' };
    // (200*1+0)*30*1*1.25*60/1000 = 45
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(45, 2);
  });

  it('打撃の物理ダメージを計算できる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'blunt' };
    // (200*1+0)*30*1*1.25*50/1000 = 37.5
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(37.5, 2);
  });

  it('弾の物理ダメージを計算できる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'shot' };
    // (200*1+0)*30*1*1.25*40/1000 = 30
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(30, 2);
  });

  it('物理ダメージ: hitcount指定時は多段ヒット合計になる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash', hitcount: 3 };
    // 45.0 * 3 = 135.0 (各ヒットごとに小数第1位で四捨五入)
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(135.0, 1);
  });

  it('属性ダメージ: 1ヒット時（小数第1位で四捨五入）', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 20, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 1, elementalSharpnessModifier: 1.0 };
    // ((20*1+0)*1*1*0.25*1)/10 = 0.5, Math.round(0.5*10)/10 = 0.5
    expect(DamageCalculator.calculateElementalDamage(params)).toBeCloseTo(0.5, 1);
  });

  it('属性ダメージ: 複数ヒット時（各ヒットごとに小数第1位で四捨五入）', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 3, elementalSharpnessModifier: 1.0 };
    // per hit: ((50*1+0)*1*1*0.25*1)/10 = 1.25, Math.round(1.25*10)/10 = 1.3, total = 3.9
    expect(DamageCalculator.calculateElementalDamage(params)).toBeCloseTo(3.9, 1);
  });

  it('属性ダメージ: 属性会心補正あり', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.35, hitcount: 2, elementalSharpnessModifier: 1.0 };
    // per hit: ((50*1+0)*1*1*0.25*1.35*1)/10 = 1.6875, Math.round(1.6875*10)/10 = 1.7, total = 3.4
    expect(DamageCalculator.calculateElementalDamage(params)).toBeCloseTo(3.4, 1);
  });

  it('合計ダメージ（物理＋属性）を計算できる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash', hitcount: 2, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, elementalSharpnessModifier: 1.0 };
    // physical: 45.0*2=90.0, elemental: per hit 1.3*2=2.6, sum=92.6
    expect(DamageCalculator.calculateTotalDamage(params)).toBeCloseTo(92.6, 1);
  });

  it('物理: hitcount未指定時は1として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(45, 2);
  });

  it('属性: hitcount未指定時は1として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    params.elementalSharpnessModifier = 1.0;
    // ((20*1+0)*1*1*0.25*1)/10 = 0.5, Math.round(0.5*10)/10 = 0.5
    expect(DamageCalculator.calculateElementalDamage(params)).toBeCloseTo(0.5, 1);
  });

  it('criticalDamageModifier未指定時は1.0として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.criticalDamageModifier;
    // (200*1+0)*30*1*1*60/1000 = 36
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(36, 2);
  });

  it('elementalCriticalModifier未指定時は1.0として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.elementalCriticalModifier;
    params.elementalSharpnessModifier = 1.0;
    // ((20*1+0)*1*1*0.25*1)/10 = 0.5, Math.round(0.5*10)/10 = 0.5
    expect(DamageCalculator.calculateElementalDamage(params)).toBeCloseTo(0.5, 1);
  });
});
