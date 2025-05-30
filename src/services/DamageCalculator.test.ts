import { describe, it, expect } from 'vitest';
import { DamageCalculator } from './DamageCalculator';
import type { DamageParameters } from './DamageCalculator';

describe('DamageCalculator', () => {
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

  it('calculates physical damage for slash', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash' };
    // (200*1+0)*30*1*1.25*60/1000 = 45
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(45, 2);
  });

  it('calculates physical damage for blunt', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'blunt' };
    // (200*1+0)*30*1*1.25*50/1000 = 37.5
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(37.5, 2);
  });

  it('calculates physical damage for shot', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'shot' };
    // (200*1+0)*30*1*1.25*40/1000 = 30
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(30, 2);
  });

  it('calculates physical damage with hitcount', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash', hitcount: 3 };
    // 45 * 3 = 135
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(135, 2);
  });

  it('calculates elemental damage (single hit, round down)', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 20, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 1 };
    // ((20*1+0)*1*0.25*1)/10 = 0.5, Math.floor(0.5) = 0
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
  });

  it('calculates elemental damage (multi hit, round down per hit)', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0, hitcount: 3 };
    // per hit: ((50*1+0)*1*0.25*1)/10 = 1.25, Math.floor(1.25) = 1, total = 3
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(3);
  });

  it('calculates elemental damage with elementalCriticalModifier', () => {
    const params: DamageParameters = { ...baseParams, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.35, hitcount: 2 };
    // per hit: ((50*1+0)*1*0.25*1.35)/10 = 1.6875, Math.floor(1.6875) = 1, total = 2
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(2);
  });

  it('calculates total damage (physical + elemental)', () => {
    const params: DamageParameters = { ...baseParams, attackType: 'slash', hitcount: 2, baseElementValue: 50, elementMultiplier: 1.0, elementAddition: 0, elementModifier: 1.0, elementalHitZone: 25, elementalCriticalModifier: 1.0 };
    // physical: 45*2=90, elemental: per hit 1.25->1, total 2, sum=92
    expect(DamageCalculator.calculateTotalDamage(params)).toBeCloseTo(92, 2);
  });

  it('defaults hitcount to 1 if not specified (physical)', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(45, 2);
  });

  it('defaults hitcount to 1 if not specified (elemental)', () => {
    const params = Object.assign({}, baseParams);
    delete params.hitcount;
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
  });

  it('defaults criticalDamageModifier to 1.0 if not specified', () => {
    const params = Object.assign({}, baseParams);
    delete params.criticalDamageModifier;
    // (200*1+0)*30*1*1*60/1000 = 36
    expect(DamageCalculator.calculatePhysicalDamage(params)).toBeCloseTo(36, 2);
  });

  it('defaults elementalCriticalModifier to 1.0 if not specified', () => {
    const params = Object.assign({}, baseParams);
    delete params.elementalCriticalModifier;
    expect(DamageCalculator.calculateElementalDamage(params)).toBe(0);
  });
});
