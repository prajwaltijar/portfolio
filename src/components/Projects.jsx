import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import imgPowerfit from '../assets/images/powerfit.png';
import imgHospitalAdmin from '../assets/images/hospital Admin.png';

const projects = [
  {
    title: 'Career Path App',
    desc: 'Career guidance platform helping students explore different paths and resources. Features user authentication and personalized roadmaps.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: null, // Add your image path here later
    link: 'https://prajwalsondawalek.netlify.app/',
    github: '#',
  },
  {
    title: 'Traihub',
    desc: 'A comprehensive fitness training platform featuring workout plans, membership services, and an admin dashboard for user management.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: imgPowerfit, // Add your image path here later
    link: '#',
    github: '#',
    isTraihub: true,
  },
  {
    title: 'Hospital Management',
    desc: 'An advanced healthcare platform ensuring seamless interactions between patients, doctors, in-house pharmacy, and reception operations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: imgHospitalAdmin, // Added hospital image
    link: '#',
    github: '#',
    isHospital: true,
  },
];

/* ── Animation Variants ── */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Styles ── */
const styles = {
  section: {
    paddingTop: 120,
    paddingBottom: 120,
    position: 'relative',
  },
  headerWrap: {
    marginBottom: 72,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  subtitle: {
    maxWidth: 640,
    fontSize: 'clamp(15px, 2.5vw, 17px)',
    lineHeight: 1.7,
    color: 'var(--text-muted)',
  },
  titleHighlight: {
    color: 'var(--accent)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 28,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    padding: 0,
    borderRadius: 16,
    background: 'rgba(16, 32, 28, 0.5)',
    border: '1px solid rgba(132, 214, 161, 0.1)',
    transition: 'border-color 0.4s ease, transform 0.4s ease',
    cursor: 'pointer',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 10',
    borderRadius: '12px 12px 0 0',
    overflow: 'hidden',
    background: 'linear-gradient(145deg, rgba(20, 38, 32, 0.8), rgba(10, 22, 18, 0.9))',
    borderBottom: '1px solid rgba(132, 214, 161, 0.08)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(160deg, rgba(22, 44, 36, 0.6) 0%, rgba(8, 18, 14, 0.8) 100%)',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  iconBadge: {
    position: 'absolute',
    bottom: -18,
    left: 24,
    width: 42,
    height: 42,
    borderRadius: 12,
    background: 'rgba(16, 32, 28, 0.95)',
    border: '1px solid rgba(132, 214, 161, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent)',
    fontSize: 20,
    zIndex: 2,
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
  },
  cardContent: {
    padding: '30px 24px 24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: 12,
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--text-muted)',
    marginBottom: 24,
    flex: 1,
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 'auto',
  },
  techPill: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--accent)',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.01em',
    padding: '6px 14px',
    borderRadius: 99,
    border: '1px solid rgba(132, 214, 161, 0.15)',
    background: 'rgba(132, 214, 161, 0.05)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  githubBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: '14px 36px',
    background: 'transparent',
    color: 'var(--text-primary)',
    fontWeight: 500,
    fontSize: 15,
    border: '1px solid rgba(132, 214, 161, 0.2)',
    borderRadius: 99,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

const Projects = ({ onExploreTraihub, onExploreHospital }) => {
  return (
    <section id="projects" style={styles.section}>
      <div className="section-wrap relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          style={styles.headerWrap}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Projects <span style={styles.titleHighlight}>Showcase</span>
          </h2>
          <p style={styles.subtitle}>
            A collection of robust full-stack applications.<br />
            Focusing on intuitive interfaces and scalable architectures that solve real-world problems.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          style={styles.grid}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={styles.card}
              whileHover={{ borderColor: 'rgba(132, 214, 161, 0.3)', y: -6 }}
              transition={{ duration: 0.35 }}
            >
              {/* Image Area */}
              <div style={styles.imageContainer}>
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} style={styles.projectImage} />
                ) : (
                  <div style={styles.imagePlaceholder}>
                    {/* Empty placeholder — add your images later */}
                  </div>
                )}
                {/* Icon Badge */}
                <div style={styles.iconBadge}>
                  <HiOutlineCodeBracket />
                </div>
              </div>

              {/* Card Content */}
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{proj.title}</h3>
                <p style={styles.cardDesc}>{proj.desc}</p>

                {/* Tech Pills */}
                <div style={styles.techRow}>
                  {proj.tech.map((t, j) => (
                    <span key={j} style={styles.techPill}>{t}</span>
                  ))}
                </div>

                {proj.isTraihub && (
                  <button
                    onClick={() => onExploreTraihub && onExploreTraihub()}
                    style={{
                      marginTop: 20,
                      padding: '10px 20px',
                      background: 'var(--accent)',
                      color: 'var(--bg-deep)',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Explore More
                  </button>
                )}
                {proj.isHospital && (
                  <button
                    onClick={() => onExploreHospital && onExploreHospital()}
                    style={{
                      marginTop: 20,
                      padding: '10px 20px',
                      background: 'var(--accent)',
                      color: 'var(--bg-deep)',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Explore More
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore GitHub Button */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}
        >
          <a
            href="https://github.com/prajwaltijar?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.githubBtn}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(132, 214, 161, 0.5)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.background = 'rgba(132, 214, 161, 0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(132, 214, 161, 0.2)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FaGithub size={18} /> Explore GitHub
          </a>
        </motion.div>

      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 1024px) {
          #projects .section-wrap > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          #projects .section-wrap > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
