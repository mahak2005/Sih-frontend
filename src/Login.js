// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [role, setRole] = useState('admin'); // Default role set to admin
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSignIn = () => {
    // Basic validation check
    if (email.trim() && password.trim()) {
      // Call onLogin function passed from the parent (App) to handle login status
      if (onLogin) {
        onLogin(role);
      }

      // Navigate to the respective dashboard based on role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-page">
      <div className="left-section">
        <img src="./assets/logo.png" alt="AquaNidhi Logo" className="logo" />
        <h1>AQUANIDHI</h1>
        <p>The Ultimate Fisheries Data Hub of India</p>
      </div>
      <div className="right-section">
        <img src="./assets/logo.png" alt="AquaN Logo" className="small-logo" />
        
        {/* Role selection buttons */}
        <div className="login-buttons">
          <button
            className={`user-type-button ${role === 'admin' ? 'active' : ''}`}
            onClick={() => handleRoleChange('admin')}
          >
            Admin
          </button>
          <button
            className={`user-type-button ${role === 'user' ? 'active' : ''}`}
            onClick={() => handleRoleChange('user')}
          >
            User
          </button>
        </div>
        
        {/* Login form */}
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label>Login</label>
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="button" className="sign-in-button" onClick={handleSignIn}>
            Sign in
          </button>
        </form>

        {/* Additional options */}
        <div className="alternative-login">Or sign in with Research Institution ID</div>
        <button className="institution-login-button">Sign in with Institution ID</button>
        
        <div className="signup-text">
          Don’t have an account? <a href="/signup">Sign up now</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
