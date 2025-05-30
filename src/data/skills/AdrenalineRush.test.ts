import { adrenalineRush } from './AdrenalineRush';
import { describe, it, expect } from 'vitest';

describe('adrenalineRush スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(adrenalineRush.category).toBe('armor');
    expect(adrenalineRush.name).toBe('火事場力');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            attackMultiplierBonus: 1,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃効果なし',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.05,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃1.05倍',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.05,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃1.05倍',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.1,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃1.10倍',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.3,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃1.30倍',
          },
        ],
      },
    ];
    // レベル数
    expect(adrenalineRush.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(adrenalineRush.levels[i].level).toBe(expected[i].level);
      expect(adrenalineRush.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
