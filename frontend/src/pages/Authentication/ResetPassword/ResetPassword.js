import React, { useState } from 'react'

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <main className='Authentication'>
            <div className="form-container Primary-Padding">
                <div className="form-content Flex-Center Flex-Column container">
                    <form>

                        <div className="form-title">
                            <h1>Reset Password</h1>
                            </div>
                        <div className="form-description">
                            <p>Enter your email to reset your password</p>
                        </div>
                        <div 
                            title='Email' 
                            className="input-container"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor" 
                                className="bi bi-envelope-fill" 
                                viewBox="0 0 16 16"
                            >
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>
                            <input 
                                type="email"
                                name='email'
                                placeholder='name@example.com*' 
                                onChange={handleInputChange} 
                                required
                            />
                        </div>

                        {errorMessage && 
                            <div 
                                className="error-message"
                            >
                                {errorMessage}
                            </div>
                        }
                        <div 
                            title='Register' 
                            className="input-container"
                        >
                            <input 
                                type="submit" 
                                value='Reset Password'
                            />
                        </div>
                    </form>
                    <div>
                        <p>Remember your password? <a href="/login">Login</a></p>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ResetPassword
