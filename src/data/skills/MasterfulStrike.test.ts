import { masterfulStrike } from './MasterfulStrike';
import { describe, it, expect } from 'vitest';

describe('masterfulStrike スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(masterfulStrike.category).toBe('armor');
    expect(masterfulStrike.name).toBe('巧撃');
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
            additionAttackBonus: 20,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+20',
          },
        ],
      },
      {
        level: 4,
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
      {
        level: 5,
        skillBonuses: [
          {
            additionAttackBonus: 30,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+30',
          },
        ],
      },
    ];
    // レベル数
    expect(masterfulStrike.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(masterfulStrike.levels[i].level).toBe(expected[i].level);
      expect(masterfulStrike.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
