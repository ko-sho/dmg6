import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface CalculateButtonProps {
  onClick: () => void;
  errorMessage: string | null;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick, errorMessage }) => (
  <Box textAlign="center">
    <Button variant="contained" color="primary" onClick={onClick}>
      Calculate Damage
    </Button>
    {errorMessage && (
      <Box sx={{ color: "error.main", fontWeight: "bold", mt: 1 }}>
        <Typography>{errorMessage}</Typography>
      </Box>
    )}
  </Box>
);

export default CalculateButton;
