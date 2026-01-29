import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Central Coast | Airport Transfers",
    description: "Professional chauffeur service on the Central Coast. Airport transfers to Sydney (SYD) and Newcastle (NTL), wedding cars, and luxury transport.",
};

export default function CentralCoastHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to Sydney Airport (SYD) and Newcastle Airport (NTL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/central-coast/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Commute in comfort to Sydney CBD or Newcastle business hubs.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/central-coast/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Stunning vehicles for weddings in Terrigal, Somersby, and Yarramalong.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/central-coast/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Private tours of the beautiful Central Coast beaches and hinterland.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/central-coast/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Central Coast"
                subtitle="Premium chauffeur services in Gosford, Terrigal, and the Central Coast. Luxury travel made easy."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Relax by the Coast</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Stretching from the Hawkesbury River to Lake Macquarie, the Central Coast is a region of
                    stunning natural beauty. Auzzsi Chauffeur provides the critical link between the Coast,
                    Sydney, and Newcastle. Avoid the train or M1 driving stress and let us drive you in luxury.
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
