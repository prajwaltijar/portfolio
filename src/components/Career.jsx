import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import imgCareer from '../assets/images/career.png';
import imgCareerOne from '../assets/images/career 1 (1).png';
import imgCareerTwo from '../assets/images/career 1 (2).png';
import imgCareerThree from '../assets/images/career 1 (3).png';
import imgCareerFour from '../assets/images/career 1 (4).png';

const Career = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const styles = {
        overlay: {
            position: 'fixed', inset: 0, backgroundColor: 'rgba(8, 18, 14, 0.95)',
            backdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex',
            flexDirection: 'column', overflowY: 'auto', color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
        },
        header: {
            position: 'sticky', top: 0, display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '20px 5%', backgroundColor: 'rgba(8, 18, 14, 0.9)',
            backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(132, 214, 161, 0.1)', zIndex: 10,
        },
        title: { fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--accent)' },
        closeBtn: { background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: 32, cursor: 'pointer', transition: 'color 0.3s' },
        content: { maxWidth: 1200, margin: '0 auto', padding: '40px 5%', display: 'flex', flexDirection: 'column', gap: 60 },
        heroSection: { textAlign: 'center', marginBottom: 20 },
        heroTitle: { fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' },
        heroDesc: { fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--text-muted)', maxWidth: 800, margin: '0 auto', lineHeight: 1.6 },
        imageCard: { background: 'rgba(16, 32, 28, 0.4)', border: '1px solid rgba(132, 214, 161, 0.1)', borderRadius: 16, overflow: 'hidden', padding: 24, gap: 24 },
        imageWrapper: { borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' },
        img: { width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' },
        caption: { fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12 },
        descText: { fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6 },
    };

    const images = [
        { src: imgCareer, caption: 'Career Path Home', bullets: ['Clear entry point for exploring career opportunities.', 'Simple navigation to keep students focused on their goals.', 'Modern responsive interface designed for easy discovery.'] },
        { src: imgCareerOne, caption: 'Career Roadmaps', bullets: ['Personalized paths help students understand possible next steps.', 'Structured guidance turns broad interests into actionable plans.', 'Relevant resources support informed career decisions.'] },
        { src: imgCareerTwo, caption: 'Career Exploration', bullets: ['Browse different career options in one place.', 'Useful information helps compare roles and required skills.', 'Accessible layout makes exploration quick and intuitive.'] },
        { src: imgCareerThree, caption: 'Learning Resources', bullets: ['Curated resources help users build job-ready skills.', 'Organized content supports consistent learning progress.', 'Practical recommendations connect learning with career goals.'] },
        { src: imgCareerFour, caption: 'User Dashboard', bullets: ['Authenticated users can keep track of their career journey.', 'Personalized content makes the experience more relevant.', 'Progress-focused design encourages continued exploration.'] },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} style={styles.overlay}>
            <div style={styles.header}>
                <div style={styles.title}>Career Path App</div>
                <button style={styles.closeBtn} onClick={onClose} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}>
                    <HiX />
                </button>
            </div>
            <div style={styles.content}>
                <div style={styles.heroSection}>
                    <h1 style={styles.heroTitle}>Plan Your Career With Confidence.</h1>
                    <p style={styles.heroDesc}>A career guidance platform that helps students explore career paths, discover useful resources, and build personalized roadmaps toward their goals.</p>
                </div>
                <div className="flex flex-col gap-10">
                    {images.map((item, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.1 }} style={styles.imageCard} className="flex flex-col md:flex-row items-center">
                            <div style={styles.imageWrapper} className="w-full md:w-1/2 flex-shrink-0">
                                <img src={item.src} alt={item.caption} style={styles.img} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center" style={{ padding: '0 24px' }}>
                                <h3 style={styles.caption}>{item.caption}</h3>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {item.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} style={styles.descText} className="flex items-start"><span style={{ color: 'var(--accent)', marginRight: 10, fontSize: 18 }}>•</span><span>{bullet}</span></li>)}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Career;