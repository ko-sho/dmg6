import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import SaveLoadPreset from "./SaveLoadPreset";
import type { PresetData } from "./SaveLoadPreset";

interface PresetDialogProps {
  open: boolean;
  onClose: () => void;
  currentPreset: PresetData;
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
