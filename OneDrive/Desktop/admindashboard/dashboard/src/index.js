import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import NavigationBar from './NavigationBar';
import Dashboard from './Dashboard';
// import StatCard from './StatCard';
// import LineChart from './LineChart';
// import BarChart from './BarChart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavigationBar />
    <Dashboard />
    {/* <StatCard /> */}
    <App />
   {/* <LineChart />
   <BarChart />
   <StatCard /> */}
  </React.StrictMode>
);

