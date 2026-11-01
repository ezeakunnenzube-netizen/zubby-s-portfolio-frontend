import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import infibuyImage from "../assets/infibuy app image.png";
import stoneImage from "../assets/stone store app image.png";
import zubbyPortfolio from "../assets/Zubby portfolio.png";

function Projects() {
  const projectsData = [
    {
      id: 'infibuy-app',
      title: 'Infibuy App',
      category: 'E-COMMERCE MARKETPLACE',
      period: 'Aug 2026 – Present',
      description: 'Infibuy is a full-stack e-commerce web application. It serves as an online digital marketplace platform where users can browse, buy, and manage products. Built with modern web development tools and frameworks, the application handles everything from frontend user interfaces to backend logic and database structures.',
      image: infibuyImage,
      tech: ['REACT', 'NEXT.JS', 'NODE.JS', 'JAVASCRIPT', 'TAILWIND CSS'],
      link: 'https://buy-oh-code-house1.vercel.app/'
    },
    {
      id: 'stone-store',
      title: 'Stone Store App',
      category: 'E-COMMERCE',
      period: 'May 2026 – Aug 2026',
      description: 'Stone Store is a full-stack e-commerce web application designed as an online marketplace where users can browse, purchase, and manage products.',
      image: stoneImage,
      tech: ['REACT', 'PYTHON', 'FIREBASE', 'CSS', 'HTML'],
      link: 'https://stone-app-f5011.web.app/'
    },
    {
      id: 'zubby-portfolio',
      title: "Zubby's Portfolio",
      category: 'PERSONAL BRANDING & WEB',
      period: '2026',
      description: 'A responsive portfolio website showcasing front-end engineering projects, technical qualifications, and skills with clean interactions and modern aesthetic.',
      image: zubbyPortfolio,
      tech: ['REACT', 'JAVASCRIPT', 'CSS', 'HTML'],
      link: 'https://www.zubbysportfolio.dev/'
    }
  ];

  return (
    <div className="projects-page-wrapper">
      
      {/* SECTION 1: HEADER EXHIBITS DISPLAY */}
      <section className="proj-hero-section">
        <div className="proj-container">
          <span className="proj-meta-tag">ENGINEERING PORTFOLIO</span>
          <h1 className="proj-hero-title">
            Featured <em>Projects</em>
          </h1>
          <p className="proj-hero-subtitle">
            A curated selection of full-stack e-commerce web applications, digital marketplaces, and front-end engineering solutions built with JavaScript, React, Next.js, Tailwind CSS, Node.js, and Python.
          </p>
        </div>
      </section>

      {/* SECTION 2: PROJECTS DISPLAY GRID */}
      <section className="proj-grid-section">
        <div className="proj-container">
          <div className="projects-display-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="premium-project-card">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-image-container"
                  title={`Visit ${project.title} Live App (${project.link})`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-display-img"
                    loading="lazy"
                    style={project.id === 'zubby-portfolio' ? { objectFit: 'contain' } : {}}
                  />
                  <div className="project-image-hover-overlay">
                    <span className="live-preview-pill">Visit Live App ↗</span>
                  </div>
                </a>
                <div className="project-meta-content">
                  <span className="project-mini-category">{project.category} {project.period ? `• ${project.period}` : ''}</span>
                  <h3 className="project-display-title">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-title-link"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="project-display-desc">{project.description}</p>
                  
                  <div className="project-pill-row">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-footer-action"
                    title={`View ${project.title} Live App`}
                  >
                    <span className="action-label-text">VIEW PROJECT DETAILS</span>
                    <span className="action-arrow-icon">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE COMPETENCIES MATRIX STRIP */}
      <section className="proj-competencies-section">
        <div className="proj-container competencies-split-wrapper">
          
          <div className="competency-info-left">
            <h2 className="competency-title">Core Competencies</h2>
            <p className="competency-subtitle">
              Combining strong Computer Engineering fundamentals with specialized front-end and full-stack web development to create fast, scalable, and responsive applications.
            </p>
          </div>

          <div className="competencies-cards-right-row">
            <div className="competency-mini-card">
              <div className="comp-icon-indicator">&lt;/&gt;</div>
              <h4>FRONT-END ENGINEERING</h4>
              <p>Responsive, interactive UIs built with JavaScript, React.js, Next.js, Tailwind CSS, and HTML/CSS.</p>
            </div>

            <div className="competency-mini-card">
              <div className="comp-icon-indicator">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
              </div>
              <h4>BACKEND &amp; DATABASE LOGIC</h4>
              <p>Full-stack data structures, API endpoints, and database management with Node.js and Python.</p>
            </div>

            <div className="competency-mini-card">
              <div className="comp-icon-indicator">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>VERSION CONTROL &amp; GITHUB</h4>
              <p>Streamlined version control, source management, and collaborative development with GitHub.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUTBOUND FOOTER CONNECT ACTION */}
      <section className="proj-collaboration-cta">
        <div className="proj-container cta-layout-center">
          <h2 className="collaboration-heading">Interested in collaborating?</h2>
          <p className="collaboration-subtext">
            I am always open to discussing new front-end engineering roles, web development opportunities, e-commerce projects, and open-source contributions.
          </p>
          <div className="collaboration-buttons-cluster">
            <Link to="/contact" className="btn-cta-dark">
              <span>Get in Touch</span>
              <span className="arrow-vector">→</span>
            </Link>
            <a href="/cv.pdf" download="Nzube_John_Ezeakunne_CV.pdf" className="btn-cta-flat" title="Download Nzube John Ezeakunne CV">
              Download CV <span className="download-glyph">⤓</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projects;