"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Download, MoreHorizontal, ChevronLeft, ChevronRight, X, Check, Clock, AlertTriangle } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function BookingsPage() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request') // Exclude quote requests
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching bookings:', error);
        } else {
            setBookings(data || []);
        }
        setLoading(false);
    };

    const handleStatusUpdate = async (newStatus: string) => {
        if (!selectedBooking) return;
        setIsUpdating(true);

        const { error } = await supabase
            .from('bookings')
            .update({ status: newStatus })
            .eq('id', selectedBooking.id);

        if (error) {
            alert('Error refreshing status: ' + error.message);
        } else {
            // Update local state
            setBookings(bookings.map(b => b.id === selectedBooking.id ? { ...b, status: newStatus } : b));
            setSelectedBooking({ ...selectedBooking, status: newStatus });
        }
        setIsUpdating(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Bookings Management</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer' }}>
                        <Filter size={16} /> Filter
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #bfa15f', borderRadius: '6px', backgroundColor: '#bfa15f', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}>
                        <Download size={16} /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', textAlign: 'left', color: '#4b5563' }}>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Customer</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Vehicle</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Date & Time</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Route</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Status</th>
                                <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Amount</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading bookings...</td>
                                </tr>
                            ) : bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No bookings found.</td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background-color 0.2s' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
                                            {booking.customer_name}
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '400' }}>{booking.customer_phone}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>{booking.vehicle_type || 'Ex. Sedan'}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div>{booking.pickup_date}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{booking.pickup_time}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontWeight: '500', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={booking.pickup_location}>{booking.pickup_location}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={booking.dropoff_location}>to {booking.dropoff_location}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                backgroundColor:
                                                    booking.status === 'Completed' ? '#d1fae5' :
                                                        booking.status === 'In Progress' ? '#dbeafe' :
                                                            booking.status === 'Confirmed' ? '#e0e7ff' :
                                                                booking.status === 'Pending' ? '#ffedd5' : '#fee2e2',
                                                color:
                                                    booking.status === 'Completed' ? '#065f46' :
                                                        booking.status === 'In Progress' ? '#1e40af' :
                                                            booking.status === 'Confirmed' ? '#3730a3' :
                                                                booking.status === 'Pending' ? '#9a3412' : '#991b1b',
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1f2937' }}>{booking.amount}</td>
                                        <td style={{ padding: '1rem', color: '#9ca3af', textAlign: 'center' }}>
                                            <button
                                                onClick={() => setSelectedBooking(booking)}
                                                style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', fontSize: '0.8rem', fontWeight: '600' }}
                                            >
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Manage Booking Modal */}
            {selectedBooking && (
                <div style={{
                    position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
                }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '500px', maxWidth: '95%', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
                        {/* Header */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Manage Booking</h2>
                            <button onClick={() => setSelectedBooking(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Customer Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af' }}>Name</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedBooking.customer_name}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af' }}>Phone</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedBooking.customer_phone}</span>
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <span style={{ display: 'block', fontSize: '0.9rem', color: '#9ca3af' }}>Email</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedBooking.customer_email}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Trip Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} color="#4b5563" />
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedBooking.pickup_date} at {selectedBooking.pickup_time}</span>
                                    </div>
                                    <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #e5e7eb', marginLeft: '7px' }}>
                                        <div style={{ marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>From</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedBooking.pickup_location}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>To</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedBooking.dropoff_location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Actions */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>Update Status</label>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <button
                                        disabled={isUpdating}
                                        onClick={() => handleStatusUpdate('Pending')}
                                        style={{ flex: 1, padding: '0.8rem', border: '1px solid #fbbf24', background: selectedBooking.status === 'Pending' ? '#fffbeb' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#b45309' }}
                                    >
                                        Pending
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={() => handleStatusUpdate('Confirmed')}
                                        style={{ flex: 1, padding: '0.8rem', border: '1px solid #818cf8', background: selectedBooking.status === 'Confirmed' ? '#eef2ff' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#4338ca' }}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={() => handleStatusUpdate('Completed')}
                                        style={{ flex: 1, padding: '0.8rem', border: '1px solid #34d399', background: selectedBooking.status === 'Completed' ? '#ecfdf5' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#064e3b' }}
                                    >
                                        Complete
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={() => handleStatusUpdate('Cancelled')}
                                        style={{ flex: 1, padding: '0.8rem', border: '1px solid #f87171', background: selectedBooking.status === 'Cancelled' ? '#fef2f2' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#991b1b' }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
