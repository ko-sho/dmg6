import React from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";
import ResultPanel from "./ResultPanel";
import type { Motion } from "../../models/Motion";
import type { WeaponParameters } from "../../models/Weapon";
import type { SelectedSkill } from "../../models/Skill";
import type { Monster } from "../../models/Monster";
import type { SharpnessColor } from "../../models/Sharpness";
import type { DamageTableRow, ResultType } from "../../models/DamageCalculatorTypes";

interface DamageResultTabsProps {
  tabIndex: number;
  setTabIndex: (idx: number) => void;
  damageResult: string | null;
  history: ResultType[];
  lastResult: ResultType | null;
  damageTableRows: DamageTableRow[];
  selectedSkills: SelectedSkill[];
  selectedMotions: Motion[];
  selectedMonster: Monster | null;
  weaponInfo: WeaponParameters;
  sharpness: SharpnessColor;
  onDeleteHistory: (idx: number) => void;
}

const DamageResultTabs: React.FC<DamageResultTabsProps> = ({
  tabIndex,
  setTabIndex,
  damageResult,
  history,
  lastResult,
  damageTableRows,
  selectedSkills,
  selectedMotions,
  selectedMonster,
  weaponInfo,
  sharpness,
  onDeleteHistory,
}) => (
  <>
    {(damageResult || history.length > 0) && (
      <Tabs
        value={tabIndex}
        onChange={(_, v) => setTabIndex(v)}
        sx={{ mb: 2, bgcolor: "background.default", borderRadius: 2, boxShadow: 1 }}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="現在の結果" sx={{ color: "text.primary" }} />
        {history.map((_, idx) => (
          <Tab
            key={`history-${idx}`}
            label={`履歴${history.length - idx}`}
            sx={{ color: "text.primary" }}
          />
        ))}
      </Tabs>
    )}
    {/* タブ内容の切り替え */}
    {tabIndex === 0 && damageResult && (
      <ResultPanel
        result={lastResult}
        fallback={{
          damageTableRows,
          selectedSkills,
          selectedMotions,
          selectedMonster,
          weaponInfo,
          sharpness,
        }}
      />
    )}
    {tabIndex > 0 && history[tabIndex - 1] && (
      <Box
        sx={{
          px: { xs: 0.5, sm: 3 },
          py: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDeleteHistory(tabIndex - 1)}
          >
            この履歴を削除
          </Button>
        </Box>
        <ResultPanel result={history[tabIndex - 1]} />
      </Box>
    )}
  </>
);

export default DamageResultTabs;
