import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
    SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs,
    SiHtml5, SiCss, SiTailwindcss, SiNodedotjs, SiExpress,
    SiMongodb, SiMysql, SiFirebase, SiGraphql, SiDocker,
    SiPostman, SiFigma, SiVercel, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
    HiOutlineLightBulb, HiOutlineCodeBracket, HiOutlineDevicePhoneMobile,
    HiOutlineBolt, HiOutlineUserGroup, HiOutlineRocketLaunch,
    HiOutlineAcademicCap, HiOutlineArrowRight
} from 'react-icons/hi2';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

/* ── Animation Variants ── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

/* ── Data ── */
const languages = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 90 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 75 },
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 60 },
    { name: 'Java', icon: FaJava, color: '#ED8B00', level: 50 },
];

const frontend = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
    { name: 'Next.js', icon: SiNextdotjs, color: '#fff', level: 85 },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: SiCss, color: '#1572B6', level: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
];

const backend = [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
    { name: 'Express.js', icon: SiExpress, color: '#fff', level: 85 },
    { name: 'REST APIs', icon: TbApi, color: '#fff', level: 90 },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', level: 70 },
];

const databases = [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 85 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 70 },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 60 },
];

const otherTools = [
    { name: 'Git & GitHub', icon: SiGit, color: '#F05032', level: 90 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 60 },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC', level: 95 },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 80 },
    { name: 'Vercel', icon: SiVercel, color: '#fff', level: 70 },
];

const competencies = [
    { title: 'Problem Solving', desc: 'Strong analytical skills to solve complex problems efficiently.', icon: HiOutlineLightBulb },
    { title: 'Clean Code', desc: 'Writing maintainable, scalable, and efficient code.', icon: HiOutlineCodeBracket },
    { title: 'UI/UX Awareness', desc: 'Building intuitive and responsive user experiences.', icon: HiOutlineDevicePhoneMobile },
    { title: 'Performance', desc: 'Optimizing applications for speed and performance.', icon: HiOutlineBolt },
    { title: 'Collaboration', desc: 'Working effectively in teams and agile environments.', icon: HiOutlineUserGroup },
];

const exploring = [
    { name: 'Next.js 14', icon: SiNextdotjs },
    { name: 'TypeScript Advanced', icon: SiTypescript },
    { name: 'System Design', icon: HiOutlineAcademicCap },
    { name: 'AWS', icon: HiOutlineRocketLaunch },
    { name: 'Prisma ORM', icon: SiMongodb },
    { name: 'Web Performance', icon: HiOutlineBolt },
];

/* ── Reusable: Skill Card with mini progress bar ── */
const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={fadeUp}
            style={{
                background: 'rgba(16, 32, 28, 0.5)',
                border: '1px solid rgba(132, 214, 161, 0.1)',
                borderRadius: 14,
                padding: '20px 20px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                transition: 'border-color 0.3s ease, transform 0.3s ease',
                cursor: 'default',
                minWidth: 0,
            }}
            whileHover={{ borderColor: 'rgba(132, 214, 161, 0.3)', y: -4 }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(132, 214, 161, 0.08)',
                    border: '1px solid rgba(132, 214, 161, 0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    <Icon size={20} style={{ color: skill.color }} />
                </div>
                <div style={{ minWidth: 0 }}>
                    <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                        color: 'var(--text-primary)', letterSpacing: '-0.01em',
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>{skill.name}</div>
                    <div style={{
                        fontSize: 12, color: 'var(--accent)', fontWeight: 500, marginTop: 2,
                    }}>{skill.level}%</div>
                </div>
            </div>
            {/* Progress bar */}
            <div style={{
                width: '100%', height: 4, borderRadius: 99,
                background: 'rgba(132, 214, 161, 0.08)',
                overflow: 'hidden',
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        height: '100%', borderRadius: 99,
                        background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                    }}
                />
            </div>
        </motion.div>
    );
};

