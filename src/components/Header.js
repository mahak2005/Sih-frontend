import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/assets/logo.png" alt="AquaNidhi Logo" />
        <h1>AQUANIDHI</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Admin Dashboard</Link>
        <Link to="/data-analysis">Data Analysis</Link>
        <Link to="/version-control">Version Control</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <div className="user-actions">
        <button className="download-button">Download</button>
        <i className="fa fa-user-circle"></i>
      </div>
    </header>
  );
}

export default Header;
