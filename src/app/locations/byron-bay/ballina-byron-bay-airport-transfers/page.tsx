"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock, DollarSign, ShieldCheck, Plane, Award, Users, Briefcase, ChevronDown, ChevronUp
} from "lucide-react";

export default function ByronBayAirportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How far is Ballina Airport from Byron Bay?",
            answer: "Ballina Byron Gateway Airport (BNK) is about a 30-minute drive from Byron Bay."
        },
        {
            question: "Do you pick up from Gold Coast Airport as well?",
            answer: "Yes, we transfer passengers from both Ballina (BNK) and Gold Coast (OOL) airports to Byron Bay."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');
    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Comfortable sedan for airport transfers.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Luxury van for groups and wedding parties.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span>
                        <Link href="/locations">Locations</Link> <span>&gt;</span>
                        <Link href="/locations/byron-bay">Byron Bay</Link> <span>&gt;</span>
                        Airport Transfers
                    </div>
                    <h1 className={styles.heroTitle}>Ballina Byron Airport Transfers</h1>
                    <p className={styles.heroSubtitle}>Start your retreat in luxury.</p>
                    <div className={styles.heroButtons}>
                        <Link href="/book"><button className={styles.btnGold}>Book Now</button></Link>
                        <button className={styles.btnOutline}>Instant Quote</button>
                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Byron Bay Chauffeurs</h2>
                <div className={styles.textBlock}>
                    <p>
                        Whether arriving at Ballina (BNK) or Gold Coast (OOL), Auzzsi Chauffeur ensures you reach your
                        Byron Bay accommodation relaxed and refreshed. Perfect for weddings, retreats, and festivals.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed Price<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet & Greet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight Tracking<br />Included</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Byron Fleet</h2>
                <div className={styles.fleetTabs}>
                    {vehicles.map((v) => (
                        <button
                            key={v.category}
                            className={`${styles.tabBtn} ${activeVehicle === v.category ? styles.active : ''}`}
                            onClick={() => setActiveVehicle(v.category)}
                        >
                            {v.category}
                        </button>
                    ))}
                </div>

                <div className={styles.vehicleCard}>
                    {vehicles.filter(v => v.category === activeVehicle).map((v) => (
                        <div key={v.category} style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                            <div className={styles.vehicleImage}>
                                <img src={v.image} alt={v.name} />
                            </div>
                            <div className={styles.vehicleInfo}>
                                <h3 className={styles.vehicleTitle}>{v.name}</h3>
                                <p className={styles.vehicleDesc}>{v.desc}</p>

                                <div className={styles.vehicleStats}>
                                    <div className={styles.stat}><Users size={18} /> {v.passengers} Passengers</div>
                                    <div className={styles.stat}><Briefcase size={18} /> {v.luggage} Suitcases</div>
                                </div>

                                <Link href="/book">
                                    <button className={styles.btnGold} style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        FAQs: Byron Bay
                    </h2>
                    <div className={styles.accordion}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={styles.accordionItem}>
                                <button className={styles.accordionHeader} onClick={() => toggleFaq(idx)}>
                                    {faq.question}
                                    {openFaq === idx ? <ChevronUp size={20} color="#c5a467" /> : <ChevronDown size={20} color="#9ca3af" />}
                                </button>
                                {openFaq === idx && <div className={styles.accordionContent}><p>{faq.answer}</p></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.contactImage}></div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>Contact Byron Support</h2>
                    <p className={styles.helpSubtitle}>Call us 24/7 on <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span></p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Name*</label><input type="text" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Last Name*</label><input type="text" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Phone*</label><input type="tel" className={styles.textInput} /></div>
                        <div className={styles.inputGroup}><label className={styles.inputLabel}>Email*</label><input type="email" className={styles.textInput} /></div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1/-1' }}><label className={styles.inputLabel}>Message</label><textarea className={styles.textInput} rows={3}></textarea></div>
                        <button className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
