import { motion } from 'framer-motion';
import './StatBar.css';

export default function StatBar({ label, value, max = 100, color = '#c9a84c', delay = 0 }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="stat-bar-wrap">
      <div className="stat-bar-header">
        <span className="stat-bar-label">{label}</span>
        <span className="stat-bar-value" style={{ color }}>{value}</span>
      </div>
      <div className="stat-bar-track">
        <motion.div
          className="stat-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
        <div className="stat-bar-glow" style={{ background: color }} />
      </div>
    </div>
  );
}
