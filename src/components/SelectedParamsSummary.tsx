import React from 'react';
import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import type { WeaponParameters } from '../models/Weapon';
import type { SkillParameters } from '../models/Skill';
import type { Motion } from '../models/Motion';
import type { SharpnessColor } from '../models/Sharpness';
import { SHARPNESS_LEVELS } from '../models/Sharpness';

interface SelectedParamsSummaryProps {
  weapon: WeaponParameters;
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
  selectedMotions: Motion[];
  sharpnessColor: SharpnessColor;
}

const SelectedParamsSummary: React.FC<SelectedParamsSummaryProps> = ({ weapon, selectedSkills, selectedMotions, sharpnessColor }) => {
  // スキルの合算値
  const allSkillParams = selectedSkills.flatMap(s => s.skillData);
  const totalAttackBonus = allSkillParams.reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0);
  const totalAttackMultiplierBonus = allSkillParams.reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1);
  const totalElementAddition = allSkillParams.reduce((sum, p) => sum + (p.elementAddition || 0), 0);
  const totalElementModifier = allSkillParams.reduce((prod, p) => prod * (p.elementModifier ?? 1), 1);
  const totalCriticalDamageModifier = allSkillParams.reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0);

  // モーション値の合計
  const totalMotionValue = selectedMotions.reduce((sum, m) => sum + (m.motionValue || 0), 0);
  // モーションは複数選択可。ここでは最初の1つを代表値として表示
  const motion = selectedMotions[0];

  const sharpnessObj = SHARPNESS_LEVELS.find(s => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        選択中パラメータ（代表値）
      </Typography>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>武器倍率</TableCell>
            <TableCell>{weapon.weaponMultiplier}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>攻撃乗算補正</TableCell>
            <TableCell>{totalAttackMultiplierBonus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>加算攻撃力</TableCell>
            <TableCell>{totalAttackBonus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>モーション値</TableCell>
            <TableCell>{selectedMotions.length > 0 ? totalMotionValue : '-'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>切れ味補正</TableCell>
            <TableCell>{sharpnessObj.modifier}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>会心ダメージ補正</TableCell>
            <TableCell>{1.25 + totalCriticalDamageModifier}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>属性値</TableCell>
            <TableCell>{weapon.baseElementValue}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>属性乗算補正</TableCell>
            <TableCell>{motion ? motion.elementMultiplier : '-'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>属性加算補正</TableCell>
            <TableCell>{totalElementAddition}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>属性補正</TableCell>
            <TableCell>{totalElementModifier}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="caption" color="text.secondary">
        ※スキル補正は合算値、モーション値は合計、その他モーションは最初の選択を代表値として表示。
      </Typography>
    </Box>
  );
};

export default SelectedParamsSummary;
