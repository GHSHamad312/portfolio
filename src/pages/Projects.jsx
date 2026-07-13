import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio.js';
import './Projects.css';

const { projects } = portfolioData;

const filters = ['ALL', 'AI', 'Web', 'Mobile'];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
  exit: { opacity: 0, scale: 0.95 },
};

const levelColor = (level) => {
  if (level >= 85) return '#9b59b6'; // Epic - purple
  if (level >= 70) return '#3498db'; // Rare - blue
  if (level >= 50) return '#27ae60'; // Common - green
  return '#7f8c8d';
};

const levelRarity = (level) => {
  if (level >= 85) return 'EPIC';
  if (level >= 70) return 'RARE';
  if (level >= 50) return 'COMMON';
  return 'BASIC';
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">🗺️</div>
        <div>
          <h1 className="page-title">MY PROJECTS</h1>
          <p className="page-subtitle">Some of the epic things I've built</p>
        </div>
        <div className="filter-bar">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
            >
              {/* Card header */}
              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <div
                  className="project-level-badge"
                  style={{ borderColor: levelColor(project.level), color: levelColor(project.level) }}
                >
                  <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em' }}>
                    {levelRarity(project.level)}
                  </span>
                  <span style={{ fontWeight: 900, fontSize: '1rem', lineHeight: 1 }}>
                    LVL {project.level}
                  </span>
                </div>
              </div>

              {/* Status indicator */}
              {project.status === 'in-progress' && (
                <div className="project-status-badge">IN PROGRESS</div>
              )}

              <h3 className="project-title">{project.title}</h3>
              {project.highlight && (
                <div className="project-highlight-badge">{project.highlight}</div>
              )}
              <p className="project-description">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              {/* Level bar */}
              <div className="project-level-bar-wrap">
                <motion.div
                  className="project-level-bar"
                  style={{ background: levelColor(project.level) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.level}%` }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                />
              </div>

              {/* Actions */}
              <div className="project-actions">
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} className="project-btn-primary" target="_blank" rel="noreferrer">
                    <span>▶</span> LIVE DEMO
                  </a>
                )}
                <a
                  href={project.github}
                  className="project-btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                  style={!project.demo || project.demo === '#' ? { flex: 1 } : {}}
                >
                  <GithubIcon /> GITHUB REPO
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
