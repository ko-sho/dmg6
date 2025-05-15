import { SkillData } from '../../models/Skill';

export const attackBoost = new SkillData(
  'weapon',
  '攻撃',
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 3,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 5,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 7,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
    {
      level: 4,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.02,
          additionAttackBonus: 8,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
    {
      level: 5,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.04,
          additionAttackBonus: 9,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
