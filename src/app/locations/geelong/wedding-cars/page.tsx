"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import { Heart, Award, Users, ChevronDown, ChevronUp, Camera } from "lucide-react";

export default function GeelongWeddingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "Do you travel to the Bellarine Peninsula?",
            answer: "Yes, we frequently service weddings at wineries and venues across the Bellarine Peninsula, including Jack Rabbit, Terindah Estate, and The Whiskery."
        },
        {
            question: "What is your minimum hire time?",
            answer: "Our wedding packages typically start from a minimum of 3 hours, but we can tailor a package to suit your specific run sheet."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Premium Sedans');

    const vehicles = [
        {
            category: 'Premium Sedans',
            name: 'Mercedes-Benz E-Class',
            desc: 'A timeless choice for bridal entry.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Transport the bridal party together in luxury.',
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
                title="Wedding Cars Geelong"
                subtitle="Stunning wedding car hire for Geelong, the Bellarine, and Surf Coast."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Coastal Elegance</h2>
                <div className={styles.textBlock}>
                    <p>
                        From the rustic charm of Bellarine wineries to the ocean backdrop of the Surf Coast,
                        Geelong offers beautiful wedding locations. Auzzsi Chauffeur adds the finishing touch
                        with our pristine fleet of luxury vehicles.
                        <br /><br />
                        Let us handle the logistics so you can focus on your special moment.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>Luxury<br />Wedding Fleet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Picture<br />Perfect</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Wedding Cars</h2>
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
                                        Full Quote
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
                    <h2 className={styles.helpTitle}>Enquire Today</h2>
                    <p className={styles.helpSubtitle}>1300 615 165</p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Date*</label>
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
