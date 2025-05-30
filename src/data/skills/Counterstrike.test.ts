import { counterstrike } from './Counterstrike';
import { describe, it, expect } from 'vitest';

describe('counterstrike スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(counterstrike.category).toBe('armor');
    expect(counterstrike.name).toBe('逆襲');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 10,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+10',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            additionAttackBonus: 15,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+15',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            additionAttackBonus: 25,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+25',
          },
        ],
      },
    ];
    // レベル数
    expect(counterstrike.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(counterstrike.levels[i].level).toBe(expected[i].level);
      expect(counterstrike.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
