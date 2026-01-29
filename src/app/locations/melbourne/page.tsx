import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../shared-airport.module.css";
import Link from "next/link";
import { Plane, Briefcase, Heart, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chauffeur Service Melbourne | Luxury Cars & Transfers",
    description: "Melbourne's trusted chauffeur service. Airport transfers to MEL & AVV, corporate transport, and luxury cars for the Yarra Valley.",
};

export default function MelbourneHubPage() {
    const services = [
        {
            title: "Airport Transfers",
            desc: "Transfers to Melbourne Airport (MEL) and Avalon (AVV).",
            icon: <Plane size={32} color="#c5a467" />,
            link: "/locations/melbourne/airport-transfers"
        },
        {
            title: "Corporate Transfers",
            desc: "Executive transport for the CBD, Southbank, and Docklands.",
            icon: <Briefcase size={32} color="#1e3a8a" />,
            link: "/locations/melbourne/corporate-transfers"
        },
        {
            title: "Wedding Cars",
            desc: "Elegant vehicles for weddings in the Yarra Valley or city heritage venues.",
            icon: <Heart size={32} color="#c5a467" />,
            link: "/locations/melbourne/wedding-cars"
        },
        {
            title: "Hourly Chauffeur",
            desc: "Tours of the Great Ocean Road, Mornington Peninsula, or Yarra Valley.",
            icon: <Clock size={32} color="#1e3a8a" />,
            link: "/locations/melbourne/hourly-chauffeur"
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Chauffeur Service Melbourne"
                subtitle="Style and sophistication in Australia's cultural capital."
                showStats={false}
            />

            <section className={styles.contentSection} style={{ textAlign: 'center' }}>
                <h2 className={styles.sectionTitle}>Marvellous Melbourne</h2>
                <p className={styles.textBlock} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                    Melbourne's busy streets and trams can be a challenge. Relax in the back of an Auzzsi Chauffeur vehicle.
                    We provide the ultimate in comfort for airport transfers, major events, and private tours of Victoria's stunning regions.
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
