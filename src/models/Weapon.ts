export type ElementTypeKey = 'none' | 'fire' | 'water' | 'ice' | 'thunder' | 'dragon';
export interface ElementType {
  key: ElementTypeKey;
  label: string;
}

export const ELEMENT_TYPES: readonly ElementType[] = [
  { key: 'none', label: '無属性' },
  { key: 'fire', label: '火' },
  { key: 'water', label: '水' },
  { key: 'ice', label: '氷' },
  { key: 'thunder', label: '雷' },
  { key: 'dragon', label: '龍' },
] as const;

export type WeaponType = 'longsword' | 'greatsword';

// 太刀の練気ゲージ段階
export type TachiSpiritGauge = 'none' | 'white' | 'yellow' | 'red';

export interface WeaponParameters {
  weaponType: WeaponType; // 武器種
  weaponMultiplier: number; // 武器倍率
  baseElementValue: number; // 属性値
  elementType: ElementType; // 属性種別
  criticalRate: number; // 会心率
  tachiSpiritGauge?: TachiSpiritGauge; // 太刀のみ有効
}

export class Weapon {
  weaponType: WeaponType;
  weaponMultiplier: number;
  baseElementValue: number;
  elementType: ElementType;
  criticalRate: number;
  tachiSpiritGauge?: TachiSpiritGauge;

  constructor(params: WeaponParameters) {
    this.weaponType = params.weaponType;
    this.weaponMultiplier = params.weaponMultiplier;
    this.baseElementValue = params.baseElementValue;
    this.elementType = params.elementType;
    this.criticalRate = params.criticalRate;
    this.tachiSpiritGauge = params.tachiSpiritGauge;
  }

  // 必要に応じて武器の情報を取得するメソッドを追加できます
}
