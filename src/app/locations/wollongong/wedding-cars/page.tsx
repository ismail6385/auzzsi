"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Heart,
    DollarSign,
    ShieldCheck,
    Award,
    Users,
    ChevronDown,
    ChevronUp,
    Camera,
} from "lucide-react";

export default function WollongongWeddingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How far in advance should I book?",
            answer: "We recommend booking at least 6 months in advance, especially for Saturday weddings in spring and autumn which are peak seasons in the Illawarra."
        },
        {
            question: "Do you include ribbons?",
            answer: "Yes, all our wedding packages include white ribbons and a red carpet service upon arrival at the ceremony."
        },
        {
            question: "Can we view the cars?",
            answer: "Yes, viewings can be arranged by appointment to ensure you are 100% happy with your choice of vehicle."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Premium Sedans');

    const vehicles = [
        {
            category: 'Premium Sedans',
            name: 'Mercedes-Benz E-Class',
            desc: 'Classic elegance. The perfect bridal car for modern weddings.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Great for the bridal party, offering easy access and plenty of room for dresses.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Transport your guests or extended bridal party in style and comfort.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Wedding Cars Wollongong"
                subtitle="Elegant wedding car hire for your special day in Wollongong and the South Coast."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Arrive in Style</h2>
                <div className={styles.textBlock}>
                    <p>
                        Your wedding day is one of the most important days of your life.
                        Auzzsi Chauffeur provides immaculate luxury vehicles and professional chauffeurs
                        to ensure everything runs smoothly.
                        <br /><br />
                        From the beaches of Wollongong to the vineyards of the South Coast,
                        we offer bespoke wedding packages tailored to your needs.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Ribbons &<br />Red Carpet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Photo<br />Ready</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Experienced<br />Chauffeurs</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Wedding Fleet</h2>
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
                                </div>
                                <Link href="/book">
                                    <button className={styles.btnGold} style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
                                        Check Availability
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
                        Wedding FAQs
                    </h2>
                    <div className={styles.accordion}>
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={styles.accordionItem}>
                                <button className={styles.accordionHeader} onClick={() => toggleFaq(idx)}>
                                    {faq.question}
                                    {openFaq === idx ? <ChevronUp size={20} color="#c5a467" /> : <ChevronDown size={20} color="#9ca3af" />}
                                </button>
                                {openFaq === idx && (
                                    <div className={styles.accordionContent}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.contactImage}></div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>Enquire Now</h2>
                    <p className={styles.helpSubtitle}>1300 615 165</p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Wedding Date*</label>
                            <input type="date" className={styles.textInput} />
                        </div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.inputLabel}>Details</label>
                            <textarea className={styles.textInput} rows={3}></textarea>
                        </div>
                        <button className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
