import { describe, it, expect } from 'vitest';
import { calculateDamageTable } from './DamageTableService';
import type { WeaponParameters } from '../models/Weapon';
import type { Motion } from '../models/Motion';
import type { Monster } from '../models/Monster';
import type { SharpnessColor } from '../models/Sharpness';
import type { SkillParameters } from '../models/Skill';
import type { MonsterPartState } from './DamageCalculator';
// getApplicableSkillsをテスト用にimport
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getApplicableSkills } from './DamageTableService';

// モックデータ
const weaponInfo: WeaponParameters = {
  weaponType: 'longsword',
  weaponMultiplier: 200,
  baseElementValue: 0,
  elementType: { key: 'none', label: '無属性' },
  criticalRate: 0,
};
const motions: Motion[] = [
  {
    name: 'test motion',
    motionValue: 30,
    elementMultiplier: 1,
    sharpnessModifier: 1,
    hitCount: 1,
    attackType: 'slash',
  },
];
const monster: Monster = {
  name: 'test monster',
  parts: [
    {
      name: 'head',
      states: [
        {
          state: 'normal',
          slashHitZone: 60,
          bluntHitZone: 50,
          shotHitZone: 40,
          fireHitZone: 10,
          waterHitZone: 10,
          iceHitZone: 10,
          thunderHitZone: 10,
          dragonHitZone: 10,
        },
      ],
    },
  ],
};
const sharpness: SharpnessColor = 'white';
const skills: { key: string; level: number; skillData: SkillParameters[] }[] = [
  {
    key: 'attackBoost',
    level: 1,
    skillData: [
      {
        additionAttackBonus: 10,
        attackMultiplierBonus: 1.1,
        minHitZone: 0,
        maxHitZone: 100,
        applicableStates: ['normal'],
      },
    ],
  },
];

