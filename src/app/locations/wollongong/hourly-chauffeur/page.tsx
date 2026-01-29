"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock,
    MapPin,
    DollarSign,
    ShieldCheck,
    Award,
    Users,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function WollongongHourlyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "What is the minimum booking time?",
            answer: "Our minimum booking for hourly charter in Wollongong is 2 hours."
        },
        {
            question: "Can we stop anywhere?",
            answer: "Yes, you have full control over the itinerary. Your chauffeur will follow your instructions and can also offer suggestions for scenic stops."
        },
        {
            question: "Is fuel included?",
            answer: "Yes, our hourly rates are all-inclusive, covering fuel, insurance, and the chauffeur's time within the Wollongong region."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Perfect for city tours or business meetings.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Luxury touring in a Mercedes-Benz.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Ideal for group tours to wineries or coastal sights.',
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
                title="Hourly Chauffeur Wollongong"
                subtitle="Flexible private car hire by the hour. Explore the South Coast at your own pace."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Discover the South Coast</h2>
                <div className={styles.textBlock}>
                    <p>
                        Experience the freedom of having your own private driver.
                        Whether you want to cruise across the iconic Sea Cliff Bridge, visit the Kiama Blowhole,
                        or take a trip to the Berry township, our hourly chauffeur service gives you complete flexibility.
                        <br /><br />
                        Book a car for as long as you need, and enjoy a personalised tour of the Illawarra region.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Pay By<br />The Hour</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><MapPin size={28} /></div>
                        <span className={styles.featureLabel}>Custom<br />Itinerary</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Private<br />Driver</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Touring Fleet</h2>
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
                        Hourly FAQs
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
                    <h2 className={styles.helpTitle}>Plan Your Tour</h2>
                    <p className={styles.helpSubtitle}>1300 615 165</p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Email*</label>
                            <input type="email" className={styles.textInput} placeholder="Email" />
                        </div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.inputLabel}>Tour Ideas</label>
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
