import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Basic React',
      header: 'Master the Fundamentals of React Development',
      description: 'Learn the fundamentals of React.js and build your first application',
      progress: 65,
      lessons: 12,
      duration: '4 weeks'
    },
    {
      id: 2,
      title: 'How to Troubleshoot',
      header: 'Become a Debugging Expert',
      description: 'Master debugging techniques and problem-solving strategies',
      progress: 30,
      lessons: 8,
      duration: '3 weeks'
    },
    {
      id: 3,
      title: 'Creating a Portfolio',
      header: 'Showcase Your Work Professionally',
      description: 'Build a professional portfolio website to showcase your work',
      progress: 45,
      lessons: 10,
      duration: '3 weeks'
    },
    {
      id: 4,
      title: 'Basic Resume Guide',
      header: 'Land Your Dream Job',
      description: 'Learn how to create an effective resume that stands out',
      progress: 80,
      lessons: 6,
      duration: '2 weeks'
    }
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        <h1 className="courses-title">Our Courses</h1>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h2>{course.title}</h2>
                <h3 className="course-subheader">{course.header}</h3>
                <div className="course-meta">
                  <span>{course.lessons} lessons</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <p className="course-description">{course.description}</p>
              <div className="course-progress">
                <div className="progress-info">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link to="/blog" className="continue-learning-btn">
                Continue Learning
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
