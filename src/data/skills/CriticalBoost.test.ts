import { criticalBoost } from './CriticalBoost';
import { describe, it, expect } from 'vitest';

describe('criticalBoost スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(criticalBoost.category).toBe('weapon');
    expect(criticalBoost.name).toBe('超会心');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalDamageModifier: 0.03, // 1.28 - 1.25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心時ダメージ倍率+0.03（1.28倍）',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalDamageModifier: 0.06, // 1.31 - 1.25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心時ダメージ倍率+0.06（1.31倍）',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalDamageModifier: 0.09, // 1.34 - 1.25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心時ダメージ倍率+0.09（1.34倍）',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            criticalDamageModifier: 0.12, // 1.37 - 1.25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心時ダメージ倍率+0.12（1.37倍）',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            criticalDamageModifier: 0.15, // 1.4 - 1.25
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心時ダメージ倍率+0.15（1.40倍）',
          },
        ],
      },
    ];
    // レベル数
    expect(criticalBoost.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(criticalBoost.levels[i].level).toBe(expected[i].level);
      expect(criticalBoost.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
