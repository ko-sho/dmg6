import { Box, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";

interface HeaderProps {
  onOpenPresetDialog: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPresetDialog }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2,
    }}
  >
    <h1 style={{ textAlign: "center", margin: 0, flex: 1, fontSize: "2.5rem" }}>
      MH Wilds Damage Calculator<br />
      <span style={{ fontSize: "1rem", color: "#888" }}>
        - モンスターハンターワイルズ ダメージ計算ツール -
      </span>
    </h1>
    <IconButton
      aria-label="プリセット保存/読込"
      onClick={onOpenPresetDialog}
      size="large"
      sx={{
        color: "text.primary",
        bgcolor: "background.paper",
        my: 2,
        "&:hover": { bgcolor: "action.hover" },
      }}
    >
      <SaveIcon />
    </IconButton>
  </Box>
);

export default Header;