/* ── Section Label ── */
const SectionLabel = ({ children }) => (
    <motion.div variants={fadeUp} style={{
        fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
        letterSpacing: '0.12em', color: 'var(--accent)',
        marginBottom: 20, fontFamily: 'var(--font-display)',
    }}>
        {children}
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-[120px]" style={{ paddingBottom: 0, position: 'relative' }}>
            <div className="section-wrap">

                {/* ═══ HEADER ═══ */}
                <motion.div
                    initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                        marginBottom: 72, gap: 16,
                    }}
                >
                    <motion.div variants={fadeUp} style={{ maxWidth: 740 }}>
                        <span className="section-label" style={{ textAlign: 'center', margin: '0 auto 16px' }}>My Skills</span>
                        <h2 className="section-title" style={{ marginBottom: 16 }}>
                            Technologies <span style={{ color: 'var(--accent)', whiteSpace: 'nowrap' }}>I work with</span>
                        </h2>
                        <p style={{
                            fontSize: 15, lineHeight: 1.7, color: 'var(--text-muted)',
                        }}>
                            A diverse set of technologies, frameworks, and tools that I use<br className="hidden md:block" /> to build modern, scalable, and high-performance web applications.
                        </p>
                    </motion.div>
                </motion.div>

                {/* ═══ LANGUAGES ═══ */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger} style={{ marginBottom: 48 }}>
                    <SectionLabel>Languages</SectionLabel>
                    <div className="skills-lang-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
                    }}>
                        {languages.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
                    </div>
                </motion.div>

                {/* ═══ FRONTEND ═══ */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger} style={{ marginBottom: 48 }}>
                    <SectionLabel>Frontend</SectionLabel>
                    <div className="skills-fe-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16,
                    }}>
                        {frontend.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
                    </div>
                </motion.div>

                {/* ═══ BACKEND + OTHER TOOLS (side by side) ═══ */}
                <motion.div
                    initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger}
                    className="skills-be-tools"
                    style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 48,
                        alignItems: 'start',
                    }}
                >
                    {/* Backend */}
                    <div>
                        <SectionLabel>Backend</SectionLabel>
                        <div className="skills-be-inner" style={{
                            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
                        }}>
                            {backend.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
                        </div>
                    </div>

                    {/* Other Tools Card */}
                    <div>
                        <motion.div variants={fadeUp} style={{
                            background: 'rgba(16, 32, 28, 0.5)',
                            border: '1px solid rgba(132, 214, 161, 0.1)',
                            borderRadius: 14, padding: '24px 28px',
                        }}>
                            <div style={{
                                fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
                                letterSpacing: '0.12em', color: 'var(--accent)',
                                marginBottom: 20, fontFamily: 'var(--font-display)',
                            }}>Other Tools</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {otherTools.map((tool, i) => {
                                    const Icon = tool.icon;
                                    return (
                                        <div key={tool.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <Icon size={18} style={{ color: tool.color, flexShrink: 0 }} />
                                            <span style={{
                                                fontSize: 13, fontWeight: 500, color: 'var(--text-primary)',
                                                fontFamily: 'var(--font-display)', width: 100, flexShrink: 0,
                                            }}>{tool.name}</span>
                                            <div style={{
                                                flex: 1, height: 5, borderRadius: 99,
                                                background: 'rgba(132, 214, 161, 0.08)',
                                                overflow: 'hidden',
                                            }}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${tool.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                    style={{
                                                        height: '100%', borderRadius: 99,
                                                        background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
                                                    }}
                                                />
                                            </div>
                                            <span style={{
                                                fontSize: 12, color: 'var(--text-muted)', fontWeight: 500,
                                                fontFamily: 'var(--font-display)', width: 32, textAlign: 'right', flexShrink: 0,
                                            }}>{tool.level}%</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ═══ DATABASES ═══ */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger} style={{ marginBottom: 64 }}>
                    <SectionLabel>Databases</SectionLabel>
                    <div className="skills-db-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: '50%',
                    }}>
                        {databases.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
                    </div>
                </motion.div>

                {/* ═══ CORE COMPETENCIES ═══ */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger} style={{ marginBottom: 64 }}>
                    <SectionLabel>Core Competencies</SectionLabel>
                    <div className="skills-comp-grid" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16,
                    }}>
                        {competencies.map((comp, i) => {
                            const Icon = comp.icon;
                            return (
                                <motion.div
                                    key={comp.title}
                                    variants={fadeUp}
                                    style={{
                                        background: 'rgba(16, 32, 28, 0.5)',
                                        border: '1px solid rgba(132, 214, 161, 0.1)',
                                        borderRadius: 14, padding: '24px 20px',
                                        display: 'flex', flexDirection: 'column', gap: 14,
                                        transition: 'border-color 0.3s ease, transform 0.3s ease',
                                        cursor: 'default',
                                    }}
                                    whileHover={{ borderColor: 'rgba(132, 214, 161, 0.3)', y: -4 }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div style={{
                                            width: 42, height: 42, borderRadius: 10,
                                            background: 'rgba(132, 214, 161, 0.08)',
                                            border: '1px solid rgba(132, 214, 161, 0.12)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Icon size={20} style={{ color: 'var(--accent)' }} />
                                        </div>
                                        <div style={{
                                            fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                                            color: 'var(--text-primary)', letterSpacing: '-0.01em',
                                        }}>{comp.title}</div>
                                    </div>
                                    <div style={{
                                        fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)',
                                    }}>{comp.desc}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ═══ CURRENTLY EXPLORING ═══ */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger} style={{ marginBottom: 64 }}>
                    <SectionLabel>What I'm Currently Exploring</SectionLabel>
                    <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        {exploring.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.name} style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                                    padding: '10px 20px', borderRadius: 99,
                                    background: 'rgba(16, 32, 28, 0.5)',
                                    border: '1px solid rgba(132, 214, 161, 0.12)',
                                    fontSize: 13, fontWeight: 500, color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-display)',
                                    transition: 'all 0.3s ease', cursor: 'default',
                                    flex: '1 1 auto',
                                }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(132, 214, 161, 0.35)';
                                        e.currentTarget.style.background = 'rgba(132, 214, 161, 0.06)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'rgba(132, 214, 161, 0.12)';
                                        e.currentTarget.style.background = 'rgba(16, 32, 28, 0.5)';
                                    }}
                                >
                                    <Icon size={16} style={{ color: 'var(--accent)' }} />
                                    {item.name}
                                </div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* ═══ CTA BANNER ═══ */}
                <motion.div
                    initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    style={{
                        background: 'linear-gradient(135deg, rgba(16, 32, 28, 0.8), rgba(22, 44, 36, 0.6))',
                        border: '1px solid rgba(132, 214, 161, 0.15)',
                        borderRadius: 16, padding: '28px 24px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        flexWrap: 'wrap', gap: 24,
                        marginBottom: 32,
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 44, height: 44, borderRadius: 12,
                                background: 'rgba(132, 214, 161, 0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                <HiOutlineRocketLaunch size={22} style={{ color: 'var(--accent)' }} />
                            </div>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
                                color: 'var(--text-primary)',
                            }}>Let's build something amazing together!</div>
                        </div>
                        <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                            I'm always open to discussing new opportunities and exciting projects.
                        </div>
                    </div>
                    <Link to="contact" smooth duration={500} style={{ textDecoration: 'none' }}>
                        <div
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                padding: '12px 28px', borderRadius: 10, cursor: 'pointer',
                                background: 'var(--accent)', color: '#0d1b1a',
                                fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--accent-light)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'var(--accent)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Get In Touch <HiOutlineArrowRight size={16} />
                        </div>
                    </Link>
                </motion.div>

            </div>

            {/* ── Responsive Styles ── */}
            <style>{`
        @media (max-width: 1100px) {
          #skills .skills-lang-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-fe-grid { grid-template-columns: repeat(3, 1fr) !important; }
          #skills .skills-be-tools { grid-template-columns: 1fr !important; }
          #skills .skills-comp-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #skills .skills-lang-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-fe-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-comp-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-db-grid { max-width: 100% !important; grid-template-columns: repeat(3, 1fr) !important; }
          #skills .skills-be-tools { grid-template-columns: 1fr !important; gap: 24px !important; }
          #skills .skills-be-inner { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          #skills .skills-lang-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-fe-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-comp-grid { grid-template-columns: 1fr !important; }
          #skills .skills-db-grid { max-width: 100% !important; grid-template-columns: repeat(2, 1fr) !important; }
          #skills .skills-be-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Skills;
