// src/components/ProgressCircle.js

import React, { useState } from 'react';
import { CircularProgress, Box, Typography, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import './ProgressCircle.css';

const ProgressCircle = () => {
  const [village, setVillage] = useState('V1');
  const villageData = {
    V1: 60,
    V2: 70,
    V3: 50,
    V4: 80,
    V5: 40,
    V6: 90,
    V7: 30,
    V8: 20,
    V9: 10,
    V10: 75,
  };

  const handleChange = (event) => {
    setVillage(event.target.value);
  };

  return (
    <div className="progress-circle-container">
      <Typography variant="h6" className="progress-circle-heading">Number of goats vaccinated in a village for 2024.</Typography>
      <FormControl variant="outlined" className="village-select">
        <InputLabel id="village-select-label">Village</InputLabel>
        <Select
          labelId="village-select-label"
          id="village-select"
          value={village}
          onChange={handleChange}
          label="Village"
        >
          {Object.keys(villageData).map((villageName) => (
            <MenuItem key={villageName} value={villageName}>
              {villageName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box position="relative" display="inline-flex" className="progress-circle">
        <CircularProgress variant="determinate" value={villageData[village]} size={200} thickness={4} className="progress-circle-foreground" />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" component="div" color="textSecondary">
            {`${villageData[village]}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProgressCircle;
