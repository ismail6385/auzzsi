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
    title: "Wedding Cars Launceston | Luxury Bridal Transport & Winery Weddings",
    description: "Make your special day unforgettable with Northern Tasmania's premium chauffeur-driven wedding fleet. Elegant service for vineyard and heritage weddings.",
};

export default function LauncestonWeddingPage() {
    const faqs = [
        {
            question: "How Far In Advance Should I Book My Wedding Cars?",
            answer: "For summer and autumn weddings in the Tamar Valley, we recommend booking 9-12 months in advance to secure your preferred vehicles."
        },
        {
            question: "Do You Service Tamar Valley Vineyards?",
            answer: "Yes, we regularly transport bridal parties to venues like Josef Chromy, Strathlynn, and Swinging Gate. Our vehicles are perfect for vineyard entries."
        },
        {
            question: "Is There A Minimum Hire Time For Wedding Cars?",
            answer: "Yes, generally there is a minimum hire period of 3 hours for wedding bookings in Launceston. This ensures ample time for photos at Cataract Gorge or City Park."
        },
        {
            question: "Can You Provide Transport For Guests?",
            answer: "Absolutely. We can arrange Mercedes V-Class people movers or larger buses to transport guests from Launceston hotels to your venue and back safely."
        },
        {
            question: "Do You Provide Wedding Ribbons?",
            answer: "Yes, all our wedding packages include complimentary white satin ribbons and tulle. We can also accommodate custom colors to match your theme."
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
            name: 'Audi Q7 SUV',
            desc: 'Spacious and commanding. A perfect, comfortable ride for the groom and his party.',
            passengers: 4,
            luggage: 4,
            bags: 3,
            image: '/tile-suv.png'
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
                title="Luxury Wedding Cars Launceston"
                subtitle="Make your special day unforgettable with Northern Tasmania's premium chauffeur-driven wedding fleet. Elegant service for vineyard and heritage weddings."
                showStats={false}
            />

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Vineyard Elegance & Heritage Charm</h2>
                <div className={styles.textBlock}>
                    <p>
                        Launceston offers some of Australia's most picturesque wedding locations, from historical estates to the rolling vines of the Tamar Valley.
                        Auzzsi Chauffeur provides impeccable wedding car services to match the beauty and history of the region.
                        From the moment we pick you up to your final getaway, we ensure a seamless, stress-free, and luxurious experience.
                        <br /><br />
                        Our professional chauffeurs are experienced in wedding logistics and know the best photo locations,
                        whether it's the dramatic Cataract Gorge or the manicured City Park. We treat your day with the care it deserves.
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
                        Tell us about your Launceston wedding and we will provide a custom package.
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
