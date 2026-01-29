import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Toowoomba | Wellcamp Airport Transfers",
    description: "Professional chauffeur service in Toowoomba. Transfers to Wellcamp Airport (WTB) and Brisbane, corporate travel, and wedding cars in the Darling Downs.",
};

export default function ToowoombaHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to Toowoomba Wellcamp (WTB) and Brisbane Airport (BNE).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/toowoomba/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Toowoomba business and agriculture.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/toowoomba/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant wedding cars for your special day in the Garden City.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/toowoomba/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of Queens Park, Picnic Point, and the Darling Downs.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/toowoomba/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Toowoomba"
                subtitle="Premium chauffeur services in Toowoomba and the Darling Downs. Travel in comfort and style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Garden City</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Perched on the edge of the Great Dividing Range, Toowoomba is a city of stunning gardens
                    and rich heritage. Auzzsi Chauffeur connects the region to the world with transfers
                    to Wellcamp Airport and Brisbane. Experience the difference of a professional private driver.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    textAlign: 'left'
                }}>
                    {services.map((s, idx) => (
                        <Link href={s.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard}>
                                <div style={{ marginBottom: '1.5rem' }}>{s.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {s.title}
                                </h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                    {s.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#c5a467', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                    Book Now <ChevronRight size={16} style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
