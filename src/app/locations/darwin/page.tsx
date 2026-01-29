import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Darwin | Airport Transfers & Private Cars",
    description: "Premium chauffeur service in Darwin. Book luxury airport transfers, corporate cars, and private tours to Kakadu & Litchfield. Reliable & professional.",
};

export default function DarwinHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Seamless transfers to and from Darwin International Airport (DRW). Meet & Greet included.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/darwin/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for government business, oil & gas sectors, and VIPs.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/darwin/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant vehicles for your special day at Mindil Beach or the Botanical Gardens.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/darwin/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "As-directed service for tours of Litchfield, Kakadu, or Darwin City.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/darwin/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Darwin"
                subtitle="Australia's Top End luxury transport specialists. Reliable, air-conditioned comfort for every journey."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Welcome To Darwin</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Experience the unique blend of tropical lifestyle and business opportunity in Darwin.
                    Auzzsi Chauffeur ensures you navigate the heat and distance in absolute comfort.
                    From the Waterfront Precinct to Palmerston and beyond, our professional chauffeurs are at your service.
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
