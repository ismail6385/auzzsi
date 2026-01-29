"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock, DollarSign, ShieldCheck, Plane, Award, Users, Briefcase, ChevronDown, ChevronUp
} from "lucide-react";

export default function PerthAirportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How Long Is The Trip From Perth Airport To Perth CBD?",
            answer: "Perth Airport (PER) is located approximately 12-15km from the city centre. The drive typically takes 20-30 minutes, however, during peak traffic times, travel can take up to 45 minutes."
        },
        {
            question: "Where Will My Chauffeur Meet Me At Perth Airport?",
            answer: "Your chauffeur will greet you in the arrivals hall with a name sign. For international flights (T1), this is immediately after customs near the meeting point. For domestic terminals (T2, T3, T4), your driver will meet you by the baggage carousel designated for your flight."
        },
        {
            question: "How Much Does A Perth Airport Transfer Cost?",
            answer: "Our fixed-price transfers start from competitive rates. For an exact quote based on your vehicle preference and destination, please use our Instant Quote tool above. We offer transparent pricing with no hidden fees."
        },
        {
            question: "How Much Luggage Can My Car Accommodate?",
            answer: "Our Executive Sedans can carry 4 passengers and 2 large suitcases. For larger groups with more luggage, our Mercedes V-Class People Movers can accommodate up to 7 passengers and 6 large bags comfortably."
        },
        {
            question: "Will My Chauffeur Wait If My Flight Is Delayed?",
            answer: "Absolutely. We track all incoming flights in real-time. If your flight is delayed, we adjust your pickup time automatically, ensuring your driver is there when you land at no extra cost to you."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');
    // Using same vehicles for now
    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Ideal for up to 4 passengers with light luggage. Features leather seating, climate control, and a smooth quiet ride for corporate transfers.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Top-tier luxury from Mercedes-Benz or Audi. Perfect for VIPs requiring maximum comfort, style and prestige.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Spacious and commanding presence. Audi Q7 or similar, offering extra legroom and luggage capacity for families or groups.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The gold standard for group travel. Seats up to 7 people in absolute luxury with conference style seating options.',
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
                        <Link href="/locations/perth">Perth</Link> <span>&gt;</span>
                        Perth Airport Transfers
                    </div>
                    <h1 className={styles.heroTitle}>Perth Airport Transfers</h1>
                    <p className={styles.heroSubtitle}>Reliable Perth Airport Transfers</p>
                    <div className={styles.heroButtons}>
                        <Link href="/book"><button className={styles.btnGold}>Book Now</button></Link>
                        <button className={styles.btnOutline}>Instant Quote</button>
                    </div>
                </div>
            </section>
            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Reliable Perth Airport Transfers</h2>
                <div className={styles.textBlock}>
                    <p>
                        Auzzsi Chauffeur is the preferred choice for mining executives, corporate travellers and
                        holidaymakers in Perth. We service all terminals at Perth Airport (PER) and provide
                        transfers to Fremantle, the City, and regional WA.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
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
            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>A Vehicle To Suit Every Traveller</h2>
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

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Frequently Asked Questions
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

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}></div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>Contact Perth Support</h2>
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
