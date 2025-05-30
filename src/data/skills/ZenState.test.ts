import { zenState } from './ZenState';
import { describe, it, expect } from 'vitest';

describe('zenState スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(zenState.category).toBe('armor');
    expect(zenState.name).toBe('無我の境地');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalRateBonus: 18, // 0.18 → 18
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '克服時、会心率+18%',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalRateBonus: 21, // 0.21 → 21
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '克服時、会心率+21%',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalRateBonus: 25, // 0.25 → 25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '克服時、会心率+25%',
          },
        ],
      },
    ];
    // レベル数
    expect(zenState.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(zenState.levels[i].level).toBe(expected[i].level);
      expect(zenState.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
