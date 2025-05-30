import Hien from './Hien';
import { describe, it, expect } from 'vitest';

describe('Hien スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(Hien.category).toBe('weapon');
    expect(Hien.name).toBe('飛燕');
    // レベルごとのパラメータ
    const expected = [
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
    ];
    // レベル数
    expect(Hien.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(Hien.levels[i].level).toBe(expected[i].level);
      expect(Hien.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
