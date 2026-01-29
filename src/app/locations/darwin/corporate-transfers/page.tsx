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
    title: "Corporate Chauffeur Darwin | Executive Car Service",
    description: "Premium executive transport for business meetings, government transfers, and VIP events in Darwin. Punctual, professional, and discreet.",
};

export default function DarwinCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Accounts With Monthly Invoicing?",
            answer: "Yes, we offer dedicated corporate accounts for businesses, government departments, and mining companies in Darwin and the Northern Territory. This includes detailed monthly invoicing, priority booking status, and flexible payment terms."
        },
        {
            question: "Can I Book A Chauffeur By The Hour For Meetings?",
            answer: "Absolutely. Our 'Hourly Hire' service is ideal for executives attending multiple meetings across Darwin CBD, Palmerston, and industrial areas. Your chauffeur stays with you, ready to move instantly when you are."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer a range of executive vehicles including luxury sedans and Mercedes V-Class vans for corporate groups. All vehicles are climate-controlled and provide a comfortable, professional environment suited to Darwin's tropical climate."
        },
        {
            question: "Do You Service Mining And Resources Sector Clients?",
            answer: "Yes, we regularly service mining, oil & gas, and resources sector clients in Darwin. We understand the unique requirements of these industries and can provide reliable, discreet transport for executives and VIP visitors."
        },
        {
            question: "How Far In Advance Should I Book For Corporate Events?",
            answer: "For individual transfers, we can often accommodate same-day bookings. For large corporate events or conferences, we recommend booking at least 1-2 weeks in advance to secure the specific fleet mix you require."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Professional and comfortable. Perfect for executive transfers and business meetings in Darwin.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Impress your clients with ultimate luxury. Ideal for VIP guests and high-profile meetings.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Perfect for corporate groups and site visits. Transport your team in comfort across Darwin and the Top End.',
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
                title="Corporate Chauffeur Darwin"
                subtitle="Premium executive transport for business meetings, government transfers, and VIP events in Darwin. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel In The Top End</h2>
                <div className={styles.textBlock}>
                    <p>
                        Darwin is the economic hub of the Northern Territory, serving government, mining, defense, and tourism sectors.
                        Auzzsi Chauffeur's corporate service ensures you travel in comfort and professionalism throughout the Top End.
                        <br /><br />
                        Whether you are attending meetings in the Darwin CBD, visiting government offices, or entertaining international
                        clients, our professional chauffeurs ensure seamless, stress-free transport. We understand the importance of
                        punctuality and discretion in Darwin's close-knit business community.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Corporate Accounts & Priority Service</h3>
                    <p>
                        Streamline your company's ground transport with an Auzzsi Corporate Account. Enjoy benefits such as
                        priority vehicle allocation, fixed corporate rates, and consolidated monthly billing with detailed
                        trip reporting to make expense management effortless.
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
                    Choose the right vehicle for your Darwin corporate needs. From executive sedans to group transport.
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
                        Contact our Darwin corporate team to discuss rates and set up your account.
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
