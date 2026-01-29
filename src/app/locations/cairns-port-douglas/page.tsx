import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Cairns & Port Douglas | Reef Transfers",
    description: "Private transfers for Cairns and Port Douglas. Airport pickups, rainforest tours, and wedding cars for your Tropical North Queensland escape.",
};

export default function CairnsHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers from Cairns Airport (CNS) to Port Douglas, Palm Cove, and Mission Beach.",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/cairns-port-douglas/cairns-port-douglas-airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Professional transport for conferences and business events in the Tropical North.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/cairns-port-douglas/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Tropical wedding specialists for beach and rainforest ceremonies.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/cairns-port-douglas/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Custom tours of the Daintree Rainforest, Kuranda, and the Atherton Tablelands.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/cairns-port-douglas/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Cairns & Port Douglas"
                subtitle="Experience the Great Barrier Reef region in cool, air-conditioned luxury."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Gateway To The Reef</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    The spectacular drive from Cairns to Port Douglas deserves a vehicle to match.
                    Sit back and enjoy the coastal views along the Captain Cook Highway while your Auzzsi Chauffeur handles the driving.
                    We service all major resorts and private properties from Mission Beach to the Daintree.
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
