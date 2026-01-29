"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Download, MoreHorizontal, X, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function LeadsPage() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<any>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .eq('status', 'Quote Request') // Only quote requests
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching leads:', error);
        } else {
            setLeads(data || []);
        }
        setLoading(false);
    };

    const handleConvertToBooking = async () => {
        if (!selectedLead) return;
        setIsUpdating(true);

        const { error } = await supabase
            .from('bookings')
            .update({ status: 'Pending' })
            .eq('id', selectedLead.id);

        if (error) {
            alert('Error converting lead: ' + error.message);
        } else {
            // Remove from leads list
            setLeads(leads.filter(l => l.id !== selectedLead.id));
            setSelectedLead(null);
        }
        setIsUpdating(false);
    };

    const handleDelete = async () => {
        if (!selectedLead || !confirm('Are you sure you want to delete this lead?')) return;
        setIsUpdating(true);

        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', selectedLead.id);

        if (error) {
            alert('Error deleting lead: ' + error.message);
        } else {
            setLeads(leads.filter(l => l.id !== selectedLead.id));
            setSelectedLead(null);
        }
        setIsUpdating(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Quote Requests (Leads)</h1>
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
                                <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Est. Price</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading leads...</td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No quote requests found.</td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background-color 0.2s' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
                                            {lead.customer_name}
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '400' }}>{lead.customer_phone}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>{lead.vehicle_type || 'Ex. Sedan'}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div>{lead.pickup_date}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{lead.pickup_time}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontWeight: '500', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={lead.pickup_location}>{lead.pickup_location}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={lead.dropoff_location}>to {lead.dropoff_location}</div>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1f2937' }}>{lead.amount}</td>
                                        <td style={{ padding: '1rem', color: '#9ca3af', textAlign: 'center' }}>
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', fontSize: '0.8rem', fontWeight: '600' }}
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Lead Details Modal */}
            {selectedLead && (
                <div style={{
                    position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
                }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '500px', maxWidth: '95%', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
                        {/* Header */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Quote Request Details</h2>
                            <button onClick={() => setSelectedLead(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Customer Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'grid', gap: '0.8rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Mail size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedLead.customer_email}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Phone size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedLead.customer_phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Trip Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} color="#4b5563" />
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedLead.pickup_date} at {selectedLead.pickup_time}</span>
                                    </div>
                                    <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #e5e7eb', marginLeft: '7px' }}>
                                        <div style={{ marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>From</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.pickup_location}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>To</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.dropoff_location}</span>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>Vehicle</span>
                                        <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.vehicle_type}</span>
                                    </div>
                                    <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#92400e', display: 'block' }}>Estimated Price</span>
                                        <span style={{ fontWeight: '700', color: '#78350f', fontSize: '1.5rem' }}>{selectedLead.amount}</span>
                                    </div>
                                    {selectedLead.notes && (
                                        <div style={{ marginTop: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>Notes</span>
                                            <span style={{ color: '#374151' }}>{selectedLead.notes}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <button
                                        disabled={isUpdating}
                                        onClick={handleConvertToBooking}
                                        style={{ flex: 1, padding: '0.8rem', border: 'none', background: '#10b981', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white' }}
                                    >
                                        Convert to Booking
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={handleDelete}
                                        style={{ flex: 1, padding: '0.8rem', border: '1px solid #f87171', background: 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#991b1b' }}
                                    >
                                        Delete
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
