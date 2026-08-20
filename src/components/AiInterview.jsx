import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import imgLogin from '../assets/images/Ai inteview loging.png';
import imgDashboard from '../assets/images/userDhashbord.png';
import imgProfile from '../assets/images/userProfile.png';
import imgResume from '../assets/images/resume upload.png';
import imgMockTest from '../assets/images/mock test.png';
import imgResult from '../assets/images/interview result.png';
import imgSettings from '../assets/images/user seting.png';

const AiInterview = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const styles = {
        overlay: {
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(8, 18, 14, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
        },
        header: {
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 5%',
            backgroundColor: 'rgba(8, 18, 14, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(132, 214, 161, 0.1)',
            zIndex: 10,
        },
        title: {
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 700,
            color: 'var(--accent)',
        },
        closeBtn: {
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: 32,
            cursor: 'pointer',
            transition: 'color 0.3s',
        },
        content: {
            maxWidth: 1200,
            margin: '0 auto',
            padding: '40px 5%',
            display: 'flex',
            flexDirection: 'column',
            gap: 60,
        },
        heroSection: {
            textAlign: 'center',
            marginBottom: 20,
        },
        heroTitle: {
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: 16,
            color: 'var(--text-primary)',
        },
        heroDesc: {
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: 'var(--text-muted)',
            maxWidth: 800,
            margin: '0 auto',
            lineHeight: 1.6,
        },
        imageGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 40,
        },
        imageCard: {
            background: 'rgba(16, 32, 28, 0.4)',
            border: '1px solid rgba(132, 214, 161, 0.1)',
            borderRadius: 16,
            overflow: 'hidden',
            padding: 24,
            gap: 24,
        },
        imageWrapper: {
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
        },
        img: {
            width: '100%',
            height: 'auto',
            display: 'block',
            transition: 'transform 0.5s ease',
        },
        caption: {
            fontFamily: 'var(--font-display)',
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 12,
        },
        descText: {
            fontSize: 16,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
        },
    };

    const images = [
        {
            src: imgLogin,
            caption: 'Login & Authentication',
            bullets: [
                'Secure role-based login for all users.',
                'JWT-based session management for safety.',
                'Email verification and password recovery flow.',
                'Smooth onboarding for new candidates.',
            ],
        },
        {
            src: imgDashboard,
            caption: 'User Dashboard',
            bullets: [
                'Personalized overview of all interview activity.',
                'Track upcoming sessions and completed tests.',
                'AI-generated performance insights at a glance.',
                'Quick access to resume, profile, and settings.',
            ],
        },
        {
            src: imgProfile,
            caption: 'User Profile',
            bullets: [
                'Manage personal and professional information.',
                'Showcase skills, experience, and education.',
                'Dynamic profile used for AI interview context.',
                'Upload and update profile photo easily.',
            ],
        },
        {
            src: imgResume,
            caption: 'Resume Upload',
            bullets: [
                'Upload resume in PDF or DOCX format.',
                'AI parses resume to auto-fill profile details.',
                'Smart keyword extraction for interview relevance.',
                'Instant feedback on resume quality and gaps.',
            ],
        },
        {
            src: imgMockTest,
            caption: 'AI Mock Interview',
            bullets: [
                'Real-time AI-driven question generation.',
                'Domain-specific technical and HR questions.',
                'Voice or text-based response options.',
                'Timed sessions mimicking real interview pressure.',
            ],
        },
        {
            src: imgResult,
            caption: 'Interview Result & Analysis',
            bullets: [
                'Detailed score breakdown after each session.',
                'AI feedback on communication and accuracy.',
                'Weak area identification with improvement tips.',
                'Historical result tracking over multiple attempts.',
            ],
        },
        {
            src: imgSettings,
            caption: 'User Settings & Preferences',
            bullets: [
                'Customize interview difficulty and domain.',
                'Notification preferences for reminders.',
                'Account security settings and password change.',
                'Language and accessibility preferences.',
            ],
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={styles.overlay}
        >
            <div style={styles.header}>
                <div style={styles.title}>AI Interview Platform</div>
                <button
                    style={styles.closeBtn}
                    onClick={onClose}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                    <HiX />
                </button>
            </div>

            <div style={styles.content}>
                <div style={styles.heroSection}>
                    <h1 style={styles.heroTitle}>Practice Smarter. Interview Better.</h1>
                    <p style={styles.heroDesc}>
                        An AI-powered mock interview platform that helps candidates prepare for real-world technical and HR interviews. Features intelligent question generation, instant feedback, resume analysis, and detailed performance reports.
                    </p>
                </div>

                <div style={styles.imageGrid}>
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={styles.imageCard}
                            className="flex flex-col md:flex-row items-center"
                        >
                            {/* Image Left */}
                            <div style={styles.imageWrapper} className="w-full md:w-1/2 flex-shrink-0">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    style={styles.img}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>

                            {/* Info Right */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center" style={{ padding: '0 24px' }}>
                                <h3 style={styles.caption}>{item.caption}</h3>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i} style={styles.descText} className="flex items-start">
                                            <span style={{ color: 'var(--accent)', marginRight: 10, fontSize: 18 }}>•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default AiInterview;
