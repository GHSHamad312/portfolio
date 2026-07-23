import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.js';
import './Experience.css';

const { experience } = portfolioData;

const typeIcon = {
  work: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  education: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};
const typeLabel = { work: 'QUEST', education: 'TRAINING' };

export default function Experience() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="13" y2="16" />
          </svg>
        </div>
        <div>
          <h1 className="page-title">EXPERIENCE</h1>
          <p className="page-subtitle">My journey through the realm of technology</p>
        </div>
      </div>

      <div className="timeline">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="timeline-marker">
              <motion.div
                className="timeline-dot"
                whileHover={{ scale: 1.15, boxShadow: '0 0 25px rgba(201, 168, 76, 0.4)' }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span>{typeIcon[item.type]}</span>
              </motion.div>
              {i < experience.length - 1 && <div className="timeline-line" />}
            </div>

            <motion.div
              className="timeline-card glass-card"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <div className="timeline-card-header">
                <div>
                  <div className="timeline-type-badge">{typeLabel[item.type]}</div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.org}</p>
                  {item.location && (
                    <p className="timeline-location">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}>
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {item.location}
                    </p>
                  )}
                </div>
                <div className="timeline-period">{item.period}</div>
              </div>
              <div className="divider" />
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
