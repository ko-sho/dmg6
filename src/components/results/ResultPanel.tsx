import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";
import DamageTable from "./DamageTable";
import SkillLevelTable from "./SkillLevelTable";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { ResultType } from "../../models/DamageCalculatorTypes";

interface ResultPanelProps {
  result?: ResultType | null;
  fallback?: ResultType;
  compareIdx?: number | "";
  setCompareIdx?: React.Dispatch<React.SetStateAction<number | "">>;
  compareOptions?: { label: string; idx: number }[];
  compareResult?: ResultType;
  compareRows?: import("./DamageTable").DamageTableRow[];
}

const ResultPanel: React.FC<ResultPanelProps> = ({ result, fallback, compareIdx, setCompareIdx, compareOptions, compareResult, compareRows }) => {
  const rows = result?.damageTableRows ?? fallback?.damageTableRows ?? [];
  const selectedSkills = result?.selectedSkills ?? fallback?.selectedSkills ?? [];
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
      {/* 比較対象セレクタをここに表示 */}
      {compareOptions && setCompareIdx && (
        <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
          <InputLabel id="compare-select-label">比較対象</InputLabel>
          <Select
            labelId="compare-select-label"
            value={compareIdx === undefined ? '' : String(compareIdx)}
            onChange={(e) => {
              const v = e.target.value;
              setCompareIdx(v === '' ? '' : Number(v));
            }}
            input={<OutlinedInput label="比較対象" />}
          >
            <MenuItem value="">なし</MenuItem>
            {compareOptions.map((opt) => (
              <MenuItem key={opt.idx} value={opt.idx}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {/* ダメージ表 */}
      <DamageTable
        rows={rows}
        compareRows={compareRows}
        allResults={undefined}
        currentIndex={undefined}
      />
      <SkillLevelTable selectedSkills={selectedSkills} compareResult={compareResult} />
      <SelectedParamsSummary
        weapon={weaponInfo}
        selectedSkills={selectedSkills}
        sharpnessColor={sharpness}
        itemBuffsTotal={itemBuffsTotal}
        compareResult={compareResult}
      />
    </Box>
  );
};

export default ResultPanel;
