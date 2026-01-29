"use client";

import { useState, useEffect } from 'react';
import { FileText, Download, Send, DollarSign, Calendar, User, Mail, Phone, Plus, Eye, Check, X } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function InvoicesPage() {
    const [invoices, setInvoices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'unpaid', 'paid', 'overdue'
    const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchInvoices();
    }, [filter]);

    const fetchInvoices = async () => {
        setLoading(true);
        let query = supabase
            .from('invoices')
            .select('*, bookings(pickup_location, dropoff_location)')
            .order('created_at', { ascending: false });

        if (filter !== 'all') {
            query = query.eq('payment_status', filter);
        }

        const { data, error } = await query;

        if (!error && data) {
            setInvoices(data);
        }
        setLoading(false);
    };

    const createInvoiceFromBooking = async (bookingId: string) => {
        const { data, error } = await supabase.rpc('create_invoice_from_booking', {
            p_booking_id: bookingId
        });

        if (!error) {
            fetchInvoices();
            alert('Invoice created successfully!');
        } else {
            alert('Error creating invoice: ' + error.message);
        }
    };

    const markAsPaid = async (invoiceId: string, amount: number) => {
        const paymentMethod = prompt('Payment method (e.g., Cash, Card, Bank Transfer):');
        if (!paymentMethod) return;

        const { error } = await supabase.rpc('mark_invoice_paid', {
            p_invoice_id: invoiceId,
            p_payment_method: paymentMethod,
            p_amount: amount
        });

        if (!error) {
            fetchInvoices();
            alert('Invoice marked as paid!');
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return '#10b981';
            case 'partial': return '#f59e0b';
            case 'overdue': return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getStatusBadge = (status: string) => {
        const color = getStatusColor(status);
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
                {status}
            </span>
        );
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Invoices</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        Manage and track all invoices
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {['all', 'unpaid', 'paid', 'partial', 'overdue'].map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        style={{
                            padding: '0.5rem 1rem',
                            border: filter === status ? '2px solid #1e3a8a' : '1px solid #e5e7eb',
                            borderRadius: '6px',
                            backgroundColor: filter === status ? '#eff6ff' : 'white',
                            color: filter === status ? '#1e3a8a' : '#6b7280',
                            cursor: 'pointer',
                            fontWeight: filter === status ? '600' : '500',
                            fontSize: '0.85rem',
                            textTransform: 'capitalize'
                        }}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Total Invoices</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{invoices.length}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Total Amount</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>
                        ${invoices.reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0).toFixed(2)}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Paid</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>
                        ${invoices.filter(i => i.payment_status === 'paid').reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0).toFixed(2)}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Unpaid</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>
                        ${invoices.filter(i => i.payment_status === 'unpaid').reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0).toFixed(2)}
                    </div>
                </div>
            </div>

            {/* Invoices Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Invoice #</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Customer</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Date</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Amount</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Status</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    Loading invoices...
                                </td>
                            </tr>
                        ) : invoices.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    No invoices found
                                </td>
                            </tr>
                        ) : (
                            invoices.map((invoice) => (
                                <tr key={invoice.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#1e3a8a' }}>
                                        {invoice.invoice_number}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ fontWeight: '600', color: '#1f2937' }}>{invoice.customer_name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{invoice.customer_email}</div>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
                                        {new Date(invoice.issue_date).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '700', color: '#1f2937', fontSize: '1.1rem' }}>
                                        ${parseFloat(invoice.total_amount).toFixed(2)}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {getStatusBadge(invoice.payment_status)}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button
                                                onClick={() => {
                                                    setSelectedInvoice(invoice);
                                                    setShowModal(true);
                                                }}
                                                style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.8rem' }}
                                                title="View"
                                            >
                                                <Eye size={14} />
                                            </button>
                                            {invoice.payment_status !== 'paid' && (
                                                <button
                                                    onClick={() => markAsPaid(invoice.id, invoice.total_amount)}
                                                    style={{ padding: '0.4rem 0.8rem', border: 'none', borderRadius: '4px', background: '#10b981', color: 'white', cursor: 'pointer', fontSize: '0.8rem' }}
                                                    title="Mark as Paid"
                                                >
                                                    <Check size={14} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Invoice Detail Modal */}
            {showModal && selectedInvoice && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '600px', maxWidth: '95%', maxHeight: '90vh', overflow: 'auto' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                Invoice {selectedInvoice.invoice_number}
                            </h2>
                            <button onClick={() => setShowModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                <X size={24} color="#6b7280" />
                            </button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            {/* Customer Info */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#6b7280', marginBottom: '0.75rem' }}>BILL TO</h3>
                                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>{selectedInvoice.customer_name}</div>
                                <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '0.25rem' }}>{selectedInvoice.customer_email}</div>
                                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>{selectedInvoice.customer_phone}</div>
                            </div>

                            {/* Invoice Details */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Issue Date</div>
                                    <div style={{ fontWeight: '600', color: '#1f2937' }}>{new Date(selectedInvoice.issue_date).toLocaleDateString()}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Due Date</div>
                                    <div style={{ fontWeight: '600', color: '#1f2937' }}>{new Date(selectedInvoice.due_date).toLocaleDateString()}</div>
                                </div>
                            </div>

                            {/* Line Items */}
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#6b7280', marginBottom: '0.75rem' }}>ITEMS</h3>
                                <table style={{ width: '100%', fontSize: '0.9rem' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                            <th style={{ padding: '0.5rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Description</th>
                                            <th style={{ padding: '0.5rem', textAlign: 'right', color: '#6b7280', fontWeight: '600' }}>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {JSON.parse(selectedInvoice.line_items || '[]').map((item: any, idx: number) => (
                                            <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                                <td style={{ padding: '0.75rem' }}>{item.description}</td>
                                                <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '600' }}>${parseFloat(item.amount).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Totals */}
                            <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#6b7280' }}>Subtotal:</span>
                                    <span style={{ fontWeight: '600' }}>${parseFloat(selectedInvoice.subtotal).toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#6b7280' }}>Tax ({selectedInvoice.tax_rate}%):</span>
                                    <span style={{ fontWeight: '600' }}>${parseFloat(selectedInvoice.tax_amount).toFixed(2)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb', fontSize: '1.2rem' }}>
                                    <span style={{ fontWeight: 'bold', color: '#1f2937' }}>Total:</span>
                                    <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>${parseFloat(selectedInvoice.total_amount).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Payment Status */}
                            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '600', color: '#1f2937' }}>Payment Status:</span>
                                    {getStatusBadge(selectedInvoice.payment_status)}
                                </div>
                                {selectedInvoice.payment_date && (
                                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
                                        Paid on {new Date(selectedInvoice.payment_date).toLocaleDateString()} via {selectedInvoice.payment_method}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
