import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>AQUANIDHI</h1>
                <nav className="dashboard-nav">
                    <a href="#">About us</a>
                    <a href="#">Features</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="user-icon">
                    <i className="fa fa-user-circle"></i>
                </div>
                <button className="download-button">Download</button>
            </header>
            
            <aside className="sidebar">
                <div className="admin-info">
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

            <main className="main-content">
                <section className="today-activity">
                    <h2>Today's Activity</h2>
                    <div className="activity-cards">
                        <div className="card">415<br />Active Users</div>
                        <div className="card">29570<br />Records</div>
                        <div className="card">0<br />Commits</div>
                        <div className="card">10<br />Active Admins</div>
                        <div className="card">Datasets</div>
                        <div className="card">Actions</div>
                    </div>
                </section>

                <section className="notifications">
                    <h2>Notifications</h2>
                    <div className="notification-cards">
                        <div className="notification-card">1 new Researcher registered</div>
                        <div className="notification-card">All records are up to Date</div>
                        <div className="notification-card">No urgent data requests</div>
                        <div className="notification-card">Check latest commits</div>
                    </div>
                </section>

                <section className="latest-actions">
                    <h2>Latest Actions</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>User 201 performed a check in to table #Species</td>
                                <td>less than a min ago</td>
                            </tr>
                            <tr>
                                <td>User 78 downloaded the data</td>
                                <td>1 hour ago</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
