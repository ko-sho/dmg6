import OffensiveGuard from './OffensiveGuard';
import { describe, it, expect } from 'vitest';

describe('OffensiveGuard スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(OffensiveGuard.category).toBe('armor');
    expect(OffensiveGuard.name).toBe('攻めの守勢');
    const expected = [
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
    ];
    expect(OffensiveGuard.levels.length).toBe(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(OffensiveGuard.levels[i].level).toBe(expected[i].level);
      expect(OffensiveGuard.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
