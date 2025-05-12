import React from 'react';
import './Account.css';

function Account() {
  // Placeholder user data
  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
  };

  return (
    <section className="account-section">
      <div className="account-card">
        <div className="account-avatar">{user.name.charAt(0)}</div>
        <h1 className="account-name">{user.name}</h1>
        <p className="account-email">{user.email}</p>
        <div className="account-actions">
          <button className="account-btn">Edit Profile</button>
          <button className="account-btn logout">Log Out</button>
        </div>
      </div>
    </section>
  );
}

export default Account;
