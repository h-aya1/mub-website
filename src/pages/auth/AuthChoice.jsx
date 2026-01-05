import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft, FileEdit, X } from 'lucide-react';
import './AuthChoice.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const AuthChoice = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/register';

    const [showDraftModal, setShowDraftModal] = useState(false);
    const [phone, setPhone] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleContinueDraft = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const payload = { phone };
            if (passportNumber.trim()) {
                payload.passportNumber = passportNumber.trim();
            }

            const response = await fetch(`${API_BASE_URL}/api/public/applicants/draft-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Failed to retrieve draft' }));
                throw new Error(errorData.message || 'Failed to retrieve draft. Please check your phone number.');
            }

            const result = await response.json();

            // Store the draft token and applicant ID
            if (result.draftToken) {
                localStorage.setItem('applicantDraftToken', result.draftToken);
                localStorage.setItem('applicantId', result.applicantId);

                // Navigate to register page
                navigate('/register');
            }

        } catch (err) {
            setError(err.message || 'Failed to retrieve draft.');
        } finally {
            setLoading(false);
        }
    };

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
                        Choose how you'd like to proceed
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

                    <button
                        onClick={() => setShowDraftModal(true)}
                        className="auth-choice-card auth-choice-button"
                    >
                        <div className="auth-choice-icon">
                            <FileEdit size={32} />
                        </div>
                        <h2 className="auth-choice-card-title">Continue Draft</h2>
                        <p className="auth-choice-card-description">
                            Resume your saved registration application
                        </p>
                        <span className="auth-choice-link">Continue →</span>
                    </button>
                </div>
            </div>

            {/* Draft Modal */}
            {showDraftModal && (
                <div className="draft-modal-overlay" onClick={() => setShowDraftModal(false)}>
                    <div className="draft-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="draft-modal-header">
                            <h2>Continue Your Draft</h2>
                            <button
                                onClick={() => setShowDraftModal(false)}
                                className="draft-modal-close"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleContinueDraft} className="draft-modal-form">
                            {error && (
                                <div className="draft-modal-error">
                                    {error}
                                </div>
                            )}

                            <div className="draft-modal-input-group">
                                <label>Phone Number *</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+251 XXX XXX XXXX"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="draft-modal-input-group">
                                <label>Passport Number (Optional)</label>
                                <input
                                    type="text"
                                    value={passportNumber}
                                    onChange={(e) => setPassportNumber(e.target.value)}
                                    placeholder="For additional verification"
                                    disabled={loading}
                                />
                                <small>Provide this for extra security if you entered it before</small>
                            </div>

                            <div className="draft-modal-actions">
                                <button
                                    type="button"
                                    onClick={() => setShowDraftModal(false)}
                                    className="draft-modal-btn draft-modal-btn-secondary"
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="draft-modal-btn draft-modal-btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Continue'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthChoice;
