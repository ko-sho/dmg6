import { SkillData } from '../../models/Skill';

export const chainCrit = new SkillData(
  'armor',
  '連撃',
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 8,
          elementAddition: 60,
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
          additionAttackBonus: 10,
          elementAddition: 80,
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
          elementAddition: 100,
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
          additionAttackBonus: 15,
          elementAddition: 120,
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
          additionAttackBonus: 18,
          elementAddition: 140,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
