import React from "react";
import { Box, FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";

export type ItemBuffKey = "chikara_gofu" | "kairiki_tane" | "kijin_funjin" | "kijin_yaku" | "kijin_yaku_g" | "kairiki_maruyaku";

export interface ItemBuff {
  key: ItemBuffKey;
  label: string;
  attack: number;
}

export const ITEM_BUFFS: ItemBuff[] = [
  { key: "chikara_gofu", label: "力の護符", attack: 6 },
  { key: "kairiki_tane", label: "怪力の種", attack: 10 },
  { key: "kijin_funjin", label: "鬼人の粉塵", attack: 10 },
  { key: "kijin_yaku", label: "鬼人薬", attack: 5 },
  { key: "kijin_yaku_g", label: "鬼人薬G", attack: 7 },
  { key: "kairiki_maruyaku", label: "怪力の丸薬", attack: 25 },
];

interface ItemBuffSectionProps {
  selectedBuffs: ItemBuffKey[];
  setSelectedBuffs: (buffs: ItemBuffKey[]) => void;
}

const ItemBuffSection: React.FC<ItemBuffSectionProps> = ({ selectedBuffs, setSelectedBuffs }) => {
  const handleChange = (key: ItemBuffKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedBuffs([...selectedBuffs, key]);
    } else {
      setSelectedBuffs(selectedBuffs.filter((k) => k !== key));
    }
  };
  return (
    <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }} color="text.primary">アイテムバフ</Typography>
      <FormGroup row>
        {ITEM_BUFFS.map((buff) => (
          <FormControlLabel
            key={buff.key}
            control={<Checkbox checked={selectedBuffs.includes(buff.key)} onChange={handleChange(buff.key)} />}
            label={`${buff.label}（+${buff.attack}）`}
            sx={{ mr: 2, mb: 1, color: "text.primary" }}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default ItemBuffSection;
