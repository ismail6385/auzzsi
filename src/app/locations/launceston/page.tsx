import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Launceston | Tamar Valley Tours",
    description: "Premium transport in Launceston. Airport transfers from LST, corporate cars, and private wine tours of the Tamar Valley.",
};

export default function LauncestonHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Daily transfers to Launceston Airport (LST).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/launceston/launceston-airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive travel for the agricultural and business sectors.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/launceston/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Romantic transport for vineyard and heritage weddings.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/launceston/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tour the Tamar Valley wine region at your own pace.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/launceston/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Launceston"
                subtitle="The gateway to Northern Tasmania and the Tamar Valley."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Northern Tasmania's Finest</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Discover the charm of Launceston, one of Australia's oldest cities.
                    Whether you are visiting for the ag-business, exploring the wine route, or attending a wedding,
                    Auzzsi Chauffeur ensures your journey is comfortable and stylish.
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
