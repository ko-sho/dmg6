import React from "react";
import type { Monster } from "../models/Monster";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface MonsterSelectorProps {
  availableMonsters: Monster[];
  selectedMonster: Monster | null;
  setSelectedMonster: React.Dispatch<React.SetStateAction<Monster | null>>;
}

const MonsterSelector: React.FC<MonsterSelectorProps> = ({
  availableMonsters,
  selectedMonster,
  setSelectedMonster,
}) => {
  const handleMonsterChange = (monsterName: string) => {
    const monster =
      availableMonsters.find((m) => m.name === monsterName) || null;
    setSelectedMonster(monster);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="monster-select-label">モンスター</InputLabel>
      <Select
        labelId="monster-select-label"
        value={selectedMonster?.name || ""}
        label="モンスター"
        onChange={(e) => handleMonsterChange(e.target.value as string)}
      >
        <MenuItem value="">
          <em>モンスターを選択</em>
        </MenuItem>
        {availableMonsters.map((monster) => (
          <MenuItem key={monster.name} value={monster.name}>
            {monster.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MonsterSelector;
