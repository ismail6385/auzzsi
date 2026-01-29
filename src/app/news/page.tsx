"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./news.module.css";
import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function NewsPage() {
    const [newsItems, setNewsItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });

            if (!error && data) {
                setNewsItems(data);
            }
            setLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> News
                    </div>
                    <h1 className={styles.heroTitle}>Latest News</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.sectionTitleWrapper}>
                        <h2 className={styles.sectionTitle}>Auzzsi Chauffeurs News</h2>
                    </div>

                    <div className={styles.layout}>
                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            <div className={styles.newsGrid}>
                                {loading ? (
                                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '2rem' }}>Loading news...</div>
                                ) : newsItems.length === 0 ? (
                                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '2rem' }}>No news posts found.</div>
                                ) : (
                                    newsItems.map((item) => (
                                        <article key={item.id} className={styles.newsCard}>
                                            <div className={styles.imageWrapper}>
                                                <img
                                                    src={item.image_url || "/tile-audi.png"}
                                                    alt={item.title}
                                                    onError={(e) => (e.currentTarget.src = "/tile-audi.png")}
                                                />
                                            </div>
                                            <div className={styles.cardContent}>
                                                <h3 className={styles.title}>{item.title}</h3>
                                                <div className={styles.metaRow}>
                                                    <span className={styles.date} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <Calendar size={12} /> {new Date(item.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className={styles.excerpt}>{item.excerpt || item.content?.substring(0, 100) + '...'}</p>
                                                <Link href={`/news/${item.slug}`} className={styles.readMore}>
                                                    Read More
                                                </Link>
                                            </div>
                                        </article>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarWidget}>
                                <div className={styles.searchBox}>
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.sidebarWidget}>
                                <h4 className={styles.widgetTitle}>Categories</h4>
                                <ul className={styles.categoryList}>
                                    <li><a href="#">All</a></li>
                                    <li><a href="#">Airport Transfers</a></li>
                                    <li><a href="#">Corporate</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Fleet</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
