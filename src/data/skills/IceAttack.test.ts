import { IceAttack } from './ElementalAttackSkills';
import { describe, it, expect } from 'vitest';

describe('IceAttack スキル定義', () => {
  it('全体構造・レベル・パラメータが不変で正しい', () => {
    expect(IceAttack.category).toBe('weapon');
    expect(IceAttack.name).toBe('氷属性攻撃強化');
    // レベルごとのパラメータ
    const expected = [
      { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値+40' }] },
      { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値を1.1倍、氷属性攻撃値+50' }] },
      { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: '氷属性攻撃値を1.2倍、氷属性攻撃値+60' }] },
    ];
    // レベル数
    expect(IceAttack.levels.length).toBe(expected.length);
    // 各レベルのパラメータ
    for (let i = 0; i < expected.length; i++) {
      expect(IceAttack.levels[i].level).toBe(expected[i].level);
      expect(IceAttack.levels[i].skillBonuses).toEqual(expected[i].skillBonuses);
    }
  });
});
