import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Gold Coast | Theme Park & Airport Transfers",
    description: "Reliable chauffeur service on the Gold Coast. Transfers to OOL & BNE airports, theme parks, and luxury wedding car hire.",
};

export default function GoldCoastHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Direct transfers to Gold Coast Airport (OOL) and Brisbane Airport (BNE).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/gold-coast/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for conferences at GCCEC and business on the Coast.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/gold-coast/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for beach, hinterland, and resort weddings.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/gold-coast/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Cruises to Mt Tamborine, Byron Bay day trips, or Theme Park transfers.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/gold-coast/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Gold Coast"
                subtitle="Australia's playground deserves premium transport. Arrive in style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Sun, Sand & Service</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the glitter strip of Surfers Paradise to the quiet cool of Mt Tamborine, the Gold Coast is diverse.
                    Auzzsi Chauffeur provides the perfect vehicle for every occasion, ensuring you enjoy the ride as much as the destination.
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
