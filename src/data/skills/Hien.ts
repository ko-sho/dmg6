import type { Skill } from '../../models/Skill';

const Hien: Skill = {
  category: 'weapon',
  name: '飛燕',
  levels: [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ['normal', 'wounded', 'exposed'],
          isJumpAttackOnly: true,
          description: 'ジャンプ攻撃1.1倍'
        }
      ]
    }
  ]
};

export default Hien;
