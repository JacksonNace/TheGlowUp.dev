import './Profile.css'

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    progress: {
      completedCourses: 5,
      inProgress: 2,
      certificates: 3
    }
  }

  return (
    <div className="profile">
      <h1 className="section-title">Profile</h1>
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">
              {user.name.charAt(0)}
            </div>
            <div className="profile-info">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="profile-stats">
            <div className="stat">
              <h3>{user.progress.completedCourses}</h3>
              <p>Completed Courses</p>
            </div>
            <div className="stat">
              <h3>{user.progress.inProgress}</h3>
              <p>In Progress</p>
            </div>
            <div className="stat">
              <h3>{user.progress.certificates}</h3>
              <p>Certificates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 