import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHelp from "@/components/ContactHelp";
import FAQ from "@/components/FAQ";
import VehicleList from "../VehicleList"; // Relative import
import styles from "../locations.module.css";
import Link from "next/link";
import { Plane, Building2, UserCheck, CalendarDays, Ship, GraduationCap } from "lucide-react";

// Helper to format slug to title
const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const cityName = formatTitle(resolvedParams.city);

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.hero} style={{ backgroundImage: "url('/tile-driver.png')" }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/locations">Locations</Link> &gt; {cityName}
                    </div>
                    <h1 className={styles.heroTitle}>{cityName} Chauffeured Cars</h1>
                    <p className={styles.heroSubtitle}>
                        Your premier choice for luxury transport in {cityName}. Experience the difference with our professional chauffeurs and premium fleet.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/book" className={styles.btnGold}>Book Now</Link>
                        <Link href="/quote" className={styles.btnTransparent}>Instant Quote</Link>
                    </div>
                </div>
            </section>

            {/* SERVICE ICONS BAR */}
            <section className={styles.serviceIconsBar}>
                <div className={styles.iconsGrid}>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><Plane /></div>
                        <span className={styles.iconLabel}>Airport<br />Transfers</span>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><Building2 /></div>
                        <span className={styles.iconLabel}>Corporate<br />Travel</span>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><UserCheck /></div>
                        <span className={styles.iconLabel}>Private<br />Driver</span>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><CalendarDays /></div>
                        <span className={styles.iconLabel}>Conference<br />& Events</span>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><Ship /></div>
                        <span className={styles.iconLabel}>Cruise<br />Transfers</span>
                    </div>
                    <div className={styles.iconItem}>
                        <div className={styles.iconCircle}><GraduationCap /></div>
                        <span className={styles.iconLabel}>Student<br />Transfers</span>
                    </div>
                </div>
            </section>

            {/* INTRO CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>
                    See {cityName} And Surrounds In Comfort And Style
                </h2>
                <div className={styles.contentBody}>
                    <p>
                        Whether you are a local resident or a visitor to our beautiful city, moving around {cityName} creates a first impression like no other. From the bustling CBD to the scenic surroundings, Auzzsi Chauffeurs provides a seamless travel experience.
                    </p>
                    <p>
                        Our professional drivers know {cityName} inside out, ensuring you take the most efficient routes while relaxing in the back of our premium vehicles. We tailor our service to your specific needs, whether it&apos;s a strict business schedule or a leisurely tour.
                    </p>

                    <ul className={styles.goldList}>
                        <li>Luxury Airport Transfers in {cityName}</li>
                        <li>Corporate Car Hire for Executives</li>
                        <li>Private Tours of {cityName}&apos;s Landmarks</li>
                        <li>Wedding & Special Event Transport</li>
                        <li>Point-to-Point Transfers</li>
                    </ul>
                </div>
            </section>

            {/* VEHICLE RANGE (Tabs) */}
            <section className={styles.vehicleSection}>
                <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    A Range Of Vehicles To Keep Your Event Moving
                </h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem auto', color: '#666' }}>
                    We feature a stunning fleet of luxury European sedans, SUVs, and spacious people movers to accommodate any group size.
                </p>

                <VehicleList />
            </section>

            {/* FAQ */}
            <div className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <FAQ />
            </div>

            {/* CONTACT */}
            <ContactHelp />

            <Footer />
        </main>
    );
}
