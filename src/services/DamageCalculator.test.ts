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
    // 45 * 3 = 135
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(135, 2);
  });

  it('属性ダメージ: 1ヒット時（小数点切り捨て）', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 20, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 1 };
    // ((20*1+0)*1*0.25*1)/10 = 0.5, Math.floor(0.5) = 0
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
  });

  it('属性ダメージ: 複数ヒット時（各ヒットごとに切り捨て）', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 3 };
    // per hit: ((50*1+0)*1*0.25*1)/10 = 1.25, Math.floor(1.25) = 1, total = 3
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(3);
  });

  it('属性ダメージ: 属性会心補正あり', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.35, hitcount: 2 };
    // per hit: ((50*1+0)*1*0.25*1.35)/10 = 1.6875, Math.floor(1.6875) = 1, total = 2
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(2);
  });

  it('合計ダメージ（物理＋属性）を計算できる', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash', hitcount: 2, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0 };
    // physical: 45*2=90, elemental: per hit 1.25->1, total 2, sum=92
    expect(DamageCalculator.calculateTotalDamage(params)).toBeCloseTo(92, 2);
  });

  it('物理: hitcount未指定時は1として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(45, 2);
  });

  it('属性: hitcount未指定時は1として扱う', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
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
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
  });
});
