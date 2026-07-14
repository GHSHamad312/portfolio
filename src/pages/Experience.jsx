import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.js';
import './Experience.css';

const { experience } = portfolioData;

const typeIcon = { work: '⚔️', education: '📚' };
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
        <div className="page-header-decor">📋</div>
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
            {/* Timeline line and dot */}
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

            {/* Card */}
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
                    <p className="timeline-location">📍 {item.location}</p>
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
