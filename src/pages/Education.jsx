import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

function Education() {
  // State toggles for expandable accordion sections within degrees
  const [msCoursesOpen, setMsCoursesOpen] = useState(true);

  return (
    <div className="education-page-wrapper">
      
      {/* SECTION 1: HERO DISPLAY */}
      <section className="edu-hero-section">
        <div className="edu-hero-angled-bg"></div>
        <div className="edu-container hero-center">
          <span className="edu-meta-tag">CURRICULUM VITAE</span>
          <h1 className="edu-hero-title">Academic &amp; Technical Journey</h1>
          <p className="edu-hero-subtitle">
            Computer Engineering student at Accra Institute of Technology, specializing in building responsive, modern web applications with JavaScript, React, Next.js, Tailwind CSS, and HTML.
          </p>
        </div>
      </section>

      {/* FILTER / UTILITY STRIP BAR */}
      <div className="edu-utility-strip">
        <div className="edu-container strip-flex">
          <div className="strip-left">
            <span className="filter-label">✦ TIMELINE VIEW</span>
            <span className="search-placeholder">| Computer Engineering • Accra Institute of Technology</span>
          </div>
          <div className="strip-right">
            <a 
              href="/cv.pdf" 
              download="Nzube_John_Ezeakunne_CV.pdf" 
              className="date-stamp"
              title="Download Nzube John Ezeakunne CV"
            >
              DOWNLOAD CV [PDF] ⤓
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 2: TIMELINE TIMESTAMPS SECTION */}
      <section className="edu-timeline-section">
        <div className="edu-container">
          
          <div className="section-structural-header">
            <div className="header-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
              </svg>
            </div>
            <div>
              <h2 className="edu-main-heading">EDUCATION</h2>
              <p className="edu-sub-heading">Academic credentials and engineering curriculum at Accra Institute of Technology.</p>
            </div>
          </div>

          <div className="timeline-track-wrapper">
            
            {/* DEGREE NODE: Bachelor's Degree in Computer Engineering */}
            <div className="timeline-card-node">
              <div className="node-marker-dot active-dot"></div>
              <div className="timeline-card-content">
                <div className="card-top-meta">
                  <div className="degree-status-badge running">IN PROGRESS</div>
                  <span className="degree-timeline-dates">UNDERGRADUATE • IN PROGRESS</span>
                  <svg className="node-corner-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>

                <h3 className="degree-title">Bachelor's Degree in Computer Engineering</h3>
                <span className="institution-location">Accra Institute of Technology — Accra, Ghana</span>
                
                <p className="degree-summary-text">
                  Currently pursuing a Bachelor's Degree in Computer Engineering. Specializing as a front-end engineer and web developer building responsive, modern applications. Building extensive competencies in computing systems, web technologies, software architecture, and database logic.
                </p>

                {/* Dropdown Accordion: Key Coursework */}
                <div className="accordion-wrapper">
                  <button 
                    className="accordion-trigger-bar" 
                    onClick={() => setMsCoursesOpen(!msCoursesOpen)}
                  >
                    <span>KEY AREAS OF STUDY &amp; COURSEWORK</span>
                    <span className="arrow-indicator">{msCoursesOpen ? '▲' : '▼'}</span>
                  </button>
                  
                  {msCoursesOpen && (
                    <div className="accordion-grid-dropdown">
                      <div className="course-item-box">
                        <span className="course-id">ENG 101</span>
                        <h4>Modern Web Development</h4>
                        <p>HTML5, CSS3, JavaScript, React.js, responsive layouts, and modern web application frameworks.</p>
                      </div>
                      <div className="course-item-box">
                        <span className="course-id">ENG 202</span>
                        <h4>Computer Engineering &amp; Systems</h4>
                        <p>Hardware/software interface, algorithmic logic, and system architecture fundamentals.</p>
                      </div>
                      <div className="course-item-box">
                        <span className="course-id">ENG 303</span>
                        <h4>Database Structures &amp; Logic</h4>
                        <p>Database structures, backend integration with Node.js &amp; Python, and data integrity.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub Accordion: Focus */}
                <div className="accordion-wrapper bordered-top-only">
                  <div className="accordion-trigger-bar" style={{ cursor: 'default' }}>
                    <span>SPECIALIZATION: FRONT-END &amp; FULL-STACK E-COMMERCE</span>
                    <span className="arrow-indicator">✦</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: RESEARCH AREAS & PHILOSOPHY SPLIT */}
      <section className="edu-research-split-section">
        <div className="edu-container grid-2-col-split">
          
          {/* Left Columns: Focus Pill list */}
          <div className="research-focus-left">
            <div className="section-structural-header compact-margin">
              <div className="header-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V3A2.5 2.5 0 0 1 6.5.5H20v16.5H6.5a2.5 2.5 0 0 0-2.5 3z"/></svg>
              </div>
              <div>
                <h2 className="edu-main-heading">CORE FOCUS AREAS</h2>
                <p className="edu-sub-heading">Primary domains of technical development and engineering practice.</p>
              </div>
            </div>

            <div className="research-pills-list-grid">
              <div className="research-pill-item">Front-End Engineering</div>
              <div className="research-pill-item">React.js &amp; Next.js</div>
              <div className="research-pill-item">Tailwind CSS &amp; UI/UX</div>
              <div className="research-pill-item">JavaScript (ES6+)</div>
              <div className="research-pill-item">E-Commerce Platforms</div>
              <div className="research-pill-item">Node.js &amp; Python Backend</div>
              <div className="research-pill-item">Database Structures</div>
              <div className="research-pill-item">GitHub Version Control</div>
            </div>
          </div>

          {/* Right Columns: Quote Block Panel and Tech list */}
          <div className="philosophy-panel-right">
            <div className="dark-philosophy-card">
              <h3>"Engineering clean, responsive web solutions that bridge user needs and modern tech."</h3>
              <span className="philosophy-signature">— NZUBE JOHN EZEAKUNNE</span>
              <p className="philosophy-para">
                Computer Engineering student and front-end engineer building reliable digital products like the Infibuy digital marketplace and Stone Store e-commerce platform.
              </p>
              <a href="https://github.com/ezeakunnenzube-netizen" target="_blank" rel="noopener noreferrer" className="thesis-project-link">
                View GitHub Profile &amp; Repositories ↗
              </a>
            </div>

            {/* Proficiency Inline Matrix Box */}
            <div className="technical-proficiency-box">
              <h5 className="proficiency-heading">TECHNICAL SKILLS (FROM CV)</h5>
              <div className="proficiency-inline-tags">
                <span>Github</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>PYTHON</span>
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: KNOWLEDGE INTO ACTION ACTION CTA */}
      <section className="edu-action-cta-section">
        <div className="edu-container text-center-cta">
          <h2 className="cta-heading-display">Translating Knowledge into Impact</h2>
          <p className="cta-sub-display">Explore the applications of my computer engineering and web development background through live e-commerce applications and projects.</p>
          <div className="cta-button-cluster-row">
            <Link to="/projects" className="edu-action-btn-solid">View Featured Projects</Link>
            <Link to="/contact" className="edu-action-btn-outline">Inquire For Collaboration</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Education;