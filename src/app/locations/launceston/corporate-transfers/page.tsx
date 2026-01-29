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
    title: "Corporate Chauffeur Launceston | Executive Car Service",
    description: "Reliable transport for business, conferences, and agricultural sectors in Northern Tasmania. Professional service you can trust.",
};

export default function LauncestonCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Transfers From Launceston Airport (LST)?",
            answer: "Yes, we provide meet and greet services at Launceston Airport. Your chauffeur will assist with luggage and drive you directly to your hotel or meeting in the CBD."
        },
        {
            question: "Can I Book A Chauffeur For Meetings In The Tamar Valley?",
            answer: "Absolutely. We specialize in transfers for agricultural business and viticulture meetings throughout the Tamar Valley and Northern Midlands."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer executive sedans (Holden Caprice/Genesis), premium European sedans (Audi/Mercedes), and Mercedes V-Class vans for delegations."
        },
        {
            question: "Do You Operate Early Morning Flights?",
            answer: "Yes, we monitor all flight schedules. Whether you have the first flight out to Melbourne or a late arrival, we will be there."
        },
        {
            question: "Can You Transport Conference Delegates?",
            answer: "Yes, Launceston is a popular conference city. We can arrange transfers for groups of any size between the airport, hotels, and venues like the Grand Chancellor."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'The corporate standard. Reliable and comfortable. Perfect for CBD meetings or transfers to the University.',
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
            desc: 'Perfect for team transfers. Spacious seating allows for briefings on the way to the Tamar Valley.',
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
                title="Corporate Chauffeur Launceston"
                subtitle="Reliable transport for business, conferences, and agricultural sectors in Northern Tasmania. Professional service you can trust."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class In The North</h2>
                <div className={styles.textBlock}>
                    <p>
                        Launceston is a vibrant hub for business and conferences in Tasmania. Auzzsi Chauffeur provides professional ground transport
                        that matches the city's blend of heritage and innovation.
                        <br /><br />
                        Whether you are traveling from Launceston Airport to the dedicated business precinct, visiting agricultural clients in Longford,
                        or attending a conference at the Silo Hotel, our professional chauffeurs ensure you arrive relaxed,
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
                    Choose the right vehicle for the occasion. From understated executive sedans to premium people movers for groups.
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
                        Contact our Launceston corporate team to discuss rates and set up your account.
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
