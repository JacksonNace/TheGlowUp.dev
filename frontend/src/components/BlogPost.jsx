import React, { useState, useEffect } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, subtitle, content, tableOfContents, quiz }) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);

      // Update active section in table of contents
      const sections = document.querySelectorAll('h2[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle quiz submission
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    // Add your quiz submission logic here
    console.log('Quiz submitted');
  };

  return (
    <div className="blog-post-container">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Blog Header */}
      <header className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <h2 className="blog-subtitle">{subtitle}</h2>
      </header>

      {/* Main Content and Table of Contents */}
      <div className="blog-content">
        <main className="main-content">
          {content}
        </main>

        <aside className="table-of-contents">
          <h3 className="toc-title">Table of Contents</h3>
          <ul className="toc-list">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Quiz Section */}
      <section className="quiz-section">
        <h2 className="quiz-title">Test Your Knowledge</h2>
        <form onSubmit={handleQuizSubmit}>
          {quiz.questions.map((question, index) => (
            <div key={index} className="quiz-question">
              <p className="question-text">{question.text}</p>
              <ul className="options-list">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="option-item">
                    <label className="option-label">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        className="option-input"
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button type="submit" className="submit-quiz">
            Submit Answers
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogPost; 