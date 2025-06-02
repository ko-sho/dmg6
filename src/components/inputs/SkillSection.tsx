import React from "react";
import type { Dispatch, SetStateAction } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import SkillSelector from "./SkillSelector";
import type { SkillData, SelectedSkill } from "../../models/Skill";

interface SkillSectionProps {
  skillCategories: string[];
  skillCategoryLabels: Record<string, string>;
  skillTab: number;
  setSkillTab: (tab: number) => void;
  skillsByCategory: Record<string, SkillData[]>;
  selectedSkills: SelectedSkill[];
  setSelectedSkills: Dispatch<SetStateAction<SelectedSkill[]>>;
}

const SkillSection: React.FC<SkillSectionProps> = ({
  skillCategories,
  skillCategoryLabels,
  skillTab,
  setSkillTab,
  skillsByCategory,
  selectedSkills,
  setSelectedSkills,
}) => (
  <Box
    sx={{
      px: { xs: 0.5, sm: 3 },
      py: 2,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
    }}
  >
    <Typography variant="h6" sx={{ mb: 1 }} color="text.primary">
      スキル
    </Typography>
    <Tabs
      value={skillTab}
      onChange={(_, v) => setSkillTab(v)}
      variant="scrollable"
      scrollButtons="auto"
      sx={{ mb: 1 }}
    >
      {skillCategories.map((category) => (
        <Tab
          key={category}
          label={skillCategoryLabels[category] || category}
        />
      ))}
    </Tabs>
    {skillCategories.length > 0 && skillsByCategory[skillCategories[skillTab]] ? (
      <SkillSelector
        skills={skillsByCategory[skillCategories[skillTab]].map((skill: SkillData) => ({
          key: skill.name,
          label: skill.name,
          maxLevel: skill.levels.length,
          skillLevels: skill.levels,
        }))}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
    ) : null}
  </Box>
);

export default SkillSection;
