import type { MonsterPartState } from '../models/Monster';
import type { MotionAttackType } from '../models/Motion';

interface WeaponDamageParameters {
  baseWeaponMultiplier: number;
  additionAttackBonus: number;
  attackMultiplierBonus: number;
  criticalDamageModifier?: number;
  criticalRate: number;
  criticalRateBonus: number;
}

interface MotionDamageParameters {
  motionValue: number;
  sharpnessModifier: number;
  elementalSharpnessModifier: number;
  hitcount?: number;
  attackType: MotionAttackType;
}

interface MonsterPartDamageParameters {
  slashHitZone: number;
  bluntHitZone: number;
  shotHitZone: number;
  elementalHitZone: number;
  minHitZone: number;
  maxHitZone: number;
  applicableStates: MonsterPartState[];
}

interface ElementalDamageParameters {
  baseElementValue: number;
  elementMultiplier: number;
  elementAddition: number;
  elementModifier: number;
  elementalCriticalModifier?: number;
}


export interface DamageParameters extends WeaponDamageParameters, MotionDamageParameters, MonsterPartDamageParameters, ElementalDamageParameters {}


export class DamageCalculator {
  static calculatePhysicalDamage(params: DamageParameters): number {
    const {
      baseWeaponMultiplier,
      additionAttackBonus,
      attackMultiplierBonus,
      motionValue,
      sharpnessModifier,
      criticalDamageModifier = 1.0, // デフォルト値を1.0に修正
      // 3種肉質
      slashHitZone,
      bluntHitZone,
      shotHitZone,
      attackType,
      hitcount = 1,
    } = params;
    let physicalHitZone = 0;
    switch (attackType) {
      case 'slash':
        physicalHitZone = slashHitZone;
        break;
      case 'blunt':
        physicalHitZone = bluntHitZone;
        break;
      case 'shot':
        physicalHitZone = shotHitZone;
        break;
      default:
        physicalHitZone = slashHitZone;
    }
    const effectiveWeaponMultiplier = (baseWeaponMultiplier * attackMultiplierBonus) + additionAttackBonus;

    const physicalDamage =
      (effectiveWeaponMultiplier *
        motionValue *
        sharpnessModifier *
        criticalDamageModifier *
        physicalHitZone) /
      10000;

    // 多段ヒット考慮
    let totalPhysical = 0;
    for (let i = 0; i < hitcount; i++) {
      totalPhysical += Math.round(physicalDamage * 10) / 10;
    }
    return totalPhysical;
  }

  static calculateElementalDamage(params: DamageParameters): number {
    const {
      baseElementValue,
      elementMultiplier,
      elementAddition,
      elementModifier,
      elementalHitZone,
      elementalSharpnessModifier,
      elementalCriticalModifier = 1.0, // デフォルト1.0
      hitcount = 1,
    } = params;

    let total = 0;
    for (let i = 0; i < hitcount; i++) {
      console.log(elementModifier);
      const perHit =
        ((baseElementValue * elementMultiplier + elementAddition) * elementalSharpnessModifier * (elementModifier ?? 1) * (elementalHitZone / 100) * elementalCriticalModifier) / 10;
      total += Math.round(perHit * 10) / 10;
    }
    return total;
  }

  static calculateTotalDamage(params: DamageParameters): number {
    const physicalDamage = this.calculatePhysicalDamage(params);
    const elementalDamage = this.calculateElementalDamage(params);
    return physicalDamage + elementalDamage;
  }
}
