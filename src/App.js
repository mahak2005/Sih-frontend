import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
// import AdminDashboard from './AdminDashboard';
// import UserDashboard from './UserDashboard';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Function to handle login
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Admin Dashboard Route */}
        {/* <Route 
          path="/admin-dashboard" 
          element={
            isAuthenticated && userRole === 'admin' 
              ? <AdminDashboard /> 
              : <Navigate to="/login" />
          } 
        /> */}
        
        {/* User Dashboard Route */}
        {/* <Route 
          path="/user-dashboard" 
          element={
            isAuthenticated && userRole === 'user' 
              ? <UserDashboard /> 
              : <Navigate to="/login" />
          } 
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard';
// import DataAnalysis from './pages/DataAnalysis';
// import VersionControl from './pages/VersionControl';
// import Settings from './pages/Settings';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Dashboard />
//       <Routes>
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/data-analysis" element={<DataAnalysis />} />
//         <Route path="/version-control" element={<VersionControl />} />
//         <Route path="/settings" element={<Settings />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
