import { SkillData } from '../../models/Skill';

export const zenState = new SkillData(
  'armor',
  '無我の境地',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 18, // 0.18 → 18
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
          criticalRateBonus: 21, // 0.21 → 21
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
          criticalRateBonus: 25, // 0.25 → 25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
