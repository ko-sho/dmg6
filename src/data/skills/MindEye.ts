import { SkillData } from "../../models/Skill";

export const mindEye = new SkillData("weapon", "心眼", [
  {
    level: 1,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.1,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: '肉質44以下の部位: 攻撃1.1倍',
      },
    ],
  },
  {
    level: 2,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.15,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: '肉質44以下の部位: 攻撃1.15倍',
      },
    ],
  },
  {
    level: 3,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.3,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: '肉質44以下の部位: 攻撃1.3倍',
      },
    ],
  },
]);
