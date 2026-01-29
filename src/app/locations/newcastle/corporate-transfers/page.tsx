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
    title: "Corporate Chauffeur Newcastle | Hunter Valley Business Transfers",
    description: "Premium corporate transport in Newcastle & Hunter Valley. Executive sedans, mining sector transfers, and VIP logistics. Professional & discreet.",
};

export default function NewcastleCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Transfers From Williamtown (Newcastle) Airport?",
            answer: "Yes, we provide meet and greet services at Newcastle Airport (Williamtown). Your chauffeur will track your flight and meet you at arrivals for a seamless transfer to the CBD, Lake Macquarie, or the Hunter Valley."
        },
        {
            question: "Can I Book A Chauffeur For The Hunter Valley?",
            answer: "Absolutely. We specialize in corporate transfers to the Hunter Valley for conferences, retreats, and industry events. We also service Singleton and Muswellbrook for mining sector clients."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer executive sedans (Holden Caprice/Genesis), premium European sedans (Audi/Mercedes), and Mercedes V-Class vans for team movements."
        },
        {
            question: "Will My Chauffeur Sign A Non-Disclosure Agreement (NDA)?",
            answer: "Yes. Our chauffeurs are professionals who understand the sensitive nature of business conversations and are willing to sign NDAs."
        },
        {
            question: "Can You Provide Transport For Large Corporate Groups?",
            answer: "Yes, we can arrange multiple vehicles, including V-Class people movers and larger buses, to transport delegates for conferences or site visits."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable, understated, and comfortable. Perfect for transfers to John Hunter Hospital or the Port.',
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
            desc: 'Perfect for site visits and team transport. Conference style seating allows for briefings on the go.',
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
                title="Corporate Chauffeur Newcastle"
                subtitle="Reliable transport for business meetings, mining sector transfers, and VIP travel in Newcastle and the Hunter Valley."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel In The Hunter</h2>
                <div className={styles.textBlock}>
                    <p>
                        Newcastle is a hub of industry and innovation. Auzzsi Chauffeur provides professional ground transport
                        to match the dynamic needs of the region. From the Port of Newcastle to the vineyards of the Hunter Valley,
                        we ensure you move with efficiency and style.
                        <br /><br />
                        Whether you are commuting from Newcastle Airport, attending meetings at Honeysuckle,
                        or visiting industrial sites in the Upper Hunter, our professional chauffeurs ensure you arrive relaxed,
                        prepared, and on time.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation, fixed corporate rates, and consolidated monthly
                        billing to make expense management effortless.
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
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
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
                    Choose the right vehicle for the occasion. From understated executive sedans for daily meetings to
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
                        Contact our Newcastle corporate team to discuss rates and set up your account.
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
