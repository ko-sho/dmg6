import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer, Paper } from '@mui/material';
import type { WeaponParameters } from '../../models/Weapon';
import type { SkillParameters } from '../../models/Skill';
// import type { Motion } from '../../models/Motion';
import type { SharpnessColor } from '../../models/Sharpness';
import { SHARPNESS_LEVELS } from '../../models/Sharpness';
import type { ResultType } from '../../models/DamageCalculatorTypes';

interface SelectedParamsSummaryProps {
  weapon: WeaponParameters;
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
  // selectedMotions: Motion[];
  sharpnessColor: SharpnessColor;
  itemBuffsTotal?: number;
  compareResult?: ResultType;
}

const SelectedParamsSummary: React.FC<SelectedParamsSummaryProps> = ({ weapon, selectedSkills, sharpnessColor, itemBuffsTotal = 0, compareResult }) => {
  // スキルの合算値
  console.log(itemBuffsTotal)
  const allSkillParams = selectedSkills.flatMap(s => s.skillData);
  const totalAttackBonus = allSkillParams.reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + itemBuffsTotal; // アイテムバフ加算
  const totalAttackMultiplierBonus = allSkillParams.reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1);
  const totalElementAddition = allSkillParams.reduce((sum, p) => sum + (p.elementAddition || 0), 0);
  const totalElementModifier = allSkillParams.reduce((prod, p) => prod * (p.elementModifier ?? 1), 1);
  const totalCriticalDamageModifier = allSkillParams.reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0);

  const sharpnessObj = SHARPNESS_LEVELS.find(s => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];

  // 武器種の日本語ラベル
  const weaponTypeLabels: Record<string, string> = {
    longsword: '太刀',
    greatsword: '大剣',
    // 他の武器種があればここに追加
  };

  const cmp = compareResult;
  const cmpWeapon = cmp?.weaponInfo;
  const cmpSkills = cmp?.selectedSkills || [];
  const cmpMotions = cmp?.selectedMotions || [];
  const cmpSharpness = cmp?.sharpness;
  const cmpBuffs = cmp?.itemBuffsTotal || 0;

  // モーション補正値の平均
  // const avgElementMultiplier = selectedMotions.length > 0
  //   ? (selectedMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / selectedMotions.length).toFixed(2)
  //   : '-';
  let avgElementMultiplier = '-';
  if (cmpMotions.length > 0) {
    avgElementMultiplier = (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length).toFixed(2);
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow:0 }}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        選択中パラメータ（代表値）{compareResult && '（比較）'}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>パラメーター</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>現値</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem' }}>比値</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 武器種 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>武器種</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{weaponTypeLabels[weapon.weaponType] || weapon.weaponType}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.weaponType !== cmpWeapon.weaponType) ? '#d32f2f' : undefined }}>{cmpWeapon ? (weaponTypeLabels[cmpWeapon.weaponType] || cmpWeapon.weaponType) : '-'}</TableCell>}
          </TableRow>
          {/* 切れ味補正 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>切れ味補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{sharpnessObj.modifier}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSharpness && sharpnessObj.modifier !== (SHARPNESS_LEVELS.find(s => s.color === cmpSharpness)?.modifier ?? SHARPNESS_LEVELS[5].modifier)) ? '#d32f2f' : undefined }}>{cmpSharpness ? (SHARPNESS_LEVELS.find(s => s.color === cmpSharpness)?.modifier ?? SHARPNESS_LEVELS[5].modifier) : '-'}</TableCell>}
          </TableRow>
          {/* 武器倍率 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>武器倍率</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.weaponMultiplier > cmpWeapon.weaponMultiplier) ? '#388e3c' : (cmpWeapon && weapon.weaponMultiplier < cmpWeapon.weaponMultiplier) ? '#d32f2f' : undefined }}>{weapon.weaponMultiplier}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.weaponMultiplier < cmpWeapon.weaponMultiplier) ? '#388e3c' : (cmpWeapon && weapon.weaponMultiplier > cmpWeapon.weaponMultiplier) ? '#d32f2f' : undefined }}>{cmpWeapon ? cmpWeapon.weaponMultiplier : '-'}</TableCell>}
          </TableRow>
          {/* 攻撃力加算値 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>攻撃力加算値</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalAttackBonus > (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + cmpBuffs)) ? '#388e3c' : (cmpSkills.length && totalAttackBonus < (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + cmpBuffs)) ? '#d32f2f' : undefined }}>{totalAttackBonus}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalAttackBonus < (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + cmpBuffs)) ? '#388e3c' : (cmpSkills.length && totalAttackBonus > (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + cmpBuffs)) ? '#d32f2f' : undefined }}>{(cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + cmpBuffs)}</TableCell>}
          </TableRow>
          {/* 攻撃乗算補正 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>攻撃乗算補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalAttackMultiplierBonus > (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1))) ? '#388e3c' : (cmpSkills.length && totalAttackMultiplierBonus < (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1))) ? '#d32f2f' : undefined }}>{totalAttackMultiplierBonus}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalAttackMultiplierBonus < (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1))) ? '#388e3c' : (cmpSkills.length && totalAttackMultiplierBonus > (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1))) ? '#d32f2f' : undefined }}>{(cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1))}</TableCell>}
          </TableRow>
          {/* 属性 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>属性</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{weapon.elementType?.label || '-'}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.elementType?.label !== cmpWeapon.elementType?.label) ? '#d32f2f' : undefined }}>{cmpWeapon?.elementType?.label || '-'}</TableCell>}
          </TableRow>
          {/* 属性が無属性でない場合のみ属性系パラメータを表示 */}
          {weapon.elementType?.key !== 'none' && (
            <>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性値</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.baseElementValue > cmpWeapon.baseElementValue) ? '#388e3c' : (cmpWeapon && weapon.baseElementValue < cmpWeapon.baseElementValue) ? '#d32f2f' : undefined }}>{weapon.baseElementValue}</TableCell>
                {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpWeapon && weapon.baseElementValue < cmpWeapon.baseElementValue) ? '#388e3c' : (cmpWeapon && weapon.baseElementValue > cmpWeapon.baseElementValue) ? '#d32f2f' : undefined }}>{cmpWeapon ? cmpWeapon.baseElementValue : '-'}</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性加算補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalElementAddition > (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.elementAddition || 0), 0))) ? '#388e3c' : (cmpSkills.length && totalElementAddition < (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.elementAddition || 0), 0))) ? '#d32f2f' : undefined }}>{totalElementAddition}</TableCell>
                {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalElementAddition < (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.elementAddition || 0), 0))) ? '#388e3c' : (cmpSkills.length && totalElementAddition > (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.elementAddition || 0), 0))) ? '#d32f2f' : undefined }}>{cmpSkills.length ? (cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.elementAddition || 0), 0)) : '-'}</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性乗算補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalElementModifier > (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.elementModifier ?? 1), 1))) ? '#388e3c' : (cmpSkills.length && totalElementModifier < (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.elementModifier ?? 1), 1))) ? '#d32f2f' : undefined }}>{totalElementModifier}</TableCell>
                {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && totalElementModifier < (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.elementModifier ?? 1), 1))) ? '#388e3c' : (cmpSkills.length && totalElementModifier > (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.elementModifier ?? 1), 1))) ? '#d32f2f' : undefined }}>{cmpSkills.length ? (cmpSkills.flatMap(s=>s.skillData).reduce((prod, p) => prod * (p.elementModifier ?? 1), 1)) : '-'}</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>モーション属性補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem', color: (cmpMotions.length && Number(avgElementMultiplier) > (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length)) ? '#388e3c' : (cmpMotions.length && Number(avgElementMultiplier) < (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length)) ? '#d32f2f' : undefined }}>{avgElementMultiplier}</TableCell>
                {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpMotions.length && Number(avgElementMultiplier) < (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length)) ? '#388e3c' : (cmpMotions.length && Number(avgElementMultiplier) > (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length)) ? '#d32f2f' : undefined }}>{cmpMotions.length > 0 ? (cmpMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / cmpMotions.length).toFixed(2) : '-'}</TableCell>}
              </TableRow>
            </>
          )}
          {/* 会心ダメージ補正 */}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>会心ダメージ補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && (1.25 + totalCriticalDamageModifier) > (1.25 + cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0))) ? '#388e3c' : (cmpSkills.length && (1.25 + totalCriticalDamageModifier) < (1.25 + cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0))) ? '#d32f2f' : undefined }}>{(1.25 + totalCriticalDamageModifier).toFixed(2)}</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem', color: (cmpSkills.length && (1.25 + totalCriticalDamageModifier) < (1.25 + cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0))) ? '#388e3c' : (cmpSkills.length && (1.25 + totalCriticalDamageModifier) > (1.25 + cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0))) ? '#d32f2f' : undefined }}>{(1.25 + cmpSkills.flatMap(s=>s.skillData).reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0)).toFixed(2)}</TableCell>}
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="caption" color="text.secondary">
        ※スキル補正は全て合算（攻撃乗算は掛け算）、モーション値は合計、モーション属性補正は平均値を表示。
      </Typography>
    </TableContainer>
  );
};

export default SelectedParamsSummary;
