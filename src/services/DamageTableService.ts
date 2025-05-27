import type { WeaponParameters } from '../models/Weapon';
import type { SkillParameters } from '../models/Skill';
import type { Motion } from '../models/Motion';
import type { Monster } from '../models/Monster';
import { DamageCalculator, type DamageParameters } from './DamageCalculator';
import { SHARPNESS_LEVELS } from '../models/Sharpness';
import type { SharpnessColor } from '../models/Sharpness';

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
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[],
  selectedMotions: Motion[],
  selectedMonster: Monster | null,
  sharpnessColor: SharpnessColor = 'white'
): DamageTableRow[] {
  if (!selectedMonster || selectedMotions.length === 0) return [];
  const motion = selectedMotions[0];
  const sharpnessObj = SHARPNESS_LEVELS.find(s => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];
  const getAllSelectedSkillParams = () =>
    selectedSkills.flatMap(s => {
      const params = s.skillData;
      if (!params) return [];
      return Array.isArray(params) ? params : [params];
    });
  const damageTableRows: DamageTableRow[] = [];
  selectedMonster.parts.forEach(part => {
    part.states.forEach(state => {
      const allSkillParams = getAllSelectedSkillParams();
      const applicableSkills = allSkillParams.filter(p => {
        const hitZone = state.physicalHitZone;
        const stateName = state.state;
        const hitZoneOk = (p.minHitZone === undefined || hitZone >= p.minHitZone) &&
                          (p.maxHitZone === undefined || hitZone <= p.maxHitZone);
        let stateOk = true;
        if (Array.isArray(p.applicableStates)) {
          if (p.applicableStates.length === 0) {
            stateOk = false;
          } else {
            stateOk = p.applicableStates.includes(stateName);
          }
        }
        return hitZoneOk && stateOk;
      });
      const totalAttackBonus = applicableSkills.reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0);
      const totalElementAddition = applicableSkills.reduce((sum, p) => sum + (p.elementAddition || 0), 0);
      const totalCriticalBonus = applicableSkills.reduce((sum, p) => sum + (p.criticalRateBonus || 0), 0);
      const totalCriticalDamageModifier = applicableSkills.reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0);
      // attackMultiplierBonusは乗算なので、全スキルの値を掛け合わせる
      const totalAttackMultiplierBonus = applicableSkills.reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1);
      // elementModifierも全スキルの値を掛け合わせる
      const totalElementModifier = applicableSkills.reduce((prod, p) => prod * (p.elementModifier ?? 1), 1);
      const getElementalHitZone = () => {
        switch (weaponInfo.elementType.key) {
          case 'fire': return state.fireHitZone;
          case 'water': return state.waterHitZone;
          case 'ice': return state.iceHitZone;
          case 'thunder': return state.thunderHitZone;
          case 'dragon': return state.dragonHitZone;
          default: return 0;
        }
      };
      const elementalHitZone = getElementalHitZone();
      const baseCriticalRate = weaponInfo.criticalRate + totalCriticalBonus;
      const params: DamageParameters = {
        baseWeaponMultiplier: weaponInfo.weaponMultiplier,
        additionAttackBonus: totalAttackBonus,
        attackMultiplierBonus: totalAttackMultiplierBonus,
        motionValue: motion.motionValue,
        sharpnessModifier: sharpnessObj.modifier,
        criticalDamageModifier: 1 + totalCriticalDamageModifier,
        criticalRate: baseCriticalRate,
        criticalRateBonus: 0,
        physicalHitZone: state.physicalHitZone,
        baseElementValue: weaponInfo.baseElementValue,
        elementMultiplier: motion.elementMultiplier,
        elementAddition: totalElementAddition,
        elementModifier: totalElementModifier,
        elementalHitZone,
        minHitZone: 0,
        maxHitZone: 100,
        applicableStates: [state.state],
      };
      const physical = DamageCalculator.calculatePhysicalDamage({ ...params, criticalDamageModifier: 1 });
      const critPhysical = DamageCalculator.calculatePhysicalDamage({ ...params, criticalDamageModifier: 1.25 + totalCriticalDamageModifier });
      const elemental = weaponInfo.elementType.key === 'none' ? 0 : DamageCalculator.calculateElementalDamage(params);
      const critElemental = weaponInfo.elementType.key === 'none' ? 0 : DamageCalculator.calculateElementalDamage(params);
      const critRate = Math.max(0, Math.min(1, baseCriticalRate / 100));
      const total = physical + elemental;
      const critTotal = critPhysical + critElemental;
      const expected = Math.round((total * (1 - critRate) + critTotal * critRate) * 100) / 100;
      damageTableRows.push({
        part: part.name,
        state: state.state,
        damage: `${total} (${elemental})`,
        critDamage: `${critTotal} (${critElemental})`,
        expected: `${expected} (${elemental})`,
        physical,
        elemental,
        critRate,
        baseWeaponMultiplier: weaponInfo.weaponMultiplier,
        attackMultiplierBonus: totalAttackMultiplierBonus,
        additionAttackBonus: totalAttackBonus,
        motionValue: motion.motionValue,
        sharpnessModifier: sharpnessObj.modifier,
        criticalDamageModifier: 1 + totalCriticalDamageModifier,
        baseElementValue: weaponInfo.baseElementValue,
        elementMultiplier: motion.elementMultiplier,
        elementAddition: totalElementAddition,
        elementModifier: totalElementModifier,
      });
    });
  });
  return damageTableRows;
}
