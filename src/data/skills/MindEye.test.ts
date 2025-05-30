import { mindEye } from './MindEye';
import { describe, it, expect } from 'vitest';

describe('mindEye スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(mindEye.category).toBe('weapon');
    expect(mindEye.name).toBe('心眼');
    // レベルごとのパラメータ
    const expected = [
      {
        level: 1,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.1,
            minHitZone: 0,
            maxHitZone: 44,
            applicableStates: ["normal", "wounded", "exposed"],
            description: '肉質44以下の部位: 攻撃1.1倍',
          },
        ],
      },
      {
        level: 2,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.15,
            minHitZone: 0,
            maxHitZone: 44,
            applicableStates: ["normal", "wounded", "exposed"],
            description: '肉質44以下の部位: 攻撃1.15倍',
          },
        ],
      },
      {
        level: 3,
        skillBonuses: [
          {
            attackMultiplierBonus: 1.3,
            minHitZone: 0,
            maxHitZone: 44,
            applicableStates: ["normal", "wounded", "exposed"],
            description: '肉質44以下の部位: 攻撃1.3倍',
          },
        ],
      },
    ];
    // レベル数
    expect(mindEye.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(mindEye.levels[i].level).toBe(expected[i].level);
      expect(mindEye.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
