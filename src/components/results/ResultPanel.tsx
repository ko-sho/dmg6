import React from "react";
import { Box } from "@mui/material";
import DamageTable from "./DamageTable";
import SkillLevelTable from "./SkillLevelTable";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { ResultType } from "../../models/DamageCalculatorTypes";

interface ResultPanelProps {
  result?: ResultType | null;
  fallback?: ResultType;
  allResults?: ResultType[];
  currentIndex?: number;
}

const ResultPanel: React.FC<ResultPanelProps> = ({ result, fallback, allResults, currentIndex = 0 }) => {
  const rows = result?.damageTableRows ?? fallback?.damageTableRows ?? [];
  const selectedSkills = result?.selectedSkills ?? fallback?.selectedSkills ?? [];
  const selectedMotions = result?.selectedMotions ?? fallback?.selectedMotions ?? [];
  const selectedMonster = result?.selectedMonster ?? fallback?.selectedMonster ?? null;
  const weaponInfo = result?.weaponInfo ?? fallback?.weaponInfo;
  const sharpness = result?.sharpness ?? fallback?.sharpness;
  const itemBuffsTotal = result?.itemBuffsTotal ?? fallback?.itemBuffsTotal ?? 0; // ここで履歴ごとに取得

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
      {/* モーションテーブルはグローバル表示のためここから削除 */}
      <SelectedParamsSummary
        weapon={weaponInfo}
        selectedSkills={selectedSkills}
        selectedMotions={selectedMotions}
        sharpnessColor={sharpness}
        itemBuffsTotal={itemBuffsTotal}
      />
    </Box>
  );
};

export default ResultPanel;
