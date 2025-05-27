import { SkillData } from '../../models/Skill';

export const adrenalineRush = new SkillData(
  'armor',
  '火事場力',
  [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃効果なし',
        },
      ],
    },
    {
      level: 2,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.05,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃1.05倍',
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.05,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃1.05倍',
        },
      ],
    },
    {
      level: 4,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃1.10倍',
        },
      ],
    },
    {
      level: 5,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.3,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃1.30倍',
        },
      ],
    },
  ]
);
