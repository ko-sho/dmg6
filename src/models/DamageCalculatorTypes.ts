// Damage計算UIで使う型まとめ
import type { WeaponParameters } from "./Weapon";
import type { SkillParameters } from "./Skill";
import type { Motion } from "./Motion";
import type { Monster } from "./Monster";
import type { SharpnessColor } from "./Sharpness";

export interface DamageTableRow {
  part: string;
  state: string;
  damage: string;
  critDamage: string;
  expected: string;
  physical: number;
  elemental: number;
  critRate: number;
  baseWeaponMultiplier: number;
  attackMultiplierBonus: number;
  additionAttackBonus: number;
  motionValue: number;
  sharpnessModifier: number;
  criticalDamageModifier: number;
  baseElementValue: number;
  elementMultiplier: number;
  elementAddition: number;
  elementModifier: number;
}

export type ResultType = {
  weaponInfo: WeaponParameters;
  selectedSkills: {
    key: string;
    level: number;
    skillData: SkillParameters[];
  }[];
  selectedMotions: Motion[];
  selectedMonster: Monster | null;
  sharpness: SharpnessColor;
  damageTableRows: DamageTableRow[];
  selectedBuffs: string[]; // 追加: 計算時点のバフ
  itemBuffsTotal: number; // 追加: 計算時点の合計値
};
