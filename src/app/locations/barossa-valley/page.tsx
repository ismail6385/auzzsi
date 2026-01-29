import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Barossa Valley | Wine Tours & Transfers",
    description: "Premier chauffeur service Barossa Valley. Airport transfers to Adelaide (ADL), private wine tours, and wedding cars in the famous wine region.",
};

export default function BarossaHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to and from Adelaide Airport (ADL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/barossa-valley/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for wine industry business and events.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/barossa-valley/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Beautiful cars for weddings at Seppeltsfield, Chateau Tanunda, and more.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/barossa-valley/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Custom private wine tours of the Barossa's best cellar doors.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/barossa-valley/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Barossa Valley"
                subtitle="Experience the Barossa in luxury. Private transfers and exclusive wine tours."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Australia's Wine Capital</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Home to some of the world's oldest vines and most famous wine brands, the Barossa Valley
                    is a must-visit destination. Auzzsi Chauffeur provides the perfect way to explore
                    the region safely and in style. Sit back, relax, and enjoy the views.
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
