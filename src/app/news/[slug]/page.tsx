"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../news.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Calendar, User, Clock } from "lucide-react";

export default function SinglePostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            if (slug) {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*')
                    .eq('slug', slug)
                    .single();

                if (data) {
                    setPost(data);
                }
            }
            setLoading(false);
        }
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <main className={styles.pageWrapper}>
                <Navbar />
                <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    Loading...
                </div>
                <Footer />
            </main>
        );
    }

    if (!post) {
        return (
            <main className={styles.pageWrapper}>
                <Navbar />
                <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Post Not Found</h1>
                    <Link href="/news" style={{ color: '#c5a467', marginTop: '1rem' }}>Back to News</Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero} style={{ minHeight: '300px' }}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/news">News</Link> <span>&gt;</span> {post.title}
                    </div>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>{post.title}</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container} style={{ maxWidth: '900px' }}>
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #eee' }}>

                        {/* Meta */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} /> {new Date(post.created_at).toLocaleDateString()}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={16} /> Admin
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} /> 5 min read
                            </span>
                        </div>

                        {/* Image */}
                        {post.image_url && (
                            <div style={{ marginBottom: '2rem', borderRadius: '8px', overflow: 'hidden' }}>
                                <img src={post.image_url} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        )}

                        {/* Content */}
                        <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem' }}>
                            {post.content.split('\n').map((paragraph: string, idx: number) => (
                                <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                            ))}
                        </div>

                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link href="/news" style={{ display: 'inline-block', padding: '0.8rem 2rem', backgroundColor: '#1e3a8a', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                            Back to All News
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
