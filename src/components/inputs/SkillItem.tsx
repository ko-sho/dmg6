import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import type { SkillLevel, SkillParameters } from '../../models/Skill';

interface SkillItemProps {
  skill: { key: string; label: string; maxLevel: number; skillLevels: SkillLevel[] };
  selectedSkill: { key: string; level: number; skillData: SkillParameters[] } | undefined;
  setSelectedSkill: (key: string, isChecked: boolean, level: number) => void;
  weaponType: string; // 追加
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, selectedSkill, setSelectedSkill, weaponType }) => {
  const isSelected = !!selectedSkill;
  const level = selectedSkill?.level || 1;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, px: 1 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isSelected}
            onChange={e => setSelectedSkill(skill.key, e.target.checked, 1)}
            data-testid={`skill-checkbox-${skill.key}`}
          />
        }
        label={<span style={{ color: 'inherit' }}><Box component="span" sx={{ color: 'text.primary' }}>{skill.label}</Box></span>}
      />
      {isSelected && (
        <>
          {/* レベルに応じた説明文をcaptionで表示（武器種でフィルタ） */}
          {(() => {
            const bonuses = skill.skillLevels[level - 1]?.skillBonuses || [];
            const filtered = bonuses.filter(b => !b.weaponType || b.weaponType === weaponType);
            const desc = filtered[0]?.description;
            return desc ? (
                <span data-testid={`skill-desc-${skill.key}`} style={{ fontSize: '0.68em', color: '#888', marginLeft: 'auto', width: "25%", textAlign: "right" }}>{desc}</span>
            ) : null;
          })()}
          <Select
            size="small"
            value={level}
            onChange={e => setSelectedSkill(skill.key, true, Number(e.target.value))}
            sx={{ minWidth: 72, ml: 2, marginLeft: 1 }}
            data-testid={`skill-level-select-${skill.key}`}
          >
            {Array.from({ length: skill.maxLevel }, (_, i) => i + 1).map(lv => (
              <MenuItem key={lv} value={lv} data-testid={`skill-level-item-${skill.key}-${lv}`}>
                Lv{lv}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
    </Box>
  );
};

export default SkillItem;
