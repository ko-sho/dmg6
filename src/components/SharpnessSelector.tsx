import React from 'react';
import { SHARPNESS_LEVELS, type SharpnessColor } from '../models/Sharpness';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

interface SharpnessSelectorProps {
  value: SharpnessColor;
  onChange: (color: SharpnessColor) => void;
}

const colorLabels: Record<SharpnessColor, string> = {
  red: '赤',
  orange: '橙',
  yellow: '黄',
  green: '緑',
  blue: '青',
  white: '白',
};

const SharpnessSelector: React.FC<SharpnessSelectorProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>切れ味</Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(_, newValue) => {
          if (newValue) onChange(newValue);
        }}
        size="small"
        fullWidth
      >
        {SHARPNESS_LEVELS.map(level => (
          <ToggleButton key={level.color} value={level.color} sx={{ flex: 1 }}>
            {colorLabels[level.color]}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default SharpnessSelector;
