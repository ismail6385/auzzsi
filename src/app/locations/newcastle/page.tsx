import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Newcastle | Hunter Valley Transfers",
    description: "Executive chauffeur service in Newcastle. Airport transfers to Williamtown, corporate cars, and luxury wine tours to the Hunter Valley.",
};

export default function NewcastleHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to Newcastle Airport (NTL) and Sydney Airport (SYD). Reliable connection services.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/newcastle/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Business transport for the Hunter region, mining sectors, and CBD meetings.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/newcastle/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant transport for Hunter Valley vineyard weddings and coastal ceremonies.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/newcastle/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Private charters for Hunter Valley wine tours, Port Stephens day trips, and more.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/newcastle/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Newcastle"
                subtitle="Professional transport across Newcastle, Lake Macquarie, and the Hunter Valley."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Newcastle & The Hunter</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the bustling harbour city to the vineyards of the Hunter, Auzzsi Chauffeur provides prestigious ground transport.
                    Whether you need an airport transfer to Williamtown, a corporate car for the day, or a luxury tour of the wineries,
                    we have the perfect vehicle for you.
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
