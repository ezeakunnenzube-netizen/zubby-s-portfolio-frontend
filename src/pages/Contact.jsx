import React, { useState } from 'react';
// Added serverTimestamp here to fix the missing definition error
import { db, collection, addDoc, serverTimestamp } from '../firebase';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Direct integration: Push form object to the secure 'inquiries' collection
      await addDoc(collection(db, 'inquiries'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp() // Generates secure server-side timestamps
      });

      setStatus({ loading: false, success: true, error: null });
      // Reset form fields upon successful write
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("Error submitting document: ", err);
      setStatus({ loading: false, success: false, error: "Submission failed. Please try again." });
    }
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* SECTION 1: COMMUNICATION HERO DISPLAY */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <span className="contact-meta-tag">COMMUNICATION</span>
          <h1 className="contact-hero-title">
            Let's connect on web <br />development &amp; engineering.
          </h1>
          <p className="contact-hero-subtitle">
            Whether you're interested in front-end engineering, full-stack e-commerce applications, or technical collaborations, I'm always open to meaningful dialogue.
          </p>
        </div>
      </section>

      {/* SECTION 2: GRID CORE BODY INTERACTION */}
      <section className="contact-body-grid-section">
        <div className="contact-container body-split-layout">
          
          {/* LEFT PANEL: CONTROLLED INQUIRY FORM */}
          <div className="contact-form-block-left">
            <h2 className="panel-structural-title">Direct Message</h2>
            <p className="panel-structural-desc">
              Complete the form below for formal inquiries. I typically respond within 24–48 hours.
            </p>

            {/* STATUS DISPLAY SYSTEM LAYER */}
            {status.success && (
              <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', fontSize: '0.9rem' }}>
                ✓ Inquiry sent successfully! Your message has been delivered.
              </div>
            )}
            
            {status.error && (
              <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: '6px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', fontSize: '0.9rem' }}>
                ✕ {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="academic-inquiry-form">
              <div className="form-row-2col">
                <div className="form-input-group">
                  <label htmlFor="firstName">FIRST NAME</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="e.g., Isaac" 
                    required 
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="lastName">LAST NAME</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="e.g., Newton" 
                    required 
                  />
                </div>
              </div>

              <div className="form-input-group">
                <label htmlFor="email">INSTITUTIONAL / PROFESSIONAL EMAIL</label>
                <div className="input-with-icon-wrapper">
                  <span className="input-inner-glyph">✉</span>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@institution.edu" 
                    required 
                  />
                </div>
              </div>

              <div className="form-input-group">
                <label htmlFor="subject">INQUIRY SUBJECT</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Web Design Project - E-commerce Site" 
                  required 
                />
              </div>

              <div className="form-input-group">
                <label htmlFor="message">MESSAGE BODY</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your proposal or inquiry in detail..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="form-submit-action-btn"
                disabled={status.loading}
                style={{ opacity: status.loading ? 0.6 : 1, cursor: status.loading ? 'not-allowed' : 'pointer' }}
              >
                <span>{status.loading ? 'Processing Transmit...' : 'Submit Inquiry'}</span>
                <span className="btn-arrow-icon">⟴</span>
              </button>
            </form>
          </div>

          {/* RIGHT PANEL: ECOSYSTEM DIRECTORY */}
          <div className="contact-directory-block-right">
            
            {/* PLATFORMS SUB-SECTION */}
            <div className="directory-sub-segment">
              <h3 className="directory-header-label">Professional Platforms</h3>
              <p className="directory-header-desc">Connect through established professional networks and code repositories.</p>
              
              <div className="network-cards-stack">
                <a href="https://www.linkedin.com/in/john-eze-ab5a02315" target="_blank" rel="noopener noreferrer" className="network-row-card">
                  <span className="network-brand">LINKEDIN</span>
                  <span className="network-handle">in/john-eze-ab5a02315</span>
                </a>
                <a href="https://github.com/ezeakunnenzube-netizen" target="_blank" rel="noopener noreferrer" className="network-row-card">
                  <span className="network-brand">GITHUB</span>
                  <span className="network-handle">ezeakunnenzube-netizen</span>
                </a>
              </div>
            </div>

            {/* DIRECT INFO SUB-SECTION */}
            <div className="directory-sub-segment secondary-spacing">
              <h3 className="directory-header-label">Contact Information</h3>
              
              <div className="meta-info-lines-stack">
                <div className="meta-line-item">
                  <span className="meta-icon">✉</span>
                  <div>
                    <h5>PRIMARY EMAIL</h5>
                    <p><a href="mailto:ezeakunnenzube@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>ezeakunnenzube@gmail.com</a></p>
                  </div>
                </div>

                <div className="meta-line-item">
                  <span className="meta-icon">📞</span>
                  <div>
                    <h5>PHONE</h5>
                    <p><a href="tel:+233559156183" style={{ color: 'inherit', textDecoration: 'none' }}>+233559156183</a></p>
                  </div>
                </div>

                <div className="meta-line-item">
                  <span className="meta-icon">🌐</span>
                  <div>
                    <h5>PORTFOLIO</h5>
                    <p><a href="https://www.zubbysportfolio.dev" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>https://www.zubbysportfolio.dev</a></p>
                  </div>
                </div>

                <div className="meta-line-item">
                  <span className="meta-icon">⚲</span>
                  <div>
                    <h5>BASE OF OPERATIONS</h5>
                    <p>Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DISCLOSURE FOOTNOTE BLOCK */}
            <div className="academic-disclosure-box">
              <span className="disclosure-badge">⚠ AVAILABILITY</span>
              <p>
                "Currently open to front-end engineering roles, web development projects, freelance opportunities, and collaborations."
              </p>
              <span className="version-stamp-tag">FRONT END ENGINEER &amp; WEB DEVELOPER</span>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: REASSURANCE HIGHLIGHT STRIP */}
      <section className="contact-discovery-footer-strip">
        <div className="contact-container text-center-discovery">
          <h3>Creating beautiful digital experiences.</h3>
          <p>Based in Accra, Ghana, I am available for remote web design projects and collaborations worldwide.</p>
          
          <div className="status-badges-row-meta">
            <span className="status-badge-outline">TIMEZONE: GMT (UTC+0)</span>
            <span className="status-badge-outline">STATUS: OPEN TO PROJECTS</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;