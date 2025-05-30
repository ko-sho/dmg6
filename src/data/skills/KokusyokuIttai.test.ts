import { kokusyokuIttai } from './KokusyokuIttai';
import { describe, it, expect } from 'vitest';

describe('kokusyokuIttai スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(kokusyokuIttai.category).toBe('series');
    expect(kokusyokuIttai.name).toBe('黒蝕一体');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [], // 効果なし
      },
      {
        level: 2,
        skillBonuses: [
          {
            additionAttackBonus: 15,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal', 'wounded', 'exposed'],
            description: '克服時、攻撃力+15',
          },
        ],
      },
    ];
    // レベル数
    expect(kokusyokuIttai.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(kokusyokuIttai.levels[i].level).toBe(expected[i].level);
      expect(kokusyokuIttai.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
