import React from 'react';
import { Grid, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import LineChart from '../LineChart';
import BarChart from '../BarChart/BarChart';
import StatCard from '../StatCard';
import PieChart from '../PieChart';
import ProgressCircle from '../ProgressCircle';
import './Dashboard.css';

const Dashboard = () => {
  const statData = [
    { title: 'Volunteers', value: '300', description: 'Total number of volunteers' },
    { title: 'Veterinarians', value: '50', description: 'Total number of veterinarians' },
    { title: 'Projects', value: '25', description: 'Ongoing projects' },
    { title: 'Communities Served', value: '100', description: 'Total communities served' },
  ];

  return (
    <div className="dashboard">
      <AppBar position="static" className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h6">Eagl Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} className="dashboard-grid">
        {statData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard title={stat.title} value={stat.value} description={stat.description} />
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <PieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <ProgressCircle />
          </Paper>
        </Grid>
      </Grid>
      <footer className="footer">
        <Typography variant="body2" align="center">
          © 2024 All rights reserved
        </Typography>
      </footer>
    </div>
  );
};

export default Dashboard;
