"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [slug, setSlug] = useState('');

    const generateSlug = (text: string) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        setSlug(generateSlug(e.target.value));
    };

    const handleSubmit = async (publish: boolean) => {
        if (!title || !slug) return alert('Title is required');

        setLoading(true);
        const { error } = await supabase.from('posts').insert({
            title,
            slug,
            content,
            excerpt,
            is_published: publish
        });

        setLoading(false);
        if (error) {
            alert('Error creating post: ' + error.message);
        } else {
            router.push('/admin/dashboard/blog');
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <button onClick={() => router.back()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
                    <ArrowLeft size={18} /> Back
                </button>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Create New Post</h1>
            </div>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Post Title</label>
                        <input
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="e.g. 5 Benefits of Chauffeur Travel"
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Slug (URL)</label>
                        <input
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.9rem', color: '#6b7280', backgroundColor: '#f9fafb' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Short Excerpt</label>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            rows={3}
                            placeholder="Brief summary for list view..."
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Content (Markdown supported)</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={15}
                            placeholder="Write your article here..."
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.95rem', fontFamily: 'monospace' }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                        <button
                            onClick={() => handleSubmit(false)}
                            disabled={loading}
                            style={{
                                padding: '0.8rem 1.5rem', borderRadius: '6px', border: '1px solid #d1d5db', backgroundColor: 'white', color: '#374151', fontWeight: '600', cursor: 'pointer'
                            }}
                        >
                            Save Draft
                        </button>
                        <button
                            onClick={() => handleSubmit(true)}
                            disabled={loading}
                            style={{
                                padding: '0.8rem 1.5rem', borderRadius: '6px', border: 'none', backgroundColor: '#1e3a8a', color: 'white', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
                            }}
                        >
                            <Save size={18} /> Publish Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
