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
    title: "Hourly Chauffeur Service Canberra | Private Car Hire",
    description: "Flexible hourly chauffeur service in Canberra. 'As Directed' private car hire for government meetings, winery tours, and city exploration.",
};

export default function CanberraHourlyPage() {
    const faqs = [
        {
            question: "What Is The Minimum Hire Time For Hourly Service?",
            answer: "Our minimum hire period for hourly 'As Directed' service in Canberra is typically 2 hours. This is perfect for attending a few meetings in the Parliamentary Triangle or a quick city tour."
        },
        {
            question: "Can I Use This Service For Winery Tours?",
            answer: "Yes! Hourly hire is the ideal way to explore the cool-climate wineries of Murrumbateman and Lake George. You create your own itinerary, and your chauffeur handles the driving."
        },
        {
            question: "Does The Hourly Rate Include Waiting Time?",
            answer: "Yes. Your chauffeur and vehicle are exclusively yours. Whether you are visiting the War Memorial, dining in Braddon, or in a meeting at Parliament House, we wait for you."
        },
        {
            question: "Are Tolls And Parking Included In The Hourly Rate?",
            answer: "Hourly rates cover the vehicle and driver. Canberra is generally toll-free, but parking fees (e.g. at hotels or secure carparks) incurred at your request are charged as extras."
        },
        {
            question: "Can I Extend My Booking On The Day?",
            answer: "In most cases, yes. If you wish to extend your hire, simply inform your chauffeur. We will extend the booking in 15 or 30-minute increments, subject to vehicle availability."
        }
    ];

    const vehicles = [
        {
            category: 'Executive Sedans',
            name: 'Executive Sedan',
            desc: 'Cost-effective luxury. Perfect for government business or museum hopping.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Premium Sedans',
            name: 'European Premium Sedan',
            desc: 'Elevate your experience. Ideal for VIP guests or special dinners at the Boat House.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'People Movers',
            name: 'Mercedes V-Class',
            desc: 'Group outings made easy. Keep your delegation or family together for city tours.',
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
                title="Hourly Chauffeur Service Canberra"
                subtitle="Complete flexibility with our 'As Directed' service. Your private car and driver in the ACT, ready when you are."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Car, Your Schedule</h2>
                <div className={styles.textBlock}>
                    <p>
                        Explore Canberra on your own terms. Our hourly chauffeur service gives you the freedom
                        to travel at your own pace without the hassle of parking or waiting for taxis.
                        <br /><br />
                        Whether you are moving between government departments, exploring the National Gallery and War Memorial,
                        or enjoying a wine tour in the surrounding regions, your chauffeur waits for you.
                        Leave your coat and documents in the car and enjoy true convenience.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Ideal For</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                        <li><strong>Government Business:</strong> Efficient travel between Parliament House and departments.</li>
                        <li><strong>Winery Tours:</strong> Custom itineraries for Murrumbateman and Lake George.</li>
                        <li><strong>Cultural Tours:</strong> Visit the NMA, NGA, and War Memorial at your leisure.</li>
                        <li><strong>Embassy Visits:</strong> Secure and reliable transport for diplomatic engagements.</li>
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
                        Get a quote for an hourly booking or a custom tour itinerary in Canberra.
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
