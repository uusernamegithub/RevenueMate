// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MerchentHome from './components/MerchentHome';
import Profile from './components/Profile';
import RecordExpenses from './components/RecordExpenses';
import ManageInventory from './components/ManageInventory';
import RecordTransactions from './components/RecordTransactions';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Mode state with localStorage
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light'; // Default to light mode
  });

  // Initialize userid from localStorage
  const [userid, setId] = useState(() => {
    return localStorage.getItem('userid') || 0; // Default to 0 if not set
  });

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode); // Save new mode in localStorage
      return newMode;
    });
  };

  // Update localStorage when isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  // Update localStorage when userid changes
  useEffect(() => {
    localStorage.setItem('userid', userid);
  }, [userid]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode} />} />
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              mode={mode}
              toggleMode={toggleMode}
              setId={setId} // Pass setId to Login
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup setIsAuthenticated={setIsAuthenticated} mode={mode} toggleMode={toggleMode} setId={setId} />}
        />
        <Route
          path="/merchent"
          element={<ProtectedRoute element={<MerchentHome mode={mode} toggleMode={toggleMode} id={userid} />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/merchent/transactions"
          element={<ProtectedRoute element={<RecordTransactions mode={mode} toggleMode={toggleMode} id={userid}/>} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/merchent/expenses"
          element={<ProtectedRoute element={<RecordExpenses mode={mode} toggleMode={toggleMode} id={userid}/>} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/merchent/inventory"
          element={<ProtectedRoute element={<ManageInventory mode={mode} toggleMode={toggleMode} id={userid}/>} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/merchent/profile"
          element={<ProtectedRoute element={<Profile mode={mode} toggleMode={toggleMode} id={userid} />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/merchent/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} mode={mode} toggleMode={toggleMode} setId={setId} />} // Pass setId to Logout if needed
        />
      </Routes>
    </Router>
  );
}

export default App;
