import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { FileText, Laptop, ShieldCheck, Clock, Award, Coffee, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Corporate Chauffeur Canberra | Executive Car Service",
    description: "Reliable transport for government, diplomatic, and corporate sectors in the ACT. Security-conscious, professional, and discreet.",
};

export default function CanberraCorporatePage() {
    const faqs = [
        {
            question: "Do You Provide Services For Government Officials?",
            answer: "Yes, we are highly experienced in providing secure and discreet transport for government ministers, diplomats, and visiting delegations to Parliament House and various embassies."
        },
        {
            question: "Can I Book A Chauffeur For The Parliamentary Triangle?",
            answer: "Absolutely. We specialize in transfers within the Parliamentary Triangle, ensuring you arrive punctually for meetings at Parliament House, DFAT, or other government departments."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer Comcar-standard executive sedans (Holden Caprice/Genesis), premium European sedans (Audi/Mercedes), and Mercedes V-Class vans for delegations."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Yes. We understand the sensitive nature of business in Canberra. Our chauffeurs are vetted professionals who are accustomed to high-security protocols and are happy to sign NDAs."
        },
        {
            question: "Can You Handle Airport Transfers During Parliamentary Sitting Weeks?",
            answer: "Yes, sitting weeks are our busiest times. We monitor all flights into Canberra Airport to ensure your driver is waiting, regardless of delays. We recommend booking in advance during sitting weeks."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The government standard. Reliable, understated, and comfortable. Features leather seating and ample workspace.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your foreign dignitaries or travel in ultimate luxury. Mercedes-Benz S-Class or Audi A8L.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for delegations and staff. Spacious seating allows for briefings on the go.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Corporate Chauffeur Canberra"
                subtitle="Reliable transport for government, diplomatic, and corporate sectors in the ACT. Security-conscious, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Transport For The Capital</h2>
                <div className={styles.textBlock}>
                    <p>
                        In Canberra, punctuality and discretion are non-negotiable. Auzzsi Chauffeur’s
                        corporate service is tailored to the unique needs of the nation's capital.
                        We provide seamless ground transport for executives, lobbyists, and government officials.
                        <br /><br />
                        Whether you are commuting from Canberra Airport to Parliament House, attending a function
                        at a foreign embassy, or moving between departmental meetings in Barton and Parkes,
                        our professional chauffeurs ensure you arrive relaxed, prepared, and on time.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your department or company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation during sitting weeks, fixed corporate rates, and detailed monthly
                        invoicing to simplify acquittal processes.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><FileText size={28} /></div>
                        <span className={styles.featureLabel}>Monthly<br />Invoicing</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Laptop size={28} /></div>
                        <span className={styles.featureLabel}>Mobile<br />Office</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Security<br />Aware</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctuality<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Vetted<br />Drivers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Coffee size={28} /></div>
                        <span className={styles.featureLabel}>Concierge<br />Service</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Executive Fleet Options</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Choose the right vehicle for the occasion. From understated sedans for everyday government business to
                    premium limousines for VIP guests.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Corporate Travel FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <ServiceContactForm
                    title="Open A Corporate Account"
                    subtitle={<>
                        Contact our Canberra corporate team to discuss rates and set up your account.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>corporate@auzzsi.com.au</span>
                    </>}
                    dateLabel="Department / Company*"
                    emailLabel="Work Email*"
                    detailsLabel="Message / Request"
                    btnText="Request Information"
                />
            </section>

            <Footer />
        </main>
    );
}
