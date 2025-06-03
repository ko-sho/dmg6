import React from 'react';
import type { FullDataMotion } from '../../models/FullDataMotion';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface MotionSelectorProps {
  availableMotions: FullDataMotion[];
  selectedMotions: FullDataMotion[];
  setSelectedMotions: React.Dispatch<React.SetStateAction<FullDataMotion[]>>;
}

const MotionSelector: React.FC<MotionSelectorProps> = ({ availableMotions, selectedMotions, setSelectedMotions }) => {
  const handleToggle = (motion: FullDataMotion) => {
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
        <ListItem key={motion.key} onClick={() => handleToggle(motion)} disablePadding>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={selectedMotions.some((m) => m.name === motion.name)}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `motion-checkbox-${motion.name}` }}
            />
          </ListItemIcon>
          <ListItemText primary={motion.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default MotionSelector;
