import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio.js';
import './Contact.css';

const { character } = portfolioData;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:ghshamad312@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <div className="page-header-decor">✉️</div>
        <div>
          <h1 className="page-title">CONTACT</h1>
          <p className="page-subtitle">Send a raven — I usually respond within 24 hours</p>
        </div>
      </div>

      <div className="contact-layout">
        {/* Form */}
        <motion.div
          className="contact-form-wrap glass-card"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="section-title">
            <span className="section-icon">📨</span>
            SEND A MESSAGE
          </h2>
          <div className="divider" />

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Adventurer's name..."
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Your quest description..."
                rows={5}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn-primary contact-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sent ? '✓ RAVEN SENT!' : '⚔️ SEND RAVEN'}
            </motion.button>
          </form>
        </motion.div>

        {/* Info */}
        <div className="contact-info">
          <motion.div
            className="contact-info-card glass-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="section-title">
              <span className="section-icon">🗺️</span>
              FIND ME
            </h2>
            <div className="divider" />
            <div className="contact-links">
              {[
                { icon: '📧', label: 'Email',    value: 'ghshamad312@gmail.com',        href: character.socials.email },
                { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/ghshamad',      href: character.socials.linkedin },
                { icon: '🐙', label: 'GitHub',   value: 'github.com/GHSHamad312',       href: character.socials.github },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="contact-link-item">
                  <span className="contact-link-icon">{link.icon}</span>
                  <div>
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                  <span className="contact-link-arrow">›</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-status-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <div className="status-row">
              <span className="available-dot" style={{ width: '10px', height: '10px', flexShrink: 0 }} />
              <div>
                <p className="status-title">AVAILABLE FOR HIRE</p>
                <p className="status-sub">Open to internships, projects & collaborations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
