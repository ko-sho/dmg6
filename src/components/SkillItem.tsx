import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import type { SkillLevel, SkillParameters } from '../models/Skill';

interface SkillItemProps {
  skill: { key: string; label: string; maxLevel: number; skillLevels: SkillLevel[] };
  selectedSkill: { key: string; level: number; skillData: SkillParameters[] } | undefined;
  setSelectedSkill: (key: string, isChecked: boolean, level: number) => void;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, selectedSkill, setSelectedSkill }) => {
  const isSelected = !!selectedSkill;
  const level = selectedSkill?.level || 1;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSelected}
            onChange={e => setSelectedSkill(skill.key, e.target.checked, 1)}
          />
        }
        label={skill.label}
      />
      {isSelected && (
        <Select
          size="small"
          value={level}
          onChange={e => setSelectedSkill(skill.key, true, Number(e.target.value))}
          sx={{ minWidth: 80, ml: 2, marginLeft: 'auto' }}
        >
          {Array.from({ length: skill.maxLevel }, (_, i) => i + 1).map(lv => (
            <MenuItem key={lv} value={lv}>
              Lv{lv}
            </MenuItem>
          ))}
        </Select>
      )}
    </Box>
  );
};

export default SkillItem;
