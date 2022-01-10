import * as React from 'react';
import Box from '@mui/material/Box';
import { Pie } from 'react-chartjs-2';

export function PieGraph() {
  // react chartJS-2 was used
  
  const data = {
    labels: ['Direct', 'Social', 'Referal'],
    datasets: [
      {
        label: '# of Votes',
        data: [55, 30, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

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
      <h3>Revenue Sources</h3>
      <Pie data={data} />

    </Box>

  );
}
