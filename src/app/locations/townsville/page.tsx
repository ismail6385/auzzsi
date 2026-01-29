import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Townsville | Airport Transfers TSV",
    description: "Professional chauffeur service in Townsville. Transfers to Townsville Airport (TSV), corporate travel, and wedding cars in North Queensland.",
};

export default function TownsvilleHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Reliable transfers to Townsville Airport (TSV).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/townsville/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for Townsville business and government.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/townsville/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant wedding cars for your special day in the tropics.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/townsville/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Private tours of The Strand, Castle Hill, and beyond.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/townsville/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Townsville"
                subtitle="Premier chauffeur services in Townsville and North Queensland. Excellence in motion."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Capital of the North</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Townsville is a vibrant tropical city and the perfect gateway to the Great Barrier Reef.
                    Auzzsi Chauffeur provides professional, air-conditioned luxury transport to ensure you
                    stay cool and comfortable. From airport pickups to corporate events, we are the trusted choice in North Queensland.
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
