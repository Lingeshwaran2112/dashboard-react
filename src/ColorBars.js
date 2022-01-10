import * as React from 'react';
import Box from '@mui/material/Box';

export function ColorBars() {
  
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
      <div>
        <div className="percent">
          <span>Server Migration</span>
          <span>20%</span>
        </div>
        <div className="progress">
          <div className="bar bar1"></div>
        </div>
        <div className="percent">
          <span>Sales Tracking</span>
          <span>40%</span>
        </div>
        <div className="progress">
          <div className="bar bar2"></div>
        </div>
        <div className="percent">
          <span>Customer Database</span>
          <span>60%</span>
        </div>
        <div className="progress">
          <div className="bar bar3"></div>
        </div>
        <div className="percent">
          <span>Payout Details</span>
          <span>80%</span>
        </div>

        <div className="progress">
          <div className="bar bar4"></div>
        </div>
        <div className="percent">
          <span>Account Setup</span>
          <span>Completed!</span>
        </div>

        <div className="progress">
          <div className="bar bar5"></div>
        </div>
      </div>

    </Box>

  );
}
