import React from "react";
import { Box, Typography } from "@mui/material";
import WeaponInput from "./WeaponInput";
import type { WeaponParameters } from "../models/Weapon";
import type { SharpnessColor } from "../models/Sharpness";

interface WeaponSectionProps {
  weapon: WeaponParameters;
  setWeapon: (w: WeaponParameters) => void;
  sharpnessColor: SharpnessColor;
  setSharpnessColor: (c: SharpnessColor) => void;
}

const WeaponSection: React.FC<WeaponSectionProps> = ({
  weapon,
  setWeapon,
  sharpnessColor,
  setSharpnessColor,
}) => (
  <Box
    sx={{
      px: { xs: 0.5, sm: 3 },
      py: 2,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1,
    }}
  >
    <Typography variant="h6" sx={{ mb: 1 }} color="text.primary">
      武器
    </Typography>
    <WeaponInput
      weapon={weapon}
      setWeapon={setWeapon}
      sharpnessColor={sharpnessColor}
      setSharpnessColor={setSharpnessColor}
    />
  </Box>
);

export default WeaponSection;
