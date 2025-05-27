import { SkillData } from '../../models/Skill';

export const nushiSoul = new SkillData(
  'special',
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
        },
      ],
    },
  ]
);
