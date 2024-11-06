import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="user-info">
                <p>Admin Id: 1000332</p>
                <p>Name: Martian Lucas</p>
                <p>Role: Admin</p>
                <p>Email: xyz@gmail.com</p>
            </div>
            <div className="sidebar-buttons">
                <button>Upload new files</button>
                <button>Update Data</button>
                <button>Version Control</button>
                <button>Manage Access</button>
                <button>History</button>
                <button>Settings</button>
            </div>
        </aside>
    );
}

export default Sidebar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <nav className="sidebar">
//       <Link to="/admin-dashboard" className="sidebar-link">Admin Dashboard</Link>
//       <Link to="/data-analysis" className="sidebar-link">Data Analysis</Link>
//       <Link to="/version-control" className="sidebar-link">Version Control</Link>
//       <Link to="/settings" className="sidebar-link">Settings</Link>
//     </nav>
//   );
// }

// export default Sidebar;
