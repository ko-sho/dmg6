import { criticalEye } from './CriticalEye';
import { describe, it, expect } from 'vitest';

describe('criticalEye スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(criticalEye.category).toBe('weapon');
    expect(criticalEye.name).toBe('見切り');
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalRateBonus: 4,
            minHitZone: 0,
            maxHitZone: 100,
            description: '会心率+4%'
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalRateBonus: 8,
            minHitZone: 0,
            maxHitZone: 100,
            description: '会心率+8%'
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalRateBonus: 12,
            minHitZone: 0,
            maxHitZone: 100,
            description: '会心率+12%'
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            criticalRateBonus: 16,
            minHitZone: 0,
            maxHitZone: 100,
            description: '会心率+16%'
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            criticalRateBonus: 20,
            minHitZone: 0,
            maxHitZone: 100,
            description: '会心率+20%'
          },
        ],
      },
    ];
    expect(criticalEye.levels.length).toBe(expected.length);
    for (let i = 0; i < expected.length; i++) {
      expect(criticalEye.levels[i].level).toBe(expected[i].level);
      expect(criticalEye.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
