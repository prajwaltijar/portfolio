import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaRocket, FaCode, FaMobileAlt, FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

/* ── Animation Variants ── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const Home = () => {
  const [roleText, setRoleText] = useState('');

  useEffect(() => {
    const role = 'Full Stack Developer';
    let characterIndex = 0;
    let deleting = false;

    const typeRole = () => {
      setRoleText(role.slice(0, characterIndex));

      if (!deleting && characterIndex < role.length) {
        characterIndex += 1;
      } else if (deleting && characterIndex > 0) {
        characterIndex -= 1;
      } else {
        deleting = !deleting;
      }
    };

    const interval = setInterval(typeRole, deleting ? 70 : 110);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/prajwaltijar', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/prajwal-tijare-34763631a/', label: 'LinkedIn' },
    { icon: <HiOutlineMail size={22} />, href: '#contact', label: 'Email' },
  ];

  const features = [
    { icon: <FaRocket size={20} />, title: "Modern & Fast", desc: "Clean, performant and modern web apps." },
    { icon: <FaCode size={20} />, title: "Scalable Code", desc: "Well-structured, reusable and scalable." },
    { icon: <FaMobileAlt size={20} />, title: "Responsive Design", desc: "Pixel-perfect on all devices and screen sizes." },
    { icon: <FaRegUser size={20} />, title: "User Focused", desc: "Intuitive designs that provide great user experience." },
  ];

  return (
    <section
      id="home"
      className="home-section"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-wrap home-content"
        style={{ zIndex: 10 }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>

          {/* Availability Badge */}
          <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 14px', background: 'transparent',
              border: '1px solid var(--border-strong)', borderRadius: 99
            }}>
              <span style={{ display: 'block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--text-secondary)', letterSpacing: '0.02em' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              HELLO, I'M
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 6
            }}>
              Prajwal <span style={{ color: 'var(--accent)' }}>Tijare</span>
            </h1>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 3.5vw, 28px)',
              fontWeight: 400,
              color: 'var(--text-secondary)',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <span style={{ color: 'var(--accent)' }}>{roleText}</span><span style={{ color: 'var(--accent)', fontWeight: 300, opacity: 0.8 }}></span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            style={{
              maxWidth: 520,
              fontSize: 'clamp(14px, 1.5vw, 15px)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: 32,
              opacity: 0.9
            }}
          >
            I build modern, responsive web architectures with the MERN stack.
            Focused on crafting premium user interfaces and scalable code.
          </motion.p>

          {/* Buttons Container */}
          <motion.div variants={fadeUp} className="home-actions" style={{ marginBottom: 32 }}>
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px', fontSize: 13 }}>
                View My Work <FiArrowUpRight size={16} />
              </button>
            </Link>
            <a
              href="https://drive.google.com/file/d/15j0chlWeepq8rUgX6PheFpYR9uLwlp2E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '9px 20px', borderRadius: '8px', fontSize: 13 }}
            >
              Resume <FiArrowDown size={16} opacity={0.7} />
            </a>
          </motion.div>

          {/* Features Cards Container */}
          <motion.div variants={fadeUp} className="home-features" style={{ marginBottom: 32 }}>
            {features.map((feat, i) => (
              <div key={i} className="home-feature">
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'var(--bg-glass)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {feat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom Area: Socials & Scroll */}
          <motion.div variants={fadeUp} className="home-bottom-area">
            {/* Let's Connect */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                LET'S CONNECT
              </span>
              <div style={{ display: 'flex', gap: 12 }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
