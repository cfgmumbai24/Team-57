import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useAuthContext } from "../src/hooks/useAuthContext";

// Pages
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Volunteer from './pages/Volunteer/Volunteer';

const App = () => {
  const { user } = useAuthContext();
  const volunteerName = "John Doe"; // Replace with logic to get volunteer's name dynamically
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/volunteer'
          element={<Volunteer volunteerName={volunteerName} />} // Pass volunteerName as prop
        />
      </Routes>
    </Router>
  );
}

export default App;
