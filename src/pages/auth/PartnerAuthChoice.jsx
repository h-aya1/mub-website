import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft } from 'lucide-react';
import './PartnerAuthChoice.css';

const PartnerAuthChoice = () => {
    const navigate = useNavigate();

    return (
        <div className="partner-auth-page">
            <div className="partner-auth-container">
                <div className="partner-auth-header">
                    <button
                        onClick={() => navigate(-1)}
                        className="partner-auth-back-btn"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </button>
                    <h1 className="partner-auth-title">Partner Portal</h1>
                    <p className="partner-auth-subtitle">
                        Sign in or register your organization
                    </p>
                </div>

                <div className="partner-auth-options">
                    <button
                        onClick={() => navigate('/')}
                        className="partner-auth-card"
                    >
                        <div className="partner-auth-icon">
                            <LogIn size={32} />
                        </div>
                        <h2 className="partner-auth-card-title">I have an account</h2>
                        <p className="partner-auth-card-description">
                            Sign in to manage your job postings and applications
                        </p>
                        <span className="partner-auth-link">Login →</span>
                    </button>

                    <button
                        onClick={() => navigate('/partner-register')}
                        className="partner-auth-card"
                    >
                        <div className="partner-auth-icon">
                            <UserPlus size={32} />
                        </div>
                        <h2 className="partner-auth-card-title">New Partner</h2>
                        <p className="partner-auth-card-description">
                            Register your organization to find talent with MUB
                        </p>
                        <span className="partner-auth-link">Register →</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PartnerAuthChoice;
