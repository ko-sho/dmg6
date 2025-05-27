import { SkillData } from '../../models/Skill';

export const masterfulStrike = new SkillData(
  'armor',
  '巧撃',
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃力+10',
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
          description: '攻撃力+15',
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃力+20',
        },
      ],
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 25,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃力+25',
        },
      ],
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 30,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '攻撃力+30',
        },
      ],
    },
  ]
);
