import type { Skill } from '../../models/Skill';

// ワイルズの属性攻撃強化スキル（2025/5時点、mhwilds.com等の情報を参考）
// ※効果量はワイルズ仕様に合わせて仮設定。公式・有志検証で判明次第修正してください。

export const FireAttack: Skill = {
  category: 'weapon',
  name: '火属性攻撃強化',
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '火属性攻撃値+40' }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '火属性攻撃値を1.1倍、火属性攻撃値+50' }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '火属性攻撃値を1.2倍、火属性攻撃値+60' }] },
  ],
};

export const WaterAttack: Skill = {
  category: 'weapon',
  name: '水属性攻撃強化',
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '水属性攻撃値+40' }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '水属性攻撃値を1.1倍、水属性攻撃値+50' }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '水属性攻撃値を1.2倍、水属性攻撃値+60' }] },
  ],
};

export const ThunderAttack: Skill = {
  category: 'weapon',
  name: '雷属性攻撃強化',
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '雷属性攻撃値+40' }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '雷属性攻撃値を1.1倍、雷属性攻撃値+50' }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '雷属性攻撃値を1.2倍、雷属性攻撃値+60' }] },
  ],
};

export const IceAttack: Skill = {
  category: 'weapon',
  name: '氷属性攻撃強化',
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値+40' }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値を1.1倍、氷属性攻撃値+50' }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値を1.2倍、氷属性攻撃値+60' }] },
  ],
};

export const DragonAttack: Skill = {
  category: 'weapon',
  name: '龍属性攻撃強化',
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値+40' }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値を1.1倍、龍属性攻撃値+50' }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値を1.2倍、龍属性攻撃値+60' }] },
  ],
};
