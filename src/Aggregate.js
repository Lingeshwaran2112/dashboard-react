import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function Aggregate() {
  // Material UI Box used as container for the Colors component
  // Grid for responsiveness
  
  return (
    <div className="aggregate">
      <h1>Dashboard</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                alignItems: 'center'
              }}
              className="block"
            >
              <Box
                sx={{
                  display: 'flex',
                  py: 1,
                  m: 1,
                  bgcolor: '#EBEBEB',
                  flexDirection: 'column',
                }}

              >
                <div className="agg-1">EARNINGS (MONTHLY)</div>
                <div className="agg-2">$40,000</div>

              </Box>
              <div className="aggregate-box-icon"><i className="fas fa-calendar fa-2x"></i></div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                py: 1,
                m: 1,
                bgcolor: 'background.paper',
                alignItems: 'center'
              }}
              className="block"
            >
              <Box
                sx={{
                  display: 'flex',
                  p: 1,
                  m: 1,
                  bgcolor: '#EBEBEB',
                  flexDirection: 'column',
                }}
              >
                <div className="agg-1">EARNINGS (ANNUAL)</div>
                <div className="agg-2">$215,000</div>

              </Box>
              <div className="aggregate-box-icon"><i className="fas fa-dollar-sign fa-2x"></i></div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                py: 1,
                m: 1,
                bgcolor: 'background.paper',
                alignItems: 'center'
              }}
              className="block"
            >
              <Box
                sx={{
                  display: 'flex',
                  py: 1,
                  pl: 1,
                  m: 1,
                  bgcolor: '#EBEBEB',
                  flexDirection: 'column',
                }}
              >
                <div className="agg-1">TASKS</div>
                <div className="agg-2 x">
                  <div className="fifty">50%</div>
                  <div className="agg-progress">
                    <div className="bar barx"></div>
                  </div>
                </div>


              </Box>
              <div className="aggregate-box-icon"><i className="fas fa-clipboard-list fa-2x"></i></div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                alignItems: 'center'
              }}
              className="block"
            >
              <Box
                sx={{
                  display: 'flex',
                  p: 1,
                  m: 1,
                  bgcolor: '#EBEBEB',
                  flexDirection: 'column',
                }}
              >
                <div className="agg-1">PENDING REQUESTS</div>
                <div className="agg-2">18</div>

              </Box>
              <div className="aggregate-box-icon"><i className="fas fa-comments fa-2x"></i></div>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}
