"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { useState } from "react";
import {
    Clock,
    DollarSign,
    ShieldCheck,
    Plane,
    Award,
    Users,
    Briefcase,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function WollongongAirportPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

    const faqs = [
        {
            question: "How long is the trip from Wollongong to Sydney Airport?",
            answer: "The drive from Wollongong to Sydney Kingsford Smith Airport (SYD) via the M1 Princes Motorway typically takes 60 to 90 minutes, depending on traffic conditions at Heathcote and near the airport."
        },
        {
            question: "Do you service Shellharbour Airport (WOL)?",
            answer: "Yes, we provide transfers to and from Shellharbour Airport (Albion Park) for Link Airways flights to Melbourne and Brisbane."
        },
        {
            question: "Are your prices fixed?",
            answer: "Yes, we offer fixed-price quotes including tolls and GST. The price you see is the price you pay, with no surge pricing or hidden fees."
        },
        {
            question: "Can you pick up from Sydney International Terminal?",
            answer: "Absolutely. We monitor your flight and your chauffeur will meet you inside the Terminal 1 Arrival Hall with a name sign, ready to assist with your luggage."
        },
        {
            question: "What vehicles are available for groups?",
            answer: "For families or groups travelling from Wollongong, we recommend our Mercedes V-Class People Movers, which seat up to 7 passengers with ample luggage space."
        }
    ];

    const [activeVehicle, setActiveVehicle] = useState('Executive Sedans');

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Ideal for 1-4 passengers. Comfortable and efficient for that trip up the M1.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Mercedes-Benz or Audi luxury. Travel to the airport in absolute style and comfort.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium SUVs',
            name: 'Luxury SUV',
            desc: 'Spacious Audi Q7 or similar. Perfect for families needing extra legroom and luggage capacity.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-driver.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'The best option for groups. Seats up to 7 with plenty of room for suitcases.',
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
                title="Wollongong Airport Transfers"
                subtitle="Stress-free transfers from Wollongong to Sydney Airport (SYD) and Shellharbour Airport. Reliable, comfortable, and on time."
                showStats={false}
            />

            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Connecting Wollongong to the World</h2>
                <div className={styles.textBlock}>
                    <p>
                        Travelling from the Illawarra to catch a flight doesn't have to be stressful.
                        Auzzsi Chauffeur specializes in transfers between Wollongong and Sydney Airport (SYD).
                        Relax in our premium vehicles while we handle the M1 traffic and airport navigation.
                        <br /><br />
                        We also provide local transfers to Shellharbour Airport for regional flights.
                        Whether for business travel or a family holiday, start your journey the right way.
                    </p>
                </div>
            </section>

            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><DollarSign size={28} /></div>
                        <span className={styles.featureLabel}>Fixed Price<br />All Inclusive</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Meet & Greet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Plane size={28} /></div>
                        <span className={styles.featureLabel}>Flight Tracking<br />Included</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>60 Mins Free<br />Waiting Time</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Professional<br />Chauffeurs</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Safe &<br />Secure</span>
                    </div>
                </div>
            </section>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wollongong Fleet</h2>
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
                        FAQs: Wollongong Transfers
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
                <div className={styles.contactImage}>
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <div className={styles.contactFormWrapper}>
                    <h2 className={styles.helpTitle}>Contact Support</h2>
                    <p className={styles.helpSubtitle}>
                        Need help with your booking? Call us 24/7.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span>
                    </p>
                    <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Your Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Last Name*</label>
                            <input type="text" className={styles.textInput} placeholder="Your Last Name" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Contact Number*</label>
                            <input type="tel" className={styles.textInput} placeholder="+61..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Email Address*</label>
                            <input type="email" className={styles.textInput} placeholder="email@example.com" />
                        </div>
                        <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                            <label className={styles.inputLabel}>Message</label>
                            <textarea className={styles.textInput} rows={3} style={{ resize: 'none' }}></textarea>
                        </div>
                        <button className={styles.submitBtn}>Submit</button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
