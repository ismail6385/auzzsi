"use client";

import { useState, useEffect } from 'react';
import { Users, Star, DollarSign, Calendar, Phone, Mail, MapPin, Tag, Plus, Eye, Edit, MessageSquare, TrendingUp } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function CustomersPage() {
    const [customers, setCustomers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'vip', 'corporate', 'individual'
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [customerStats, setCustomerStats] = useState<any>(null);

    useEffect(() => {
        fetchCustomers();
    }, [filter]);

    const fetchCustomers = async () => {
        setLoading(true);
        let query = supabase
            .from('customers')
            .select('*')
            .order('total_spent', { ascending: false });

        if (filter !== 'all') {
            query = query.eq('customer_type', filter);
        }

        const { data, error } = await query;

        if (!error && data) {
            setCustomers(data);
        }
        setLoading(false);
    };

    const viewCustomerDetails = async (customer: any) => {
        setSelectedCustomer(customer);

        // Fetch customer lifetime value
        const { data: stats } = await supabase.rpc('get_customer_lifetime_value', {
            p_customer_id: customer.id
        });

        if (stats && stats.length > 0) {
            setCustomerStats(stats[0]);
        }

        setShowModal(true);
    };

    const getCustomerTypeColor = (type: string) => {
        switch (type) {
            case 'vip': return '#8b5cf6';
            case 'corporate': return '#3b82f6';
            default: return '#6b7280';
        }
    };

    const getCustomerTypeBadge = (type: string) => {
        const color = getCustomerTypeColor(type);
        return (
            <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: color + '20',
                color: color,
                textTransform: 'uppercase'
            }}>
                {type}
            </span>
        );
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Customer Management</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        Manage customer relationships and track lifetime value
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {['all', 'individual', 'corporate', 'vip'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        style={{
                            padding: '0.5rem 1rem',
                            border: filter === type ? '2px solid #1e3a8a' : '1px solid #e5e7eb',
                            borderRadius: '6px',
                            backgroundColor: filter === type ? '#eff6ff' : 'white',
                            color: filter === type ? '#1e3a8a' : '#6b7280',
                            cursor: 'pointer',
                            fontWeight: filter === type ? '600' : '500',
                            fontSize: '0.85rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Users size={20} color="#6b7280" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Customers</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{customers.length}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <DollarSign size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Revenue</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>
                        ${customers.reduce((sum, c) => sum + parseFloat(c.total_spent || 0), 0).toFixed(2)}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Star size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>VIP Customers</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5cf6' }}>
                        {customers.filter(c => c.customer_type === 'vip').length}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Avg. Bookings</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#3b82f6' }}>
                        {customers.length > 0 ? (customers.reduce((sum, c) => sum + (c.total_bookings || 0), 0) / customers.length).toFixed(1) : 0}
                    </div>
                </div>
            </div>

            {/* Customers Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Customer</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Type</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Contact</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Bookings</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Total Spent</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Last Booking</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    Loading customers...
                                </td>
                            </tr>
                        ) : customers.length === 0 ? (
                            <tr>
                                <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    No customers found
                                </td>
                            </tr>
                        ) : (
                            customers.map((customer) => (
                                <tr key={customer.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ fontWeight: '600', color: '#1f2937' }}>
                                            {customer.first_name} {customer.last_name}
                                        </div>
                                        {customer.company_name && (
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{customer.company_name}</div>
                                        )}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {getCustomerTypeBadge(customer.customer_type)}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ fontSize: '0.85rem', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Mail size={12} />
                                                {customer.email}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <Phone size={12} />
                                                {customer.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
                                        {customer.total_bookings || 0}
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '700', color: '#10b981', fontSize: '1.05rem' }}>
                                        ${parseFloat(customer.total_spent || 0).toFixed(2)}
                                    </td>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.85rem' }}>
                                        {customer.last_booking_date ? new Date(customer.last_booking_date).toLocaleDateString() : 'Never'}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <button
                                            onClick={() => viewCustomerDetails(customer)}
                                            style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                        >
                                            <Eye size={14} /> View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Customer Detail Modal */}
            {showModal && selectedCustomer && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, overflow: 'auto', padding: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '800px', maxWidth: '95%', maxHeight: '90vh', overflow: 'auto' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                    {selectedCustomer.first_name} {selectedCustomer.last_name}
                                </h2>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                    Customer since {new Date(selectedCustomer.created_at).toLocaleDateString()}
                                </p>
                            </div>
                            <button onClick={() => setShowModal(false)} style={{ padding: '0.5rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.5rem', color: '#6b7280' }}>
                                ×
                            </button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            {/* Customer Stats */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#15803d', marginBottom: '0.25rem' }}>Total Bookings</div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#15803d' }}>
                                        {customerStats?.total_bookings || 0}
                                    </div>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#1e40af', marginBottom: '0.25rem' }}>Total Revenue</div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1e40af' }}>
                                        ${customerStats?.total_revenue?.toFixed(2) || '0.00'}
                                    </div>
                                </div>
                                <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#92400e', marginBottom: '0.25rem' }}>Avg. Booking</div>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#92400e' }}>
                                        ${customerStats?.average_booking_value?.toFixed(2) || '0.00'}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Contact Information</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.25rem' }}>Email</div>
                                        <div style={{ fontWeight: '500', color: '#1f2937' }}>{selectedCustomer.email || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.25rem' }}>Phone</div>
                                        <div style={{ fontWeight: '500', color: '#1f2937' }}>{selectedCustomer.phone || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.25rem' }}>City</div>
                                        <div style={{ fontWeight: '500', color: '#1f2937' }}>{selectedCustomer.city || 'N/A'}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.25rem' }}>Customer Type</div>
                                        <div>{getCustomerTypeBadge(selectedCustomer.customer_type)}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Preferences */}
                            {(selectedCustomer.preferred_vehicle || selectedCustomer.special_requirements) && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Preferences</h3>
                                    <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                                        {selectedCustomer.preferred_vehicle && (
                                            <div style={{ marginBottom: '0.5rem' }}>
                                                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Preferred Vehicle: </span>
                                                <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedCustomer.preferred_vehicle}</span>
                                            </div>
                                        )}
                                        {selectedCustomer.special_requirements && (
                                            <div>
                                                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Special Requirements: </span>
                                                <span style={{ color: '#1f2937' }}>{selectedCustomer.special_requirements}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Notes */}
                            {selectedCustomer.notes && (
                                <div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>Notes</h3>
                                    <div style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '6px', fontSize: '0.9rem', color: '#78350f' }}>
                                        {selectedCustomer.notes}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
