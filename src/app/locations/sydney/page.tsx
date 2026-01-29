import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Sydney | Luxury Car Hire & Airport Transfers",
    description: "Sydney's premier chauffeur service. Luxury airport transfers (SYD), corporate cars, wedding hire, and private tours of the Harbour City.",
};

export default function SydneyHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Premier transfers to Sydney Kingsford Smith (SYD).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/sydney/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for the CBD, North Sydney, and Barangaroo.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/sydney/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for your harbourside or Northern Beaches wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/sydney/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Blue Mountains, Hunter Valley, or City sights.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/sydney/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Sydney"
                subtitle="World-class transport for a world-class city. Travel Sydney in style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Emerald City</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the Harbour Bridge to Bondi Beach, Sydney is diverse and dynamic.
                    Auzzsi Chauffeur helps you beat the traffic and arrive relaxed.
                    Our professional chauffeurs provide the highest standard of service for every journey.
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
