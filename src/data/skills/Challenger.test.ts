import { challenger } from './Challenger';
import { describe, it, expect } from 'vitest';

describe('challenger スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(challenger.category).toBe('armor');
    expect(challenger.name).toBe('挑戦者');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            additionAttackBonus: 4,
            criticalRateBonus: 3, // 0.03 → 3
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+4、会心率+3%',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            additionAttackBonus: 8,
            criticalRateBonus: 5, // 0.05 → 5
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+8、会心率+5%',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            additionAttackBonus: 12,
            criticalRateBonus: 7, // 0.07 → 7
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+12、会心率+7%',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            additionAttackBonus: 16,
            criticalRateBonus: 10, // 0.1 → 10
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+16、会心率+10%',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            additionAttackBonus: 20,
            criticalRateBonus: 15, // 0.15 → 15
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+20、会心率+15%',
          },
        ],
      },
    ];
    // レベル数
    expect(challenger.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(challenger.levels[i].level).toBe(expected[i].level);
      expect(challenger.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
