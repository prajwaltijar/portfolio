import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import imgHome from '../assets/images/frute home (1).png';
import imgHealth from '../assets/images/frute health.png';
import imgProduct from '../assets/images/frute product.png';
import imgAbout from '../assets/images/frute aboute.png';
import imgContact from '../assets/images/frute contact.png';

const Frutefy = ({ onClose }) => {
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
            textTransform: 'capitalize',
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
            src: imgHome,
            caption: 'Frutefy Home',
            bullets: [
                'Vibrant and clean landing page for organic fruits.',
                'Featured seasonal collections and special offers.',
                'Instant search and quick navigation menu.',
                'Engaging user interface promoting a healthy lifestyle.',
            ],
        },
        {
            src: imgHealth,
            caption: 'Health Benefits & Diet Tips',
            bullets: [
                'Detailed nutritional information for every fruit.',
                'Curated lists of immunity-boosting organic choices.',
                'Daily health tips integrated into the shopping experience.',
                'Articles and blogs focusing on holistic wellness.',
            ],
        },
        {
            src: imgProduct,
            caption: 'Fresh Product Catalog',
            bullets: [
                'High-quality images for all organic farm-fresh products.',
                'Easy "Add to Cart" and seamless checkout flow.',
                'Filter products by type, seasonality, and price range.',
                'Customer ratings and reviews for organic verification.',
            ],
        },
        {
            src: imgAbout,
            caption: 'About Our Farm',
            bullets: [
                'Our story of sourcing directly from local organic farmers.',
                'Commitment to sustainability and eco-friendly packaging.',
                'Farm-to-table transparency and quality guarantee.',
                'Meet the team behind the fresh deliveries.',
            ],
        },
        {
            src: imgContact,
            caption: 'Contact & Support',
            bullets: [
                'Quick communication channels for bulk orders.',
                'Instant customer support for delivery tracking.',
                'Interactive map for local store and farm locations.',
                'Newsletter signup for exclusive discounts.',
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
                <div style={styles.title}>Frutefy Platform</div>
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
                    <h1 style={styles.heroTitle}>Fresh, Organic, Delivered.</h1>
                    <p style={styles.heroDesc}>
                        A premium e-commerce platform dedicated to delivering farm-fresh, organic fruits directly to the consumer's doorstep. Combining seamless shopping, health advocacy, and farmer transparency all in one elegant app.
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
                            <div style={styles.imageWrapper} className="w-full md:w-1/2 flex-shrink-0">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    style={styles.img}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
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

export default Frutefy;
