import React from "react";
import { Box } from "@mui/material";
import DamageTable from "./DamageTable";
import SkillLevelTable from "./SkillLevelTable";
import SelectedMotionsTable from "./SelectedMotionsTable";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { Motion } from "../../models/Motion";
import type { WeaponParameters } from "../../models/Weapon";
import type { SkillParameters } from "../../models/Skill";
import type { Monster } from "../../models/Monster";
import type { SharpnessColor } from "../../models/Sharpness";
import type { DamageTableRow as FullDamageTableRow } from "../../models/DamageCalculatorTypes";

interface ResultPanelProps {
  result?: {
    damageTableRows: FullDamageTableRow[];
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    weaponInfo: WeaponParameters;
    sharpness: SharpnessColor;
  } | null;
  fallback?: {
    damageTableRows: FullDamageTableRow[];
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    weaponInfo: WeaponParameters;
    sharpness: SharpnessColor;
  };
  // 新しいprops
  allResults?: Array<{
    damageTableRows: FullDamageTableRow[];
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    weaponInfo: WeaponParameters;
    sharpness: SharpnessColor;
  }>;
  currentIndex?: number;
}

const ResultPanel: React.FC<ResultPanelProps> = ({ result, fallback, allResults, currentIndex = 0 }) => {
  const rows = result?.damageTableRows ?? fallback?.damageTableRows ?? [];
  const selectedSkills = result?.selectedSkills ?? fallback?.selectedSkills ?? [];
  const selectedMotions = result?.selectedMotions ?? fallback?.selectedMotions ?? [];
  const selectedMonster = result?.selectedMonster ?? fallback?.selectedMonster ?? null;
  const weaponInfo = result?.weaponInfo ?? fallback?.weaponInfo;
  const sharpness = result?.sharpness ?? fallback?.sharpness;

  if (!selectedMonster || rows.length === 0 || !weaponInfo || !sharpness) return null;

  return (
    <Box
      sx={{
        px: { xs: 0.5, sm: 3 },
        py: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      {/* ダメージ表（比較セレクタはDamageTableに移譲） */}
      <DamageTable
        rows={rows}
        allResults={allResults}
        currentIndex={currentIndex}
      />
      <SkillLevelTable selectedSkills={selectedSkills} />
      <SelectedMotionsTable
        motions={selectedMotions.map((motion) => ({
          name: motion.name,
          motionValue: motion.motionValue,
          elementModifier: motion.elementMultiplier,
          hits: motion.hitCount,
        }))}
      />
      <SelectedParamsSummary
        weapon={weaponInfo}
        selectedSkills={selectedSkills}
        selectedMotions={selectedMotions}
        sharpnessColor={sharpness}
      />
    </Box>
  );
};

export default ResultPanel;
