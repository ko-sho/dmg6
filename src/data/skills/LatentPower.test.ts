import { latentPower } from './LatentPower';
import { describe, it, expect } from 'vitest';

describe('latentPower スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(latentPower.category).toBe('armor');
    expect(latentPower.name).toBe('力の開放');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            criticalRateBonus: 10,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+10%',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            criticalRateBonus: 20,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+20%',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            criticalRateBonus: 30,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+30%',
          },
        ],
      },
      {
        level: 4,
        skillBonuses: [
          {
            criticalRateBonus: 40,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+40%',
          },
        ],
      },
      {
        level: 5,
        skillBonuses: [
          {
            criticalRateBonus: 50,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '会心率+50%',
          },
        ],
      },
    ];
    // レベル数
    expect(latentPower.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(latentPower.levels[i].level).toBe(expected[i].level);
      expect(latentPower.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
