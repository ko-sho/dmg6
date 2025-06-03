import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import DamageHeatmap from "./DamageHeatmap";

export interface DamageTableRow {
  part: string;
  state: string;
  damage: string; // 合計ダメージ（物理+属性）
  critDamage: string;
  expected: string;
  physical: number;
  elemental: number;
  critRate?: number; // 期待会心率（0-1）
  baseWeaponMultiplier?: number;
  attackMultiplierBonus?: number;
  additionAttackBonus?: number;
  motionValue?: number;
  sharpnessModifier?: number;
  criticalDamageModifier?: number;
  baseElementValue?: number;
  elementMultiplier?: number;
  elementAddition?: number;
  elementModifier?: number;
}

interface DamageTableProps {
  rows: DamageTableRow[];
  allResults?: Array<{
    damageTableRows: DamageTableRow[];
  }>;
  currentIndex?: number;
  compareRows?: DamageTableRow[];
}

const STATE_OPTIONS = [
  { value: "normal", label: "通常" },
  { value: "wounded", label: "傷口" },
  { value: "exposed", label: "弱点露出" },
];

const stateLabels: Record<string, string> = {
  normal: "通常",
  wounded: "傷口",
  exposed: "弱点露出",
};

const DamageTable: React.FC<DamageTableProps> = ({
  rows,
  allResults,
  currentIndex = 0,
  compareRows: externalCompareRows,
}) => {
  const [selectedStates, setSelectedStates] = React.useState<string[]>(
    STATE_OPTIONS.map((opt) => opt.value)
  );
  // 比較対象選択用
  const [compareIdx, setCompareIdx] = React.useState<string | number>(""); // "" = なし, number = allResults index
  const hasAllResults = Array.isArray(allResults) && allResults.length > 1;

  const compareOptions = React.useMemo(() => {
    return hasAllResults
      ? allResults
          .map((_, idx) => ({
            label: idx === 0 ? "現在" : `履歴${allResults.length - idx}`,
            idx,
          }))
          .filter((opt) => opt.idx !== currentIndex)
      : [];
  }, [hasAllResults, allResults, currentIndex]);

  // 比較用: 部位+状態で一致する行を返す
  const compareRows =
    externalCompareRows !== undefined
      ? externalCompareRows
      : hasAllResults && compareIdx !== ""
      ? allResults?.[compareIdx as number]?.damageTableRows
      : undefined;

  React.useEffect(() => {
    // compareIdxが現在のタブと同じ、または有効な比較対象でなければリセット
    if (
      compareIdx !== "" &&
      (compareIdx === currentIndex ||
        !compareOptions.some((opt) => opt.idx === compareIdx))
    ) {
      setCompareIdx("");
    }
  }, [currentIndex, compareIdx, compareOptions]);

  // フィルタリング
  const filteredRows = rows.filter((row) => selectedStates.includes(row.state));

  // 部位ごとにrowSpanを計算
  const partRowSpans: Record<string, number> = {};
  filteredRows.forEach((row) => {
    partRowSpans[row.part] = (partRowSpans[row.part] || 0) + 1;
  });
  const renderedParts: Record<string, boolean> = {};

  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 0 }}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        ダメージ表
      </Typography>
      {/* 比較対象セレクタ（全履歴から選択可能） */}
      {hasAllResults && (
        <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
          <InputLabel id="compare-select-label">比較対象</InputLabel>
          <Select
            labelId="compare-select-label"
            value={compareIdx}
            onChange={(e) => {
              const v = e.target.value;
              setCompareIdx(v === "" ? "" : parseInt(v as string, 10));
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
      {/* 状態フィルタ */}
      <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
        <InputLabel id="state-filter-label">部位状態フィルタ</InputLabel>
        <Select
          labelId="state-filter-label"
          multiple
          value={selectedStates}
          onChange={(e) =>
            setSelectedStates(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
          input={<OutlinedInput label="部位状態フィルタ" />}
          renderValue={(selected) =>
            selected
              .map(
                (val) => STATE_OPTIONS.find((opt) => opt.value === val)?.label
              )
              .join(", ")
          }
        >
          {STATE_OPTIONS.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              <Checkbox checked={selectedStates.indexOf(opt.value) > -1} />
              <ListItemText primary={opt.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto", boxShadow: 0 }}
      >
        <Table size="small" sx={{ minWidth: "100%", width: "max-content" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                部位
              </TableCell>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                状態
              </TableCell>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                通常
              </TableCell>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                会心
              </TableCell>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                会心率
              </TableCell>
              <TableCell
                sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}
              >
                期待値
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => {
              const showPart = !renderedParts[row.part];
              if (showPart) renderedParts[row.part] = true;
              // 比較用: 部位+状態で一致する行を返す
              const compareRow = compareRows ? compareRows.find(
                (r) => r.part === row.part && r.state === row.state
              ) : undefined;
              // パーセンテージ差分計算
              const percent = (val: number, base?: number) => {
                if (base === undefined || base === 0) return "";
                const diff = ((val - base) / base) * 100;
                const color =
                  diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : undefined;
                return (
                  <Typography
                    variant="caption"
                    style={{ color, fontWeight: 600 }}
                  >
                    {diff > 0 ? "+" : ""}
                    {diff.toFixed(1)}%
                  </Typography>
                );
              };
              return (
                <TableRow
                  key={`${row.part}-${row.state}`}
                  sx={{
                    "& td": {
                      px: { xs: 0.5, sm: 1.5 },
                      py: { xs: 0.5, sm: 1 },
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      wordBreak: "keep-all",
                    },
                  }}
                >
                  {showPart ? (
                    <TableCell rowSpan={partRowSpans[row.part]}>
                      {row.part}
                    </TableCell>
                  ) : null}
                  <TableCell>{stateLabels[row.state] || row.state}</TableCell>
                  <TableCell>
                    {Number(row.damage.split(" ")[0]).toFixed(1)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(1)}
                        </Typography>
                      </>
                    )}
                    {compareRow && (
                      <>
                        <br />
                        {percent(
                          Number(row.damage.split(" ")[0]),
                          Number(compareRow.damage.split(" ")[0])
                        )}
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {Number(row.critDamage.split(" ")[0]).toFixed(1)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(1)}
                        </Typography>
                      </>
                    )}
                    {compareRow && (
                      <>
                        <br />
                        {percent(
                          Number(row.critDamage.split(" ")[0]),
                          Number(compareRow.critDamage.split(" ")[0])
                        )}
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.critRate !== undefined
                      ? `${Math.round(row.critRate * 100)}%`
                      : "-"}
                    <br />
                    {compareRow && (() => {
                      const base = (compareRow.critRate ?? 0);
                      const val = (row.critRate ?? 0);
                      const diff = Math.round((val - base) * 100);
                      if (diff === 0) return null;
                      const color = diff > 0 ? "#388e3c" : "#d32f2f";
                      return (
                        <Typography variant="caption" style={{ color, fontWeight: 600 }}>
                          {diff > 0 ? "+" : ""}{diff}
                        </Typography>
                      );
                    })()}
                  </TableCell>
                  <TableCell>
                    {Number(row.expected.split(" ")[0]).toFixed(1)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(1)}
                        </Typography>
                      </>
                    )}
                    {compareRow && (
                      <>
                        <br />
                        {percent(
                          Number(row.expected.split(" ")[0]),
                          Number(compareRow.expected.split(" ")[0])
                        )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          {/* 平均行の追加 */}
          <TableBody>
            <TableRow
              sx={{
                "& td": {
                  px: { xs: 0.5, sm: 1.5 },
                  py: { xs: 1, sm: 1 },
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  wordBreak: "keep-all",
                },
              }}
            >
              <TableCell colSpan={2} align="left">
                平均
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      filteredRows.reduce(
                        (sum, row) => sum + Number(row.damage.split(" ")[0]),
                        0
                      ) / filteredRows.length
                    ).toFixed(1)
                  : "-"}
                {/* 比較時: ダメージ平均差分 */}
                {compareRows && filteredRows.length > 0 && (() => {
                  const avg = filteredRows.reduce((sum, row) => sum + Number(row.damage.split(" ")[0]), 0) / filteredRows.length;
                  const compareAvgRows = compareRows.filter(row => selectedStates.includes(row.state));
                  const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.damage.split(" ")[0]), 0) / compareAvgRows.length : 0;
                  if (!compareAvg) return null;
                  const diff = ((avg - compareAvg) / compareAvg) * 100;
                  const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : undefined;
                  return (
                    <Typography variant="caption" style={{ color, fontWeight: 600 }}>
                      <br />{diff > 0 ? "+" : ""}{diff.toFixed(1)}%
                    </Typography>
                  );
                })()}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      filteredRows.reduce(
                        (sum, row) =>
                          sum + Number(row.critDamage.split(" ")[0]),
                        0
                      ) / filteredRows.length
                    ).toFixed(1)
                  : "-"}
                {/* 比較時: 会心ダメ平均差分 */}
                {compareRows && filteredRows.length > 0 && (() => {
                  const avg = filteredRows.reduce((sum, row) => sum + Number(row.critDamage.split(" ")[0]), 0) / filteredRows.length;
                  const compareAvgRows = compareRows.filter(row => selectedStates.includes(row.state));
                  const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.critDamage.split(" ")[0]), 0) / compareAvgRows.length : 0;
                  if (!compareAvg) return null;
                  const diff = ((avg - compareAvg) / compareAvg) * 100;
                  const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : undefined;
                  return (
                    <Typography variant="caption" style={{ color, fontWeight: 600 }}>
                      <br />{diff > 0 ? "+" : ""}{diff.toFixed(1)}%
                    </Typography>
                  );
                })()}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      (filteredRows.reduce(
                        (sum, row) => sum + (row.critRate !== undefined ? row.critRate : 0),
                        0
                      ) /
                        filteredRows.length) *
                      100
                    ).toFixed(0) + "%"
                  : "-"}
                {/* 比較時: 会心率平均差分（実数値） */}
                {compareRows && filteredRows.length > 0 && (() => {
                  const avg = filteredRows.reduce((sum, row) => sum + (row.critRate ?? 0), 0) / filteredRows.length;
                  const compareAvgRows = compareRows.filter(row => selectedStates.includes(row.state));
                  const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + (row.critRate ?? 0), 0) / compareAvgRows.length : 0;
                  const diff = Math.round((avg - compareAvg) * 100);
                  if (diff === 0) return null;
                  const color = diff > 0 ? "#388e3c" : "#d32f2f";
                  return (
                    <Typography variant="caption" style={{ color, fontWeight: 600 }}>
                      <br />{diff > 0 ? "+" : ""}{diff}
                    </Typography>
                  );
                })()}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      filteredRows.reduce(
                        (sum, row) => sum + Number(row.expected.split(" ")[0]),
                        0
                      ) / filteredRows.length
                    ).toFixed(1)
                  : "-"}
                {/* 比較時: 期待値平均差分 */}
                {compareRows && filteredRows.length > 0 && (() => {
                  const avg = filteredRows.reduce((sum, row) => sum + Number(row.expected.split(" ")[0]), 0) / filteredRows.length;
                  const compareAvgRows = compareRows.filter(row => selectedStates.includes(row.state));
                  const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.expected.split(" ")[0]), 0) / compareAvgRows.length : 0;
                  if (!compareAvg) return null;
                  const diff = ((avg - compareAvg) / compareAvg) * 100;
                  const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : undefined;
                  return (
                    <Typography variant="caption" style={{ color, fontWeight: 600 }}>
                      <br />{diff > 0 ? "+" : ""}{diff.toFixed(1)}%
                    </Typography>
                  );
                })()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* 計算に使われたパラメータ値のテーブルを追加（縦長形式） */}
      {/* パラメータ合計テーブルはSelectedParamsSummaryに移行のため削除 */}
      {/* 比較ヒートマップ（テーブル下部に移動、フィルタ適用） */}
      {compareRows && (
        <DamageHeatmap
          currentRows={filteredRows}
          compareRows={compareRows.filter((row) => selectedStates.includes(row.state))}
          valueType="expected"
        />
      )}
    </TableContainer>
  );
};

export default DamageTable;
