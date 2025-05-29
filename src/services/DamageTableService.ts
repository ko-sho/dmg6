import type { WeaponParameters } from '../models/Weapon';
import type { Motion } from '../models/Motion';
import type { Monster } from '../models/Monster';
import { DamageCalculator, type DamageParameters } from './DamageCalculator';
import { SHARPNESS_LEVELS } from '../models/Sharpness';
import type { SharpnessColor } from '../models/Sharpness';
import type { SkillParameters } from '../models/Skill';

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

export function calculateDamageTable(
  weaponInfo: WeaponParameters,
  selectedMotions: Motion[],
  selectedMonster: Monster | null,
  sharpnessColor: SharpnessColor = 'white',
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[] = [],
): DamageTableRow[] {
  if (!selectedMonster || selectedMotions.length === 0) return [];
  const sharpnessObj = SHARPNESS_LEVELS.find(s => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];
  const damageTableRows: DamageTableRow[] = [];
  selectedMonster.parts.forEach(part => {
    part.states.forEach(state => {
      let totalPhysical = 0;
      let totalCritPhysical = 0;
      let totalElemental = 0;
      let totalCritElemental = 0;
      let totalMotionValue = 0;
      // critRate計算用にスキル合算値を先に算出
      let totalCriticalBonus = 0;
      selectedMotions.forEach(motion => {
        const applicableSkills = (selectedSkills || []).flatMap(skill => {
          if (Array.isArray(skill.skillData)) {
            return skill.skillData.map(s => ({ ...s, key: skill.key, level: skill.level }));
          }
          return [];
        }).filter(skillParam => {
          // minHitZone/maxHitZoneは number | Record<MotionAttackType, number> 型を許容
          let min = 0;
          let max = 100;
          if (typeof skillParam.minHitZone === 'number') {
            min = skillParam.minHitZone;
          } else if (typeof skillParam.minHitZone === 'object' && skillParam.minHitZone !== null) {
            min = skillParam.minHitZone[motion.attackType] ?? 0;
          }
          if (typeof skillParam.maxHitZone === 'number') {
            max = skillParam.maxHitZone;
          } else if (typeof skillParam.maxHitZone === 'object' && skillParam.maxHitZone !== null) {
            max = skillParam.maxHitZone[motion.attackType] ?? 100;
          }
          let hitZone = 0;
          if (motion.attackType === 'slash') hitZone = state.slashHitZone;
          else if (motion.attackType === 'blunt') hitZone = state.bluntHitZone;
          else if (motion.attackType === 'shot') hitZone = state.shotHitZone;
          // attackType条件
          const typeOk = !('attackType' in skillParam) || skillParam.attackType === undefined || skillParam.attackType === motion.attackType;
          return typeOk && hitZone >= min && hitZone <= max;
        });
        totalCriticalBonus += applicableSkills.reduce((sum, s) => sum + (s.criticalRateBonus ?? 0), 0);
        // スキル合算値を計算
        const totalAttackBonus = applicableSkills.reduce((sum, s) => sum + (s.additionAttackBonus ?? 0), 0);
        const totalAttackMultiplierBonus = applicableSkills.reduce((mul, s) => mul * (s.attackMultiplierBonus ?? 1), 1);
        const totalElementAddition = applicableSkills.reduce((sum, s) => sum + (s.elementAddition ?? 0), 0);
        const totalElementModifier = applicableSkills.reduce((mul, s) => mul * (s.elementModifier ?? 1), 1);
        const totalCriticalDamageModifier = applicableSkills.reduce((mul, s) => mul * (s.criticalDamageModifier ?? 1), 1);
        const totalElementalCriticalModifier = applicableSkills.reduce((mul, s) => mul * (s.elementalCriticalModifier ?? 1), 1);
        // 物理ダメージ
        const physicalParams: DamageParameters = {
          baseWeaponMultiplier: weaponInfo.weaponMultiplier,
          additionAttackBonus: totalAttackBonus,
          attackMultiplierBonus: totalAttackMultiplierBonus,
          motionValue: motion.motionValue,
          sharpnessModifier: sharpnessObj.modifier,
          criticalDamageModifier: 1,
          criticalRate: weaponInfo.criticalRate + totalCriticalBonus,
          criticalRateBonus: 0,
          slashHitZone: state.slashHitZone,
          bluntHitZone: state.bluntHitZone,
          shotHitZone: state.shotHitZone,
          attackType: motion.attackType,
          baseElementValue: weaponInfo.baseElementValue,
          elementMultiplier: motion.elementMultiplier,
          elementAddition: 0, // 物理には不要
          elementModifier: 1, // 物理には不要
          elementalHitZone: state.slashHitZone,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: [state.state],
          elementalCriticalModifier: 1, // 物理には不要
          hitcount: (motion.hitCount ?? 1),
        };
        totalPhysical += DamageCalculator.calculatePhysicalDamage({ ...physicalParams, criticalDamageModifier: 1 });
        totalCritPhysical += DamageCalculator.calculatePhysicalDamage({ ...physicalParams, criticalDamageModifier: 1.25 + totalCriticalDamageModifier });
        // 属性ダメージもモーションごとに計算
        const elementalParams: DamageParameters = {
          ...physicalParams,
          attackType: 'slash', // 属性には影響しないのでダミー
          elementAddition: totalElementAddition,
          elementModifier: totalElementModifier,
          elementalHitZone: state.slashHitZone,
          elementalCriticalModifier: totalElementalCriticalModifier,
          hitcount: (motion.hitCount ?? 1),
        };
        const elemental = weaponInfo.elementType && weaponInfo.elementType.key === 'none' ? 0 : DamageCalculator.calculateElementalDamage(elementalParams);
        const critElemental = weaponInfo.elementType && weaponInfo.elementType.key === 'none' ? 0 : DamageCalculator.calculateElementalDamage({ ...elementalParams, elementModifier: elementalParams.elementModifier });
        totalElemental += elemental;
        totalCritElemental += critElemental;
        totalMotionValue += motion.motionValue;
      });
      const critRate = Math.max(0, Math.min(1, (weaponInfo.criticalRate + totalCriticalBonus) / 100));
      const total = totalPhysical + totalElemental;
      const critTotal = totalCritPhysical + totalCritElemental;
      const expected = Math.round((total * (1 - critRate) + critTotal * critRate) * 100) / 100;
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
        elementMultiplier: selectedMotions[0]?.elementMultiplier ?? 1,
        elementAddition: 0,
        elementModifier: 1,
      });
    });
  });
  return damageTableRows;
}
