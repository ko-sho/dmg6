export type SkillCategory = 'weapon' | 'armor' | 'group' | 'series';
export type MonsterPartState = 'normal' | 'wounded' | 'exposed';

export interface SkillBonusCondition {
  minHitZone: number; // 適用される肉質の下限
  maxHitZone: number; // 適用される肉質の上限
  applicableStates: MonsterPartState[]; // 適用される部位の状態
}

export interface SkillBonus {
  weaponMultiplierBonus?: number; // 武器倍率への乗算補正
  weaponAdditionBonus?: number; // 武器倍率への加算補正
  elementMultiplierBonus?: number; // 属性値への乗算補正
  elementAdditionBonus?: number; // 属性値への加算補正
  criticalRateBonus?: number; // 会心率への加算補正
  condition: SkillBonusCondition; // ボーナスの条件
}

export interface Skill {
  category: SkillCategory; // スキルのカテゴリー
  name: string; // スキル名称
  bonuses: SkillBonus[]; // スキルによるボーナス
}

export class SkillData {
  category: SkillCategory;
  name: string;
  bonuses: SkillBonus[];

  constructor(category: SkillCategory, name: string, bonuses: SkillBonus[]) {
    this.category = category;
    this.name = name;
    this.bonuses = bonuses;
  }

  // 必要に応じてスキルの情報を取得するメソッドを追加できます
}
