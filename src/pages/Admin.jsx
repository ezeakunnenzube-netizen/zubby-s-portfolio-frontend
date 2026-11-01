import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  auth, 
  db, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  serverTimestamp 
} from '../firebase';
import './Admin.css';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  // Dashboard Tabs
  const [activeTab, setActiveTab] = useState('overview');

  // Real Data states
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);

  // Project Form State
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'FULL-STACK DEVELOPMENT',
    description: '',
    techInput: '',
    imageUrl: '',
    liveUrl: '',
    githubUrl: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState({ type: '', message: '' });

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      if (currentUser) {
        fetchProjects();
        fetchInquiries();
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch real projects from Firestore
  const fetchProjects = async () => {
    setProjectsLoading(true);
    try {
      const q = query(collection(db, 'projects'));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setProjects(list);
    } catch (err) {
      console.error('Error fetching projects:', err);
    } finally {
      setProjectsLoading(false);
    }
  };

  // Fetch real inquiries from Firestore
  const fetchInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const q = query(collection(db, 'inquiries'), orderBy('timestamp', 'desc'));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      }));
      setInquiries(list);
    } catch (err) {
      console.error('Error fetching inquiries:', err);
      // Fallback in case orderBy timestamp doesn't have an index yet
      try {
        const fallbackSnapshot = await getDocs(collection(db, 'inquiries'));
        const list = fallbackSnapshot.docs.map(docSnap => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        setInquiries(list);
      } catch (innerErr) {
        console.error('Fallback inquiries fetch failed:', innerErr);
      }
    } finally {
      setInquiriesLoading(false);
    }
  };

  // Sign In Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoginSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      console.error('Sign-in error:', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setAuthError('Invalid email or password. Please verify your admin credentials.');
      } else if (err.code === 'auth/too-many-requests') {
        setAuthError('Access temporarily locked due to multiple failed attempts. Please try again later.');
      } else {
        setAuthError('Authentication failed: ' + (err.message || 'Please check your connection.'));
      }
    } finally {
      setLoginSubmitting(false);
    }
  };

  // Sign Out Handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setProjects([]);
      setInquiries([]);
    } catch (err) {
      console.error('Sign out error:', err);
    }
  };

  // Image Upload helper: converts to clean base64 data URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setFormFeedback({ type: 'error', message: 'Image must be under 2MB.' });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectForm(prev => ({ ...prev, imageUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Submit New Project to Firestore
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormFeedback({ type: '', message: '' });

    try {
      const techArray = projectForm.techInput
        ? projectForm.techInput.split(',').map(t => t.trim().toUpperCase()).filter(Boolean)
        : [];

      const newProjectData = {
        title: projectForm.title.trim(),
        category: projectForm.category,
        description: projectForm.description.trim(),
        tech: techArray,
        image: projectForm.imageUrl || '',
        imageUrl: projectForm.imageUrl || '',
        link: projectForm.liveUrl.trim() || '',
        github: projectForm.githubUrl.trim() || '',
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'projects'), newProjectData);

      setFormFeedback({ type: 'success', message: 'Project successfully published to Firestore database!' });
      setProjectForm({
        title: '',
        category: 'FULL-STACK DEVELOPMENT',
        description: '',
        techInput: '',
        imageUrl: '',
        liveUrl: '',
        githubUrl: ''
      });
      fetchProjects();
    } catch (err) {
      console.error('Project creation failed:', err);
      setFormFeedback({ type: 'error', message: 'Failed to create project: ' + (err.message || 'Database error') });
    } finally {
      setFormSubmitting(false);
    }
  };

  // Delete Project
  const handleDeleteProject = async (projectId, projectTitle) => {
    if (!window.confirm(`Are you sure you want to delete "${projectTitle}" from the database?`)) {
      return;
    }
    try {
      await deleteDoc(doc(db, 'projects', projectId));
      setProjects(prev => prev.filter(p => p.id !== projectId));
    } catch (err) {
      console.error('Failed to delete project:', err);
      alert('Failed to delete project: ' + err.message);
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (inquiryId) => {
    if (!window.confirm('Delete this message permanently?')) {
      return;
    }
    try {
      await deleteDoc(doc(db, 'inquiries', inquiryId));
      setInquiries(prev => prev.filter(i => i.id !== inquiryId));
    } catch (err) {
      console.error('Failed to delete inquiry:', err);
      alert('Failed to delete inquiry: ' + err.message);
    }
  };

  // Auth Loading Screen
  if (authLoading) {
    return (
      <div className="admin-loading-screen">
        <div className="admin-spinner"></div>
        <p>Verifying admin session...</p>
      </div>
    );
  }

  // Admin Login Screen (Clean, solid, non-glassmorphic, human-engineered)
  if (!user) {
    return (
      <div className="admin-login-layout">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <div className="admin-badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h2>Portfolio Administrator</h2>
            <p>Sign in with your authorized admin credentials to manage portfolio projects and inquiries.</p>
          </div>

          {authError && (
            <div className="admin-alert-banner alert-error" role="alert">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="admin-form">
            <div className="form-group">
              <label htmlFor="admin-email">Admin Email</label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ezeakunnenzube@gmail.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            <button 
              type="submit" 
              className="admin-btn admin-btn-primary" 
              disabled={loginSubmitting}
            >
              {loginSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="admin-login-footer">
            <Link to="/" className="back-link">
              ← Return to Public Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="admin-dashboard-layout">
      {/* SOLID SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-dot"></span>
            <h3>Zubby Admin</h3>
          </div>
          <span className="system-pill">Online</span>
        </div>

        <nav className="admin-nav-menu">
          <button
            className={`nav-item-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Overview</span>
          </button>

          <button
            className={`nav-item-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            <span>Projects</span>
            <span className="nav-counter">{projects.length}</span>
          </button>

          <button
            className={`nav-item-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>Inquiries</span>
            <span className="nav-counter">{inquiries.length}</span>
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-profile">
            <div className="user-avatar">
              {user.email ? user.email.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="user-details">
              <span className="user-role">Administrator</span>
              <span className="user-email-text" title={user.email}>{user.email}</span>
            </div>
          </div>

          <div className="sidebar-action-cluster">
            <Link to="/" className="sidebar-sub-link">
              ↗ View Website
            </Link>
            <button onClick={handleSignOut} className="signout-button">
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className="admin-content-viewport">
        {/* TOP BAR */}
        <header className="admin-topbar">
          <div>
            <h1 className="page-title">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'projects' && 'Project Management'}
              {activeTab === 'inquiries' && 'Client Inquiries'}
            </h1>
            <p className="page-subtitle">
              {activeTab === 'overview' && 'Real-time metrics and database operations.'}
              {activeTab === 'projects' && 'Add, update, or remove projects displayed on your portfolio.'}
              {activeTab === 'inquiries' && 'Messages submitted through your contact form.'}
            </p>
          </div>

          <div className="topbar-actions">
            <button 
              className="refresh-btn" 
              onClick={() => { fetchProjects(); fetchInquiries(); }}
              title="Refresh Firestore data"
            >
              ↻ Refresh Data
            </button>
            <Link to="/" className="topbar-site-link">
              Live Site
            </Link>
          </div>
        </header>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="admin-tab-content">
            {/* Stat Cards */}
            <div className="stat-cards-grid">
              <div className="stat-card">
                <span className="stat-label">Total Projects</span>
                <span className="stat-value">{projects.length}</span>
                <span className="stat-meta">Active in Firestore</span>
              </div>

              <div className="stat-card">
                <span className="stat-label">Total Inquiries</span>
                <span className="stat-value">{inquiries.length}</span>
                <span className="stat-meta">Contact submissions</span>
              </div>

              <div className="stat-card">
                <span className="stat-label">Authentication Status</span>
                <span className="stat-value-text">Verified Admin</span>
                <span className="stat-meta">{user.email}</span>
              </div>

              <div className="stat-card">
                <span className="stat-label">Database Status</span>
                <span className="stat-value-text status-online">Connected</span>
                <span className="stat-meta">Firebase Firestore</span>
              </div>
            </div>

            {/* Quick Actions / Recent overview */}
            <div className="overview-split-grid">
              <div className="admin-card">
                <div className="admin-card-header">
                  <h3>Recent Inquiries</h3>
                  <button onClick={() => setActiveTab('inquiries')} className="card-link-btn">
                    View All →
                  </button>
                </div>
                {inquiries.length === 0 ? (
                  <p className="empty-state-text">No inquiries received yet.</p>
                ) : (
                  <div className="recent-list">
                    {inquiries.slice(0, 3).map(item => (
                      <div key={item.id} className="recent-item">
                        <div className="recent-item-meta">
                          <strong>{item.firstName} {item.lastName}</strong>
                          <span className="item-email">{item.email}</span>
                        </div>
                        <p className="recent-item-snippet">{item.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="admin-card">
                <div className="admin-card-header">
                  <h3>Featured Projects</h3>
                  <button onClick={() => setActiveTab('projects')} className="card-link-btn">
                    Manage →
                  </button>
                </div>
                {projects.length === 0 ? (
                  <p className="empty-state-text">No projects recorded in Firestore.</p>
                ) : (
                  <div className="recent-list">
                    {projects.slice(0, 3).map(p => (
                      <div key={p.id} className="recent-item">
                        <div className="recent-item-meta">
                          <strong>{p.title}</strong>
                          <span className="item-category-pill">{p.category}</span>
                        </div>
                        <p className="recent-item-snippet">{p.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="admin-tab-content">
            <div className="projects-admin-split">
              {/* Form to Add New Project */}
              <div className="admin-card form-panel">
                <div className="admin-card-header">
                  <h3>Add New Project</h3>
                </div>

                {formFeedback.message && (
                  <div className={`admin-alert-banner ${formFeedback.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                    {formFeedback.message}
                  </div>
                )}

                <form onSubmit={handleProjectSubmit} className="admin-form">
                  <div className="form-group">
                    <label>Project Title *</label>
                    <input
                      type="text"
                      value={projectForm.title}
                      onChange={e => setProjectForm({...projectForm, title: e.target.value})}
                      placeholder="e.g., Infibuy App"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Category</label>
                    <select
                      value={projectForm.category}
                      onChange={e => setProjectForm({...projectForm, category: e.target.value})}
                    >
                      <option value="FULL-STACK DEVELOPMENT">FULL-STACK DEVELOPMENT</option>
                      <option value="E-COMMERCE">E-COMMERCE</option>
                      <option value="WEB DESIGN">WEB DESIGN</option>
                      <option value="FRONTEND APP">FRONTEND APP</option>
                      <option value="PERSONAL BRANDING">PERSONAL BRANDING</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tech Stack (comma-separated)</label>
                    <input
                      type="text"
                      value={projectForm.techInput}
                      onChange={e => setProjectForm({...projectForm, techInput: e.target.value})}
                      placeholder="e.g., REACT, NEXT.JS, NODE.JS, FIREBASE"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Live Demo URL</label>
                      <input
                        type="url"
                        value={projectForm.liveUrl}
                        onChange={e => setProjectForm({...projectForm, liveUrl: e.target.value})}
                        placeholder="https://..."
                      />
                    </div>
                    <div className="form-group">
                      <label>GitHub Repository</label>
                      <input
                        type="url"
                        value={projectForm.githubUrl}
                        onChange={e => setProjectForm({...projectForm, githubUrl: e.target.value})}
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Project Image (File Upload or Image URL)</label>
                    <div className="image-input-container">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="file-input"
                      />
                      <input
                        type="url"
                        value={projectForm.imageUrl}
                        onChange={e => setProjectForm({...projectForm, imageUrl: e.target.value})}
                        placeholder="Or paste external image URL..."
                        className="url-input"
                      />
                    </div>
                    {projectForm.imageUrl && (
                      <div className="image-preview-box">
                        <img src={projectForm.imageUrl} alt="Preview" />
                        <button 
                          type="button" 
                          onClick={() => setProjectForm(prev => ({ ...prev, imageUrl: '' }))}
                          className="preview-remove-btn"
                        >
                          ✕ Remove Image
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Description *</label>
                    <textarea
                      rows="4"
                      value={projectForm.description}
                      onChange={e => setProjectForm({...projectForm, description: e.target.value})}
                      placeholder="Detailed overview of what the application does, its architecture, and key features..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="admin-btn admin-btn-primary" 
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? 'Publishing to Database...' : '+ Add Project to Database'}
                  </button>
                </form>
              </div>

              {/* Projects List */}
              <div className="admin-card list-panel">
                <div className="admin-card-header">
                  <h3>Database Projects ({projects.length})</h3>
                </div>

                {projectsLoading ? (
                  <p className="loading-text">Loading Firestore projects...</p>
                ) : projects.length === 0 ? (
                  <div className="empty-panel">
                    <p>No projects found in your Firestore collection.</p>
                    <span>Use the form on the left to add your first project.</span>
                  </div>
                ) : (
                  <div className="project-items-stack">
                    {projects.map(proj => (
                      <div key={proj.id} className="admin-project-item">
                        {proj.imageUrl || proj.image ? (
                          <img 
                            src={proj.imageUrl || proj.image} 
                            alt={proj.title} 
                            className="item-thumb" 
                          />
                        ) : (
                          <div className="item-thumb-placeholder">No Image</div>
                        )}
                        <div className="item-body">
                          <div className="item-header-row">
                            <h4>{proj.title}</h4>
                            <span className="item-category-tag">{proj.category}</span>
                          </div>
                          <p className="item-desc">{proj.description}</p>
                          <div className="item-tech-row">
                            {Array.isArray(proj.tech) && proj.tech.map((t, idx) => (
                              <span key={idx} className="admin-tag-pill">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="item-actions">
                          {proj.link && (
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="action-btn-link" title="Open Live Link">
                              ↗
                            </a>
                          )}
                          <button 
                            onClick={() => handleDeleteProject(proj.id, proj.title)} 
                            className="action-btn-delete"
                            title="Delete Project"
                          >
                            🗑
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="admin-tab-content">
            <div className="admin-card">
              <div className="admin-card-header">
                <h3>Contact Inquiries ({inquiries.length})</h3>
              </div>

              {inquiriesLoading ? (
                <p className="loading-text">Loading inquiries...</p>
              ) : inquiries.length === 0 ? (
                <div className="empty-panel">
                  <p>No client inquiries received yet.</p>
                  <span>Inquiries submitted through your contact form will appear here.</span>
                </div>
              ) : (
                <div className="inquiries-list-stack">
                  {inquiries.map(item => (
                    <div key={item.id} className="inquiry-row-card">
                      <div className="inquiry-header">
                        <div>
                          <h4 className="inquiry-sender">{item.firstName} {item.lastName}</h4>
                          <a href={`mailto:${item.email}`} className="inquiry-email-link">
                            {item.email}
                          </a>
                        </div>
                        <div className="inquiry-meta-right">
                          <span className="inquiry-time">
                            {item.timestamp?.toDate ? item.timestamp.toDate().toLocaleString() : 'Recent'}
                          </span>
                          <button 
                            onClick={() => handleDeleteInquiry(item.id)}
                            className="inquiry-delete-btn"
                            title="Delete this message"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      {item.subject && (
                        <div className="inquiry-subject-badge">
                          Subject: {item.subject}
                        </div>
                      )}

                      <div className="inquiry-message">
                        {item.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
