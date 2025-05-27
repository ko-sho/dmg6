import { SkillData } from '../../models/Skill';

export const criticalBoost = new SkillData(
  'weapon',
  '超会心',
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalDamageModifier: 0.03, // 1.28 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心時ダメージ倍率+0.03（1.28倍）',
        },
      ],
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalDamageModifier: 0.06, // 1.31 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心時ダメージ倍率+0.06（1.31倍）',
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalDamageModifier: 0.09, // 1.34 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心時ダメージ倍率+0.09（1.34倍）',
        },
      ],
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalDamageModifier: 0.12, // 1.37 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心時ダメージ倍率+0.12（1.37倍）',
        },
      ],
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalDamageModifier: 0.15, // 1.4 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '会心時ダメージ倍率+0.15（1.40倍）',
        },
      ],
    },
  ]
);
