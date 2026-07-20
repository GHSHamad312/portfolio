import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Sidebar.css';

// Clean SVG icons for each nav item
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 22V18" />
      <path d="M14 22V18" />
      <path d="M6 4v10a6 6 0 0 0 12 0V4z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const navItems = [
  { num: '01', label: 'About Me', path: '/', Icon: IconUser },
  { num: '02', label: 'Skills', path: '/skills', Icon: IconCode },
  { num: '03', label: 'Projects', path: '/projects', Icon: IconGrid },
  { num: '04', label: 'Experience', path: '/experience', Icon: IconBriefcase },
  { num: '05', label: 'Achievements', path: '/achievements', Icon: IconTrophy },
  { num: '06', label: 'Contact', path: '/contact', Icon: IconMail },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-monogram">H</div>
        </div>


        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
            >
              <motion.div
                className="sidebar-item-inner"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                <span className="sidebar-icon"><item.Icon /></span>
                <span className="sidebar-label">{item.label}</span>
                <span className="sidebar-arrow">›</span>
              </motion.div>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-quote">"Code is craft."</div>
        </div>
      </aside>

      {/* Mobile Hamburger Button */}
      <button
        className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu-brand">
                <div className="sidebar-monogram" style={{ width: '32px', height: '32px', fontSize: '1rem' }}>H</div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--clr-gold-bright)' }}>HAMAD</p>
                  <p style={{ fontSize: '0.65rem', color: 'var(--clr-text-muted)' }}>Portfolio</p>
                </div>
              </div>
              <nav>
                {navItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-nav-icon"><item.Icon /></span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
