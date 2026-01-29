"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    CalendarCheck,
    Users,
    Settings,
    LogOut,
    Car,
    Bell,
    Search,
    ChevronDown,
    Menu,
    X,
    Newspaper,
    Mail,
    FileText,
    DollarSign,
    Receipt,
    UserCircle,
    Tag
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState(0);
    const prevNotificationsRef = useRef(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Bookings', href: '/admin/dashboard/bookings', icon: CalendarCheck },
        { name: 'Leads', href: '/admin/dashboard/leads', icon: FileText },
        { name: 'Customers', href: '/admin/dashboard/customers', icon: UserCircle },
        { name: 'Drivers', href: '/admin/dashboard/drivers', icon: Users },
        { name: 'Fleet', href: '/admin/dashboard/fleet', icon: Car },
        { name: 'Invoices', href: '/admin/dashboard/invoices', icon: Receipt },
        { name: 'Pricing', href: '/admin/dashboard/pricing', icon: DollarSign },
        { name: 'Price List', href: '/admin/dashboard/price-list', icon: FileText },
        { name: 'Promos', href: '/admin/dashboard/promos', icon: Tag },
        { name: 'Email Templates', href: '/admin/dashboard/email-templates', icon: Mail },
        { name: 'Blog', href: '/admin/dashboard/blog', icon: Newspaper },
        { name: 'Messages', href: '/admin/dashboard/messages', icon: Mail },
        { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
    ];

    useEffect(() => {
        // Initialize Audio with a simple base64 notification sound (short beep/ding)
        // This avoids needing to upload a file physically.
        // Sound is a simple "Glass" ping.
        const audio = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...");
        // Note: The above string is truncated for brevity in code view, but I will use a real working short Base64 string below.
        // Actually, for better reliability let's use a standard public URL or a full smooth sound string if possible, 
        // but since I can't guarantee internet access for external URLs, I will assume a file 'notification.mp3' 
        // or guide the user. 
        // WAIT, I can use a synthetic beep using AudioContext or just a really short base64.
        // Let's use a "files/notification.mp3" approach effectively, but I'll write a tool to create that file if I can, 
        // or just use a known good base64 for a "ding".

        // Let's try to load a sound from the public folder. I will create a simple placeholder or ask the user.
        // But the user asked ME to do it. So I will use a base64 string for immediate satisfaction.

        // Short "Ding" sound (Base64)
        const base64Sound = "data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7cQBMNJcq77WhEGqm3dbcUF708+PH66TP76XL0Rhy9X+aQO9682f0pBy/28409k+p20724dZ1e7T0V/j66f///9//3///64b///9F//7//8H//9////2qj/3//+gD//////wA=";
        // That was a placeholder string. I will use a reliable one in the actual implementation below.

        audioRef.current = new Audio("/notification.mp3"); // Expecting file in public

        // Fallback or explicit creation of audio object
        // Actually, let's just assume we will create the file in the next step or use a standard one.

        fetchNotifications();
        const interval = setInterval(fetchNotifications, 10000); // Poll every 10s for faster feedback
        return () => clearInterval(interval);
    }, []);

    const playNotificationSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed first):", e));
        }
    };

    const fetchNotifications = async () => {
        const { count: pendingBookings } = await supabase
            .from('bookings')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'Pending');

        if (pendingBookings !== null) {
            if (pendingBookings > prevNotificationsRef.current) {
                // Number increased! Play sound.
                playNotificationSound();
            }
            setNotifications(pendingBookings);
            prevNotificationsRef.current = pendingBookings;
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
            {/* Use a hidden audio element as backup or main source if needed, but the JS Audio() is better. */}
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />

            {/* Sidebar */}
            <aside style={{
                width: '260px',
                backgroundColor: '#1e3a8a', // Hughes Navy
                color: 'white',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                transition: 'transform 0.3s ease',
                transform: mobileMenuOpen ? 'translateX(0)' : (sidebarOpen ? 'translateX(0)' : 'translateX(-260px)'),
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column'
            }} className={`${mobileMenuOpen ? 'mobile-open' : ''} sidebar-check`}>

                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '2px solid #c5a467',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            color: '#c5a467'
                        }}>A</div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px' }}>AUZZSI ADMIN</span>
                    </div>
                </div>

                <nav style={{ flex: 1, padding: '1.5rem 1rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            color: isActive ? '#c5a467' : '#e2e8f0',
                                            backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                            textDecoration: 'none',
                                            fontWeight: isActive ? '600' : '400',
                                            transition: 'all 0.2s'
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <item.icon size={20} />
                                        {item.name}
                                        {item.name === 'Bookings' && notifications > 0 && (
                                            <span style={{
                                                marginLeft: 'auto',
                                                backgroundColor: '#ef4444',
                                                color: 'white',
                                                fontSize: '0.7rem',
                                                fontWeight: 'bold',
                                                padding: '2px 6px',
                                                borderRadius: '99px'
                                            }}>
                                                {notifications}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link href="/admin" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#ef4444',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}>
                        <LogOut size={18} />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: sidebarOpen ? '260px' : '0', // Adjust based on sidebar
                transition: 'margin-left 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0 // Prevent flex blowout
            }} className="main-content-wrapper">

                {/* Header */}
                <header style={{
                    height: '70px',
                    backgroundColor: 'white',
                    borderBottom: '1px solid #e5e7eb',
                    padding: '0 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 40
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={() => window.innerWidth > 768 ? setSidebarOpen(!sidebarOpen) : setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}
                        >
                            <Menu size={24} />
                        </button>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>Dashboard Overview</h2>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div
                                className={notifications > 0 ? 'bell-shake' : ''}
                                style={{ cursor: 'pointer' }}
                                onClick={playNotificationSound} // Allow manual test
                                title="Click to test sound"
                            >
                                <Bell size={20} color="#6b7280" />
                            </div>
                            {notifications > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    minWidth: '18px',
                                    height: '18px',
                                    backgroundColor: '#ef4444',
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    padding: '2px'
                                }}>{notifications > 99 ? '99+' : notifications}</span>
                            )}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: '#c5a467',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.8rem'
                            }}>AD</div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#374151', display: 'none' }} className="user-name">Admin User</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                    {children}
                </main>
            </div>

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 45 }}
                />
            )}

            {/* Mobile Responsive Style Injection */}
            <style jsx global>{`
                @media (max-width: 1024px) {
                    .sidebar-check {
                        transform: translateX(-260px) !important;
                    }
                    .sidebar-check.mobile-open {
                        transform: translateX(0) !important;
                    }
                    .main-content-wrapper {
                        margin-left: 0 !important;
                    }
                    .user-name {
                        display: none !important;
                    }
                }
                
                @keyframes bellShake {
                    0% { transform: rotate(0); }
                    15% { transform: rotate(5deg); }
                    30% { transform: rotate(-5deg); }
                    45% { transform: rotate(4deg); }
                    60% { transform: rotate(-4deg); }
                    75% { transform: rotate(2deg); }
                    85% { transform: rotate(-2deg); }
                    100% { transform: rotate(0); }
                }
                
                .bell-shake {
                    animation: bellShake 2s infinite;
                    transform-origin: top center;
                }
            `}</style>
        </div>
    );
}
