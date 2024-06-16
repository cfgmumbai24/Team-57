// src/components/PieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './PieChart.css'; // Import the CSS file

ChartJS.register(
  Title,
  Tooltip,
  Legend
);

const PieChart = () => {
  const data = {
    labels: ['Season', 'Disease', 'Pregnancy', 'Others'],
    datasets: [
      {
        label: 'Mortality Rate',
        data: [30, 20, 10, 40],
        backgroundColor: [
          '#FF6384', // Season
          '#36A2EB', // Disease
          '#FFCE56', // Pregnancy
          '#FF9F40', // Others
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to adjust its size
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Mortality Rate of Goats</h2>
      <div className="pie-chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
