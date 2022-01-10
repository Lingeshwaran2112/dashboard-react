import * as React from 'react';
import Box from '@mui/material/Box';
import { Line } from 'react-chartjs-2';

export function LineGraph() {
  // react chartJS-2 was used
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Earnings',
        // units on y-axis
        data: [0, 10000, 5000, 15000, 10000, 20000, 16000, 25000, 20000, 30000, 25000, 40000],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
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
      <h3>Earnings Overview</h3>
      <Line data={data} options={options} />

    </Box>
  );
}
