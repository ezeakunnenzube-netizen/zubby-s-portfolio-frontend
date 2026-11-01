import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import passport from "../assets/Zubby Passport 2026.jpg"
import infibuyImage from "../assets/infibuy app image.png"
import stoneImage from "../assets/stone store app image.png"
import zubbyPortfolio from "../assets/Zubby portfolio.png"

// Static configuration data moved outside the render cycle to save memory re-allocations
const TECH_FOCUS_TAGS = [
  {
    id: 'frontend',
    label: 'FRONT END DEV',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    id: 'ecommerce',
    label: 'FULL-STACK APPS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    )
  },
  {
    id: 'responsive',
    label: 'RESPONSIVE UI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="home-container">
      
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid">
          
          {/* Left Column: Copy & Actions */}
          <div className="hero-left">
            <div className="hero-badge-container">
              <span className="hero-badge">FRONT END ENGINEER & WEB DEVELOPER</span>
            </div>
            
            <h1 className="hero-name">
              Nzube Ezeakunne <br />
              <span className="last-name">John (Zubby)</span>
            </h1>
            
            <p className="hero-tagline">
              Computer Engineering student and front-end engineer specializing in building responsive, modern web applications with <strong>JavaScript, React, Next.js, Tailwind CSS, and HTML</strong>.
            </p>
            
            <div className="hero-cta-group">
              <Link to="/projects" className="btn btn-dark">
                View Projects <span className="arrow">→</span>
              </Link>
              <a 
                href="/cv.pdf" 
                download="Nzube_John_Ezeakunne_CV.pdf" 
                className="btn btn-outline"
                title="Download Nzube John Ezeakunne CV (PDF)"
              >
                Download CV <span className="arrow">⤓</span>
              </a>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Framed Portrait */}
          <div className="hero-right">
            <div className="premium-frame-container">
              <div className="frame-border-back"></div>
              <div className="portrait-wrapper">
                <img
                  src={passport}
                  alt="Zubby's Portrait"
                  className="portrait-img"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Subtle bottom row representing focus segments */}
        <div className="hero-bottom-tech">
          {TECH_FOCUS_TAGS.map((tech) => (
            <div key={tech.id} className="tech-tag-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-label">{tech.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ACADEMIC PATH SECTION */}
      <section className="academic-path-section">
        <div className="academic-grid">
          
          {/* Left Column: Heading & Intro Text */}
          <div className="academic-left">
            <span className="academic-tag">ACADEMIC FOUNDATION</span>
            <h2 className="academic-title">Computer Engineering & Web Development</h2>
            <p className="academic-desc">
              Currently pursuing a Bachelor's Degree in Computer Engineering at Accra Institute of Technology, mastering the convergence of computer systems, software engineering, and responsive front-end applications.
            </p>
            <Link to="/education" className="academic-history-link">
              View Full Academic History <span className="chevron">{" >"}</span>
            </Link>
          </div>

          {/* Right Column: Three Clean Vertical Cards */}
          <div className="academic-cards-container">
            
            {/* Card 1: Computer Engineering */}
            <div className="academic-card">
              <div className="card-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="card-status-tag">IN PROGRESS</span>
              <h3 className="card-degree-title">Bachelor's Degree in Computer Engineering</h3>
              <p className="card-subtext">Accra Institute of Technology, Accra, Ghana</p>
            </div>

            {/* Card 2: Web Engineering */}
            <div className="academic-card">
              <div className="card-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="card-status-tag">SPECIALIZATION</span>
              <h3 className="card-degree-title">Front-End & Modern Web Engineering</h3>
              <p className="card-subtext">JavaScript, React.js, Next.js & Tailwind CSS</p>
            </div>

            {/* Card 3: Projects */}
            <div className="academic-card">
              <div className="card-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <span className="card-status-tag">FEATURED WORK</span>
              <h3 className="card-degree-title">Full-Stack E-Commerce Applications</h3>
              <p className="card-subtext">Infibuy App & Stone Store App</p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CASE STUDIES (PROJECTS PREVIEW) */}
      <section className="projects-preview-section">
        <div className="projects-header-wrapper">
          <div className="header-text-left">
            <span className="case-studies-tag">FEATURED WORK</span>
            <h2 className="projects-main-title">Selected Web Applications &<br />Projects</h2>
            <p className="projects-subtitle">
              Building full-stack e-commerce marketplaces and modern web applications with frontend excellence and robust backend logic.
            </p>
          </div>
          <div className="header-action-right">
            <Link to="/projects" className="btn btn-premium-secondary">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="projects-display-grid">
          {/* Card 1: Infibuy App */}
          <div className="premium-project-card">
            <a 
              href="https://buy-oh-code-house1.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-image-container"
              title="Visit Infibuy App Live (https://buy-oh-code-house1.vercel.app/)"
            >
              <img 
                src={infibuyImage} 
                alt="Infibuy App - Digital Marketplace Platform" 
                className="project-display-img"
                loading="lazy"
              />
              <div className="project-image-hover-overlay">
                <span className="live-preview-pill">Visit Live App ↗</span>
              </div>
            </a>
            <div className="project-meta-content">
              <span className="project-mini-category">E-COMMERCE MARKETPLACE • AUG 2026 – PRESENT</span>
              <h3 className="project-display-title">
                <a 
                  href="https://buy-oh-code-house1.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-title-link"
                >
                  Infibuy App
                </a>
              </h3>
              <p className="project-display-desc">
                Infibuy is a full-stack e-commerce web application. It serves as an online digital marketplace platform where users can browse, buy, and manage products. Built with modern web development tools and frameworks, the application handles everything from frontend user interfaces to backend logic and database structures.
              </p>
              
              <div className="project-pill-row">
                <span className="tech-pill">REACT</span>
                <span className="tech-pill">NEXT.JS</span>
                <span className="tech-pill">NODE.JS</span>
                <span className="tech-pill">JAVASCRIPT</span>
                <span className="tech-pill">TAILWIND CSS</span>
              </div>

              <a 
                href="https://buy-oh-code-house1.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-footer-action"
                title="View Infibuy App Live"
              >
                <span className="action-label-text">VIEW PROJECT DETAILS</span>
                <span className="action-arrow-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Card 2: Stone Store App */}
          <div className="premium-project-card">
            <a 
              href="https://stone-app-f5011.web.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-image-container"
              title="Visit Stone Store App Live (https://stone-app-f5011.web.app/)"
            >
              <img 
                src={stoneImage} 
                alt="Stone Store App - E-Commerce Platform" 
                className="project-display-img"
                loading="lazy"
              />
              <div className="project-image-hover-overlay">
                <span className="live-preview-pill">Visit Live App ↗</span>
              </div>
            </a>
            <div className="project-meta-content">
              <span className="project-mini-category">E-COMMERCE • MAY 2026 – AUG 2026</span>
              <h3 className="project-display-title">
                <a 
                  href="https://stone-app-f5011.web.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-title-link"
                >
                  Stone Store App
                </a>
              </h3>
              <p className="project-display-desc">
                Stone Store is a full-stack e-commerce web application designed as an online marketplace where users can browse, purchase, and manage products.
              </p>
              
              <div className="project-pill-row">
                <span className="tech-pill">REACT</span>
                <span className="tech-pill">PYTHON</span>
                <span className="tech-pill">FIREBASE</span>
                <span className="tech-pill">CSS</span>
                <span className="tech-pill">HTML</span>
              </div>

              <a 
                href="https://stone-app-f5011.web.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-footer-action"
                title="View Stone Store App Live"
              >
                <span className="action-label-text">VIEW PROJECT DETAILS</span>
                <span className="action-arrow-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Card 3: Portfolio Website */}
          <div className="premium-project-card">
            <a 
              href="https://www.zubbysportfolio.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-image-container"
              title="Visit Zubby's Portfolio Live (https://www.zubbysportfolio.dev/)"
            >
              <img 
                src={zubbyPortfolio} 
                alt="Personal Portfolio Website" 
                className="project-display-img"
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <div className="project-image-hover-overlay">
                <span className="live-preview-pill">Visit Live App ↗</span>
              </div>
            </a>
            <div className="project-meta-content">
              <span className="project-mini-category">PERSONAL BRANDING & WEB</span>
              <h3 className="project-display-title">
                <a 
                  href="https://www.zubbysportfolio.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-title-link"
                >
                  Zubby's Portfolio
                </a>
              </h3>
              <p className="project-display-desc">
                A responsive portfolio website showcasing front-end engineering projects, technical qualifications, and skills with clean interactions and modern aesthetic.
              </p>
              
              <div className="project-pill-row">
                <span className="tech-pill">REACT</span>
                <span className="tech-pill">JAVASCRIPT</span>
                <span className="tech-pill">CSS</span>
                <span className="tech-pill">HTML</span>
              </div>

              <a 
                href="https://www.zubbysportfolio.dev/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-footer-action"
                title="View Zubby's Portfolio Live"
              >
                <span className="action-label-text">VIEW PROJECT DETAILS</span>
                <span className="action-arrow-icon">↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. METHODOLOGY SECTION */}
      <section className="methodology-section">
        <div className="methodology-container">
          <div className="methodology-left-content">
            <span className="methodology-mini-tag">METHODOLOGY</span>
            <h2 className="methodology-main-title">A Design-First<br />Approach to<br />Development</h2>
            
            <div className="methodology-pillars-grid">
              {/* Pillar 1: User Experience */}
              <div className="methodology-pillar-item">
                <div className="pillar-header-row">
                  <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                  <h4 className="pillar-title">User Experience</h4>
                </div>
                <p className="pillar-body-text">
                  Prioritizing intuitive interfaces and seamless interactions that delight users and achieve business goals.
                </p>
              </div>

              {/* Pillar 2: Responsive Design */}
              <div className="methodology-pillar-item">
                <div className="pillar-header-row">
                  <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                  <h4 className="pillar-title">Responsive Design</h4>
                </div>
                <p className="pillar-body-text">
                  Creating websites that look and perform beautifully across all devices, from mobile to desktop.
                </p>
              </div>

              {/* Pillar 3: Modern Technologies */}
              <div className="methodology-pillar-item">
                <div className="pillar-header-row">
                  <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <h4 className="pillar-title">Modern Technologies</h4>
                </div>
                <p className="pillar-body-text">
                  Leveraging the latest frameworks and tools to build fast, scalable, and maintainable web applications.
                </p>
              </div>

              {/* Pillar 4: Continuous Learning */}
              <div className="methodology-pillar-item">
                <div className="pillar-header-row">
                  <svg className="pillar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <h4 className="pillar-title">Continuous Learning</h4>
                </div>
                <p className="pillar-body-text">
                  Staying updated with industry trends and best practices to deliver cutting-edge web solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="methodology-right-showcase">
            <div className="premium-quote-card-frame">
              <div className="space-bg-gradient-overlay"></div>
              <div className="quote-inner-content">
                <p className="premium-quote-text">
                  "Design is not just what it looks like. Design is how it works."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREMIUM CALL TO ACTION SECTION */}
      <section className="cta-premium-section">
        <div className="physics-atom-background">
          <div className="atom-orbit orbit-1"></div>
          <div className="atom-orbit orbit-2"></div>
          <div className="atom-nucleus"></div>
        </div>

        <div className="cta-inner-container">
          <h2 className="cta-main-title">
            Let's Build Something Amazing Together
          </h2>
          
          <p className="cta-description">
            Currently open to front-end engineering roles, web development projects, and collaborations that require modern, responsive web applications.
          </p>

          <div className="cta-action-button-row">
            <Link to="/contact" className="btn-cta-primary">
              <svg className="btn-envelope-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send a Message
            </Link>

            <a href="https://www.linkedin.com/in/john-eze-ab5a02315" target="_blank" rel="noopener noreferrer" className="social-action-ring" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="https://github.com/ezeakunnenzube-netizen" target="_blank" rel="noopener noreferrer" className="social-action-ring" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}