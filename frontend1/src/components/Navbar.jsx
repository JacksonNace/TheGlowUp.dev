import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">The Glow Up</Link>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '×' : '☰'}
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
        <li><Link to="/About" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/Account" onClick={() => setIsOpen(false)}>Account</Link></li>
        <li><Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 