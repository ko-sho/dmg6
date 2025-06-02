export type SkillCategory = 'weapon' | 'armor' | 'group' | 'series';

export interface SkillParameters {
  baseWeaponMultiplier?: number; // 基礎武器倍率
  additionAttackBonus?: number; // 加算攻撃力
  attackMultiplierBonus?: number; // 攻撃乗算倍率
  motionValue?: number; // モーション値
  sharpnessModifier?: number; // 切れ味補正
  criticalDamageModifier?: number; // 会心ダメージ補正
  criticalRate?: number; // 会心率
  criticalRateBonus?: number; // 加算会心率
  physicalHitZone?: number; // 物理肉質
  baseElementValue?: number; // 元の属性値
  elementMultiplier?: number; // 属性乗算補正
  elementAddition?: number; // 属性加算補正
  elementModifier?: number; // 属性補正
  elementalHitZone?: number; // 属性肉質
  elementalCriticalModifier?: number; // 属性会心時の属性ダメージ倍率（例: 1.35）
  minHitZone: number; // 適用される肉質の下限
  maxHitZone: number; // 適用される肉質の上限
  applicableStates?: import('./Monster').MonsterPartState[]; // 適用される部位の状態
  description?: string; // スキル効果説明文
  isJumpAttackOnly?: boolean; // ジャンプ攻撃のみに適用する場合true
  weaponType?: string; // このスキル効果が適用される武器種（省略時は全武器種）
}

export interface SelectedSkill {
  key: string;
  level: number;
  skillData: SkillParameters[];
}

export interface Skill {
  category: SkillCategory; // スキルのカテゴリー
  name: string; // スキル名称
  levels: SkillLevel[]; // スキルレベルの配列
}

export interface SkillLevel {
  level: number; // スキルレベル
  skillBonuses: SkillParameters[]; // スキルボーナスの配列
}

export class SkillData implements Skill {
  category: SkillCategory;
  name: string;
  levels: SkillLevel[];

  constructor(category: SkillCategory, name: string, levels: SkillLevel[]) {
    this.category = category;
    this.name = name;
    this.levels = levels;
  }

  // 必要に応じてスキルの情報を取得するメソッドを追加できます
}
