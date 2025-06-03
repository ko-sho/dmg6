import React from 'react';
import { ELEMENT_TYPES } from '../../models/Weapon';
import type { Weapon, ElementType, WeaponType, WeaponParameters } from '../../models/Weapon';
import type { SharpnessColor } from '../../models/Sharpness';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import SharpnessSelector from './SharpnessSelector';
import type { TachiSpiritGauge } from '../../models/Weapon';

// --- 全武器種対応: WEAPON_TYPESを全武器種・ラベルで拡張 ---
const WEAPON_TYPES: { key: WeaponType; label: string }[] = [
  { key: 'greatsword', label: '大剣' },
  { key: 'sword', label: '片手剣' },
  { key: 'dualblades', label: '双剣' },
  { key: 'longsword', label: '太刀' },
  { key: 'hammer', label: 'ハンマー' },
  { key: 'huntinghorn', label: '狩猟笛' },
  { key: 'lance', label: 'ランス' },
  { key: 'gunlance', label: 'ガンランス' },
  { key: 'switchaxe', label: 'スラッシュアックス' },
  { key: 'chargeblade', label: 'チャージアックス' },
  { key: 'insectglaive', label: '操虫棍' },
  { key: 'bow', label: '弓' },
  { key: 'heavybowgun', label: 'ヘビィボウガン' },
  { key: 'lightbowgun', label: 'ライトボウガン' },
];

interface WeaponInputProps {
  weapon: WeaponParameters;
  setWeapon: (w: WeaponParameters) => void;
  sharpnessColor: SharpnessColor;
  setSharpnessColor: (c: SharpnessColor) => void;
}

const WeaponInput: React.FC<WeaponInputProps> = ({ weapon, setWeapon, sharpnessColor, setSharpnessColor }) => {
  const handleInputChange = (field: keyof Weapon, value: string | number | ElementType | WeaponType) => {
    setWeapon({ ...weapon, [field]: value });
  };

  // 練気ゲージ状態（太刀のみ）
  const handleSpiritGaugeChange = (e: React.ChangeEvent<{ value: unknown }> | SelectChangeEvent) => {
    setWeapon({ ...weapon, tachiSpiritGauge: e.target.value as TachiSpiritGauge });
  };

  return (
    <Box component="section" sx={{ mb: 2 }}>
      <Stack direction="column" spacing={2}>
        {/* 武器種セレクト追加 */}
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="weapon-type-label">武器種</InputLabel>
          <Select
            labelId="weapon-type-label"
            value={weapon.weaponType}
            label="武器種"
            onChange={(e) => handleInputChange('weaponType', e.target.value as WeaponType)}
            sx={{ textAlign: 'left', '& .MuiSelect-select': { textAlign: 'left' } }}
          >
            {WEAPON_TYPES.map((type) => (
              <MenuItem key={type.key} value={type.key}>{type.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* ここまで武器種セレクト */}
        <SharpnessSelector value={sharpnessColor ?? 'white'} onChange={color => setSharpnessColor?.(color)} />
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
          onChange={(e) => {
            // 入力値が空の場合は0にする
            const val = e.target.value === '' ? 0 : Number(e.target.value);
            handleInputChange('baseElementValue', Math.max(0, val));
          }}
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
        {/* 太刀選択時のみ練気ゲージUIを表示 */}
        {weapon.weaponType === 'longsword' && (
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="spirit-gauge-label">練気ゲージ段階</InputLabel>
            <Select
              labelId="spirit-gauge-label"
              value={weapon.tachiSpiritGauge ?? 'none'}
              label="練気ゲージ段階"
              onChange={handleSpiritGaugeChange}
              sx={{ textAlign: 'left', '& .MuiSelect-select': { textAlign: 'left' } }}
            >
              <MenuItem value="none">無色</MenuItem>
              <MenuItem value="white">白色</MenuItem>
              <MenuItem value="yellow">黄色</MenuItem>
              <MenuItem value="red">赤色</MenuItem>
            </Select>
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};

export default WeaponInput;
