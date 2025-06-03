import React, { useState } from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";
import ResultPanel from "./ResultPanel";
import type { ResultType } from "../../models/DamageCalculatorTypes";

interface DamageResultTabsProps {
  tabIndex: number;
  setTabIndex: (idx: number) => void;
  results: ResultType[]; // [0]=current, [1...]=history
  onDeleteHistory: (idx: number) => void;
}

const DamageResultTabs: React.FC<DamageResultTabsProps> = ({
  tabIndex,
  setTabIndex,
  results,
  onDeleteHistory,
}) => {
  // 比較対象インデックスをここで管理
  const [compareIdx, setCompareIdx] = useState<number | "">("");
  const hasAllResults = results.length > 1;
  const compareOptions = hasAllResults
    ? results
        .map((_, idx) => ({
          label: idx === 0 ? "現在" : `履歴${results.length - idx}`,
          idx,
        }))
        .filter((opt) => opt.idx !== tabIndex)
    : [];
  const compareResult =
    hasAllResults && compareIdx !== "" ? results[compareIdx as number] : undefined;

  // 現在のタブのResultType
  const currentResult = results[tabIndex] || results[0];

  return (
    <>
      {results.length > 0 && (
        <Tabs
          value={tabIndex}
          onChange={(_, v) => setTabIndex(v)}
          sx={{ mb: 2, bgcolor: "background.default", borderRadius: 2, boxShadow: 1 }}
          textColor="inherit"
          indicatorColor="secondary"
        >
          {results.map((_, idx) => (
            <Tab
              key={`result-${idx}`}
              label={idx === 0 ? "現在の結果" : `履歴${results.length - idx}`}
              sx={{ color: "text.primary" }}
            />
          ))}
        </Tabs>
      )}
      {/* 比較対象セレクタをResultPanelの上部に移動して渡す */}
      <ResultPanel
        result={currentResult}
        fallback={currentResult}
        compareIdx={compareIdx}
        setCompareIdx={setCompareIdx}
        compareOptions={compareOptions}
        compareResult={compareResult}
        compareRows={compareResult?.damageTableRows}
      />
      {tabIndex > 0 && results[tabIndex] && (
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
              onClick={() => onDeleteHistory(tabIndex)}
            >
              この履歴を削除
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DamageResultTabs;
