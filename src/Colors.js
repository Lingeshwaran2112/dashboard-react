import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function Colors() {
  
  return (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        m: 1,
        bgcolor: 'background.paper',
        flexDirection: 'column',
      }}
      className="block"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box1">

            Primary
            <p>#4e73df</p>

          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box2">
            Success
            <p>#1cc88a</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box3">
            Info
            <p>#36b9cc</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box4">
            Warning
            <p>#f6c23e</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box5">
            Danger
            <p>#e74a3b</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box6">
            Secondary
            <p>#858796</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box7">
            Light
            <p>#f8f9fc</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} spacing={5} sx={{ px: 1.5, }}>
          <div className="color-box color-box8">
            Dark
            <p>#5a5c69</p>
          </div>
        </Grid>

      </Grid>
    </Box>
  );
}
