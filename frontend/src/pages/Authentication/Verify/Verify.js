import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../../../config";

const Verify = () => {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Get token from URL (for email verification)
    const token = searchParams.get("token");

    // Determine if it's for Signup or Login
    const userId = localStorage.getItem("userId"); // Sign-up users
    const email = sessionStorage.getItem("pending_email") || localStorage.getItem("userEmail");

    // Redirect if already logged in
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate(`${API_URL}`); 
        }
    }, []);

    // Redirect unauthorized users
    useEffect(() => {
        if (!email) {
            navigate(`${API_URL}/signup`); // Redirect to signup if no email found
        }
    }, []);

    // Auto verify email if token is in URL (for sign-up email link)
    useEffect(() => {
        if (token) {
            verifyEmailWithToken(token);
        }
    }, [token]);

    // Verify email using token (Sign-up email link)
    const verifyEmailWithToken = async (token) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/auth/verify-email?token=${token}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Email verified successfully! Redirecting to login...");
                setTimeout(() => navigate(`${API_URL}/login`), 2000);
            } else {
                setMessage(`❌ Verification failed: ${data.detail}`);
            }
        } catch (error) {
            setMessage("❌ An error occurred while verifying.");
        }
        setLoading(false);
    };

    // Verify OTP (Works for both Signup & Login)
    const handleVerifyOTP = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim(), otp: otp.trim() })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("user_type", data.user_type);

                // Clear session storage for login users
                sessionStorage.removeItem("pending_email");

                setMessage("✅ OTP verified successfully! Redirecting...");
                setTimeout(() => {
                    // Redirect users based on their type
                    navigate(data.user_type === "admin" ? `${API_URL}/admin` : `${API_URL}`);
                }, 2000);
            } else {
                if (Array.isArray(data.detail)) {
                    setMessage(`❌ OTP verification failed: ${data.detail.map(err => err.msg).join(", ")}`);
                } else {
                    setMessage(`❌ OTP verification failed: ${data.detail}`);
                }
            }
        } catch (error) {
            setMessage("❌ An error occurred while verifying OTP.");
        }

        setLoading(false);
    };

    return (
        <main className='Authentication'>
            <div className="form-container Primary-Padding">
                <div className="form-content Flex-Center Flex-Column container">
                    <div className="verify-container flex-center-center">
                        <h2>Verification Code</h2>

                        {!token && (
                            <form onSubmit={handleVerifyOTP}>
                                <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter 6-digit OTP"
                                    required
                                />
                                {message && 
                                    <p 
                                        className="message"
                                        style={{ 
                                            color: message.includes("✅") ? "green" : "red",
                                            textAlign: "center"
                                        }}
                                    >
                                            {message}
                                    </p>
                                }

                                <button type="submit" disabled={loading}>
                                    {loading ? "Verifying..." : "Verify OTP"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Verify;
