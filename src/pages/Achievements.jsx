import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.js';
import './Achievements.css';

const { achievements } = portfolioData;

const rarityConfig = {
  common:    { color: '#7f8c8d', glow: 'rgba(127,140,141,0.3)', label: 'COMMON'    },
  uncommon:  { color: '#27ae60', glow: 'rgba(39,174,96,0.3)',   label: 'UNCOMMON'  },
  rare:      { color: '#3498db', glow: 'rgba(52,152,219,0.3)',  label: 'RARE'      },
  epic:      { color: '#9b59b6', glow: 'rgba(155,89,182,0.3)',  label: 'EPIC'      },
  legendary: { color: '#c9a84c', glow: 'rgba(201,168,76,0.4)',  label: 'LEGENDARY' },
};

export default function Achievements() {
  const unlocked = achievements.filter(a => a.unlocked);
  const locked = achievements.filter(a => !a.unlocked);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">🏆</div>
        <div>
          <h1 className="page-title">ACHIEVEMENTS</h1>
          <p className="page-subtitle">
            {unlocked.length} / {achievements.length} Unlocked
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="achievement-progress-wrap glass-card">
        <div className="achievement-progress-header">
          <span>Overall Completion</span>
          <span className="text-gold">{Math.round(unlocked.length / achievements.length * 100)}%</span>
        </div>
        <div className="achievement-progress-track">
          <motion.div
            className="achievement-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${unlocked.length / achievements.length * 100}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Unlocked Achievements */}
      <h2 className="section-title" style={{ marginBottom: '16px' }}>
        <span className="section-icon">✨</span> UNLOCKED
      </h2>
      <div className="achievements-grid">
        {unlocked.map((ach, i) => {
          const rarity = rarityConfig[ach.rarity];
          return (
            <motion.div
              key={ach.id}
              className="achievement-card glass-card unlocked"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.04, boxShadow: `0 0 30px ${rarity.glow}` }}
              style={{ '--rarity-color': rarity.color, '--rarity-glow': rarity.glow }}
            >
              <div className="ach-icon-wrap" style={{ boxShadow: `0 0 20px ${rarity.glow}` }}>
                <span className="ach-icon">{ach.icon}</span>
              </div>
              <div className="ach-rarity-badge" style={{ color: rarity.color, borderColor: rarity.color }}>
                {rarity.label}
              </div>
              <h3 className="ach-title">{ach.title}</h3>
              <p className="ach-desc">{ach.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Locked Achievements */}
      {locked.length > 0 && (
        <>
          <h2 className="section-title" style={{ margin: '32px 0 16px' }}>
            <span className="section-icon">🔒</span> LOCKED
          </h2>
          <div className="achievements-grid">
            {locked.map((ach, i) => {
              const rarity = rarityConfig[ach.rarity];
              return (
                <motion.div
                  key={ach.id}
                  className="achievement-card glass-card locked"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  whileHover={{ x: [-2, 2, -2, 2, 0] }}
                  style={{ '--rarity-color': rarity.color }}
                >
                  <div className="ach-icon-wrap locked-icon">
                    <span className="ach-icon" style={{ filter: 'grayscale(1) opacity(0.4)' }}>
                      {ach.icon}
                    </span>
                    <span className="lock-overlay">🔒</span>
                  </div>
                  <div className="ach-rarity-badge" style={{ color: rarity.color + '60', borderColor: rarity.color + '30' }}>
                    {rarity.label}
                  </div>
                  <h3 className="ach-title" style={{ color: 'var(--clr-text-muted)' }}>???</h3>
                  <p className="ach-desc">{ach.description}</p>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );
}
