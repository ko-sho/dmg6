export interface DamageParameters {
  weaponMultiplier: number; // 武器倍率
  motionValue: number; // モーション値
  sharpnessModifier: number; // 切れ味補正
  criticalModifier: number; // 会心補正
  physicalHitZone: number; // 物理肉質
  baseElementValue: number; // 元の属性値
  elementMultiplier: number; // 属性乗算補正
  elementAddition: number; // 属性加算補正
  elementModifier: number; // 属性補正
  elementalHitZone: number; // 属性肉質
}

export class DamageCalculator {
  static calculatePhysicalDamage(params: DamageParameters): number {
    const {
      weaponMultiplier,
      motionValue,
      sharpnessModifier,
      criticalModifier,
      physicalHitZone,
    } = params;

    const physicalDamage =
      (weaponMultiplier *
        motionValue *
        sharpnessModifier *
        criticalModifier *
        physicalHitZone) /
      10000;

    return Math.round(physicalDamage * 100) / 100; // 小数第2位で四捨五入
  }

  static calculateElementalDamage(params: DamageParameters): number {
    const {
      baseElementValue,
      elementMultiplier,
      elementAddition,
      sharpnessModifier,
      elementModifier,
      elementalHitZone,
    } = params;

    const elementalDamage =
      ((baseElementValue * elementMultiplier + elementAddition) *
        sharpnessModifier *
        elementModifier *
        elementalHitZone) /
      1000;

    return Math.round(elementalDamage * 100) / 100; // 小数第2位で四捨五入
  }

  static calculateTotalDamage(params: DamageParameters): number {
    const physicalDamage = this.calculatePhysicalDamage(params);
    const elementalDamage = this.calculateElementalDamage(params);

    return Math.round((physicalDamage + elementalDamage) * 100) / 100; // 小数第2位で四捨五入
  }
}
