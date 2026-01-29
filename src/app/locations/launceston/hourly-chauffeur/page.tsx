import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Navigation, PauseCircle, ShoppingBag, Utensils, Award, ShieldCheck, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Hourly Chauffeur Service Launceston | Private Car Hire",
    description: "Flexible hourly chauffeur service in Launceston. 'As Directed' private car hire for Tamar Valley wine tours, city meetings, and scenic drives.",
};

export default function LauncestonHourlyPage() {
    const faqs = [
        {
            question: "What Is The Minimum Hire Time For Hourly Service?",
            answer: "Our minimum hire period for hourly 'As Directed' service in Launceston is typically 3 hours. For Tamar Valley wine tours, we suggest a minimum of 4 hours to visit multiple cellar doors."
        },
        {
            question: "Can I Create My Own Wine Tour Itinerary?",
            answer: "Yes! Design your day. Visit Jansz for sparkling, stop at Josef Chromy for lunch, and finish at Pipers Brook. We drive you wherever your palate desires."
        },
        {
            question: "Does The Hourly Rate Include Waiting Time?",
            answer: "Yes. Your chauffeur and vehicle are exclusively yours. Whether you are walking through Cataract Gorge or dining at Stillwater, we wait for you."
        },
        {
            question: "Are Tasting Fees Included?",
            answer: "No, hourly rates cover the vehicle and driver only. Wine tasting fees at cellar doors are payable by you directly to the venue."
        },
        {
            question: "Can I Extend My Booking On The Day?",
            answer: "In most cases, yes. If you wish to visit one more winery or extend your lunch, simply inform your chauffeur. We will extend the booking in 30-minute increments subject to availability."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Cost-effective luxury. Perfect for local transfers or a comfortable trip to Barnbougle Dunes.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Elevate your experience. Ideal for romantic dinners or VIP guests.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Group outings made easy. The best way to explore the Tamar Valley wine route together.',
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
                title="Hourly Chauffeur Service Launceston"
                subtitle="Complete flexibility with our 'As Directed' service. Your private car and driver in Northern Tasmania, ready when you are."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Car, Your Schedule</h2>
                <div className={styles.textBlock}>
                    <p>
                        Explore Launceston and the Tamar Valley on your own terms. Our hourly chauffeur service gives you the freedom
                        to travel at your own pace without the worry of navigating country roads or monitoring your wine intake.
                        <br /><br />
                        Whether you are moving between meetings in the city, enjoying a bespoke wine tour along the Tamar River,
                        or taking a day trip to the lavender fields, your chauffeur waits for you.
                        Leave your purchases in the car and enjoy true convenience.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Ideal For</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li><strong>Tamar Valley Wine Tours:</strong> Visit the region's best cellar doors.</li>
                        <li><strong>Scenic Drives:</strong> Explore the Cradle Coast or Ben Lomond.</li>
                        <li><strong>City Tours:</strong> Visit Cataract Gorge, the QVMAG, and heritage sites.</li>
                        <li><strong>Dining:</strong> Reliable transport for dinner reservations at the Seaport.</li>
                    </ul>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Navigation size={28} /></div>
                        <span className={styles.featureLabel}>As Directed<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><PauseCircle size={28} /></div>
                        <span className={styles.featureLabel}>Waiting<br />Included</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShoppingBag size={28} /></div>
                        <span className={styles.featureLabel}>Secure<br />Storage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Utensils size={28} /></div>
                        <span className={styles.featureLabel}>Dinner<br />Transfers</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ShieldCheck size={28} /></div>
                        <span className={styles.featureLabel}>Fixed<br />Hourly Rates</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Flexible Fleet Options</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Choose the vehicle that fits your day. All come with complimentary water and climate control.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Hourly Charter FAQs
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
                    title="Plan Your Day"
                    subtitle={<>
                        Get a quote for an hourly booking or a custom wine tour itinerary in Launceston.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>res@auzzsi.com.au</span>
                    </>}
                    dateLabel="Duration Needed"
                    emailLabel="Email Address*"
                    detailsLabel="Itinerary Details"
                    btnText="Get Hourly Quote"
                />
            </section>

            <Footer />
        </main>
    );
}
