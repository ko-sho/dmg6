import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer, Paper } from '@mui/material';
import type { WeaponParameters } from '../../models/Weapon';
import type { SkillParameters } from '../../models/Skill';
import type { Motion } from '../../models/Motion';
import type { SharpnessColor } from '../../models/Sharpness';
import { SHARPNESS_LEVELS } from '../../models/Sharpness';

interface SelectedParamsSummaryProps {
  weapon: WeaponParameters;
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
  selectedMotions: Motion[];
  sharpnessColor: SharpnessColor;
  itemBuffsTotal?: number; // 追加
}

const SelectedParamsSummary: React.FC<SelectedParamsSummaryProps> = ({ weapon, selectedSkills, selectedMotions, sharpnessColor, itemBuffsTotal = 0 }) => {
  // スキルの合算値
  console.log(itemBuffsTotal)
  const allSkillParams = selectedSkills.flatMap(s => s.skillData);
  const totalAttackBonus = allSkillParams.reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0) + itemBuffsTotal; // アイテムバフ加算
  const totalAttackMultiplierBonus = allSkillParams.reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1);
  const totalElementAddition = allSkillParams.reduce((sum, p) => sum + (p.elementAddition || 0), 0);
  const totalElementModifier = allSkillParams.reduce((prod, p) => prod * (p.elementModifier ?? 1), 1);
  const totalCriticalDamageModifier = allSkillParams.reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0);

  // モーション値の合計
  const totalMotionValue = selectedMotions.reduce((sum, m) => sum + (m.motionValue || 0), 0);
  // モーション補正値の平均
  const avgElementMultiplier = selectedMotions.length > 0
    ? (selectedMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / selectedMotions.length).toFixed(2)
    : '-';

  const sharpnessObj = SHARPNESS_LEVELS.find(s => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];

  // 武器種の日本語ラベル
  const weaponTypeLabels: Record<string, string> = {
    longsword: '太刀',
    greatsword: '大剣',
    // 他の武器種があればここに追加
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow:0 }}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        選択中パラメータ（代表値）
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>パラメーター</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>値</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>武器種</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{weaponTypeLabels[weapon.weaponType] || weapon.weaponType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>切れ味補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{sharpnessObj.modifier}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>武器倍率</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{weapon.weaponMultiplier}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>攻撃力加算値</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{totalAttackBonus} {itemBuffsTotal > 0 ? `（アイテム+${itemBuffsTotal}）` : ''}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>攻撃乗算補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{totalAttackMultiplierBonus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>属性</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{weapon.elementType?.label || '-'}</TableCell>
          </TableRow>
          {/* 属性が無属性でない場合のみ属性系パラメータを表示 */}
          {weapon.elementType?.key !== 'none' && (
            <>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性値</TableCell>
                <TableCell sx={{ fontSize: '0.95rem' }}>{weapon.baseElementValue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性加算補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem' }}>{totalElementAddition}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>属性乗算補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem' }}>{totalElementModifier}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: '0.95rem' }}>モーション属性補正</TableCell>
                <TableCell sx={{ fontSize: '0.95rem' }}>{selectedMotions.length > 0 ? avgElementMultiplier : '-'}</TableCell>
              </TableRow>
            </>
          )}
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>モーション値</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{selectedMotions.length > 0 ? totalMotionValue : '-'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>会心ダメージ補正</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>{1.25 + totalCriticalDamageModifier}</TableCell>
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
