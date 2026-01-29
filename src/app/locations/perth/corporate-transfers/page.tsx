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
    title: "Corporate Chauffeur Perth | Executive Car Service",
    description: "Premium executive transport for business meetings, mining logistics, and VIP events in Perth. Punctual, professional, and discreet.",
};

export default function PerthCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Accounts For Mining & Resources Companies?",
            answer: "Yes, we specialize in logistics for the mining and resources sector in Perth. We offer corporate accounts with consolidated invoicing and 24/7 support for FIFO transfers and executive movements."
        },
        {
            question: "Can I Book A Chauffeur By The Hour For Meetings In West Perth?",
            answer: "Absolutely. Our 'Hourly Hire' service is ideal for executives moving between the CBD and mining HQs in West Perth. Your chauffeur stays with you, ensuring seamless transitions between appointments."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer top-tier executive vehicles including the Holden Caprice (Executive Sedan), Audi A8 (Premium European), and Mercedes V-Class vans for team movements. All vehicles are maintained to the highest safety standards."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Yes, discretion is paramount. Our professionally trained chauffeurs are happy to sign NDAs to ensure the confidentiality of your business discussions while on board."
        },
        {
            question: "How Far In Advance Should I Book For Corporate Events?",
            answer: "For daily transfers, we accommodate short notice bookings. For major conferences at the PCEC or large corporate events, we recommend booking 1-2 weeks in advance to secure your preferred fleet."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable and comfortable. Features leather seating and ample workspace.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your clients or travel in ultimate luxury. Mercedes-Benz S-Class or Audi A8L.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for roadshows and site visits. Conference style seating allows your team to brief and debrief on the move.',
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
                title="Corporate Chauffeur Perth"
                subtitle="Premium executive transport for business meetings, mining logistics, and VIP events in Perth. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel On The Ground</h2>
                <div className={styles.textBlock}>
                    <p>
                        Perth is the engine room of the Australian economy, and time is money. Auzzsi Chauffeur’s
                        corporate service allows you to maximize your efficiency. Transform travel time
                        into productivity time in the quiet, private cabin of our executive vehicles.
                        <br /><br />
                        Whether you are heading to a board meeting on St Georges Terrace, a mining HQ in West Perth,
                        or catching a flight at Perth Airport, our professional chauffeurs ensure you arrive relaxed,
                        prepared, and on time.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation during peak hours, fixed corporate rates, and consolidated monthly
                        billing with detailed trip reporting to make expense management effortless.
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
                        <span className={styles.featureLabel}>100%<br />Confidential</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>Punctuality<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Top Rated<br />Professionals</span>
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
                    Choose the right vehicle for the occasion. From understated executive sedans for daily business to
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
                        Contact our Perth corporate team to discuss rates and set up your account.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>corporate@auzzsi.com.au</span>
                    </>}
                    dateLabel="Company Name*"
                    emailLabel="Work Email*"
                    detailsLabel="Message / Request"
                    btnText="Request Information"
                />
            </section>

            <Footer />
        </main>
    );
}
