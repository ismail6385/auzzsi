"use client";

import { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, X, Phone, Mail, MapPin, Car } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function DriversPage() {
    const [drivers, setDrivers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingDriver, setEditingDriver] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        status: 'Offline',
        location: '',
        rating: 5.0
    });

    useEffect(() => {
        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('drivers')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setDrivers(data);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingDriver) {
            // Update existing driver
            const { error } = await supabase
                .from('drivers')
                .update(formData)
                .eq('id', editingDriver.id);

            if (!error) {
                fetchDrivers();
                closeModal();
            }
        } else {
            // Create new driver
            const { error } = await supabase
                .from('drivers')
                .insert([formData]);

            if (!error) {
                fetchDrivers();
                closeModal();
            }
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this driver?')) return;

        const { error } = await supabase
            .from('drivers')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchDrivers();
        }
    };

    const openModal = (driver?: any) => {
        if (driver) {
            setEditingDriver(driver);
            setFormData(driver);
        } else {
            setEditingDriver(null);
            setFormData({
                name: '',
                phone: '',
                email: '',
                status: 'Offline',
                location: '',
                rating: 5.0
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingDriver(null);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Drivers Management</h1>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Add Driver
                </button>
            </div>

            {/* Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', textAlign: 'left', color: '#4b5563' }}>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Name</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Contact</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Location</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Rating</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Status</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading drivers...</td>
                                </tr>
                            ) : drivers.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No drivers found. Click "Add Driver" to create one.</td>
                                </tr>
                            ) : (
                                drivers.map((driver) => (
                                    <tr key={driver.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>{driver.name}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontSize: '0.85rem' }}>{driver.phone}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{driver.email}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>{driver.location || 'Not Set'}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                ⭐ {driver.rating || 5.0}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                backgroundColor: driver.status === 'Available' ? '#d1fae5' : driver.status === 'On Job' ? '#dbeafe' : '#fee2e2',
                                                color: driver.status === 'Available' ? '#065f46' : driver.status === 'On Job' ? '#1e40af' : '#991b1b',
                                            }}>
                                                {driver.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button onClick={() => openModal(driver)} style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
                                                    <Edit size={14} color="#6b7280" />
                                                </button>
                                                <button onClick={() => handleDelete(driver.id)} style={{ padding: '0.4rem', border: '1px solid #fca5a5', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
                                                    <Trash2 size={14} color="#dc2626" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '500px', maxWidth: '95%', overflow: 'hidden' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{editingDriver ? 'Edit Driver' : 'Add New Driver'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Full Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Location</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="e.g., Sydney CBD"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Rating</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                >
                                    <option value="Available">Available</option>
                                    <option value="On Job">On Job</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button type="button" onClick={closeModal} style={{ flex: 1, padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#374151' }}>
                                    Cancel
                                </button>
                                <button type="submit" style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white' }}>
                                    {editingDriver ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
