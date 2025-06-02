import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import type { SkillParameters, SkillLevel } from '../../models/Skill';
import SkillItem from './SkillItem';

interface SkillSelectorProps {
  skills: { key: string; label: string; maxLevel: number; skillLevels: SkillLevel[] }[];
  selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<{ key: string; level: number; skillData: SkillParameters[] }[]>>;
  weaponType: string; // 追加
}

const SkillSelector: React.FC<SkillSelectorProps> = ({ skills, selectedSkills, setSelectedSkills, weaponType }) => {
  // SkillItemの選択状態・レベル変更を管理
  const handleSkillChange = (key: string, isChecked: boolean, level: number) => {
    if (isChecked) {
      const skill = skills.find(s => s.key === key);
      if (!skill) return;
      // SkillLevel配列から該当レベルのSkillLevelを取得
      const skillLevel = skill.skillLevels[level - 1];
      if (!skillLevel) return;
      setSelectedSkills([
        ...selectedSkills.filter(s => s.key !== key),
        { key, level, skillData: skillLevel.skillBonuses }
      ]);
    } else {
      setSelectedSkills(selectedSkills.filter(s => s.key !== key));
    }
  };

  return (
    <FormGroup>
      {skills.map(skill => {
        const selected = selectedSkills.find(s => s.key === skill.key);
        const selectedSkill = selected
          ? { key: selected.key, level: selected.level, skillData: skill.skillLevels[selected.level - 1]?.skillBonuses || [] }
          : undefined;
        return (
          <SkillItem
            key={skill.key}
            skill={{
              key: skill.key,
              label: skill.label,
              maxLevel: skill.maxLevel,
              skillLevels: skill.skillLevels
            }}
            selectedSkill={selectedSkill}
            setSelectedSkill={handleSkillChange}
            weaponType={weaponType} // 追加
          />
        );
      })}
    </FormGroup>
  );
};

export default SkillSelector;
