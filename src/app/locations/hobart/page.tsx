import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Hobart | Tasmania Private Tours",
    description: "Discover Hobart in luxury. Airport transfers to HBA, private tours of MONA & Mt Wellington, and wedding car hire.",
};

export default function HobartHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to and from Hobart International Airport (HBA).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/hobart/hobart-airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Business travel in the Hobart CBD and surrounds.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/hobart/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Stunning vehicles for weddings at MONA, wineries, or historic venues.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/hobart/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Private tours to Mt Wellington, Richmond, and the Coal River Valley.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/hobart/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Hobart"
                subtitle="Explore Tasmania's capital in comfort with premium local knowledge."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Discover Hobart</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    From the heights of kunanyi / Mount Wellington to the depths of MONA, Hobart is a city of contrasts.
                    Auzzsi Chauffeur provides the reliable transport you need to navigate the hills and harbour.
                    Enjoy a warm Tasmanian welcome with our professional service.
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
