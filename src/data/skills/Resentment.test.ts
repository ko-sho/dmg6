import { resentment } from './Resentment';
import { describe, it, expect } from 'vitest';

describe('resentment スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(resentment.category).toBe('armor');
    expect(resentment.name).toBe('逆恨み');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 5,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+5',
          },
        ],
      },
      {
        level: 2,
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
        level: 3,
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
        level: 4,
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
        level: 5,
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
    expect(resentment.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(resentment.levels[i].level).toBe(expected[i].level);
      expect(resentment.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
