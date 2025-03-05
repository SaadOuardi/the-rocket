import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../config";
import Google from '../../../assets/images/socialmedia/google.png';
import Apple from '../../../assets/images/socialmedia/apple.png';

const Login = () => {
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [toogle,setToogle] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleToogle = () =>{
        const passwordInput = document.getElementById("password");
        setToogle(!toogle);
        (!toogle ? passwordInput.type ='text':passwordInput.type ='password')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                setErrorMessage(data.detail || "Login failed. Please try again.");
                return;
            }

            if (data.two_factor_enabled) {
                // Store email in session storage and redirect to OTP verification
                sessionStorage.setItem("pending_email", email);
                navigate(`${API_URL}/verify`); // Redirect to OTP page
            } else {
                // Store JWT token and user details
                localStorage.setItem("token", data.token);
                localStorage.setItem("user_id", data.user_id);
                localStorage.setItem("user_type", data.user_type);
    
                // Redirect to dashboard or home page
                navigate(data.user_type === "admin" ? `${API_URL}/admin` : `${API_URL}`)
            }
        
        } catch (error) {
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };


    return (
        <main className='Authentication'>
            <div className="form-container Primary-Padding">
                <div className="form-content Flex-Center Flex-Column container">
                    <form onSubmit={handleSubmit}>
                        <div title='Email' className="input-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>
                            <input type="text" placeholder="Username*" id="username" onChange={handleEmail} />
                        </div>                       
                        <div title='Password' className="input-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16"><path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1"/></svg>                            <input type="password" placeholder="Password*" id="password" onChange={handlePassword} />
                            {password &&
                                <div className='Toogle-Svg'>
                                    {!toogle?(
                                        <svg title='Hide password' onClick={handleToogle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path></svg>
                                    ):(
                                        <svg title='Show password' onClick={handleToogle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457ZM14.7577 16.1718L13.2937 14.7078C12.902 14.8952 12.4634 15.0002 12.0003 15.0002C10.3434 15.0002 9.00026 13.657 9.00026 12.0002C9.00026 11.537 9.10522 11.0984 9.29263 10.7067L7.82866 9.24277C7.30514 10.0332 7.00026 10.9811 7.00026 12.0002C7.00026 14.7616 9.23884 17.0002 12.0003 17.0002C13.0193 17.0002 13.9672 16.6953 14.7577 16.1718ZM7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925L16.947 12.7327C16.9821 12.4936 17.0003 12.249 17.0003 12.0002C17.0003 9.23873 14.7617 7.00016 12.0003 7.00016C11.7514 7.00016 11.5068 7.01833 11.2677 7.05343L7.97446 3.76015Z"></path></svg>
                                    )
                                }
                                </div>
                            }
                        </div>
                        <div className="forgot-password">
                            <a href={`${API_URL}/forgot-password`}>Forgot Password?</a>
                        </div>
                        <div className="input-container">
                            <input type="submit" value="Login In" />
                        </div>
                        {errorMessage && <p className="authMessage">{errorMessage}</p>}
                    </form>


                    <div className="Footer">
                        <div className='create-new-account flex-center-center flex-column'>
                            <p>Don't have an account yet? <a href={`${API_URL}/signup`}>Sign up</a></p>
                        </div>
                        <div className='continue-with-container flex-center-center'>
                            <hr/>
                            <p>or continue with</p>
                            <hr/>
                        </div>
                        <div className="social-media-container flex-center-center">
                            <div class="social-media Flex-Center">
                                <img src={Google} alt="" />
                            </div>
                            <div class="social-media Flex-Center">
                                <img src={Apple} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;