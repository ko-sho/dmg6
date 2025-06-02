import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import SaveLoadPreset from "./SaveLoadPreset";
import type { PresetData } from "./SaveLoadPreset";
import type { WeaponParameters } from "../models/Weapon";
import type { SkillParameters } from "../models/Skill";
import type { Motion } from "../models/Motion";
import type { Monster } from "../models/Monster";
import type { SharpnessColor } from "../models/Sharpness";

interface PresetDialogProps {
  open: boolean;
  onClose: () => void;
  currentPreset: {
    weaponInfo: WeaponParameters;
    selectedSkills: { key: string; level: number; skillData: SkillParameters[] }[];
    selectedMotions: Motion[];
    selectedMonster: Monster | null;
    sharpness: SharpnessColor;
  };
  onLoad: (preset: PresetData) => void;
}

const PresetDialog: React.FC<PresetDialogProps> = ({ open, onClose, currentPreset, onLoad }) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>プリセット保存/読込</DialogTitle>
    <DialogContent>
      <SaveLoadPreset
        currentPreset={currentPreset}
        onLoad={(preset) => {
          onLoad(preset);
          onClose();
        }}
      />
    </DialogContent>
  </Dialog>
);

export default PresetDialog;
