"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import { Clock, MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";

export default function BarossaHourlyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How many wineries can we visit?",
            answer: "In a typical 6-hour tour, you can comfortably visit 4 to 5 wineries, allowing time for a relaxed lunch."
        },
        {
            question: "Do you book the tastings for us?",
            answer: "We generally recommend you book your tastings directly to ensure availability, especially for larger groups, but we can certainly provide recommendations."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Intimate wine tour for couples.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Small group wine tasting tours.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        },
        {
            category: 'Luxury Minibuses',
            name: 'Sprinter Minibus',
            desc: 'Perfect for larger groups of friends.',
            passengers: 11,
            luggage: 10,
            bags: 10,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Hero
                title="Hourly Chauffeur Barossa Valley"
                subtitle="The ultimate way to experience the Barossa. Your own private driver for the day."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Sip and Savour</h2>
                <div className={styles.textBlock}>
                    <p>
                        There is no better way to explore the Barossa Valley than with a private chauffeur.
                        Indulge in tastings at world-renowned cellar doors like Penfolds, Hentley Farm, and Rockwell
                        without worrying about the drive.
                        <br /><br />
                        Create your own itinerary or let us guide you to the region's hidden gems.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Full Day<br />Tours</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><MapPin size={28} /></div>
                        <span className={styles.featureLabel}>Expert<br />Drivers</span>
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
