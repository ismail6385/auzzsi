"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <main style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                background: 'linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%)'
            }}>
                <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <div style={{
                        fontSize: '8rem',
                        fontWeight: '800',
                        lineHeight: 1,
                        color: '#e5e7eb',
                        marginBottom: '-2rem',
                        userSelect: 'none'
                    }}>
                        404
                    </div>

                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        marginBottom: '1rem',
                        position: 'relative'
                    }}>
                        Page Not Found
                    </h1>

                    <p style={{
                        color: '#6b7280',
                        fontSize: '1.1rem',
                        marginBottom: '2.5rem',
                        lineHeight: 1.6
                    }}>
                        We apologize, but the page you are looking for has either been moved or does not exist. Our chauffeurs are excellent at navigation, but even they couldn't find this route.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#1f2937',
                                color: 'white',
                                padding: '0.8rem 2rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'background 0.2s',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                <ChevronLeft size={18} /> Return Home
                            </button>
                        </Link>

                        <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: 'white',
                                color: '#1f2937',
                                padding: '0.8rem 2rem',
                                borderRadius: '4px',
                                fontWeight: '600',
                                border: '1px solid #d1d5db',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.2s'
                            }}>
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
