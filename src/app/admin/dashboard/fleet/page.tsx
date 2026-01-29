"use client";

import { useState, useEffect } from 'react';
import { Search, Plus, Edit, Trash2, X } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function FleetPage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState<any>(null);
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        registration: '',
        type: 'Executive Sedan',
        capacity: 4,
        color: '',
        status: 'Available'
    });

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('fleet')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setVehicles(data);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingVehicle) {
            const { error } = await supabase
                .from('fleet')
                .update(formData)
                .eq('id', editingVehicle.id);

            if (!error) {
                fetchVehicles();
                closeModal();
            }
        } else {
            const { error } = await supabase
                .from('fleet')
                .insert([formData]);

            if (!error) {
                fetchVehicles();
                closeModal();
            }
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this vehicle?')) return;

        const { error } = await supabase
            .from('fleet')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchVehicles();
        }
    };

    const openModal = (vehicle?: any) => {
        if (vehicle) {
            setEditingVehicle(vehicle);
            setFormData(vehicle);
        } else {
            setEditingVehicle(null);
            setFormData({
                make: '',
                model: '',
                year: '',
                registration: '',
                type: 'Executive Sedan',
                capacity: 4,
                color: '',
                status: 'Available'
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingVehicle(null);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Fleet Management</h1>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Add Vehicle
                </button>
            </div>

            {/* Grid View */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {loading ? (
                    <div style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading fleet...</div>
                ) : vehicles.length === 0 ? (
                    <div style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No vehicles found. Click "Add Vehicle" to create one.</div>
                ) : (
                    vehicles.map((vehicle) => (
                        <div key={vehicle.id} style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{vehicle.make} {vehicle.model}</h3>
                                        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{vehicle.year} • {vehicle.color}</p>
                                    </div>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '999px',
                                        fontSize: '0.7rem',
                                        fontWeight: '600',
                                        backgroundColor: vehicle.status === 'Available' ? '#d1fae5' : vehicle.status === 'In Use' ? '#dbeafe' : '#fee2e2',
                                        color: vehicle.status === 'Available' ? '#065f46' : vehicle.status === 'In Use' ? '#1e40af' : '#991b1b',
                                    }}>
                                        {vehicle.status}
                                    </span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#6b7280' }}>Type:</span>
                                        <span style={{ fontWeight: '600', color: '#374151' }}>{vehicle.type}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#6b7280' }}>Registration:</span>
                                        <span style={{ fontWeight: '600', color: '#374151' }}>{vehicle.registration}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                                        <span style={{ color: '#6b7280' }}>Capacity:</span>
                                        <span style={{ fontWeight: '600', color: '#374151' }}>{vehicle.capacity} passengers</span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => openModal(vehicle)}
                                        style={{ flex: 1, padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(vehicle.id)}
                                        style={{ flex: 1, padding: '0.6rem', border: '1px solid #fca5a5', borderRadius: '6px', background: 'white', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', color: '#dc2626' }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '500px', maxWidth: '95%', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Make</label>
                                    <input
                                        type="text"
                                        value={formData.make}
                                        onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                                        placeholder="e.g., Mercedes-Benz"
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Model</label>
                                    <input
                                        type="text"
                                        value={formData.model}
                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                        placeholder="e.g., S-Class"
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Year</label>
                                    <input
                                        type="text"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                        placeholder="2024"
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Color</label>
                                    <input
                                        type="text"
                                        value={formData.color}
                                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                        placeholder="Black"
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Registration Number</label>
                                <input
                                    type="text"
                                    value={formData.registration}
                                    onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                                    placeholder="ABC123"
                                    required
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Vehicle Type</label>
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option>Executive Sedan</option>
                                        <option>Premium SUV</option>
                                        <option>People Mover</option>
                                        <option>Minibus</option>
                                        <option>Luxury Sedan</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Capacity</label>
                                    <input
                                        type="number"
                                        value={formData.capacity}
                                        onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
                                        min="1"
                                        max="20"
                                        required
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                >
                                    <option value="Available">Available</option>
                                    <option value="In Use">In Use</option>
                                    <option value="Maintenance">Maintenance</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button type="button" onClick={closeModal} style={{ flex: 1, padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#374151' }}>
                                    Cancel
                                </button>
                                <button type="submit" style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white' }}>
                                    {editingVehicle ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
