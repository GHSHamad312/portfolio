import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio.js';
import StatBar from '../components/UI/StatBar.jsx';
import './Home.css';

const { character, quests, latestAchievement } = portfolioData;

const socialLinks = [
  { label: 'GitHub', href: character.socials.github, icon: <GithubIcon /> },
  { label: 'LinkedIn', href: character.socials.linkedin, icon: <LinkedinIcon /> },
  { label: 'Email', href: character.socials.email, icon: <MailIcon /> },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* Animated count-up hook */
function useCountUp(target, duration = 1500, delay = 500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const num = parseInt(target, 10);
      if (isNaN(num)) { setCount(target); return; }
      let start = 0;
      const step = Math.max(1, Math.floor(num / (duration / 30)));
      const timer = setInterval(() => {
        start += step;
        if (start >= num) { setCount(num); clearInterval(timer); }
        else setCount(start);
      }, 30);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return typeof target === 'string' && isNaN(parseInt(target, 10)) ? target : count;
}

function CountUpStat({ value, label, delay }) {
  const display = useCountUp(value, 1200, delay);
  return (
    <motion.div className="stat-box" variants={itemVariants}>
      <span className="stat-box-value">{display}{typeof value === 'string' && value.includes('+') ? '+' : ''}</span>
      <span className="stat-box-sublabel">{label}</span>
    </motion.div>
  );
}

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'M HAMAD";
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setTypedText('');
    const timer = setInterval(() => {
      if (idx.current < fullText.length) {
        setTypedText(fullText.slice(0, idx.current + 1));
        idx.current++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-bg">
        <img src="/fantasy_bg.png" alt="" className="home-bg-img" />
        <div className="home-bg-overlay" />
      </div>

      <div className="home-grid">
        <div className="hero-main">
          <motion.p className="hero-welcome" variants={itemVariants}>
            WELCOME, TRAVELER!
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            {typedText}
            <span className="cursor">|</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Computer Science Student<br />&amp; Developer
          </motion.p>

          <motion.p className="hero-bio" variants={itemVariants}>
            {character.bio}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="/projects" className="btn-primary">
              <span>START JOURNEY</span>
            </a>
            <a href={character.socials.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="social-btn" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </motion.div>

          <motion.div className="stats-row" variants={itemVariants}>
            <CountUpStat value="12" label="Public Repos" delay={600} />
            <CountUpStat value="13" label="GitHub Followers" delay={900} />
            <CountUpStat value="2024" label="GitHub Since" delay={1050} />
          </motion.div>
        </div>

        <div className="hero-side">
          <motion.div className="quest-log glass-card" variants={itemVariants}>
            <h3 className="panel-title">
              <span>QUEST LOG</span>
            </h3>
            <div className="divider" />
            <ul className="quest-list">
              {quests.map((q, i) => (
                <motion.li
                  key={i}
                  className={`quest-item ${q.done ? 'done' : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <span className="quest-check">{q.done ? '✓' : '○'}</span>
                  <span className="quest-label">{q.label}</span>
                  <span className="quest-progress">
                    {q.infinite ? '∞' : `${q.current}/${q.max}`}
                  </span>
                  {/* Progress bar for incomplete quests */}
                  {!q.done && !q.infinite && (
                    <div className="quest-bar">
                      <motion.div
                        className="quest-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${(q.current / q.max) * 100}%` }}
                        transition={{ duration: 1.2, delay: 0.8 + i * 0.1 }}
                      />
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="latest-achievement glass-card" variants={itemVariants}>
            <h3 className="panel-title">
              <span>LATEST ACHIEVEMENT</span>
            </h3>
            <div className="divider" />
            <div className="achievement-display">
              <motion.div
                className="achievement-icon-big"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {latestAchievement.icon}
              </motion.div>
              <div>
                <p className="achievement-title">{latestAchievement.title}</p>
                <p className="achievement-subtitle">{latestAchievement.subtitle}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="available-badge" variants={itemVariants}>
            <span className="available-dot" />
            <span>Available for opportunities</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
