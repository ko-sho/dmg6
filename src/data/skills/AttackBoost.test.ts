import { attackBoost } from './AttackBoost';
import { describe, it, expect } from 'vitest';

describe('attackBoost スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(attackBoost.category).toBe('weapon');
    expect(attackBoost.name).toBe('攻撃');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 3,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+3',
          },
        ],
      },
      {
        level: 2,
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
        level: 3,
        skillBonuses: [
          {
            additionAttackBonus: 7,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+7',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.02,
            additionAttackBonus: 8,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+8、攻撃1.02倍',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.04,
            additionAttackBonus: 9,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+9、攻撃1.04倍',
          },
        ],
      },
    ];
    // レベル数
    expect(attackBoost.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(attackBoost.levels[i].level).toBe(expected[i].level);
      expect(attackBoost.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
