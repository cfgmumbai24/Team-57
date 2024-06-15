import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Registering the ArcElement
);

const BarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
          text: 'Value',
        },
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the chart instance before unmounting
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Revenue Chart</h2>
      <Bar ref={chartRef} data={data} options={options} />
      <ul className="chart-legend">
        <li>
          <span className="chart-legend-label">Revenue</span>
          <span
            className="chart-legend-color"
            style={{ backgroundColor: 'rgba(255, 99, 132, 0.2)' }}
          ></span>
        </li>
      </ul>
    </div>
  );
};

export default BarChart;
