import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, ArrowLeft } from 'lucide-react';
import './RegistrationType.css';

const RegistrationType = () => {
    const navigate = useNavigate();

    return (
        <div className="registration-type-page">
            <div className="registration-type-container">
                <div className="registration-type-header">
                    <button
                        onClick={() => navigate('/')}
                        className="registration-type-back-btn"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>
                    <h1 className="registration-type-title">Join MUB Connect</h1>
                    <p className="registration-type-subtitle">
                        Select your role to get started
                    </p>
                </div>

                <div className="registration-type-options">
                    <div
                        onClick={() => navigate('/auth-choice')}
                        className="registration-type-card"
                    >
                        <div className="registration-type-icon">
                            <User size={32} />
                        </div>
                        <h2 className="registration-type-card-title">Applicant</h2>
                        <p className="registration-type-card-description">
                            I am looking for job opportunities abroad
                        </p>
                        <span className="registration-type-link">Continue as Applicant →</span>
                    </div>

                    <div
                        onClick={() => navigate('/partner-auth')}
                        className="registration-type-card"
                    >
                        <div className="registration-type-icon">
                            <Building2 size={32} />
                        </div>
                        <h2 className="registration-type-card-title">Partner / Employer</h2>
                        <p className="registration-type-card-description">
                            I want to hire talent or partner with MUB
                        </p>
                        <span className="registration-type-link">Continue as Partner →</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationType;
