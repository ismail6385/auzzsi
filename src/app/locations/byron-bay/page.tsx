import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Byron Bay | Ballina Airport Transfers",
    description: "Relax in style. Luxury transfers from Ballina & Gold Coast Airports to Byron Bay. Private cars for festivals, weddings, and retreats.",
};

export default function ByronHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Service to Ballina Byron Gateway (BNK) and Gold Coast Airport (OOL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/byron-bay/ballina-byron-bay-airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Discreet transport for retreats, festivals, and business events.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/byron-bay/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Breathtaking vehicles for your Byron Bay or Hinterland wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/byron-bay/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Explore Newrybar, Bangalow, and Crystal Castle in air-conditioned comfort.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/byron-bay/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Ballina & Byron Bay"
                subtitle="The premier transport service for the Northern Rivers region."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Coastal Chill, First Class Service</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Navigate the winding roads of the Hinterland and the bustle of Jonson Street with ease.
                    Auzzsi Chauffeur brings a touch of professionalism to the laid-back luxury of Byron Bay.
                    Perfect for airport arrivals, wedding parties, and exploring the region in style.
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
