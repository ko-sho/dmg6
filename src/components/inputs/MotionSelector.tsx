import React from 'react';
import type { Motion } from '../models/Motion';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface MotionSelectorProps {
  availableMotions: { key: string; label: string; motionData: Motion }[];
  selectedMotions: Motion[];
  setSelectedMotions: React.Dispatch<React.SetStateAction<Motion[]>>;
}

const MotionSelector: React.FC<MotionSelectorProps> = ({ availableMotions, selectedMotions, setSelectedMotions }) => {
  const handleToggle = (motion: Motion) => {
    const exists = selectedMotions.some((m) => m.name === motion.name);
    if (exists) {
      setSelectedMotions(selectedMotions.filter((m) => m.name !== motion.name));
    } else {
      setSelectedMotions([...selectedMotions, motion]);
    }
  };

  return (
    <List>
      {availableMotions.map((motion) => (
        <ListItem key={motion.key} onClick={() => handleToggle(motion.motionData)} disablePadding>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedMotions.some((m) => m.name === motion.motionData.name)}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `motion-checkbox-${motion.key}` }}
            />
          </ListItemIcon>
          <ListItemText id={`motion-checkbox-${motion.key}`} primary={motion.label} />
        </ListItem>
      ))}
    </List>
  );
};

export default MotionSelector;
