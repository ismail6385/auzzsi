import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Geelong | Avalon Airport Transfers",
    description: "Professional chauffeur service in Geelong. Transfers to Avalon Airport (AVV) and Melbourne Airport (MEL), wedding cars, and Great Ocean Road tours.",
};

export default function GeelongHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to Avalon Airport (AVV) and Melbourne Airport (MEL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/geelong/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Geelong CBD and the Waurn Ponds precinct.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/geelong/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Luxury vehicles for weddings on the Bellarine Peninsula and Surf Coast.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/geelong/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Great Ocean Road, Torquay, and local wineries.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/geelong/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Geelong"
                subtitle="Premium chauffeur services in Geelong, the Bellarine Peninsula and Surf Coast. Transport excellence."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Gateway to the Coast</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    As Victoria's second largest city, Geelong is a thriving hub of business and leisure.
                    Auzzsi Chauffeur provides the perfect connection between Geelong, Avalon Airport,
                    Melbourne, and the spectacular Great Ocean Road.
                    Experience premium comfort with our local professional chauffeurs.
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
