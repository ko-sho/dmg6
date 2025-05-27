import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

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

const DamageTable: React.FC<DamageTableProps> = ({ rows }) => {
  // 部位ごとにrowSpanを計算
  const partRowSpans: Record<string, number> = {};
  rows.forEach(row => {
    partRowSpans[row.part] = (partRowSpans[row.part] || 0) + 1;
  });
  const renderedParts: Record<string, boolean> = {};

  return (
    <Box sx={{ mt: 3, width: '100%', overflowX: 'auto' }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        ダメージ表
      </Typography>
      <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto', boxShadow: 0 }}>
        <Table size="small" sx={{ minWidth: { xs: 340, sm: 480 }, width: 'max-content' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>部位</TableCell>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>状態</TableCell>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>通常</TableCell>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>会心</TableCell>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>会心率</TableCell>
              <TableCell sx={{ px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } }}>期待値</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const showPart = !renderedParts[row.part];
              if (showPart) renderedParts[row.part] = true;
              return (
                <TableRow key={`${row.part}-${row.state}`}
                  sx={{
                    '& td': {
                      px: { xs: 0.5, sm: 1.5 },
                      py: { xs: 0.5, sm: 1 },
                      fontSize: { xs: '0.85rem', sm: '1rem' },
                      wordBreak: 'keep-all',
                    },
                  }}
                >
                  {showPart ? (
                    <TableCell rowSpan={partRowSpans[row.part]}>{row.part}</TableCell>
                  ) : null}
                  <TableCell>{row.state}</TableCell>
                  <TableCell>
                    {row.damage.split(' ')[0]}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.critDamage.split(' ')[0]}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.critRate !== undefined ? `${Math.round(row.critRate * 100)}%` : '-'}
                  </TableCell>
                  <TableCell>
                    {row.expected.split(' ')[0]}
                    {row.elemental !== 0 && (
                      <>
                        <br />
                        <Typography variant="caption" color="text.secondary">
                          {row.elemental}
                        </Typography>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* 計算に使われたパラメータ値のテーブルを追加（縦長形式） */}
      {/* パラメータ合計テーブルはSelectedParamsSummaryに移行のため削除 */}
    </Box>
  );
};

export default DamageTable;
