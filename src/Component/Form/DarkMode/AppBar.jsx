import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ButtonAppBar({check,change}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rohit Kulkarni
            contact: rohit22codes@gmail.com
          </Typography>
          <Switch {...label} 
          onChange={change}
          checked={check} />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}