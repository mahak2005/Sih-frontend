import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ActivityPanel from './ActivityPanel';
import Notifications from './Notifications';
import LatestActions from './LatestActions';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <ActivityPanel />
          <Notifications />
          <LatestActions />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
