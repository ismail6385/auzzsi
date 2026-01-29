"use client";

import { useState, useEffect } from 'react';
import {
    TrendingUp,
    Users,
    Calendar,
    DollarSign,
    Clock,
    CheckCircle,
    XCircle,
    MoreHorizontal,
    MapPin,
    Car
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { addHours, isWithinInterval } from 'date-fns';

export default function DashboardPage() {
    const [stats, setStats] = useState([
        { label: 'Total Bookings', value: '0', change: '-', icon: Calendar, color: '#3b82f6' },
        { label: 'Pending Requests', value: '0', change: '-', icon: Clock, color: '#ef4444' },
        { label: 'Quote Requests', value: '0', change: '-', icon: Users, color: '#f59e0b' },
        { label: 'Contact Messages', value: '0', change: '-', icon: DollarSign, color: '#10b981' },
    ]);
    const [recentBookings, setRecentBookings] = useState<any[]>([]);
    const [upcomingTrips, setUpcomingTrips] = useState<any[]>([]);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        // Fetch Booking Counts
        const { count: totalBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).neq('status', 'Quote Request');
        const { count: pendingBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'Pending');
        const { count: quoteRequests } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'Quote Request');
        const { count: enquiries } = await supabase.from('contact_messages').select('*', { count: 'exact', head: true });

        // Fetch Recent Bookings (exclude quote requests)
        const { data: bookingsData } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request')
            .order('created_at', { ascending: false })
            .limit(5);

        // Fetch potential upcoming trips (active bookings)
        const { data: activeBookings } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request')
            .neq('status', 'Cancelled')
            .neq('status', 'Completed')
            .limit(100); // Fetch enough to filter in memory

        if (activeBookings) {
            const now = new Date();
            const next48Hours = addHours(now, 48);

            const upcoming = activeBookings.filter(booking => {
                if (!booking.pickup_date) return false;

                let tripDate;
                try {
                    // Try parsing combined date and time
                    const dateTimeString = booking.pickup_time
                        ? `${booking.pickup_date}T${booking.pickup_time}`
                        : booking.pickup_date;

                    // Simple check for YYYY-MM-DD
                    if (booking.pickup_date.includes('-')) {
                        tripDate = new Date(dateTimeString);
                    } else {
                        // Fallback logic if needed, but assuming ISO/standard input
                        tripDate = new Date(dateTimeString);
                    }

                    if (isNaN(tripDate.getTime())) return false;

                    return isWithinInterval(tripDate, { start: now, end: next48Hours });
                } catch (e) {
                    console.error("Date parsing error", e);
                    return false;
                }
            }).sort((a, b) => {
                const dateA = new Date(`${a.pickup_date}T${a.pickup_time || '00:00'}`);
                const dateB = new Date(`${b.pickup_date}T${b.pickup_time || '00:00'}`);
                return dateA.getTime() - dateB.getTime();
            });

            setUpcomingTrips(upcoming);
        }

        setStats([
            { label: 'Total Bookings', value: totalBookings?.toString() || '0', change: 'Live', icon: Calendar, color: '#3b82f6' },
            { label: 'Pending Requests', value: pendingBookings?.toString() || '0', change: 'Needs Action', icon: Clock, color: '#ef4444' },
            { label: 'Quote Requests', value: quoteRequests?.toString() || '0', change: 'New Leads', icon: Users, color: '#f59e0b' },
            { label: 'Contact Messages', value: enquiries?.toString() || '0', change: 'Live', icon: DollarSign, color: '#10b981' },
        ]);

        if (bookingsData) {
            setRecentBookings(bookingsData);
        }
    };

    return (
        <div style={{ paddingBottom: '2rem' }}>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {stats.map((stat, index) => (
                    <div key={index} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>{stat.label}</p>
                                <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginTop: '0.5rem' }}>{stat.value}</h3>
                            </div>
                            <div style={{ padding: '0.75rem', backgroundColor: `${stat.color}15`, borderRadius: '10px', color: stat.color }}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                            <span style={{ color: '#10b981', fontWeight: '600' }}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upcoming Trips Section */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', backgroundColor: '#e0e7ff', borderRadius: '8px', color: '#4f46e5' }}>
                        <Clock size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>Upcoming Trips <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '400' }}>(Next 48 Hours)</span></h3>
                </div>

                {upcomingTrips.length === 0 ? (
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280' }}>
                        <p>No upcoming trips scheduled for the next 48 hours.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {upcomingTrips.map((trip) => (
                            <div key={trip.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ padding: '1.25rem', borderBottom: '1px solid #f3f4f6', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} color="#6b7280" />
                                        <span style={{ fontWeight: '600', color: '#374151' }}>
                                            {trip.pickup_date} <span style={{ color: '#9ca3af', fontWeight: '400' }}>at</span> {trip.pickup_time}
                                        </span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        padding: '0.25rem 0.6rem',
                                        borderRadius: '999px',
                                        backgroundColor: trip.status === 'Pending' ? '#fff7ed' : '#f0fdf4',
                                        color: trip.status === 'Pending' ? '#c2410c' : '#15803d'
                                    }}>
                                        {trip.status}
                                    </span>
                                </div>
                                <div style={{ padding: '1.25rem', flex: 1 }}>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Customer</p>
                                        <p style={{ fontWeight: '600', color: '#111827' }}>{trip.customer_name}</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <div style={{ marginTop: '0.25rem' }}><MapPin size={16} color="#4f46e5" /></div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '500' }}>PICKUP</p>
                                                <p style={{ color: '#374151', fontSize: '0.9rem' }}>{trip.pickup_location}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <div style={{ marginTop: '0.25rem' }}><MapPin size={16} color="#db2777" /></div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '500' }}>DROP OFF</p>
                                                <p style={{ color: '#374151', fontSize: '0.9rem' }}>{trip.dropoff_location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1rem', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Car size={16} color="#6b7280" />
                                        <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>{trip.vehicle_type || 'Sedan'}</span>
                                    </div>
                                    <button style={{ color: '#4f46e5', fontWeight: '600', fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                {/* Recent Bookings Table */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', gridColumn: 'span 2' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1f2937' }}>Recent Bookings</h3>
                        <button style={{ color: '#4f46e5', fontSize: '0.875rem', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #e5e7eb', textAlign: 'left', color: '#6b7280' }}>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Customer</th>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Date</th>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Route</th>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Status</th>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.length === 0 ? (
                                    <tr><td colSpan={5} style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>No recent bookings</td></tr>
                                ) : (
                                    recentBookings.map((booking) => (
                                        <tr key={booking.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                            <td style={{ padding: '1rem', fontWeight: '500', color: '#1f2937' }}>{booking.customer_name}</td>
                                            <td style={{ padding: '1rem', color: '#6b7280' }}>{booking.pickup_date}</td>
                                            <td style={{ padding: '1rem', color: '#6b7280' }}>{booking.pickup_location} → {booking.dropoff_location}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '999px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    backgroundColor:
                                                        booking.status === 'Completed' ? '#d1fae5' :
                                                            booking.status === 'Pending' ? '#ffedd5' : '#e0e7ff',
                                                    color:
                                                        booking.status === 'Completed' ? '#065f46' :
                                                            booking.status === 'Pending' ? '#9a3412' : '#3730a3',
                                                }}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem', color: '#9ca3af' }}>
                                                <MoreHorizontal size={18} style={{ cursor: 'pointer' }} />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Driver Activity or Charts (Simple Placeholder) */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1f2937', marginBottom: '1.5rem' }}>Driver Status</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'John D.', status: 'On Job', time: '12m ago', color: '#10b981' },
                            { name: 'Sarah M.', status: 'Idle', time: '5m ago', color: '#f59e0b' },
                            { name: 'Robert C.', status: 'Offline', time: '1h ago', color: '#9ca3af' },
                        ].map((driver, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.8rem', borderBottom: '1px solid #f3f4f6' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: driver.color }}></div>
                                    <span style={{ fontWeight: '500', color: '#374151' }}>{driver.name}</span>
                                </div>
                                <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>{driver.status}</span>
                            </div>
                        ))}
                    </div>
                    <button style={{ width: '100%', marginTop: '1rem', padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'transparent', fontWeight: '600', color: '#4b5563', cursor: 'pointer' }}>View All Drivers</button>
                </div>

            </div>
        </div>
    );
}
