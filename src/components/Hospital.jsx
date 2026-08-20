import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import imgLogin from '../assets/images/login.png';
import imgAdmin from '../assets/images/hospital Admin.png';
import imgDoctor from '../assets/images/doctor.png';
import imgPatient from '../assets/images/patient.png';
import imgPharmacy from '../assets/images/pharmacy.png';
import imgReceptionist from '../assets/images/recepsionist.png';

const Hospital = ({ onClose }) => {
    // Prevent scrolling on the underlying body
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
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
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: 12,
        },
        descText: {
            fontSize: 16,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
        }
    };

    const images = [
        {
            src: imgAdmin,
            caption: 'Hospital Admin Panel',
            bullets: [
                'Complete overview of hospital operations & staff.',
                'Manage wards, departments, and payroll.',
                'Real-time revenue and patient admission charts.',
                'Ensure compliance and operational efficiency.'
            ]
        },
        {
            src: imgDoctor,
            caption: 'Doctor Portal',
            bullets: [
                'View upcoming appointments and patient queues.',
                'Access comprehensive patient medical history.',
                'Prescribe medications and recommend tests.',
                'Manage personal schedule and consultations.'
            ]
        },
        {
            src: imgPatient,
            caption: 'Patient Ecosystem',
            bullets: [
                'Book appointments directly with preferred specialists.',
                'Access lab reports and prescriptions securely.',
                'Monitor billing and health records continuously.',
                'Communicate with doctors post-consultation.'
            ]
        },
        {
            src: imgPharmacy,
            caption: 'In-house Pharmacy',
            bullets: [
                'Manage drug inventories and stock levels automatically.',
                'Fulfill electronic prescriptions directly from doctors.',
                'Alerts for low stock and expiring medicines.',
                'Integrated point-of-sale for outpatients.'
            ]
        },
        {
            src: imgReceptionist,
            caption: 'Reception & Front Desk',
            bullets: [
                'Handle patient registrations and check-ins swiftly.',
                'Coordinate room allocations and doctor availability.',
                'Process payments, invoices, and insurance claims.',
                'Maintain dynamic waiting room queues.'
            ]
        },
        {
            src: imgLogin,
            caption: 'Secure Authentication',
            bullets: [
                'Role-based access control (Admin, Doctor, Patient).',
                'Advanced encryption for all sensitive health data.',
                'Password recovery and multi-factor capabilities.',
                'Compliant with data protection regulations.'
            ]
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
                <div style={styles.title}>Hospital System</div>
                <button
                    style={styles.closeBtn}
                    onClick={onClose}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                    <HiX />
                </button>
            </div>

            <div style={styles.content}>
                <div style={styles.heroSection}>
                    <h1 style={styles.heroTitle}>Next-Gen Healthcare Management</h1>
                    <p style={styles.heroDesc}>
                        A robust, full-scale Hospital Management System designed to bridge the gap between healthcare providers and patients. Features dedicated portals for administrative, medical, pharmacy, and front-desk workflows.
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
                            {/* Image Left Side */}
                            <div style={styles.imageWrapper} className="w-full md:w-1/2 flex-shrink-0">
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    style={styles.img}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>

                            {/* Info Right Side */}
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

export default Hospital;
