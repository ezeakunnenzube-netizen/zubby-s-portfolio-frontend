import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page-wrapper">
      
      {/* SECTION 1: COSMIC GRADIENT HERO */}
      <section className="about-hero-section">
        <div className="about-hero-gradient-overlay"></div>
        <div className="about-hero-content">
          <span className="about-meta-tag">PROFESSIONAL PROFILE</span>
          <h1 className="about-hero-title">
            Engineering Principles to <br /><span className="highlight-text">Production Web Apps</span>
          </h1>
          <p className="about-hero-subtitle">
            Computer Engineering student and front-end engineer specializing in building responsive, modern web applications with JavaScript, React, Next.js, Tailwind CSS, and HTML.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE METHODOLOGY & THESIS CARD */}
      <section className="about-methodology-section">
        <div className="about-container grid-2-col">
          
          <div className="methodology-info-left">
            <span className="section-mini-tag">ACADEMIC FOUNDATION</span>
            <h2 className="about-section-title">The Engineering Methodology</h2>
            <p className="about-body-paragraph">
              My background in Computer Engineering at Accra Institute of Technology has given me a strong foundation in <strong>problem-solving, systems thinking, and technical implementation</strong>. I specialize in front-end and web development, translating complex application logic into intuitive, high-performance digital experiences.
            </p>
            
            <div className="mini-highlights-row">
              <div className="mini-highlight-box">
                <h5>FRONT-END SPECIALIZATION</h5>
                <p>Building responsive, component-driven interfaces with React, Next.js, JavaScript, and Tailwind CSS.</p>
              </div>
              <div className="mini-highlight-box">
                <h5>FULL-STACK ARCHITECTURE</h5>
                <p>Architecting complete e-commerce applications with backend logic, database structures, and modern deployment.</p>
              </div>
            </div>
          </div>

          {/* Project Focus Dashboard Card */}
          <div className="thesis-dashboard-card">
            <div className="thesis-card-header">
              <div>
                <h4>Featured Projects Focus</h4>
                <span className="thesis-sub">E-COMMERCE & DIGITAL MARKETPLACES</span>
              </div>
              <svg className="thesis-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            
            <div className="thesis-quote-block">
              <p>
                "Building platforms like Infibuy and Stone Store represents my dedication to full-stack web solutions—from user-friendly product catalog interfaces to backend logic and database integration."
              </p>
            </div>

            <div className="thesis-specs-grid">
              <div className="spec-item">
                <span className="spec-label">FRAMEWORKS</span>
                <span className="spec-value">React / Next.js</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">BACKEND &amp; DATA</span>
                <span className="spec-value">Node.js / Python</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">STYLING &amp; TOOLS</span>
                <span className="spec-value">Tailwind / GitHub</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE BRIDGE TO TECHNOLOGY */}
      <section className="about-bridge-section">
        <div className="about-container">
          <div className="centered-header">
            <h2 className="about-section-title">The Bridge to Front-End Engineering</h2>
            <p className="about-section-subtitle-muted">Translating engineering principles into responsive, production-ready web applications.</p>
          </div>

          <div className="bridge-cards-grid">
            <div className="bridge-card">
              <div className="bridge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <h3>01. Engineering Core</h3>
              <p>Computer Engineering fundamentals at Accra Institute of Technology: algorithms, computing systems, and analytical problem-solving.</p>
              <span className="step-tag">STEP 01 //</span>
            </div>

            <div className="bridge-card">
              <div className="bridge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>02. Web Technologies</h3>
              <p>Deep expertise in modern frontend development: JavaScript, React.js, Next.js, Tailwind CSS, HTML, and CSS.</p>
              <span className="step-tag">STEP 02 //</span>
            </div>

            <div className="bridge-card">
              <div className="bridge-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>
              </div>
              <h3>03. Full-Stack Apps</h3>
              <p>Building real-world web applications including Infibuy Marketplace and Stone Store with robust frontend UI and backend logic.</p>
              <span className="step-tag">STEP 03 //</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARCHITECTING PRECISION & NUMERICAL METRICS */}
      <section className="about-precision-section">
        <div className="about-container grid-2-col align-stretch">
          
          <div className="precision-content-left">
            <span className="section-mini-tag">FRONT END &amp; WEB DEVELOPMENT</span>
            <h2 className="about-section-title">Crafting Digital Excellence</h2>
            
            <div className="precision-pillars-list">
              <div className="precision-pillar-row">
                <div className="p-num">01</div>
                <div>
                  <h4>User-Centric &amp; Responsive Design</h4>
                  <p>Creating fluid interfaces optimized for performance and accessibility across all screen sizes and devices.</p>
                </div>
              </div>
              <div className="precision-pillar-row">
                <div className="p-num">02</div>
                <div>
                  <h4>Clean &amp; Maintainable Code</h4>
                  <p>Writing scalable, well-structured components with modern JavaScript, modular CSS, and disciplined GitHub workflows.</p>
                </div>
              </div>
            </div>

            <div className="precision-action-buttons">
              <Link to="/projects" className="about-btn-dark">View Projects</Link>
              <a href="/cv.pdf" download="Nzube_John_Ezeakunne_CV.pdf" className="about-btn-flat" title="Download CV">
                Download CV ⤓
              </a>
              <Link to="/education" className="about-btn-flat">Academic History</Link>
            </div>
          </div>

          {/* Clean Metric Dashboard Layout */}
          <div className="metrics-dashboard-grid">
            <div className="metric-box border-bottom border-right">
              <span className="metric-number">2+</span>
              <span className="metric-label">E-COMMERCE APPS</span>
            </div>
            <div className="metric-box border-bottom">
              <span className="metric-number">7+</span>
              <span className="metric-label">CORE TECH STACKS</span>
            </div>
            <div className="metric-box border-right">
              <span className="metric-number">100%</span>
              <span className="metric-label">RESPONSIVE UI</span>
            </div>
            <div className="metric-box">
              <span className="metric-number">2026</span>
              <span className="metric-label">ACTIVE DEVELOPMENT</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: DARK EXECUTIVE BLOCK QUOTE */}
      <section className="about-quote-block-section">
        <div className="about-container unique-quote-layout">
          <div className="quote-vector-glyph">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
            </svg>
          </div>
          <blockquote>
            "Good code and intuitive interfaces connect people with possibilities. As an engineer, my mission is turning complex problems into elegant, reliable web experiences."
          </blockquote>
          <span className="quote-author-tag">NZUBE JOHN EZEAKUNNE</span>
          <span className="quote-footer-subtext">Front End Engineer &amp; Web Developer • Accra, Ghana</span>
        </div>
      </section>

    </div>
  );
}

export default About;