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
import type { FullDataMotion } from '../../models/FullDataMotion';

interface SelectedMotionsTableProps {
  motions: FullDataMotion[];
  tachiSpiritGauge?: 'none' | 'white' | 'yellow' | 'red'; // 追加
}

const getDisplayMotionValue = (motion: FullDataMotion, tachiSpiritGauge?: string) => {
  // 太刀で練気ゲージ赤の時のみGeneralValue2を返す
  if (tachiSpiritGauge === 'red' && typeof motion.GeneralValue2 === 'number' && motion.GeneralValue2 > 0) {
    return motion.GeneralValue2;
  }
  // それ以外はAttack
  return motion.Attack;
};

const SelectedMotionsTable: React.FC<SelectedMotionsTableProps> = ({ motions, tachiSpiritGauge }) => {
  return (
    <>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {motions.map((motion) => (
              <TableRow key={motion.key}>
                <TableCell>{motion.name}</TableCell>
                <TableCell>{getDisplayMotionValue(motion, tachiSpiritGauge)}</TableCell>
                <TableCell>{motion.StatusAttrRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="caption" color="text.secondary" sx={{ m: 1, display: 'block',textAlign: 'left' }}>
          ※ マルチヒット非対応のため、複数ヒットするモーションは実際の値より低いダメージで算出されます。
        </Typography>
      </TableContainer>
    </>
  );
};

export default SelectedMotionsTable;
