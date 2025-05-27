import { SkillData } from '../../models/Skill';

export const maximumMight = new SkillData(
  'armor',
  '渾身',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 10, // 0.1 → 10
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+10%',
        },
      ],
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 20, // 0.2 → 20
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+20%',
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 30, // 0.3 → 30
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+30%',
        },
      ],
    },
  ]
);
