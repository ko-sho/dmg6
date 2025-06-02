import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import type { SkillParameters } from '../models/Skill';

interface SkillLevelTableProps {
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
}

const SkillLevelTable: React.FC<SkillLevelTableProps> = ({ selectedSkills }) => {
  if (!selectedSkills || selectedSkills.length === 0) return null;
  return (
    <TableContainer sx={{ mt: 2, boxShadow: 0 }} component={Paper}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        適用スキル一覧
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '0.95rem' }}>スキル</TableCell>
            <TableCell sx={{ fontSize: '0.95rem' }}>レベル</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedSkills.map(skill => (
            <TableRow key={skill.key}>
              <TableCell sx={{ fontSize: '0.95rem' }}>{skill.key}</TableCell>
              <TableCell sx={{ fontSize: '0.95rem' }}>Lv.{skill.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SkillLevelTable;
