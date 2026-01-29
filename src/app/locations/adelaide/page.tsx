import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Adelaide | Barossa Tours & Transfers",
    description: "Experience Adelaide in comfort. Private airport transfers, corporate cars, and luxury wine tours to Barossa Valley and McLaren Vale.",
};

export default function AdelaideHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to and from Adelaide Airport (ADL).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/adelaide/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for business in the CBD and South Australia.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/adelaide/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Classic and modern luxury vehicles for your Adelaide wedding.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/adelaide/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tour the Barossa Valley or McLaren Vale in absolute comfort.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/adelaide/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Adelaide"
                subtitle="Experience the Festival City and Wine Regions in style."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Adelaide & The Barossa</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Adelaide is the gateway to some of the world's best wine regions.
                    Auzzsi Chauffeur specializes in airport transfers and bespoke tours to the Barossa, Clare Valley, and McLaren Vale.
                    Enjoy professional service that understands the nuances of South Australian hospitality.
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
