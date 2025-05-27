import { SkillData } from '../../models/Skill';

export const nushiSoul = new SkillData(
  'group',
  'ヌシの魂',
  [
    {
      level: 1,
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
  ]
);
