import { nushiSoul } from './NushiSoul';
import { describe, it, expect } from 'vitest';

describe('nushiSoul スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(nushiSoul.category).toBe('group');
    expect(nushiSoul.name).toBe('ヌシの魂');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
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
    ];
    // レベル数
    expect(nushiSoul.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(nushiSoul.levels[i].level).toBe(expected[i].level);
      expect(nushiSoul.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
