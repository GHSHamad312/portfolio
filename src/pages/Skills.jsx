import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.js';
import './Skills.css';

const { character, techStack } = portfolioData;

export default function Skills() {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">⚔️</div>
        <div>
          <h1 className="page-title">TECHNICAL SKILLS</h1>
          <p className="page-subtitle">Languages, frameworks, systems and tools in my arsenal</p>
        </div>
      </div>

      <div className="skills-layout">
        {/* Main Column: Grouped Tech Stack */}
        <motion.div
          className="tech-stack-main glass-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h2 className="section-title">
            <span className="section-icon">🛠️</span>
            ARSENAL & TECHNOLOGIES
          </h2>
          <div className="divider" />
          
          <div className="tech-stack-grid">
            {Object.entries(techStack || {}).map(([groupName, items]) => (
              <div key={groupName} className="tech-group-box">
                <h3 className="tech-group-heading">{groupName}</h3>
                <div className="tech-tags">
                  {items.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Quick Facts */}
        <div className="skills-right">
          <motion.div
            className="quick-facts-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-title">
              <span className="section-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </span>
              QUICK FACTS
            </h2>
            <div className="divider" />
            <ul className="quick-facts-list">
              {[
                { icon: '📅', label: 'GitHub Member Since', value: '2024'         },
                { icon: '🚀', label: 'Projects Shipped',    value: '8+'           },
                { icon: '📁', label: 'Public Repositories', value: '12'           },
                { icon: '👥', label: 'GitHub Followers',    value: '13'           },
                { icon: '🌍', label: 'Location',            value: 'Pakistan 🇵🇰' },
                { icon: '🎯', label: 'Focus Area',          value: 'AI & Full-Stack' },
                { icon: '✅', label: 'Status',              value: 'Open to Work' },
              ].map(fact => (
                <li key={fact.label} className="quick-fact-item">
                  <span className="quick-fact-icon">{fact.icon}</span>
                  <span className="quick-fact-label">{fact.label}</span>
                  <span className="quick-fact-value">{fact.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
