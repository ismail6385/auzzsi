import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Wollongong | Luxury Transfers South Coast",
    description: "Professional chauffeur service in Wollongong. Airport transfers to Sydney (SYD), corporate travel, and wedding cars on the South Coast.",
};

export default function WollongongHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to Sydney Airport (SYD) and Shellharbour Airport.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/wollongong/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Wollongong CBD and Innovation Campus.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/wollongong/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant vehicles for your special day in the Illawarra region.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/wollongong/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Scenic tours of Grand Pacific Drive, Kiama, and the South Coast.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/wollongong/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Wollongong"
                subtitle="Premium chauffeur services in Wollongong and the Illawarra region. Travel the South Coast in style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Gateway to the South</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the spectacular Sea Cliff Bridge to the pristine beaches of the South Coast, 
                    Wollongong is a region of natural beauty. Auzzsi Chauffeur connects you seamlessly 
                    between Wollongong, Sydney, and the wider Illawarra region. Whether for business 
                    or leisure, our professional chauffeurs ensure your journey is smooth and relaxing.
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
