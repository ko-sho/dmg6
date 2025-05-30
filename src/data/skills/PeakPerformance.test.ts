import { peakPerformance } from './PeakPerformance';
import { describe, it, expect } from 'vitest';

describe('peakPerformance スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(peakPerformance.category).toBe('armor');
    expect(peakPerformance.name).toBe('フルチャージ');
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
            additionAttackBonus: 6,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '攻撃力+6',
          },
        ],
      },
      {
        level: 3,
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
        level: 4,
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
        level: 5,
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
    ];
    // レベル数
    expect(peakPerformance.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(peakPerformance.levels[i].level).toBe(expected[i].level);
      expect(peakPerformance.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
