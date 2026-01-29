import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Sunshine Coast | Noosa Transfers",
    description: "Relaxed luxury on the Sunshine Coast. Airport transfers to MCY & BNE, wedding cars for Noosa & Maleny, and private charters.",
};

export default function SunshineCoastHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Direct transfers to Sunshine Coast Airport (MCY) and Brisbane Airport (BNE).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/sunshine-coast/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive travel between Maroochydore, Noosa, and Brisbane CBD.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/sunshine-coast/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Stunning vehicles for beach weddings in Noosa or hinterland ceremonies in Maleny.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/sunshine-coast/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Explore the Glass House Mountains, Eumundi Markets, and Hastings Street at your own pace.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/sunshine-coast/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Sunshine Coast"
                subtitle="Luxury transport from Caloundra to Noosa and the Hinterland."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Relaxed Luxury</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Auzzsi Chauffeur brings premium service to the Sunshine Coast lifestyle.
                    Avoid the hassle of parking and traffic during peak seasons and enjoy a seamless ride.
                    Whether for business in the new CBD or a weekend retreat in Montville, we facilitate your journey.
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
