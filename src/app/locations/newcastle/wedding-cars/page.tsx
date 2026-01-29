import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import { Heart, Camera, Clock, Award, Gift, Star, Users, Briefcase } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Cars Newcastle & Hunter Valley | Luxury Bridal Transport",
    description: "Elegant wedding car hire for Newcastle, Lake Macquarie and the Hunter Valley. European luxury sedans and limousines for your special day.",
};

export default function NewcastleWeddingPage() {
    const faqs = [
        {
            question: "How Far In Advance Should I Book My Wedding Cars?",
            answer: "For Hunter Valley weddings during peak season (spring and autumn), we recommend booking 9-12 months in advance to secure your preferred vehicles."
        },
        {
            question: "Do You Service The Entire Hunter Valley Region?",
            answer: "Yes, we regularly travel to Pokolbin, Lovedale, Rothbury, and Broke. We ensure prompt and comfortable transport for your bridal party to any venue in Wine Country."
        },
        {
            question: "Is There A Minimum Hire Time For Wedding Cars?",
            answer: "Yes, generally there is a minimum hire period of 3 hours for wedding bookings in Newcastle and the Hunter Valley. This provides ample time for pickups, the ceremony, and location photos."
        },
        {
            question: "Can You Provide Transport For Guests?",
            answer: "Absolutely. We often arrange Mercedes V-Class people movers or larger buses to transport guests from Newcastle or local accommodation to Hunter Valley vineyards."
        },
        {
            question: "Do You Provide Wedding Ribbons?",
            answer: "Yes, all our wedding packages include complimentary white satin ribbons and tulle. We can also accommodate custom colors if provided in advance."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Cars',
            name: 'Mercedes-Benz S-Class',
            desc: 'The ultimate wedding car. Spacious, elegant, and timeless. Features a long wheelbase for accommodating bridal gowns with ease.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi A8L',
            desc: 'Sleek and sophisticated. The perfect ride for the groom and his party to arrive in style.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Guest Transfer',
            name: 'Mercedes V-Class',
            desc: 'Luxury transport for family and guests. Ensure your loved ones arrive on time and comfortable.',
            passengers: 7,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <Hero
                title="Luxury Wedding Cars Newcastle"
                subtitle="Make your special day unforgettable with the Hunter's premium chauffeur-driven wedding fleet. Elegant service for beach and vineyard weddings."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Coastal & Country Elegance</h2>
                <div className={styles.textBlock}>
                    <p>
                        Newcastle and the Hunter Valley offer some of Australia's most diverse wedding locations, from the rolling vineyards of Pokolbin to the ocean baths of Merewether.
                        Auzzsi Chauffeur provides impeccable wedding car services to match the beauty of the region.
                        From the moment we pick you up to your final getaway, we ensure a seamless, stress-free, and luxurious experience.
                        <br /><br />
                        Our professional chauffeurs are experienced in wedding logistics and know the best photo locations,
                        whether it's the heritage architecture of Newcastle East or the vines of the Hunter. We treat your day with the care it deserves.
                    </p>
                    <h3 style={{ marginTop: '2rem' }}>Tailored Wedding Packages</h3>
                    <p>
                        We understand that every wedding is unique. Whether you need a single car for the bride or a full fleet
                        for the entire bridal party and guests, we can tailor a package to suit your specific vision and budget.
                        All packages include a uniformed chauffeur, ribbons, and refreshments.
                    </p>
                </div>
            </section>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>White<br />Ribbons</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Red Carpet<br />Service</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Photo<br />Assist</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Vehicles</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Gift size={28} /></div>
                        <span className={styles.featureLabel}>Champagne<br />Option</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wedding Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select from our range of pristine European luxury vehicles to complement your wedding style.
                </p>

                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding Car FAQs
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
                    title="Get A Wedding Quote"
                    subtitle={<>
                        Tell us about your Newcastle or Hunter Valley wedding and we will provide a custom package.
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>1300 615 165</span> or <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>events@auzzsi.com.au</span>
                    </>}
                    detailsLabel="Wedding Details (Venues, Times, Car Preference)"
                />
            </section>

            <Footer />
        </main>
    );
}
