import React from 'react';
import './ActivityPanel.css';

function ActivityPanel() {
    return (
        <section className="activity-panel">
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
    );
}

export default ActivityPanel;
