import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-title">
              <span className="the-text">The</span>
              <span className="glowup-text">Glow Up</span>
            </h2>
          </div>

          <div className="quick-links">
            <h3 className="quick-links-title">Quick Links</h3>
            <div className="quick-links-grid">
              <a href="/">Home</a>
              <a href="/courses">Courses</a>
              <a href="/about">About Us</a>
              <a href="/account">Account</a>
            </div>
          </div>

          <div className="newsletter">
            <h3 className="newsletter-title">Subscribe</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button className="arrow-button">
                <FaArrowRight />
              </button>
            </div>
            <p className="newsletter-subtitle">
              Get notified every single time we upload a new blog post!
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="social-links">
            <div className="social-link-group">
              <div className="name">Alyssa</div>
              <div className="social-icons">
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
            <div className="social-link-group">
              <div className="name">Jackson</div>
              <div className="social-icons">
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

          <h2 className="footer-title-center">The Glow Up</h2>

          <div className="copyright">
            <p>© 2025 Alyssa To and Jackson Nace.</p>
            <p>Made with Coffee and Lofi-Beats</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
