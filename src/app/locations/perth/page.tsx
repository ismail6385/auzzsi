import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Perth | Airport & Mining Transfers",
    description: "Executive transport in Perth. 24/7 airport transfers, mining & resource sector transport, and luxury cars for weddings.",
};

export default function PerthHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "24/7 transfers to Perth Airport (PER).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/perth/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Premier executive transport for the mining and resources capital.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/perth/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for weddings in Kings Park, Swan Valley, and Fremantle.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/perth/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Discover the Swan Valley, Cottesloe Beach, and Fremantle.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/perth/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Perth"
                subtitle="West Coast luxury. Professional, reliable, and always on time."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Sunset Coast</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Perth combines business dynamism with a relaxed coastal lifestyle.
                    Auzzsi Chauffeur ensures you move across the city with ease, from the Terrace to the Valley.
                    Trust our local chauffeurs for your next journey in WA.
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
