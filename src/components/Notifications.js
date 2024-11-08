import React from 'react';
import './Notifications.css';

function Notifications() {
    return (
        <section className="notifications">
            <h2>Notifications</h2>
            <div className="notification-cards">
                <div className="notification-card">1 new Researcher registered</div>
                <div className="notification-card">All records are up to Date</div>
                <div className="notification-card">No urgent data requests</div>
                <div className="notification-card">Check latest commits</div>
            </div>
        </section>
    );
}

export default Notifications;
