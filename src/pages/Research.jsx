import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.js';
import './Research.css';

const { research } = portfolioData;

export default function Research() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">📜</div>
        <div>
          <h1 className="page-title">RESEARCH</h1>
          <p className="page-subtitle">Ancient scrolls of knowledge I've authored</p>
        </div>
      </div>

      <div className="research-grid">
        {research.map((paper, i) => (
          <motion.div
            key={i}
            className="scroll-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
          >
            <div className="scroll-icon">{paper.icon}</div>
            <div className="scroll-content">
              <p className="scroll-venue">{paper.venue}</p>
              <h3 className="scroll-title">{paper.title}</h3>
              <div className="divider" />
              <p className="scroll-description">{paper.description}</p>
              <div className="project-tags" style={{ marginTop: '12px' }}>
                {paper.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming soon note */}
      <motion.div
        className="coming-soon-card glass-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="coming-soon-inner">
          <span style={{ fontSize: '2rem' }}>🔮</span>
          <div>
            <h3 className="coming-soon-title">More Scrolls Incoming</h3>
            <p className="coming-soon-text">
              Currently working on new research in AI safety and distributed systems.
              Stay tuned for more publications.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
