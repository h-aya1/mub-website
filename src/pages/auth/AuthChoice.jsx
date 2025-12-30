import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft } from 'lucide-react';
import './AuthChoice.css';

const AuthChoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/register';

    return (
        <div className="auth-choice-page">
            <div className="auth-choice-container">
                <div className="auth-choice-header">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="auth-choice-back-btn"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>
                    <h1 className="auth-choice-title">Welcome!</h1>
                    <p className="auth-choice-subtitle">
                        Do you already have an account?
                    </p>
                </div>

                <div className="auth-choice-options">
                    <button 
                        onClick={() => navigate('/')}
                        className="auth-choice-card auth-choice-button"
                    >
                        <div className="auth-choice-icon">
                            <LogIn size={32} />
                        </div>
                        <h2 className="auth-choice-card-title">I have an account</h2>
                        <p className="auth-choice-card-description">
                            Sign in to access your profile and track your applications
                        </p>
                        <span className="auth-choice-link">Login →</span>
                    </button>

                    <Link 
                        to="/register" 
                        state={{ from }}
                        className="auth-choice-card"
                    >
                        <div className="auth-choice-icon">
                            <UserPlus size={32} />
                        </div>
                        <h2 className="auth-choice-card-title">I'm new here</h2>
                        <p className="auth-choice-card-description">
                            Create a new account to start your journey
                        </p>
                        <span className="auth-choice-link">Register →</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AuthChoice;

