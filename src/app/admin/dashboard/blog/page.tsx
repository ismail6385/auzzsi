"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { Edit, Trash2, Plus, Eye, Calendar } from 'lucide-react';

export default function BlogListPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching posts:', error);
        } else {
            setPosts(data || []);
        }
        setLoading(false);
    };

    const deletePost = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Error deleting post');
        } else {
            fetchPosts();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Blog Posts</h1>
                <Link href="/admin/dashboard/blog/new" style={{
                    backgroundColor: '#1e3a8a',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Plus size={18} /> New Post
                </Link>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading posts...</div>
            ) : posts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ color: '#6b7280', marginBottom: '1rem' }}>No blog posts found.</p>
                    <Link href="/admin/dashboard/blog/new" style={{ color: '#1e3a8a', fontWeight: '600' }}>Create your first post</Link>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {posts.map((post) => (
                        <div key={post.id} style={{
                            backgroundColor: 'white',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{post.title}</h3>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#6b7280' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString()}
                                    </span>
                                    <span style={{
                                        padding: '2px 8px',
                                        borderRadius: '99px',
                                        backgroundColor: post.is_published ? '#d1fae5' : '#f3f4f6',
                                        color: post.is_published ? '#065f46' : '#6b7280',
                                        fontWeight: '500'
                                    }}>
                                        {post.is_published ? 'Published' : 'Draft'}
                                    </span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <a href={`/news/${post.slug}`} target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #e5e7eb', color: '#4b5563', display: 'flex' }} title="View Live">
                                    <Eye size={18} />
                                </a>
                                <button onClick={() => deletePost(post.id)} style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #fee2e2', color: '#ef4444', backgroundColor: '#fef2f2', cursor: 'pointer', display: 'flex' }} title="Delete">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
