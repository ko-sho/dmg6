import { SkillData } from '../../models/Skill';

export const challenger = new SkillData(
  'armor',
  '挑戦者',
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 4,
          criticalRateBonus: 3, // 0.03 → 3
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
          additionAttackBonus: 8,
          criticalRateBonus: 5, // 0.05 → 5
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
          additionAttackBonus: 12,
          criticalRateBonus: 7, // 0.07 → 7
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
          additionAttackBonus: 16,
          criticalRateBonus: 10, // 0.1 → 10
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
          additionAttackBonus: 20,
          criticalRateBonus: 15, // 0.15 → 15
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
