import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Canberra | Diplomatic Transport",
    description: "Secure and reliable chauffeur service in Canberra. Airport transfers, diplomatic transport, and private cars for business and leisure.",
};

export default function CanberraHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Punctual transfers to Canberra Airport (CBR).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/canberra/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Secure transport for parliamentarians, diplomats, and business leaders.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/canberra/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant transport for weddings at the Arboretum or Lakeside.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/canberra/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Visit the National Gallery, War Memorial, and Embassies at your leisure.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/canberra/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Canberra"
                subtitle="Reliable, secure, and professional transport in the Capital."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Serving The Capital</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Auzzsi Chauffeur understands the unique requirements of travel in Canberra.
                    From tight schedules for government officials to leisurely tours of the national institutions,
                    we provide discreet and timely service across the ACT.
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
