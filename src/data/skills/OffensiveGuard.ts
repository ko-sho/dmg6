import { SkillData } from '../../models/Skill';

// 攻めの守勢 (Offensive Guard)
const OffensiveGuard = new SkillData(
  'armor',
  '攻めの守勢',
  [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.05,
          minHitZone: 0,
          maxHitZone: 100,
          description: 'ガード成功直後、一定時間攻撃力が1.05倍',
        },
      ],
    },
    {
      level: 2,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.1,
          minHitZone: 0,
          maxHitZone: 100,
          description: 'ガード成功直後、一定時間攻撃力が1.10倍',
        },
      ],
    },
    {
      level: 3,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.15,
          minHitZone: 0,
          maxHitZone: 100,
          description: 'ガード成功直後、一定時間攻撃力が1.15倍',
        },
      ],
    },
  ]
);

export default OffensiveGuard;
