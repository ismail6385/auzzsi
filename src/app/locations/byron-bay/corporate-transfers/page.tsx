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
    title: "Corporate Chauffeur Byron Bay | Executive Car Service",
    description: "Premium executive transport for business meetings, corporate retreats, and VIP events in Byron Bay. Punctual, professional, and discreet.",
};

export default function ByronBayCorporatePage() {
    const faqs = [
        {
            question: "Do You Offer Corporate Accounts With Monthly Invoicing?",
            answer: "Yes, we offer dedicated corporate accounts for businesses and event organizers in the Byron Bay region. This includes detailed monthly invoicing, priority booking status, and flexible payment terms. Contact our team to set up an account today."
        },
        {
            question: "Can I Book A Chauffeur By The Hour For Corporate Retreats?",
            answer: "Absolutely. Our 'Hourly Hire' service is ideal for corporate retreats and team-building events. Your chauffeur can transport your team between venues, activities, and dining locations throughout Byron Bay and the Northern Rivers."
        },
        {
            question: "What Vehicles Are Available For Executive Travel?",
            answer: "We offer a range of executive vehicles including luxury sedans and Mercedes V-Class vans for corporate groups. All vehicles are pristine and provide a comfortable, professional environment."
        },
        {
            question: "Do You Service Corporate Events At Byron Bay Conference Centers?",
            answer: "Yes, we regularly service corporate events, conferences, and executive retreats at Byron Bay's premium venues. We can coordinate multiple vehicles for larger groups."
        },
        {
            question: "How Far In Advance Should I Book For Corporate Events?",
            answer: "For individual transfers, we can often accommodate same-day bookings. For large corporate events or multi-day retreats, we recommend booking at least 1-2 weeks in advance to secure the specific fleet mix you require."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Professional and comfortable. Perfect for executive transfers and business meetings in Byron Bay.',
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
            desc: 'Perfect for corporate groups. Transport your team in comfort between venues and activities.',
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
                title="Corporate Chauffeur Byron Bay"
                subtitle="Premium executive transport for business meetings, corporate retreats, and VIP events in Byron Bay. Punctual, professional, and discreet."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Business Class Travel On The Coast</h2>
                <div className={styles.textBlock}>
                    <p>
                        Byron Bay is not just a tourist destination—it's also a premier location for corporate retreats,
                        executive meetings, and business events. Auzzsi Chauffeur's corporate service ensures your team
                        travels in comfort and style throughout the Northern Rivers region.
                        <br /><br />
                        Whether you are hosting a corporate retreat at a beachfront resort, attending meetings in the Byron Bay
                        business district, or entertaining clients at premium venues, our professional chauffeurs ensure
                        seamless, stress-free transport. We understand the importance of punctuality and discretion.
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
                    Choose the right vehicle for your Byron Bay corporate needs. From executive sedans to group transport.
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
                        Contact our Byron Bay corporate team to discuss rates and set up your account.
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
