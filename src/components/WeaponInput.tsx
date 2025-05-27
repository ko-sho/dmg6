import React from 'react';
import { ELEMENT_TYPES } from '../models/Weapon';
import type { Weapon, ElementType } from '../models/Weapon';
import type { SharpnessColor } from '../models/Sharpness';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface WeaponInputProps {
  weapon: Weapon;
  setWeapon: React.Dispatch<React.SetStateAction<Weapon>>;
  sharpnessColor?: SharpnessColor;
  setSharpnessColor?: (color: SharpnessColor) => void;
}

const WeaponInput: React.FC<WeaponInputProps> = ({ weapon, setWeapon, sharpnessColor }) => {
  const handleInputChange = (field: keyof Weapon, value: string | number | ElementType) => {
    setWeapon({ ...weapon, [field]: value });
  };

  return (
    <Box component="section" sx={{ mb: 2 }}>
      <Stack direction="column" spacing={2}>
        {sharpnessColor && (
          <Box sx={{ mb: 1 }}>
            <strong>選択中の切れ味: {sharpnessColor}</strong>
          </Box>
        )}
        <TextField
          type="number"
          label="武器倍率"
          value={weapon.weaponMultiplier}
          onChange={(e) => handleInputChange('weaponMultiplier', Number(e.target.value))}
          InputProps={{ inputProps: { min: 0 } }}
          sx={{ minWidth: 120 }}
        />
        <TextField
          type="number"
          label="属性値"
          value={weapon.baseElementValue}
          onChange={(e) => handleInputChange('baseElementValue', Number(e.target.value))}
          InputProps={{ inputProps: { min: 0 } }}
          sx={{ minWidth: 120 }}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="element-type-label">属性</InputLabel>
          <Select
            labelId="element-type-label"
            value={weapon.elementType?.key || ''}
            label="属性"
            onChange={(e) =>
              handleInputChange(
                'elementType',
                ELEMENT_TYPES.find((type) => type.key === e.target.value) as ElementType
              )
            }
            sx={{ textAlign: 'left', '& .MuiSelect-select': { textAlign: 'left' } }}
          >
            <MenuItem value=""><em>属性を選択</em></MenuItem>
            {ELEMENT_TYPES.map((type) => (
              <MenuItem key={type.key} value={type.key}>{type.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type="number"
          label="会心率"
          value={weapon.criticalRate}
          onChange={(e) => handleInputChange('criticalRate', Number(e.target.value))}
          InputProps={{ inputProps: { min: -100, max: 100 } }}
          sx={{ minWidth: 120 }}
        />
      </Stack>
    </Box>
  );
};

export default WeaponInput;
