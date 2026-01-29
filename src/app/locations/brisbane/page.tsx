import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Brisbane | Corporate & Airport Transfers",
    description: "Brisbane's leading chauffeur service. Executive transfers to Brisbane Airport & CBD, wedding cars, and private drivers for the River City.",
};

export default function BrisbaneHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Express transfers to Brisbane Airport (BNE) Domestic and International.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/brisbane/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive CBD travel, Roadshows, and Government transport.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/brisbane/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury wedding transport for the River City and surrounds.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/brisbane/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "As-directed hire for Brisbane City, Mt Coot-tha, and beyond.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/brisbane/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Brisbane"
                subtitle="Premium transport in the River City. Business or leisure, travel in style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Brisbane's Best</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Brisbane is a city on the move. Auzzsi Chauffeur keeps pace with professional drivers and a fleet of luxury vehicles.
                    From the Eagle Street Pier to Fortitude Valley and the Airport, we ensure a smooth, comfortable ride every time.
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
