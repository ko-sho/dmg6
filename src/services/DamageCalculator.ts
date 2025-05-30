export type MonsterPartState = 'normal' | 'wounded' | 'exposed';

export interface DamageParameters {
  baseWeaponMultiplier: number; // 基礎武器倍率
  additionAttackBonus: number; // 加算攻撃力
  attackMultiplierBonus: number; // 攻撃乗算倍率
  motionValue: number; // モーション値
  sharpnessModifier: number; // 切れ味補正
  elementalSharpnessModifier: number; // 属性切れ味補正
  criticalDamageModifier?: number; // 会心ダメージ補正（デフォルト1.25）
  criticalRate: number; // 会心率
  criticalRateBonus: number; // 加算会心率
  // 物理肉質を3種追加
  slashHitZone: number;
  bluntHitZone: number;
  shotHitZone: number;
  attackType: 'slash' | 'blunt' | 'shot';
  baseElementValue: number; // 元の属性値
  elementMultiplier: number; // 属性乗算補正
  elementAddition: number; // 属性加算補正
  elementModifier: number; // 属性補正
  elementalHitZone: number; // 属性肉質
  minHitZone: number; // 適用される肉質の下限
  maxHitZone: number; // 適用される肉質の上限
  applicableStates: MonsterPartState[]; // 適用される部位の状態
  // 属性会心補正（会心撃【属性】等）
  elementalCriticalModifier?: number; // 属性会心時の属性ダメージ倍率（例: 1.35）
  hitcount?: number; // 多段ヒット数（デフォルト1）
}

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
    for (let i = 0; i < (params.hitcount ?? 1); i++) {
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
