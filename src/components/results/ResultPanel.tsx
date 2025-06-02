import React from "react";
import { Box } from "@mui/material";
import DamageTable from "./DamageTable";
import SkillLevelTable from "./SkillLevelTable";
import SelectedMotionsTable from "./SelectedMotionsTable";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { Motion } from "../models/Motion";
import type { WeaponParameters } from "../models/Weapon";
import type { SkillParameters } from "../models/Skill";
import type { Monster } from "../models/Monster";
import type { SharpnessColor } from "../models/Sharpness";

interface DamageTableRow {
  part: string;
  state: string;
  damage: string;
  critDamage: string;
  expected: string;
  physical: number;
  elemental: number;
  critRate: number;
}

interface ResultPanelProps {
  result?: {
    damageTableRows: DamageTableRow[];
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    weaponInfo: WeaponParameters;
    sharpness: SharpnessColor;
  } | null;
  fallback?: {
    damageTableRows: DamageTableRow[];
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    weaponInfo: WeaponParameters;
    sharpness: SharpnessColor;
  };
}

const ResultPanel: React.FC<ResultPanelProps> = ({ result, fallback }) => {
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
      <DamageTable rows={rows} />
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
