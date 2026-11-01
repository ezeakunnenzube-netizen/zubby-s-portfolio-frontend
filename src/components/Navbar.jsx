import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked (useful on mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO AREA */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            {/* Custom SVG Code/Web Icon representing web design */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="15" width="80" height="60" rx="5" stroke="currentColor" strokeWidth="6" />
              <line x1="10" y1="35" x2="90" y2="35" stroke="currentColor" strokeWidth="6" />
              <line x1="25" y1="50" x2="75" y2="50" stroke="currentColor" strokeWidth="4" />
              <line x1="25" y1="65" x2="60" y2="65" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
          <span className="logo-text">Zubby's Portfolio</span>
        </NavLink>

        {/* DESKTOP NAVIGATION LINKS */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Education</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          <a 
            href="/cv.pdf" 
            download="Nzube_John_Ezeakunne_CV.pdf" 
            className="nav-cv-pill"
            title="Download Nzube John Ezeakunne CV (PDF)"
          >
            <span>CV</span> ⤓
          </a>
        </div>

        {/* PREMIUM HAMBURGER BUTTON (Mobile only) */}
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line line-1"></span>
          <span className="hamburger-line line-2"></span>
          <span className="hamburger-line line-3"></span>
        </button>

      </div>

      {/* FULL-SCREEN PREMIUM GLASSMOBILE OVERLAY */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          <NavLink to="/" className="mobile-link" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="mobile-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/education" className="mobile-link" onClick={closeMenu}>Education</NavLink>
          <NavLink to="/projects" className="mobile-link" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={closeMenu}>Contact</NavLink>
          <a 
            href="/cv.pdf" 
            download="Nzube_John_Ezeakunne_CV.pdf" 
            className="mobile-link mobile-cv-link" 
            onClick={closeMenu}
          >
            Download CV ⤓
          </a>
        </div>
      </div>
    </nav>
  );
}