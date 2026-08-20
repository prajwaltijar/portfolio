import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPaperPlane, FaBolt, FaShieldAlt } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMessageSquare, FiUsers, FiSend } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const bottomFeatures = [
  { icon: <FaBolt size={20} />, title: 'Quick Response', desc: 'I reply as soon as possible' },
  { icon: <FaShieldAlt size={20} />, title: 'Professional', desc: 'Quality work, every time' },
  { icon: <MdPeople size={20} />, title: 'Collaborative', desc: "Let's build something great" },
  { icon: <FaShieldAlt size={20} />, title: 'Confidential', desc: 'Your information is safe' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" style={{ paddingTop: 'clamp(80px, 12vw, 120px)', paddingBottom: 'clamp(60px, 10vw, 80px)', position: 'relative' }}>
      <div className="section-wrap relative z-10">

        {/* Main 2-col layout */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">

            {/* ── Left Column ── */}
            <motion.div variants={fadeUp} style={{ flex: '1 1 45%', display: 'flex', flexDirection: 'column', gap: 32 }}>

              <div>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: 20 }}>
                  LET'S CONNECT
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(42px, 6vw, 68px)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  marginBottom: 24
                }}>
                  Let's build<br />
                  something <span style={{ color: 'var(--accent)' }}>together.</span>
                </h2>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 360 }}>
                  Currently available for freelance projects<br />and full-time opportunities.
                </p>
              </div>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <a href="mailto:prajwaltijare@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <HiOutlineMail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>EMAIL</div>
                    <div style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500 }}>prajwaltijare@gmail.com</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', flexShrink: 0 }}>
                    <HiOutlineLocationMarker size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>LOCATION</div>
                    <div style={{ fontSize: 15, color: 'var(--text-primary)', fontWeight: 500 }}>India</div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: 12 }}>
                {[
                  { icon: <FaGithub size={18} />, href: 'https://github.com/prajwaltijar' },
                  { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/prajwal-tijare-34763631a/' },
                  { icon: <HiOutlineMail size={20} />, href: 'mailto:prajwaltijare@gmail.com' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Available For */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: 'rgba(20, 36, 36, 0.5)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 16,
                padding: '16px 20px'
              }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  <FiUsers size={18} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>AVAILABLE FOR</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                    Freelance Projects &bull; Full-time Opportunities
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Right Column: Form ── */}
            <motion.div variants={fadeUp} style={{ flex: '1 1 52%' }}>
              <div style={{
                background: 'rgba(20, 36, 36, 0.4)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 24,
                padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0
              }}>
                {/* Form Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--accent-glow)', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                    <FiMessageSquare size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-display)', marginBottom: 2 }}>Send a Message</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>I'll get back to you as soon as possible.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {/* Name + Email row */}
                  <div className="contact-name-email-grid" style={{ display: 'grid', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Your Name</label>
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="John Doe" required
                        style={{
                          width: '100%', background: 'rgba(12, 26, 22, 0.6)',
                          border: '1px solid var(--border-subtle)', borderRadius: 10,
                          padding: '12px 14px', fontSize: 14, color: 'var(--text-primary)',
                          outline: 'none', transition: 'border-color 0.3s'
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Your Email</label>
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@example.com" required
                        style={{
                          width: '100%', background: 'rgba(12, 26, 22, 0.6)',
                          border: '1px solid var(--border-subtle)', borderRadius: 10,
                          padding: '12px 14px', fontSize: 14, color: 'var(--text-primary)',
                          outline: 'none', transition: 'border-color 0.3s'
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Subject</label>
                    <input
                      type="text" name="subject" value={formData.subject} onChange={handleChange}
                      placeholder="Project Inquiry"
                      style={{
                        width: '100%', background: 'rgba(12, 26, 22, 0.6)',
                        border: '1px solid var(--border-subtle)', borderRadius: 10,
                        padding: '12px 14px', fontSize: 14, color: 'var(--text-primary)',
                        outline: 'none', transition: 'border-color 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Message</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      placeholder="Hello Prajwal, I'd like to discuss a project..."
                      rows={5} required
                      style={{
                        width: '100%', background: 'rgba(12, 26, 22, 0.6)',
                        border: '1px solid var(--border-subtle)', borderRadius: 10,
                        padding: '12px 14px', fontSize: 14, color: 'var(--text-primary)',
                        outline: 'none', resize: 'vertical', fontFamily: 'var(--font-body)',
                        transition: 'border-color 0.3s', lineHeight: 1.6
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending || sent}
                    style={{
                      width: '100%',
                      padding: '16px',
                      background: sent ? 'rgba(132, 214, 161, 0.3)' : 'var(--accent)',
                      color: sent ? 'var(--accent)' : '#0d1b1a',
                      border: 'none',
                      borderRadius: 12,
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: sending || sent ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      marginTop: 4,
                      transition: 'background 0.3s'
                    }}
                  >
                    {sent ? '✓ Message Sent!' : sending ? 'Sending...' : (<>Send Message <FiSend size={16} /></>)}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Feature Row ── */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 0,
              background: 'rgba(20, 36, 36, 0.3)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 16,
              overflow: 'hidden'
            }}
          >
            {bottomFeatures.map((feat, i) => (
              <div key={i} className="contact-bottom-feat" style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 24px',
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-glow)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {feat.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{feat.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* Footer */}
        <div style={{ marginTop: 'clamp(40px, 8vw, 80px)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'clamp(24px, 5vw, 40px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, letterSpacing: '-0.02em' }}>
            prajwal<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
          <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
            Designed & Built by Prajwal Tijare. © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

      </div>

      <style>{`
        .contact-name-email-grid {
          grid-template-columns: 1fr 1fr;
        }
        .contact-bottom-feat {
          border-right: 1px solid var(--border-subtle);
        }
        .contact-bottom-feat:last-child {
          border-right: none;
        }
        @media (max-width: 767px) {
          .contact-name-email-grid {
            grid-template-columns: 1fr;
          }
          .contact-bottom-feat {
            border-right: none;
            border-bottom: 1px solid var(--border-subtle);
          }
          .contact-bottom-feat:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
