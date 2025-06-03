import React from "react";
import type { Dispatch, SetStateAction } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MotionSelector from "./MotionSelector";
import type { FullDataMotion } from "../../models/FullDataMotion";

interface MotionSectionProps {
  availableMotions: FullDataMotion[];
  selectedMotions: FullDataMotion[];
  setSelectedMotions: Dispatch<SetStateAction<FullDataMotion[]>>;
}

const MotionSection: React.FC<MotionSectionProps> = ({
  availableMotions,
  selectedMotions,
  setSelectedMotions,
}) => (
  <Accordion
    defaultExpanded={false}
    sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h6" color="text.primary" sx={{ m: 0 }}>
        モーション
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <MotionSelector
        availableMotions={availableMotions}
        selectedMotions={selectedMotions}
        setSelectedMotions={setSelectedMotions}
      />
    </AccordionDetails>
  </Accordion>
);

export default MotionSection;
