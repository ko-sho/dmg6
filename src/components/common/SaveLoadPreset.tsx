import React, { useState } from 'react';
import { Button, TextField, Stack, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export type PresetData = {
  // 必要に応じて型を拡張
  [key: string]: unknown;
};

interface SaveLoadPresetProps {
  currentPreset: PresetData; // 保存したい条件オブジェクト
  onLoad: (preset: PresetData) => void;
}

const STORAGE_KEY = 'mhw-dmg-presets';

const SaveLoadPreset: React.FC<SaveLoadPresetProps> = ({ currentPreset, onLoad }) => {
  const [presetName, setPresetName] = useState('');
  const [presets, setPresets] = useState<{ name: string; data: PresetData }[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const handleSave = () => {
    if (!presetName.trim()) return;
    const newPresets = [...presets.filter(p => p.name !== presetName.trim()), { name: presetName.trim(), data: currentPreset }];
    setPresets(newPresets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPresets));
    setPresetName('');
  };

  const handleLoad = (data: PresetData) => {
    onLoad(data);
  };

  const handleDelete = (name: string) => {
    const newPresets = presets.filter(p => p.name !== name);
    setPresets(newPresets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPresets));
  };

  return (
    <Stack spacing={2} sx={{ my: 2 }}>
      <Typography variant="h6">プリセット保存/読込</Typography>
      <Stack direction="row" spacing={1}>
        <TextField
          label="プリセット名"
          value={presetName}
          onChange={e => setPresetName(e.target.value)}
          size="small"
          inputProps={{ maxLength: 32 }}
        />
        <Button variant="contained" onClick={handleSave} disabled={!presetName.trim()}>
          保存
        </Button>
      </Stack>
      <List dense>
        {presets.map(preset => (
          <ListItem key={preset.name} secondaryAction={
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" size="small" onClick={() => handleLoad(preset.data)}>
                呼び出し
              </Button>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(preset.name)} size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Stack>
          }>
            <ListItemText
              primary={preset.name}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SaveLoadPreset;
