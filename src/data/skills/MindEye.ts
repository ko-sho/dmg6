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
      },
    ],
  },
]);
