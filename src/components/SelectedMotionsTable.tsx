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
} from "@mui/material";

export interface SelectedMotion {
  name: string;
  motionValue: number;
  elementModifier?: number;
  hits?: number;
}

interface SelectedMotionsTableProps {
  motions: SelectedMotion[];
}

const SelectedMotionsTable: React.FC<SelectedMotionsTableProps> = ({ motions }) => {
  if (!motions.length) return null;
  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 0 }}>
      <Typography variant="subtitle2" sx={{ p: 1 }}>
        選択中モーション一覧
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>モーション名</TableCell>
            <TableCell>モーション値</TableCell>
            <TableCell>属性補正</TableCell>
            <TableCell>ヒット数</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {motions.map((motion, idx) => (
            <TableRow key={motion.name + idx}>
              <TableCell>{motion.name}</TableCell>
              <TableCell>{motion.motionValue}</TableCell>
              <TableCell>{motion.elementModifier !== undefined ? motion.elementModifier : "-"}</TableCell>
              <TableCell>{motion.hits !== undefined ? motion.hits : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedMotionsTable;
