import styles from './ImageTiles.module.css';
import { Users, BookOpen, Clock, Car } from 'lucide-react';

export default function ImageTiles() {
    const tiles = [
        {
            image: "/tile-meeting-1.png",
            title: "Join Our Team",
            description: "Become part of Australia's premier chauffeur service. We are always looking for professional drivers to join our fleet.",
            buttonText: "Careers",
            icon: <Users size={48} strokeWidth={1} />
        },
        {
            image: "/tile-driver.png",
            title: "Book Now",
            description: "Ready to travel in style? Book your luxury transfer today and experience the Auzzsi difference.",
            buttonText: "Book A Ride",
            icon: <Car size={48} strokeWidth={1} />
        },
        {
            image: "/tile-woman-phone.png",
            title: "History of Auzzsi",
            description: "Discover our heritage. Serving Australia for over a century, we have a story worth telling.",
            buttonText: "Our Story",
            icon: <Clock size={48} strokeWidth={1} />
        },
        {
            image: "/tile-audi.png", // Or maybe another relevant image
            title: "Our Fleet",
            description: "Explore our range of premium vehicles, from luxury sedans to spacious people movers and coaches.",
            buttonText: "View Fleet",
            icon: <BookOpen size={48} strokeWidth={1} />
        }
    ];

    return (
        <section className={styles.section}>
            {tiles.map((tile, index) => (
                <div key={index} className={styles.column}>
                    <img
                        src={tile.image}
                        alt={tile.title}
                        className={styles.image}
                    />
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>{tile.icon}</div>
                        <h3 className={styles.title}>{tile.title}</h3>
                        <p className={styles.description}>{tile.description}</p>
                        <button className={styles.button}>{tile.buttonText}</button>
                    </div>
                </div>
            ))}
        </section>
    );
}
