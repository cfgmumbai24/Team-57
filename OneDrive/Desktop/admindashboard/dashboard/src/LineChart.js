import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './LineChart.css'; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Keeping months as labels
    datasets: [
      {
        label: 'Number of Families Benefited',
        data: [150, 155, 169, 172, 190, 200], // Example data showing an increasing trend
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Families',
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const context = chart.getContext('2d');
      const myChart = new ChartJS(context, {
        type: 'line',
        data: data,
        options: options
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data, options]);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Number of Families Benefited Over Months</h2>
      <canvas ref={chartRef} className="chart-canvas" />
    </div>
  );
};

export default LineChart;