describe('DamageTableService', () => {
  it('calculateDamageTable returns correct structure', () => {
    const rows = calculateDamageTable(weaponInfo, motions, monster, sharpness, skills);
    expect(Array.isArray(rows)).toBe(true);
    expect(rows.length).toBe(1);
    expect(rows[0]).toHaveProperty('part', 'head');
    expect(rows[0]).toHaveProperty('state', 'normal');
    expect(typeof rows[0].physical).toBe('number');
    expect(typeof rows[0].elemental).toBe('number');
    expect(typeof rows[0].damage).toBe('string');
    expect(typeof rows[0].critDamage).toBe('string');
    expect(typeof rows[0].expected).toBe('string');
  });

  it('calculateDamageTable returns 0 rows if no motions', () => {
    const rows = calculateDamageTable(weaponInfo, [], monster, sharpness, skills);
    expect(rows.length).toBe(0);
  });

  it('calculateDamageTable returns 0 rows if no monster', () => {
    const rows = calculateDamageTable(weaponInfo, motions, null, sharpness, skills);
    expect(rows.length).toBe(0);
  });

  it('calculateDamageTable handles no skills', () => {
    const rows = calculateDamageTable(weaponInfo, motions, monster, sharpness, []);
    expect(rows.length).toBe(1);
    expect(typeof rows[0].physical).toBe('number');
  });

  it('calculateDamageTable handles no sharpness (defaults to white)', () => {
    const rows = calculateDamageTable(weaponInfo, motions, monster, undefined, skills);
    expect(rows.length).toBe(1);
    expect(typeof rows[0].physical).toBe('number');
  });

  it('getApplicableSkills: 通常スキルが適用される', () => {
    const skills = [
      {
        key: 'test',
        level: 1,
        skillData: [
          {
            additionAttackBonus: 10,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal'] as MonsterPartState[],
          },
        ],
      },
    ];
    const motion: Motion = {
      name: 'test', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash',
    };
    const state = { slashHitZone: 60, bluntHitZone: 50, shotHitZone: 40 };
    const result = getApplicableSkills(skills, motion, state);
    expect(result.length).toBe(1);
    expect(result[0].additionAttackBonus).toBe(10);
  });

  it('getApplicableSkills: ジャンプ攻撃専用スキルはisJump時のみ適用', () => {
    const skills = [
      {
        key: 'hien',
        level: 1,
        skillData: [
          {
            attackMultiplierBonus: 1.1,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal'] as MonsterPartState[],
            isJumpAttackOnly: true,
          },
        ],
      },
    ];
    const motionJump: Motion = {
      name: 'jump', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash', isJump: true,
    };
    const motionNormal: Motion = {
      name: 'normal', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash',
    };
    const state = { slashHitZone: 60, bluntHitZone: 50, shotHitZone: 40 };
    expect(getApplicableSkills(skills, motionJump, state).length).toBe(1);
    expect(getApplicableSkills(skills, motionNormal, state).length).toBe(0);
  });

  it('getApplicableSkills: minHitZone/maxHitZone範囲外は適用されない', () => {
    const skills = [
      {
        key: 'test',
        level: 1,
        skillData: [
          {
            additionAttackBonus: 10,
            minHitZone: 70,
            maxHitZone: 100,
            applicableStates: ['normal'] as MonsterPartState[],
          },
        ],
      },
    ];
    const motion: Motion = {
      name: 'test', motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: 'slash',
    };
    const state = { slashHitZone: 60, bluntHitZone: 50, shotHitZone: 40 };
    const result = getApplicableSkills(skills, motion, state);
    expect(result.length).toBe(0);
  });

  it('calculateDamageTable passes correct parameters to DamageCalculator', () => {
    // スキル・モーション・モンスター・シャープネスを組み合わせて、物理計算に渡る値を検証
    const testWeapon: WeaponParameters = {
      weaponType: 'longsword',
      weaponMultiplier: 150,
      baseElementValue: 0,
      elementType: { key: 'none', label: '無属性' },
      criticalRate: 10,
    };
    const testMotion: Motion = {
      name: 'test motion',
      motionValue: 20,
      elementMultiplier: 1,
      sharpnessModifier: 1.05,
      hitCount: 1,
      attackType: 'slash',
    };
    const testMonster: Monster = {
      name: 'test',
      parts: [
        {
          name: 'head',
          states: [
            {
              state: 'normal',
              slashHitZone: 70,
              bluntHitZone: 60,
              shotHitZone: 50,
              fireHitZone: 0,
              waterHitZone: 0,
              iceHitZone: 0,
              thunderHitZone: 0,
              dragonHitZone: 0,
            },
          ],
        },
      ],
    };
    const testSkills = [
      {
        key: 'attackBoost',
        level: 1,
        skillData: [
          {
            additionAttackBonus: 5,
            attackMultiplierBonus: 1.2,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal' as MonsterPartState],
          },
        ],
      },
    ];
    // シャープネス白(1.32)で計算
    const rows = calculateDamageTable(testWeapon, [testMotion], testMonster, 'white', testSkills);
    expect(rows.length).toBe(1);
    const row = rows[0];
    // 期待値: (150*1.2+5)*20*1.32*1*70/10000
    const expectedPhysical = ((150*1.2+5)*20*1.32*1*70/10000);
    expect(row.physical).toBeCloseTo(expectedPhysical, 2);
    // パラメータも正しく反映されているか
    expect(row.baseWeaponMultiplier).toBe(150);
    expect(row.attackMultiplierBonus).toBe(1);
    expect(row.additionAttackBonus).toBe(0);
    expect(row.motionValue).toBe(20);
    // sharpnessModifier: white(1.32)を期待値に
    expect(row.sharpnessModifier).toBe(1.32);
    expect(row.criticalDamageModifier).toBe(1);
    expect(row.baseElementValue).toBe(0);
    expect(row.elementMultiplier).toBe(1);
    expect(row.elementAddition).toBe(0);
    expect(row.elementModifier).toBe(1);
  });

  it('calculateDamageTable sets table-only values (not passed to DamageCalculator)', () => {
    // クリティカルボーナスや表用の値が正しく格納されているか
    const testWeapon: WeaponParameters = {
      weaponType: 'longsword',
      weaponMultiplier: 100,
      baseElementValue: 0,
      elementType: { key: 'none', label: '無属性' },
      criticalRate: 15,
    };
    const testMotion: Motion = {
      name: 'test motion',
      motionValue: 10,
      elementMultiplier: 1,
      sharpnessModifier: 1,
      hitCount: 1,
      attackType: 'slash',
    };
    const testMonster: Monster = {
      name: 'test',
      parts: [
        {
          name: 'head',
          states: [
            {
              state: 'normal',
              slashHitZone: 50,
              bluntHitZone: 40,
              shotHitZone: 30,
              fireHitZone: 0,
              waterHitZone: 0,
              iceHitZone: 0,
              thunderHitZone: 0,
              dragonHitZone: 0,
            },
          ],
        },
      ],
    };
    const testSkills = [
      {
        key: 'wex',
        level: 1,
        skillData: [
          {
            criticalRateBonus: 20,
            minHitZone: 0,
            maxHitZone: 100,
            applicableStates: ['normal' as MonsterPartState],
          },
        ],
      },
    ];
    const rows = calculateDamageTable(testWeapon, [testMotion], testMonster, 'white', testSkills);
    expect(rows.length).toBe(1);
    const row = rows[0];
    // 表用の値: critRate, baseWeaponMultiplier, attackMultiplierBonus, additionAttackBonus, motionValue, sharpnessModifier, criticalDamageModifier, baseElementValue, elementMultiplier, elementAddition, elementModifier
    // critRate = (criticalRate + totalCriticalBonus) / 100
    expect(row.critRate).toBeCloseTo((15 + 20) / 100, 5);
    expect(row.baseWeaponMultiplier).toBe(100);
    expect(row.attackMultiplierBonus).toBe(1);
    expect(row.additionAttackBonus).toBe(0);
    expect(row.motionValue).toBe(10);
    // sharpnessModifier: white(1.32)を期待値に
    expect(row.sharpnessModifier).toBe(1.32);
    expect(row.criticalDamageModifier).toBe(1);
    expect(row.baseElementValue).toBe(0);
    expect(row.elementMultiplier).toBe(1);
    expect(row.elementAddition).toBe(0);
    expect(row.elementModifier).toBe(1);
  });
});
