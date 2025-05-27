import { SkillData } from '../../models/Skill';

export const kokusyokuIttai = new SkillData(
  'series',
  '黒蝕一体',
  [
    {
      level: 1,
      skillBonuses: [], // 効果なし
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          description: '克服時、攻撃力+15',
        },
      ],
    },
  ]
);
