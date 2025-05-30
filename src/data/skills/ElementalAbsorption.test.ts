import { elementalAbsorption } from './ElementalAbsorption';
import { describe, it, expect } from 'vitest';

describe('elementalAbsorption スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(elementalAbsorption.category).toBe('armor');
    expect(elementalAbsorption.name).toBe('属性吸収');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            elementAddition: 40,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '発動時、属性値+40',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            elementAddition: 50,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '発動時、属性値+50',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            elementAddition: 60,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '発動時、属性値+60',
          },
        ],
      },
    ];
    // レベル数
    expect(elementalAbsorption.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(elementalAbsorption.levels[i].level).toBe(expected[i].level);
      expect(elementalAbsorption.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
