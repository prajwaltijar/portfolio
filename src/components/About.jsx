import React, { useState, useEffect } from 'react';
import profileImg from '../assets/images/ChatGPT Image Aug 19, 2026, 01_59_26 PM.png';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaRocket, FaCode, FaMobileAlt, FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiJavascript, SiHtml5, SiCss, SiGit,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss /> },
  { name: 'Git', icon: <SiGit /> },
];

const stats = [
  { number: '10+', label: 'Projects Completed' },
  { number: '1+', label: 'Years Experience' },
  { number: '9+', label: 'Core Technologies' },
];

const features = [
  { icon: <FaRocket size={20} />, title: "Modern & Fast", desc: "Clean, performant and modern web apps." },
  { icon: <FaCode size={20} />, title: "Scalable Code", desc: "Well-structured, reusable and scalable." },
  { icon: <FaMobileAlt size={20} />, title: "Responsive Design", desc: "Pixel-perfect on all devices and screen sizes." },
  { icon: <FaRegUser size={20} />, title: "User Focused", desc: "Intuitive designs that provide great user experience." },
];

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/prajwaltijar', label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/prajwal-tijare-34763631a/', label: 'LinkedIn' },
  { icon: <HiOutlineMail size={22} />, href: '#contact', label: 'Email' },
];

/* ── Animation Variants ── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
  const [matterText, setMatterText] = useState('');

  useEffect(() => {
    const role = 'Matter.';
    let characterIndex = 0;
    let deleting = false;

    const typeRole = () => {
      setMatterText(role.slice(0, characterIndex));

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

  return (
    <section id="about" className="py-24 md:py-[120px]" style={{ position: 'relative' }}>
      <div className="section-wrap relative z-10">

        {/* Top 2 columns (Hero-like About section) */}
        <div className="flex flex-col md:flex-row gap-16 items-stretch mb-12">
          {/* Left Col (Text) */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="flex flex-col justify-center w-full md:w-[55%] lg:w-[60%]"
          >
            <motion.p variants={fadeUp} style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              ABOUT ME
            </motion.p>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 24
            }}>
              Building Digital <br /> Experiences <br /> <span style={{ whiteSpace: 'nowrap' }}>That <span style={{ color: 'var(--accent)' }}>{matterText}</span><span style={{ color: 'var(--accent)', fontWeight: 300, opacity: 0.8 }}></span></span>
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
              I'm a passionate MERN Stack Developer who loves turning ideas into real-world web applications. I enjoy crafting clean, efficient, and user-friendly solutions that solve problems and create impact.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 32 }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or sharing knowledge with others.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="home-actions" style={{ marginBottom: 40 }}>
              <Link to="projects" smooth duration={600} offset={-80}>
                <button className="btn-primary" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: 14 }}>
                  View My Work <FiArrowUpRight size={18} />
                </button>
              </Link>
              <a href="https://drive.google.com/file/d/1R1VjDIhPycjl1fBinhz6WX5nOGJHXMY3/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '12px 24px', borderRadius: '8px', fontSize: 14 }}>
                Download Resume <FiArrowDown size={18} />
              </a>
            </motion.div>

            {/* Let's Connect */}
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
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
                      width: 44,
                      height: 44,
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
            </motion.div>
          </motion.div>

          {/* Right Col (Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center w-full md:w-[38%] lg:w-[35%]"
          >
            <div
              className="w-full max-w-[340px] md:max-w-none md:w-[87%]"
              style={{
                borderRadius: 32,
                overflow: 'hidden',
                border: '1px solid rgba(132, 214, 161, 0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(132, 214, 161, 0.05)',
                position: 'relative',
                background: 'rgba(12, 26, 22, 0.6)',
                display: 'inline-block'
              }}>
              {/* Subtle top-left glow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '60%', height: '40%',
                background: 'radial-gradient(circle at top left, rgba(132, 214, 161, 0.12), transparent 70%)',
                pointerEvents: 'none', zIndex: 2
              }} />

              <img
                src={profileImg}
                alt="Prajwal Tijare"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Features Row */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="home-features"
          style={{ marginBottom: 80, borderRadius: 16 }}
        >
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

        {/* Animated Stat Cards */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 64
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass-card"
              style={{
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 24,
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: 'linear-gradient(180deg, rgba(20, 36, 36, 0.4) 0%, rgba(12, 26, 22, 0.6) 100%)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Subtle Top Glow */}
              <div style={{
                position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)',
                width: 120, height: 120, background: 'var(--accent)', filter: 'blur(70px)',
                opacity: 0.15, borderRadius: '50%', pointerEvents: 'none'
              }} />

              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 64,
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: 16,
                letterSpacing: '-0.04em',
                position: 'relative',
                zIndex: 2
              }}>
                <span style={{ color: 'var(--accent)' }}>{s.number.replace('+', '')}</span>+
              </h4>
              <p style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                position: 'relative',
                zIndex: 2
              }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Technologies Centered */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <motion.h3 variants={fadeUp} style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 32, letterSpacing: '-0.02em' }}>
            My Core Technologies
          </motion.h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 900 }}>
            {skills.map((skill, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.08, backgroundColor: 'rgba(132, 214, 161, 0.1)', borderColor: 'var(--border-strong)' }} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 24px',
                fontSize: 15, fontWeight: 500, color: 'var(--text-primary)',
                background: 'var(--bg-glass)', backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)', borderRadius: '99px',
                cursor: 'default', transition: 'border-color 0.3s, background-color 0.3s'
              }}>
                <span style={{ display: 'flex', fontSize: 18, color: 'var(--accent)' }}>{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
