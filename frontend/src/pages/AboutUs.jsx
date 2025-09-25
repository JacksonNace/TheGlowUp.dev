import React from 'react';
import './AboutUs.css';
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p className="intro-text">
            Hi! We're Alyssa To and Jackson Nace, two creatives who love building thoughtful, 
            impactful digital experiences together.
          </p>
        </div>

        <div className="team-members">
          <div className="member-card">
            <div className="member-header">
              <span className="wave">👋</span>
              <h2>I'm Alyssa</h2>
            </div>
            <div className="member-image">
              <img src="/alyssa.png" alt="Alyssa To" />
            </div>
            <div className="member-content">
              <p>
                I'm a UX designer from the University of Texas at Dallas, where I focused on user experience and visual design. I've 
                interned at bp, worked on healthcare apps with ArtSciLab, and helped organize 
                HackUTD, the largest student-led hackathon in Texas.
              </p>
              <p>
      I’m a designer and artist who loves making playful and purposeful products. 
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/alyssaxto/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/alyssaxto" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://alyssaxto.com" target="_blank" rel="noopener noreferrer" className="personal-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>

          <div className="member-card">
            <div className="member-header">
              <span className="wave">👋</span>
              <h2>I'm Jackson</h2>
            </div>
            <div className="member-image">
              <img src="/jackson.png" alt="Jackson Nace" />
            </div>
            <div className="member-content">
              <p>
                I study CS + Math at theUniversity of Houston with a passion for 
                development, education, and technology that helps people. I've taught coding to 
                hundreds of students, worked in IT, and built full-stack projects that integrate 
                AI and modern cloud technologies.
              </p>
              <p>
                I enjoy tackling complex problems, learning new tools, and building things that 
                actually work in the real world.
              </p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/jacksonnace/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/JacksonNace" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://jacksonnace.netlify.app" target="_blank" rel="noopener noreferrer" className="personal-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="collaboration-section">
          <div className="collaboration-header">
            <span className="handshake">🤝</span>
            <h2>Why We Work Together</h2>
          </div>
          <div className="collaboration-content">
            <p className="alyssa-quote">
              I bring user-first design thinking to our projects, focusing on creating beautiful and 
              intuitive experiences that people love to use. I believe in the power of thoughtful 
              design to solve real problems.
            </p>
            <p className="jackson-quote">
              I handle the technical implementation, bringing our designs to life with clean, 
              efficient code. I'm passionate about building robust solutions that work seamlessly 
              in the real world.
            </p>
            <p className="collaboration-quote">
              Together, we create digital experiences that combine beautiful design with powerful 
              functionality. We believe in continuous learning, genuine collaboration, and always 
              putting our users first.
            </p>
          </div>
        </div>

        <div className="closing-section">
          <p>
            Thanks for stopping by! We're excited to keep building and growing together — and 
            hopefully inspire others to do the same.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
