import styles from './Hero.module.css';
import BookingWidget from './BookingWidget';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

export default function Hero({
  title = "Auzzsi Chauffeur Service",
  subtitle = "Experience the Auzzsi difference with premium transfers, tours and event transport.",
  showStats = true
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.subtitle}>
            {subtitle}
          </p>



          <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Get a Quote</button>
          </div>

        </div>


        {/* Booking Widget Section */}
        <div style={{ marginBottom: '3rem' }}>
          <BookingWidget />
        </div>

        {showStats && (
          <div className={styles.footer}>
            {/* Stats Section */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2.95m</span>
                <span className={styles.statLabel}>Passengers moved last 12 months</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>12,000+</span>
                <span className={styles.statLabel}>5 Star Google Reviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>11</span>
                <span className={styles.statLabel}>Offices across Australia</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1,235</span>
                <span className={styles.statLabel}>Size of fleet</span>
              </div>
            </div>

            {/* App Badges */}
            <div className={styles.appButtons}>
              <a href="#" className={styles.appBtn}>
                <img src="/google-play-badge.png" alt="Get it on Google Play" style={{ height: '35px' }} />
                {/* Fallback text if needed, but image is best for badges */}
                <span style={{ display: 'none' }}>Get it on Google Play</span>
              </a>
              <a href="#" className={styles.appBtn}>
                <img src="/app-store-badge.png" alt="Download on the App Store" style={{ height: '35px' }} />
                <span style={{ display: 'none' }}>Download on the App Store</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section >
  );
}
