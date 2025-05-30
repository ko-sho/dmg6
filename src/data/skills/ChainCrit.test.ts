import { chainCrit } from './ChainCrit';
import { describe, it, expect } from 'vitest';

describe('chainCrit スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(chainCrit.category).toBe('armor');
    expect(chainCrit.name).toBe('連撃');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 8,
            elementAddition: 60,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+8、属性値+60',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            additionAttackBonus: 10,
            elementAddition: 80,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+10、属性値+80',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            additionAttackBonus: 12,
            elementAddition: 100,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+12、属性値+100',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            additionAttackBonus: 15,
            elementAddition: 120,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+15、属性値+120',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            additionAttackBonus: 18,
            elementAddition: 140,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+18、属性値+140',
          },
        ],
      },
    ];
    // レベル数
    expect(chainCrit.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(chainCrit.levels[i].level).toBe(expected[i].level);
      expect(chainCrit.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
