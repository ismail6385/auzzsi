"use client";

import { useState, useEffect } from 'react';
import { Mail, Plus, Edit, Eye, Copy, Send, X, Save, Code, FileText } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function EmailTemplatesPage() {
    const [templates, setTemplates] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState<any>(null);
    const [previewTemplate, setPreviewTemplate] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'visual' | 'code'>('visual');

    const [formData, setFormData] = useState({
        template_name: '',
        subject: '',
        body_html: '',
        body_text: '',
        variables: [] as string[],
        is_active: true
    });

    useEffect(() => {
        fetchTemplates();
    }, []);

    const fetchTemplates = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('email_templates')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setTemplates(data);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const templateData = {
            ...formData,
            variables: JSON.stringify(formData.variables)
        };

        if (editingTemplate) {
            const { error } = await supabase
                .from('email_templates')
                .update(templateData)
                .eq('id', editingTemplate.id);

            if (!error) {
                fetchTemplates();
                closeModal();
            } else {
                alert('Error updating template: ' + error.message);
            }
        } else {
            const { error } = await supabase
                .from('email_templates')
                .insert([templateData]);

            if (!error) {
                fetchTemplates();
                closeModal();
            } else {
                alert('Error creating template: ' + error.message);
            }
        }
    };

    const openModal = (template?: any) => {
        if (template) {
            setEditingTemplate(template);
            setFormData({
                template_name: template.template_name,
                subject: template.subject,
                body_html: template.body_html,
                body_text: template.body_text || '',
                variables: Array.isArray(template.variables) ? template.variables : JSON.parse(template.variables || '[]'),
                is_active: template.is_active
            });
        } else {
            setEditingTemplate(null);
            setFormData({
                template_name: '',
                subject: '',
                body_html: '',
                body_text: '',
                variables: [],
                is_active: true
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingTemplate(null);
        setViewMode('visual');
    };

    const openPreview = (template: any) => {
        setPreviewTemplate(template);
        setShowPreview(true);
    };

    const addVariable = () => {
        const varName = prompt('Enter variable name (e.g., customer_name):');
        if (varName && !formData.variables.includes(varName)) {
            setFormData({
                ...formData,
                variables: [...formData.variables, varName]
            });
        }
    };

    const removeVariable = (varName: string) => {
        setFormData({
            ...formData,
            variables: formData.variables.filter(v => v !== varName)
        });
    };

    const insertVariable = (varName: string) => {
        const variable = `{${varName}}`;
        // Insert into subject or body based on current focus
        // For simplicity, we'll just copy to clipboard
        navigator.clipboard.writeText(variable);
        alert(`Variable ${variable} copied to clipboard!`);
    };

    const duplicateTemplate = async (template: any) => {
        const newName = prompt('Enter new template name:', template.template_name + '_copy');
        if (!newName) return;

        const { error } = await supabase
            .from('email_templates')
            .insert([{
                template_name: newName,
                subject: template.subject,
                body_html: template.body_html,
                body_text: template.body_text,
                variables: template.variables,
                is_active: false
            }]);

        if (!error) {
            fetchTemplates();
            alert('Template duplicated successfully!');
        }
    };

    const toggleActive = async (id: string, currentStatus: boolean) => {
        const { error } = await supabase
            .from('email_templates')
            .update({ is_active: !currentStatus })
            .eq('id', id);

        if (!error) {
            fetchTemplates();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Email Templates</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        Create and manage email templates for automated communications
                    </p>
                </div>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Create Template
                </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Mail size={20} color="#6b7280" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Templates</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{templates.length}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileText size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Active Templates</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>
                        {templates.filter(t => t.is_active).length}
                    </div>
                </div>
            </div>

            {/* Templates Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        Loading templates...
                    </div>
                ) : templates.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        No templates found. Create one to get started!
                    </div>
                ) : (
                    templates.map((template) => (
                        <div
                            key={template.id}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                border: `2px solid ${template.is_active ? '#10b981' : '#e5e7eb'}`,
                                padding: '1.5rem',
                                position: 'relative'
                            }}
                        >
                            {/* Status Badge */}
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                {template.is_active ? (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#d1fae5', color: '#065f46' }}>
                                        ACTIVE
                                    </span>
                                ) : (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#6b7280' }}>
                                        INACTIVE
                                    </span>
                                )}
                            </div>

                            {/* Template Info */}
                            <div style={{ marginBottom: '1rem', paddingRight: '80px' }}>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#1f2937',
                                    marginBottom: '0.5rem'
                                }}>
                                    {template.template_name.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                    <Mail size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                                    {template.subject}
                                </div>
                            </div>

                            {/* Variables */}
                            {template.variables && JSON.parse(template.variables || '[]').length > 0 && (
                                <div style={{ marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>VARIABLES:</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                        {JSON.parse(template.variables || '[]').slice(0, 4).map((variable: string, idx: number) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    padding: '0.2rem 0.5rem',
                                                    backgroundColor: '#eff6ff',
                                                    color: '#1e40af',
                                                    borderRadius: '4px',
                                                    fontSize: '0.7rem',
                                                    fontFamily: 'monospace'
                                                }}
                                            >
                                                {`{${variable}}`}
                                            </span>
                                        ))}
                                        {JSON.parse(template.variables || '[]').length > 4 && (
                                            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                                                +{JSON.parse(template.variables || '[]').length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                                <button
                                    onClick={() => openPreview(template)}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        fontWeight: '500',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.25rem'
                                    }}
                                >
                                    <Eye size={14} /> Preview
                                </button>
                                <button
                                    onClick={() => openModal(template)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Edit size={14} />
                                </button>
                                <button
                                    onClick={() => duplicateTemplate(template)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Copy size={14} />
                                </button>
                                <button
                                    onClick={() => toggleActive(template.id, template.is_active)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: template.is_active ? '#fee2e2' : '#d1fae5',
                                        cursor: 'pointer',
                                        color: template.is_active ? '#991b1b' : '#065f46'
                                    }}
                                    title={template.is_active ? 'Deactivate' : 'Activate'}
                                >
                                    {template.is_active ? '✕' : '✓'}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '900px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingTemplate ? 'Edit Template' : 'Create Template'}
                            </h2>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <button
                                    onClick={() => setViewMode(viewMode === 'visual' ? 'code' : 'visual')}
                                    style={{ padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                >
                                    {viewMode === 'visual' ? <><Code size={14} /> Code</> : <><FileText size={14} /> Visual</>}
                                </button>
                                <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'auto', flex: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Template Name * (lowercase_with_underscores)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.template_name}
                                        onChange={(e) => setFormData({ ...formData, template_name: e.target.value.toLowerCase().replace(/\s+/g, '_') })}
                                        required
                                        placeholder="e.g., booking_confirmation"
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                            Status
                                        </label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem' }}>
                                            <input
                                                type="checkbox"
                                                checked={formData.is_active}
                                                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                                id="is_active"
                                                style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
                                            />
                                            <label htmlFor="is_active" style={{ fontSize: '0.9rem', color: '#374151', cursor: 'pointer' }}>
                                                Active
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Email Subject *
                                </label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                    placeholder="e.g., Booking Confirmation - {booking_id}"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            {/* Variables Section */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>
                                        Variables
                                    </label>
                                    <button
                                        type="button"
                                        onClick={addVariable}
                                        style={{ padding: '0.3rem 0.6rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                    >
                                        <Plus size={12} /> Add Variable
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '6px', minHeight: '3rem' }}>
                                    {formData.variables.length === 0 ? (
                                        <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>No variables added yet</span>
                                    ) : (
                                        formData.variables.map((variable, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    padding: '0.4rem 0.6rem',
                                                    backgroundColor: '#eff6ff',
                                                    color: '#1e40af',
                                                    borderRadius: '6px',
                                                    fontSize: '0.8rem',
                                                    fontFamily: 'monospace',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                <span onClick={() => insertVariable(variable)} style={{ cursor: 'pointer' }} title="Click to copy">
                                                    {`{${variable}}`}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeVariable(variable)}
                                                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#dc2626', padding: 0, fontSize: '0.9rem' }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                    Click on a variable to copy it, then paste in subject or body
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Email Body (HTML) *
                                </label>
                                <textarea
                                    value={formData.body_html}
                                    onChange={(e) => setFormData({ ...formData, body_html: e.target.value })}
                                    required
                                    rows={viewMode === 'code' ? 15 : 10}
                                    placeholder="Enter HTML content..."
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.85rem', resize: 'vertical', fontFamily: viewMode === 'code' ? 'monospace' : 'inherit' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Plain Text Version (Optional)
                                </label>
                                <textarea
                                    value={formData.body_text}
                                    onChange={(e) => setFormData({ ...formData, body_text: e.target.value })}
                                    rows={4}
                                    placeholder="Plain text version for email clients that don't support HTML"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.85rem', resize: 'vertical' }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    style={{ flex: 1, padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#374151' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Save size={16} />
                                    {editingTemplate ? 'Update Template' : 'Create Template'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Preview Modal */}
            {showPreview && previewTemplate && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '800px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                    Preview: {previewTemplate.template_name}
                                </h2>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                    Subject: {previewTemplate.subject}
                                </p>
                            </div>
                            <button onClick={() => setShowPreview(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '2rem', overflow: 'auto', flex: 1, backgroundColor: '#f3f4f6' }}>
                            <div
                                style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem' }}
                                dangerouslySetInnerHTML={{ __html: previewTemplate.body_html }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
