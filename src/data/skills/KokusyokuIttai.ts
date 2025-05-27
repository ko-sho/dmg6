import { SkillData } from '../../models/Skill';

export const kokusyokuIttai = new SkillData(
  'special',
  '黒蝕一体',
  [
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
  ]
);
