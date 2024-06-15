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

const App = () => {
  const { user } = useAuthContext();
  
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
      </Routes>
    </Router>
  );
}

export default App;
