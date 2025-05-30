import { DragonAttack } from './ElementalAttackSkills';
import { describe, it, expect } from 'vitest';

describe('DragonAttack スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(DragonAttack.category).toBe('weapon');
    expect(DragonAttack.name).toBe('龍属性攻撃強化');
    // レベルごとのパラメータ
    const expected = [
      { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値+40' }] },
      { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値を1.1倍、龍属性攻撃値+50' }] },
      { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '龍属性攻撃値を1.2倍、龍属性攻撃値+60' }] },
    ];
    // レベル数
    expect(DragonAttack.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(DragonAttack.levels[i].level).toBe(expected[i].level);
      expect(DragonAttack.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
