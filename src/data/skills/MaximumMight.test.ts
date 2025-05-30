import { maximumMight } from './MaximumMight';
import { describe, it, expect } from 'vitest';

describe('maximumMight スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(maximumMight.category).toBe('armor');
    expect(maximumMight.name).toBe('渾身');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalRateBonus: 10, // 0.1 → 10
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+10%',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalRateBonus: 20, // 0.2 → 20
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+20%',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalRateBonus: 30, // 0.3 → 30
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+30%',
          },
        ],
      },
    ];
    // レベル数
    expect(maximumMight.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(maximumMight.levels[i].level).toBe(expected[i].level);
      expect(maximumMight.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
