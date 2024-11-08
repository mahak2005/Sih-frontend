// import React from 'react';
// import DataAnalysis from './DataAnalysis';
// import VersionControl from './VersionControl';
// import Settings from './Settings';
// import LatestActions from '../components/LatestActions';

// function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//       <h1>Admin Dashboard</h1>
//       <DataAnalysis />
//       <VersionControl />
//       <Settings />
//       <LatestActions />
//     </div>
//   );
// }

// export default AdminDashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><Link to="#">Upload New Files</Link></li>
          <li><Link to="#">Update Data</Link></li>
          <li><Link to="#">Version Control</Link></li>
          <li><Link to="#">Manage Access</Link></li>
          <li><Link to="#">History</Link></li>
          <li><Link to="#">Settings</Link></li>
        </ul>
      </aside>
      <main className="main-content">
        <header>
          <h2>Today's Activity</h2>
        </header>
        <div className="activity-summary">
          <div>415 Active Users</div>
          <div>29570 Records</div>
          <div>10 Active Admins</div>
        </div>
        <section className="notifications">
          <h3>Notifications</h3>
          <p>1 new Researcher registered</p>
          <p>All records are up to date</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
