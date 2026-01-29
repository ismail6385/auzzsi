import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Mornington Peninsula | Winery Tours & Transfers",
    description: "Premier chauffeur service Mornington Peninsula. Airport transfers to Melbourne (MEL), winery tours, wedding cars, and golf transport.",
};

export default function MorningtonIndexPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Direct transfers to Melbourne Airport (MEL) and Avalon Airport (AVV).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/mornington-peninsula/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Travel in style to business retreats and golf days.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/mornington-peninsula/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Stunning vehicles for weddings at Red Hill, Sorrento, and Portsea.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/mornington-peninsula/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Private winery tours, Peninsual Hot Springs, and coastal drives.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/mornington-peninsula/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Mornington Peninsula"
                subtitle="Luxury transport for the Mornington Peninsula. Wineries, golf, and coastal escapes."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>The Peninsula Lifestyle</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Famous for its pinot noir, pristine beaches, and world-class golf courses, the Mornington Peninsula
                    is Melbourne's playground. Auzzsi Chauffeur ensures you experience it in total comfort.
                    From private winery tours to reliable airport connection, we are your local luxury connection.
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
