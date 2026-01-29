import styles from './DriverProfile.module.css';

export default function DriverProfile() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>
                        Your Auzzsi Driver: Professional, Experienced, Courteous And Discreet
                    </h2>
                    <a href="/book" className={styles.btnBook}>Book Now</a>
                </div>

                <div className={styles.rightContent}>
                    <p className={styles.description}>
                        We handpick our drivers for their exemplary driving records, experience with luxury service and commitment to customer service and safety. Your Auzzsi driver will tailor your experience to your needs, whether that’s sharing local knowledge or giving you the privacy, peace and quiet to relax in comfort and style.
                    </p>
                </div>
            </div>

            <div className={styles.imageGrid}>
                <div className={styles.gridItem}>
                    <img src="/tile-driver.png" alt="Professional Driver" />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-meeting-1.png" alt="Opening Door" />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-woman-phone.png" alt="Passenger Service" />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-audi.png" alt="Luxury Fleet" />
                </div>
            </div>
        </section>
    );
}
