import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import type { DamageTableRow } from "./DamageTable";

interface DamageHeatmapProps {
  currentRows: DamageTableRow[];
  compareRows: DamageTableRow[];
  valueType?: "expected" | "damage" | "critDamage";
}

const getColor = (value: number | null) => {
  if (value === null) return "#eee";
  if (value > 30) return "#388e3c";
  if (value > 10) return "#7bc67e";
  if (value > 0) return "#c8e6c9";
  if (value < -30) return "#d32f2f";
  if (value < -10) return "#f88379";
  if (value < 0) return "#ffcdd2";
  return "#fff";
};

const stateLabels: Record<string, string> = {
  normal: "通常",
  wounded: "傷口",
  exposed: "弱点露出",
};

const DamageHeatmap: React.FC<DamageHeatmapProps> = ({
  currentRows,
  compareRows,
  valueType = "expected",
}) => {
  // 部位・状態一覧
  const parts = Array.from(new Set(currentRows.map((r) => r.part)));
  const states = Array.from(new Set(currentRows.map((r) => r.state)));

  // 2次元配列で差分データを作成
  const data = parts.map((part) =>
    states.map((state) => {
      const cur = currentRows.find((r) => r.part === part && r.state === state);
      const cmp = compareRows.find((r) => r.part === part && r.state === state);
      if (!cur || !cmp) return null;
      const getVal = (row: DamageTableRow) => {
        if (valueType === "expected") return Number(row.expected.split(" ")[0]);
        if (valueType === "damage") return Number(row.damage.split(" ")[0]);
        if (valueType === "critDamage")
          return Number(row.critDamage.split(" ")[0]);
        return 0;
      };
      const base = getVal(cmp);
      if (base === 0) return null;
      const diff = ((getVal(cur) - base) / base) * 100;
      return diff;
    })
  );

  return (
    <>
      <Typography variant="subtitle2" sx={{ mb: 0.5, mt: 2 }}>
        部位×状態ごとの差分ヒートマップ（
        {valueType === "expected"
          ? "期待値"
          : valueType === "damage"
          ? "通常"
          : "会心"}
        ）
      </Typography>
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table size="small" sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>部位\状態</TableCell>
              {states.map((state) => (
                <TableCell key={state} align="center" sx={{ fontWeight: 700 }}>
                  {stateLabels[state] || state}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {parts.map((part, i) => (
              <TableRow key={part}>
                <TableCell sx={{ fontWeight: 700 }}>{part}</TableCell>
                {states.map((state, j) => {
                  const value = data[i][j];
                  return (
                    <TableCell
                      key={state}
                      align="center"
                      sx={{
                        background: getColor(value),
                        color:
                          value !== null && Math.abs(value) > 20
                            ? "#fff"
                            : "#222",
                        fontWeight: 600,
                        border: "1px solid #ddd",
                        minWidth: 48,
                        minHeight: 32,
                        fontSize: 14,
                        p: 0.5,
                      }}
                    >
                      {value === null
                        ? "-"
                        : `${value > 0 ? "+" : ""}${value.toFixed(1)}%`}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DamageHeatmap;
