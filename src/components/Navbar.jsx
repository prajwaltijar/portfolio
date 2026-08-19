import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-2 left-0 right-0 w-full z-50 py-6" style={{ borderBottom: '3px solid rgba(255, 255, 255, 0.04)', paddingBottom: 15, backdropFilter: 'blur(8px)' }}>
        <div className="section-wrap">
          <div className="flex items-center justify-between">

            {/* Logo (Outside the Pill) */}
            <Link to="home" smooth duration={500} className="cursor-pointer select-none">
              <span style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.04em' }}>
                prajwal<span style={{ color: 'var(--accent)' }}>.</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center" style={{ gap: 48 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth duration={500}
                  spy offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  className="cursor-pointer transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 14,
                    fontWeight: 500,
                    color: activeSection === link.to ? 'var(--accent)' : 'var(--text-primary)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = activeSection === link.to ? 'var(--accent)' : 'var(--text-primary)';
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Link to="contact" smooth duration={500} style={{ marginLeft: 8 }}>
                <div style={{
                  padding: '8px 20px',
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '99px',
                  color: 'var(--accent)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
                  onMouseEnter={e => { e.currentTarget.style.border = '1px solid var(--accent)'; e.currentTarget.style.background = 'rgba(132, 214, 161, 0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.border = '1px solid var(--border-subtle)'; e.currentTarget.style.background = 'transparent' }}
                >
                  Let's Talk <span style={{ fontSize: 16 }}>→</span>
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger - Dark Theme */}
            <button
              className="md:hidden cursor-pointer"
              style={{ background: 'var(--bg-glass)', backdropFilter: 'blur(16px)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', fontSize: 24, padding: 8, borderRadius: '50%' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center p-6"
            style={{ background: 'var(--bg-deep)', paddingTop: 80 }}
          >
            <div className="flex flex-col items-center w-full" style={{ gap: 40 }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.to} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                  <Link
                    to={link.to} smooth duration={500} onClick={() => setMobileOpen(false)}
                    className="cursor-pointer"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 48,
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
