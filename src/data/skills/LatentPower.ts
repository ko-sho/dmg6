import { SkillData } from '../../models/Skill';

export const latentPower = new SkillData(
  'armor',
  '力の開放',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 10,
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
          criticalRateBonus: 20,
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
          criticalRateBonus: 30,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+30%',
        },
      ],
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalRateBonus: 40,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+40%',
        },
      ],
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalRateBonus: 50,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心率+50%',
        },
      ],
    },
  ]
);
