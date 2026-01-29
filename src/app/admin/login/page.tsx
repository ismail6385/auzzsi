"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            alert("Login Failed: " + error.message);
            setLoading(false);
        } else {
            router.push("/admin/dashboard");
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
            fontFamily: "sans-serif"
        }}>
            <div style={{
                background: "white",
                padding: "3rem",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "400px",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "#f3f4f6",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                        color: "#1e3a8a"
                    }}>
                        <Lock size={30} />
                    </div>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1e3a8a" }}>Admin Portal</h1>
                    <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>Sign in to manage bookings</p>
                </div>

                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>Email Address</label>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                                <User size={18} />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    outline: "none",
                                    fontSize: "0.95rem"
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#374151", marginBottom: "0.5rem" }}>Password</label>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: "100%",
                                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                                    border: "1px solid #d1d5db",
                                    borderRadius: "6px",
                                    outline: "none",
                                    fontSize: "0.95rem"
                                }}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            background: "#c5a467",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "6px",
                            fontWeight: "600",
                            border: "none",
                            cursor: loading ? "not-allowed" : "pointer",
                            transition: "background 0.2s",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>

                    <div style={{ textAlign: "center", fontSize: "0.85rem", color: "#6b7280" }}>
                        <p>Powered by Supabase Auth</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
