import React from 'react';
import './Account.css';

function Account() {
  // Placeholder user data
  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    stats: {
      coursesCompleted: 12,
      totalHoursLearned: 48,
      currentStreak: 7,
      achievements: 15
    },
    recentAchievements: [
      { title: 'Early Bird', description: 'Completed 5 morning lessons', icon: '🌅' },
      { title: 'Quick Learner', description: 'Finished a course in record time', icon: '⚡' },
      { title: 'Perfect Score', description: 'Got 100% on all quizzes', icon: '🎯' }
    ],
    learningProgress: [
      { course: 'Web Development', progress: 75 },
      { course: 'Data Science', progress: 45 },
      { course: 'UI/UX Design', progress: 90 }
    ]
  };

  return (
    <section className="account-section">
      <div className="account-container">
        <div className="account-header">
          <div className="account-avatar">{user.name.charAt(0)}</div>
          <div className="account-info">
            <h1 className="account-name">{user.name}</h1>
            <p className="account-email">{user.email}</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Courses Completed</h3>
            <p className="stat-number">{user.stats.coursesCompleted}</p>
          </div>
          <div className="stat-card">
            <h3>Hours Learned</h3>
            <p className="stat-number">{user.stats.totalHoursLearned}</p>
          </div>
          <div className="stat-card">
            <h3>Day Streak</h3>
            <p className="stat-number">{user.stats.currentStreak}</p>
          </div>
          <div className="stat-card">
            <h3>Achievements</h3>
            <p className="stat-number">{user.stats.achievements}</p>
          </div>
        </div>

        <div className="account-sections">
          <div className="section-card">
            <h2>Learning Progress</h2>
            <div className="progress-list">
              {user.learningProgress.map((course, index) => (
                <div key={index} className="progress-item">
                  <div className="progress-header">
                    <span>{course.course}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card">
            <h2>Recent Achievements</h2>
            <div className="achievements-list">
              {user.recentAchievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <div className="achievement-info">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="account-actions">
          <button className="account-btn">Edit Profile</button>
          <button className="account-btn logout">Log Out</button>
        </div>
      </div>
    </section>
  );
}

export default Account;
