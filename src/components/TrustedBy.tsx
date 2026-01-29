"use client";

import styles from './TrustedBy.module.css';
import { Star } from 'lucide-react';

export default function TrustedBy() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.ratingWrapper}>
                    <span className={styles.googleLogo}>
                        <span className={styles.googleG}>G</span>
                        <span className={styles.googleO1}>o</span>
                        <span className={styles.googleO2}>o</span>
                        <span className={styles.googleG2}>g</span>
                        <span className={styles.googleL}>l</span>
                        <span className={styles.googleE}>e</span>
                    </span>
                    <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={20} fill="#FBBC05" strokeWidth={0} />
                        ))}
                    </div>
                    <span className={styles.reviewText}>
                        <span className={styles.bold}>5.0</span> rating from <span className={styles.bold}>11,871</span> reviews
                    </span>
                </div>

                <h2 className={styles.title}>
                    Travel In Style With The Auzzsi Chauffeur Service Trusted By Top Brands
                </h2>

                <div className={styles.logosGrid}>
                    {/* Placeholder Brand Logos (Text styled as logos for now) */}
                    <div className={styles.brandLogo} style={{ fontFamily: 'serif', fontWeight: 'bold' }}>QANTAS</div>
                    <div className={styles.brandLogo} style={{ fontFamily: 'sans-serif', fontWeight: '900', letterSpacing: '-1px' }}>ANZ</div>
                    <div className={styles.brandLogo} style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>COMMONWEALTH</div>
                    <div className={styles.brandLogo} style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>VIRGIN</div>
                    <div className={styles.brandLogo} style={{ fontFamily: 'serif', textTransform: 'uppercase' }}>Marriott</div>
                    <div className={styles.brandLogo} style={{ fontFamily: 'sans-serif', fontWeight: '300' }}>Hilton</div>
                </div>
            </div>

            <style jsx>{`
                .logosGrid {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                    opacity: 0.6;
                }
                .brandLogo {
                    font-size: 1.5rem;
                    color: #fff;
                }
                @media (max-width: 768px) {
                    .logosGrid {
                        gap: 1.5rem;
                    }
                    .brandLogo {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </section>
    );
}
