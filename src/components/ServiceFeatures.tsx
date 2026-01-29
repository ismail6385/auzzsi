import styles from './ServiceFeatures.module.css';
import { Plane, Briefcase, Calendar, Wine, Heart, Star, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ServiceFeatures() {
    const features = [
        {
            icon: <Plane size={32} />,
            text: "Airport Transfers",
            link: "/services/airport-transfers"
        },
        {
            icon: <Briefcase size={32} />,
            text: "Corporate Travel",
            link: "/services/corporate-transfers"
        },
        {
            icon: <Calendar size={32} />,
            text: "Conferences & Events",
            link: "/services/conferences-special-events" // Fallback to slug or dedicated
        },
        {
            icon: <Wine size={32} />,
            text: "Private Tours",
            link: "/services/luxury-tours"
        },
        {
            icon: <Heart size={32} />,
            text: "Weddings",
            link: "/services/wedding-cars"
        },
        {
            icon: <Star size={32} />,
            text: "Hourly Charter",
            link: "/services/hourly-chauffeur"
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Chauffeurs At Your Service</h2>

            <p className={styles.description}>
                When you choose Auzzsi, you're choosing luxury, style, comfort and, most importantly, experience.
                We've been moving Australia for almost 120 years, and in that time, we've learnt how to make it memorable.
                From your friendly driver to your well-appointed vehicle and small touches like umbrellas, coffees and local knowledge,
                you'll know you're in good hands with Auzzsi.
            </p>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <Link href={feature.link} key={index} className={styles.feature} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <p className={styles.featureTitle}>{feature.text}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
