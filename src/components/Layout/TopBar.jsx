import { motion } from 'framer-motion';
import './TopBar.css';

function IconProjects() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  );
}

function IconAvailable() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const chips = [
  { Icon: IconProjects, label: '8+ Projects' },
  { Icon: IconAI, label: 'AI Builder' },
  { Icon: IconAvailable, label: 'Open to Work' },
];

export default function TopBar({ character }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-avatar-wrap">
          <img src="/avatar.png" alt="Hamad Ali Shah" className="topbar-avatar" />
          <div className="topbar-avatar-ring" />
          <div className="topbar-status-dot" />
        </div>

        <div className="topbar-identity">
          <div className="topbar-name-row">
            <h2 className="topbar-name">{character.name}</h2>
            <span className="topbar-level">
              <span className="topbar-level-lbl">LVL</span>
              <span className="topbar-level-num">{character.level}</span>
            </span>
          </div>
          <p className="topbar-title">{character.title}</p>
        </div>
      </div>

      <div className="topbar-right">
        {chips.map((chip, i) => (
          <motion.div
            key={chip.label}
            className="topbar-chip"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <span className="topbar-chip-icon"><chip.Icon /></span>
            <span className="topbar-chip-label">{chip.label}</span>
          </motion.div>
        ))}
      </div>
    </header>
  );
}
