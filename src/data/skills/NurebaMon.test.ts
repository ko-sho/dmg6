import { nurebaMon } from './NurebaMon';
import { describe, it, expect } from 'vitest';

describe('nurebaMon スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(nurebaMon.category).toBe('weapon');
    expect(nurebaMon.name).toBe('濡れ刃紋');
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalRateBonus: 7,
            minHitZone: 0,
            maxHitZone: 100,
            description: '泡状態の時、会心率+7%'
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalRateBonus: 14,
            minHitZone: 0,
            maxHitZone: 100,
            description: '泡状態の時、会心率+14%'
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalRateBonus: 21,
            minHitZone: 0,
            maxHitZone: 100,
            description: '泡状態の時、会心率+21%'
          },
        ],
      },
    ];
    expect(nurebaMon.levels.length).toBe(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(nurebaMon.levels[i].level).toBe(expected[i].level);
      expect(nurebaMon.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
