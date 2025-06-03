import type { WeaponParameters } from "../models/Weapon";
import type { Monster, MonsterPartStateDetails } from "../models/Monster";
import { DamageCalculator, type DamageParameters } from "./DamageCalculator";
import { SHARPNESS_LEVELS } from "../models/Sharpness";
import type { SharpnessColor } from "../models/Sharpness";
import type { SkillParameters } from "../models/Skill";
import { TACHI_SPIRIT_GAUGE_MODIFIER } from '../data/weapons/TachiSpiritGaugeBonus';
import type { DamageTableRow } from "../models/DamageCalculatorTypes";
import type { FullDataMotion } from "../models/FullDataMotion";

// 属性タイプ→HitZone名のマッピング定数
const ELEMENT_HITZONE_KEY: Record<string, string> = {
  fire: "fireHitZone",
  water: "waterHitZone",
  thunder: "thunderHitZone",
  ice: "iceHitZone",
  dragon: "dragonHitZone",
};

// --- プロパティ対応表に基づき、FullDataMotion型の値参照を厳密化 ---
function getMotionValue(motion: FullDataMotion, weaponInfo?: WeaponParameters): number {
  // 太刀の練気ゲージ赤・GeneralValue2>0ならGeneralValue2を優先
  if (
    weaponInfo?.weaponType === 'longsword' &&
    weaponInfo?.tachiSpiritGauge === 'red' &&
    typeof motion.GeneralValue2 === 'number' &&
    motion.GeneralValue2 > 0
  ) {
    return motion.GeneralValue2;
  }
  // 通常はAttack
  return typeof motion.Attack === 'number' ? motion.Attack : 0;
}
function getElementMultiplier(motion: FullDataMotion): number {
  // elementMultiplier → StatusAttrRate
  return typeof motion.StatusAttrRate === 'number' ? motion.StatusAttrRate : 1;
}
// --- 型エラー修正: getAttackType, getHitCount, getIsJumpを明示的にexport ---
export function getAttackType(motion: FullDataMotion): 'slash' | 'blunt' | 'shot' {
  // ActionTypeFixed列の値で判定
  const type = (motion.ActionTypeFixed || '').toUpperCase();
  if (type.includes('SLASH')) return 'slash';
  if (type.includes('BLUNT')) return 'blunt';
  if (type.includes('SHOT') || type.includes('BULLET') || type.includes('ARROW')) return 'shot';
  return 'slash'; // デフォルト
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getHitCount(_: FullDataMotion): number {
  // HitCountは一旦無視: 常に1を返す
  return 1;
}
export function getIsJump(motion: FullDataMotion): boolean {
  return !!motion.IsSkillHien;
}

// getApplicableSkillsをテスト用にexport
export function getApplicableSkills(
  selectedSkills: {
    key: string;
    level: number;
    skillData: SkillParameters[];
  }[],
  motion: FullDataMotion,
  state: MonsterPartStateDetails,
  weaponType?: string // 追加: 呼び出し元で渡す
) {
  return (selectedSkills || [])
    .flatMap((skill) => {
      if (Array.isArray(skill.skillData)) {
        return skill.skillData.map((s) => ({
          ...s,
          key: skill.key,
          level: skill.level,
        }));
      }
      return [];
    })
    .filter((skillParam) => {
      // 武器種一致判定
      if (skillParam.weaponType && weaponType && skillParam.weaponType !== weaponType) return false;
      // ジャンプ攻撃専用スキルの適用判定
      if (!!skillParam.isJumpAttackOnly && !getIsJump(motion)) return false;
      // 部位の状態が適用可能かどうか
      if (skillParam.applicableStates && !skillParam.applicableStates?.includes(state.state)) return false;
      // minHitZone/maxHitZoneは number 型のみを許容
      const min = skillParam.minHitZone;
      const max = skillParam.maxHitZone;
      const hitZone = state[`${getAttackType(motion)}HitZone`];
      return hitZone >= min && hitZone <= max;
    });
}

function getPhysicalParams(
  weaponInfo: WeaponParameters,
  motion: FullDataMotion,
  sharpnessModifier: number,
  elementalSharpnessModifier: number, // 追加
  state: {
    slashHitZone: number;
    bluntHitZone: number;
    shotHitZone: number;
    state: string;
    fireHitZone?: number;
    waterHitZone?: number;
    thunderHitZone?: number;
    iceHitZone?: number;
    dragonHitZone?: number;
  },
  applicableSkills: SkillParameters[],
  itemBuffs: number = 0 // 追加
): DamageParameters {
  const totalAttackBonus = applicableSkills.reduce(
    (sum, s) => sum + (s.additionAttackBonus ?? 0),
    0
  ) + itemBuffs; // アイテムバフ加算
  let totalAttackMultiplierBonus = applicableSkills.reduce(
    (mul, s) => mul * (s.attackMultiplierBonus ?? 1),
    1
  );
  // 太刀のみ練気ゲージ補正を掛ける
  if (weaponInfo.weaponType === 'longsword' && weaponInfo.tachiSpiritGauge) {
    totalAttackMultiplierBonus *= TACHI_SPIRIT_GAUGE_MODIFIER[weaponInfo.tachiSpiritGauge];
  }
  return {
    baseWeaponMultiplier: weaponInfo.weaponMultiplier,
    additionAttackBonus: totalAttackBonus,
    attackMultiplierBonus: totalAttackMultiplierBonus,
    motionValue: getMotionValue(motion, weaponInfo),
    sharpnessModifier,
    elementalSharpnessModifier, // 追加
    criticalDamageModifier: 1,
    criticalRate: weaponInfo.criticalRate + applicableSkills.reduce((x, skill) => x + (skill.criticalRateBonus ?? 0), 0),
    criticalRateBonus: 0,
    slashHitZone: state.slashHitZone,
    bluntHitZone: state.bluntHitZone,
    shotHitZone: state.shotHitZone,
    attackType: getAttackType(motion),
    baseElementValue: weaponInfo.baseElementValue,
    elementMultiplier: getElementMultiplier(motion),
    elementAddition: 0,
    elementModifier: 1,
    elementalHitZone: state.slashHitZone, // ←ここは属性ごとに上書きするので仮
    minHitZone: 0,
    maxHitZone: 100,
    applicableStates: [
      state.state as import("../models/Monster").MonsterPartState,
    ],
    elementalCriticalModifier: 1,
    hitcount: getHitCount(motion),
  };
}

export function calculateDamageTable(
  weaponInfo: WeaponParameters,
  selectedMotions: FullDataMotion[],
  selectedMonster: Monster | null,
  sharpnessColor: SharpnessColor = "white",
  selectedSkills: {
    key: string;
    level: number;
    skillData: SkillParameters[];
  }[] = [],
  itemBuffs: number = 0 // 追加: アイテムバフの合計攻撃力
): DamageTableRow[] {
  if (!selectedMonster || selectedMotions.length === 0) return [];
  const sharpnessObj =
    SHARPNESS_LEVELS.find((s) => s.color === sharpnessColor) ??
    SHARPNESS_LEVELS[5];
  const damageTableRows: DamageTableRow[] = [];
  selectedMonster.parts.forEach((part) => {
    part.states.forEach((state) => {
      let totalPhysical = 0;
      let totalCritPhysical = 0;
      let totalElemental = 0;
      let totalCritElemental = 0;
      let totalMotionValue = 0;
      // critRate計算用にスキル合算値を先に算出
      let maxCriticalBonus = Number.NEGATIVE_INFINITY;
      let totalCriticalDamageModifier = 0;
      selectedMotions.forEach((motion) => {
        const applicableSkills = getApplicableSkills(
          selectedSkills,
          motion,
          state,
          weaponInfo.weaponType // 追加
        );
        totalCriticalDamageModifier += applicableSkills.reduce(
          (sum, s) => sum + (s.criticalDamageModifier ?? 0),
          0
        );
        // For crit rate, take the maximum bonus among all motions for this part state
        const critBonus = applicableSkills.reduce(
          (sum, s) => sum + (s.criticalRateBonus ?? 0),
          0
        );
        if (critBonus > maxCriticalBonus) {
          maxCriticalBonus = critBonus;
        }
        const physicalParams = getPhysicalParams(
          weaponInfo,
          motion,
          sharpnessObj.modifier,
          sharpnessObj.elementModifier, // 追加
          state,
          applicableSkills,
          itemBuffs // 追加
        );
        // 属性肉質のキーを決定（マッピングでシンプル化）
        let elementalHitZone = state.slashHitZone;
        if (weaponInfo.elementType && weaponInfo.elementType.key !== "none") {
          const key = weaponInfo.elementType.key;
          const hitZoneKey = ELEMENT_HITZONE_KEY[key] as keyof typeof state || "slashHitZone";
          if (state[hitZoneKey] !== undefined) {
            elementalHitZone = state[hitZoneKey] as number;
          }
        }
        // 物理ダメージ
        totalPhysical += DamageCalculator.calculatePhysicalDamage({
          ...physicalParams,
          criticalDamageModifier: 1,
        });
        totalCritPhysical += DamageCalculator.calculatePhysicalDamage({
          ...physicalParams,
          criticalDamageModifier: 1.25 + totalCriticalDamageModifier,
        });
        // 属性ダメージもモーションごとに計算
        let elemental = 0;
        let critElemental = 0;
        if (weaponInfo.elementType && weaponInfo.elementType.key !== "none") {
          const elementalParams: DamageParameters = {
            ...physicalParams,
            attackType: "slash", // 属性には影響しないのでダミー
            elementalSharpnessModifier: sharpnessObj.elementModifier,
            elementAddition: applicableSkills.reduce(
              (sum, s) => sum + (s.elementAddition ?? 0),
              0
            ),
            elementModifier: applicableSkills.reduce(
              (mul, s) => mul * (s.elementModifier ?? 1),
              1
            ),
            elementalHitZone,
            elementalCriticalModifier: applicableSkills.reduce(
              (mul, s) => mul * (s.elementalCriticalModifier ?? 1),
              1
            ),
            hitcount: getHitCount(motion),
          };
          elemental = DamageCalculator.calculateElementalDamage(elementalParams);
          critElemental = DamageCalculator.calculateElementalDamage({
            ...elementalParams,
            elementModifier: elementalParams.elementModifier,
          });
        }
        totalElemental += elemental;
        totalCritElemental += critElemental;
        totalMotionValue += getMotionValue(motion, weaponInfo);
      });
      // Use the maximum crit rate bonus for this part state
      const critRate = Math.max(
        0,
        Math.min(1, (weaponInfo.criticalRate + (maxCriticalBonus === Number.NEGATIVE_INFINITY ? 0 : maxCriticalBonus)) / 100)
      );
      const total = totalPhysical + totalElemental;
      const critTotal = totalCritPhysical + totalCritElemental;
      const expected =
        Math.round((total * (1 - critRate) + critTotal * critRate) * 100) / 100;
      damageTableRows.push({
        part: part.name,
        state: state.state,
        damage: `${total} (${totalElemental})`,
        critDamage: `${critTotal} (${totalCritElemental})`,
        expected: `${expected} (${totalElemental})`,
        physical: totalPhysical,
        elemental: totalElemental,
        critRate,
        baseWeaponMultiplier: weaponInfo.weaponMultiplier,
        attackMultiplierBonus: 1,
        additionAttackBonus: 0,
        motionValue: totalMotionValue,
        sharpnessModifier: sharpnessObj.modifier,
        criticalDamageModifier: 1,
        baseElementValue: weaponInfo.baseElementValue,
        elementMultiplier: getElementMultiplier(selectedMotions[0]) ?? 1,
        elementAddition: 0,
        elementModifier: 1,
      });
    });
  });
  return damageTableRows;
}
