import React from "react";
import {
  Box,
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

const DamageTable: React.FC<DamageTableProps> = ({ rows }) => {
  const [selectedStates, setSelectedStates] = React.useState<string[]>(
    STATE_OPTIONS.map((opt) => opt.value)
  );

  // フィルタリング
  const filteredRows = rows.filter((row) => selectedStates.includes(row.state));

  // 部位ごとにrowSpanを計算
  const partRowSpans: Record<string, number> = {};
  filteredRows.forEach((row) => {
    partRowSpans[row.part] = (partRowSpans[row.part] || 0) + 1;
  });
  const renderedParts: Record<string, boolean> = {};

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        ダメージ表
      </Typography>
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
                (val) =>
                  STATE_OPTIONS.find((opt) => opt.value === val)?.label
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
                    {Number(row.damage.split(" ")[0]).toFixed(2)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(2)}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {Number(row.critDamage.split(" ")[0]).toFixed(2)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(2)}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.critRate !== undefined
                      ? `${Math.round(row.critRate * 100)}%`
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {Number(row.expected.split(" ")[0]).toFixed(2)}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental.toFixed(2)}
                        </Typography>
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
                    ).toFixed(2)
                  : "-"}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      filteredRows.reduce(
                        (sum, row) =>
                          sum + Number(row.critDamage.split(" ")[0]),
                        0
                      ) / filteredRows.length
                    ).toFixed(2)
                  : "-"}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      (filteredRows.reduce(
                        (sum, row) =>
                          sum + (row.critRate !== undefined ? row.critRate : 0),
                        0
                      ) /
                        filteredRows.length) *
                      100
                    ).toFixed(0) + "%"
                  : "-"}
              </TableCell>
              <TableCell align="left">
                {filteredRows.length > 0
                  ? (
                      filteredRows.reduce(
                        (sum, row) => sum + Number(row.expected.split(" ")[0]),
                        0
                      ) / filteredRows.length
                    ).toFixed(2)
                  : "-"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* 計算に使われたパラメータ値のテーブルを追加（縦長形式） */}
      {/* パラメータ合計テーブルはSelectedParamsSummaryに移行のため削除 */}
    </Box>
  );
};

export default DamageTable;
