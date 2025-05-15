import { SkillData } from '../../models/Skill';

export const counterstrike = new SkillData(
  'armor',
  '逆襲',
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 10,
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
          additionAttackBonus: 15,
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
          additionAttackBonus: 25,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
