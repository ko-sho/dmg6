import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import type { SkillParameters } from '../../models/Skill';
import type { ResultType } from '../../models/DamageCalculatorTypes';

interface SkillLevelTableProps {
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
  compareResult?: ResultType;
}

const SkillLevelTable: React.FC<SkillLevelTableProps> = ({ selectedSkills, compareResult }) => {
  const compareSkills = compareResult?.selectedSkills || [];
  if (!selectedSkills.length && !compareSkills.length) return null;
  // Merge keys for all skills present in either
  const allKeys = Array.from(new Set([
    ...selectedSkills.map(s => s.key),
    ...compareSkills.map(s => s.key)
  ]));
  return (
    <TableContainer sx={{ mt: 2, boxShadow: 0 }} component={Paper}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        適用スキル一覧 {compareResult && '（比較）'}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>スキル</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>現レベル</TableCell>
            {compareResult && <TableCell sx={{ fontSize: '0.95rem' }}>比レベル</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {allKeys.map(key => {
            const cur = selectedSkills.find(s => s.key === key);
            const cmp = compareSkills.find(s => s.key === key);
            return (
              <TableRow key={key}>
                <TableCell sx={{ fontSize: '0.95rem' }}>{key}</TableCell>
                <TableCell sx={{ fontSize: '0.95rem' }}>{cur ? `Lv.${cur.level}` : '-'}</TableCell>
                {compareResult && <TableCell sx={{ fontSize: '0.95rem' }}>{cmp ? `Lv.${cmp.level}` : '-'}</TableCell>}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillLevelTable;
