import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, ArrowLeft, Mail, Lock } from 'lucide-react';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // TODO: Implement actual login API call
            // For now, just show a message
            console.log('Login attempt:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Navigate to the page they came from or home
            const from = location.state?.from || '/';
            navigate(from);
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <button 
                    onClick={() => navigate(-1)} 
                    className="login-back-btn"
                >
                    <ArrowLeft size={20} />
                    Back
                </button>

                <div className="login-header">
                    <div className="login-icon">
                        <LogIn size={32} />
                    </div>
                    <h1 className="login-title">Login</h1>
                    <p className="login-subtitle">
                        Sign in to access your account
                    </p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && (
                        <div className="login-error">
                            {error}
                        </div>
                    )}

                    <div className="login-input-group">
                        <label className="login-label">
                            <Mail size={16} />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="login-input"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    <div className="login-input-group">
                        <label className="login-label">
                            <Lock size={16} />
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="login-input"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="login-actions">
                        <label className="login-checkbox-label">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="login-forgot-link">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <div className="login-footer">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/register" state={{ from: location.state?.from }} className="login-link">
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

