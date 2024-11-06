import React from 'react';
import DataAnalysis from './DataAnalysis';
import VersionControl from './VersionControl';
import Settings from './Settings';
import LatestActions from '../components/LatestActions';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <DataAnalysis />
      <VersionControl />
      <Settings />
      <LatestActions />
    </div>
  );
}

export default AdminDashboard;
