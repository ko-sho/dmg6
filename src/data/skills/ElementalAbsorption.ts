import { SkillData } from '../../models/Skill';

export const elementalAbsorption = new SkillData(
  'armor',
  '属性吸収',
  [
    {
      level: 1,
      skillBonuses: [
        {
          elementAddition: 40,
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
          elementAddition: 50,
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
          elementAddition: 60,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
        },
      ],
    },
  ]
);
