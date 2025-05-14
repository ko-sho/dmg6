export type ElementType =
  | { key: 'fire'; label: '火' }
  | { key: 'water'; label: '水' }
  | { key: 'ice'; label: '氷' }
  | { key: 'thunder'; label: '雷' }
  | { key: 'dragon'; label: '龍' };

export const ELEMENT_TYPES: ElementType[] = [
  { key: 'fire', label: '火' },
  { key: 'water', label: '水' },
  { key: 'ice', label: '氷' },
  { key: 'thunder', label: '雷' },
  { key: 'dragon', label: '龍' },
];

export interface WeaponParameters {
  weaponMultiplier: number; // 武器倍率
  baseElementValue: number; // 属性値
  elementType: ElementType; // 属性種別
  criticalRate: number; // 会心率
}

export class Weapon {
  weaponMultiplier: number;
  baseElementValue: number;
  elementType: ElementType;
  criticalRate: number;

  constructor(params: WeaponParameters) {
    this.weaponMultiplier = params.weaponMultiplier;
    this.baseElementValue = params.baseElementValue;
    this.elementType = params.elementType;
    this.criticalRate = params.criticalRate;
  }

  // 必要に応じて武器の情報を取得するメソッドを追加できます
}
