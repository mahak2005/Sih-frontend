import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">AQUANIDHI</div>
        <input className="search" placeholder="Search 'catfish'" />
        <Link to="/login" className="login-button">Login</Link>
      </header>

      <main className="content">
        <section className="intro">
          <h1>Simplifying fisheries research!</h1>
          <p>Empowering marine researchers with comprehensive, geo-referenced fish catch data to drive species-specific fisheries forecasting.</p>
          <Link to="/login" className="get-started-button">Get Started</Link>
        </section>

        <section className="how-it-works">
          <h2>How It Works?</h2>
          <p>We aggregate and organize fish catch information from multiple sources, providing scientists with the ability to visualize, filter, and download critical data for species and habitat studies.</p>
          <img src="./assets/illustration-map.png" alt="Map Illustration" className="map-illustration" />
        </section>

        <section className="features">
          <div className="feature">
            <img src="./assets/icon-data-hub.png" alt="Data Hub Icon" />
            <h3>DATA HUB</h3>
            <p>A central platform for all geo-referenced fish catch data.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon-fisheries-insights.png" alt="Fisheries Insights Icon" />
            <h3>FISHERIES INSIGHTS</h3>
            <p>Visualize and analyze species-specific patterns and trends.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon-geo-insights.png" alt="Geo Insights Icon" />
            <h3>GEO INSIGHTS</h3>
            <p>Analyze fish data by location with interactive maps and filters.</p>
          </div>
          <div className="feature">
            <img src="./assets/icon-integration.png" alt="Integration Icon" />
            <h3>SEAMLESS INTEGRATION</h3>
            <p>Connect multiple data sources into a single, organized system.</p>
          </div>
        </section>

        <section className="discover-more">
          <h2>DISCOVER MORE</h2>
          <p>At AquaNidhi, we provide a unified repository for geo-referenced fish catch data, featuring powerful filtering and dynamic visualization.</p>
          <div className="discover-features">
            <div className="discover-feature">
              <img src="./assets/illustration-chat.png" alt="Collaborative Features" />
              <h3>Collaborative Features</h3>
              <p>We provide tools for secure collaboration, enabling version control to enhance teamwork.</p>
            </div>
            <div className="discover-feature">
              <img src="./assets/illustration-dashboard.png" alt="Dynamic Data Visualization" />
              <h3>Dynamic Data Visualization</h3>
              <p>Interactive maps and graphs help you visualize trends and insights quickly and effectively.</p>
            </div>
            <div className="discover-feature">
              <img src="./assets/illustration-user-interface.png" alt="User-Friendly Interface" />
              <h3>User-Friendly Interface</h3>
              <p>Navigate effortlessly with an intuitive design that makes data exploration easy.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 AQUANIDHI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
