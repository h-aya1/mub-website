import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Globe, FileText, CheckCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const Register = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        // Required fields
        phone: '',
        firstName: '',
        lastName: '',
        nationality: '',
        passportNumber: '',
        
        // Optional fields
        email: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        maritalStatus: '',
    });

    // Reset success state when component mounts
    React.useEffect(() => {
        setSuccess(false);
        setError('');
        setCurrentStep(1);
    }, []);

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
            // Prepare payload - only include fields that have values
            const payload = {
                phone: formData.phone,
                firstName: formData.firstName || undefined,
                lastName: formData.lastName || undefined,
                nationality: formData.nationality || undefined,
                passportNumber: formData.passportNumber || undefined,
                email: formData.email || undefined,
                gender: formData.gender || undefined,
                dateOfBirth: formData.dateOfBirth || undefined,
                address: formData.address || undefined,
                maritalStatus: formData.maritalStatus || undefined,
            };

            // Remove undefined fields
            Object.keys(payload).forEach(key => {
                if (payload[key] === undefined) {
                    delete payload[key];
                }
            });

            const response = await fetch(`${API_BASE_URL}/api/public/applicants/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Registration failed' }));
                throw new Error(errorData.message || 'Registration failed. Please try again.');
            }

            const result = await response.json();
            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const steps = [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Review', icon: CheckCircle },
    ];

    return (
        <div className="register-page">
            {/* Hero Section */}
            <section className="register-hero-section">
                <div className="register-hero-content">
                    <h1 className="register-hero-title">Start Your Journey</h1>
                    <p className="register-hero-subtitle">
                        Complete your registration to access quality overseas employment opportunities
                    </p>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="register-progress-section">
                <div className="register-progress-container">
                    <div className="register-steps">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = currentStep === step.number;
                            const isCompleted = currentStep > step.number;
                            
                            return (
                                <React.Fragment key={step.number}>
                                    <div className={`register-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                                        <div className="register-step-icon">
                                            <Icon size={20} />
                                        </div>
                                        <div className="register-step-info">
                                            <span className="register-step-number">Step {step.number}</span>
                                            <span className="register-step-title">{step.title}</span>
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`register-step-connector ${isCompleted ? 'completed' : ''}`} />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="register-form-section">
                <div className="register-form-container">
                    {success ? (
                        <div className="register-success">
                            <div className="register-success-icon">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="register-success-title">Registration Successful!</h2>
                            <p className="register-success-message">
                                Your profile has been created successfully. You now have login credentials and can access the system.
                            </p>
                            <div className="register-success-info">
                                <p>
                                    You can now <a href="https://system.example.com/login" target="_blank" rel="noopener noreferrer" className="register-success-link">login to the system</a> using your credentials.
                                </p>
                                <p className="register-success-note">
                                    Note: Login credentials will be sent to your registered phone number or email address.
                                </p>
                            </div>
                            <div className="register-success-actions">
                                <button
                                    onClick={() => navigate('/')}
                                    className="register-btn register-btn-primary"
                                >
                                    Back to Home
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form className="register-form" onSubmit={handleSubmit}>
                            {error && (
                                <div className="register-error">
                                    {error}
                                </div>
                            )}

                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <div className="register-step-content">
                                    <h2 className="register-step-heading">Personal Information</h2>
                                    <p className="register-step-description">
                                        Please provide your personal details to get started.
                                    </p>
                                    
                                    <div className="register-form-grid">
                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <Phone size={16} />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="+251 XXX XXX XXXX"
                                                required
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <Mail size={16} />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <User size={16} />
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="Enter your first name"
                                                required
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <User size={16} />
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="Enter your last name"
                                                required
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <Globe size={16} />
                                                Nationality *
                                            </label>
                                            <input
                                                type="text"
                                                name="nationality"
                                                value={formData.nationality}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="e.g., Ethiopian"
                                                required
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">
                                                <FileText size={16} />
                                                Passport Number *
                                            </label>
                                            <input
                                                type="text"
                                                name="passportNumber"
                                                value={formData.passportNumber}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="Enter your passport number"
                                                required
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleChange}
                                                className="register-input"
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">Gender</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                className="register-input"
                                            >
                                                <option value="">Select gender</option>
                                                <option value="MALE">Male</option>
                                                <option value="FEMALE">Female</option>
                                                <option value="OTHER">Other</option>
                                            </select>
                                        </div>

                                        <div className="register-input-group register-input-full">
                                            <label className="register-label">
                                                <MapPin size={16} />
                                                Address *
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="register-input"
                                                placeholder="Enter your address"
                                            />
                                        </div>

                                        <div className="register-input-group">
                                            <label className="register-label">Marital Status *</label>
                                            <select
                                                name="maritalStatus"
                                                value={formData.maritalStatus}
                                                onChange={handleChange}
                                                className="register-input"
                                                required
                                            >
                                                <option value="">Select status</option>
                                                <option value="SINGLE">Single</option>
                                                <option value="MARRIED">Married</option>
                                                <option value="DIVORCED">Divorced</option>
                                                <option value="WIDOWED">Widowed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Review & Submit */}
                            {currentStep === 2 && (
                                <div className="register-step-content">
                                    <h2 className="register-step-heading">Review & Submit</h2>
                                    <p className="register-step-description">
                                        Please review your information before submitting.
                                    </p>
                                    
                                    <div className="register-review-section">
                                        <div className="register-review-group">
                                            <h3 className="register-review-title">Personal Information</h3>
                                            <div className="register-review-content">
                                                {formData.phone && <p><strong>Phone:</strong> {formData.phone}</p>}
                                                {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                                                {(formData.firstName || formData.lastName) && (
                                                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                                                )}
                                                {formData.nationality && <p><strong>Nationality:</strong> {formData.nationality}</p>}
                                                {formData.passportNumber && <p><strong>Passport Number:</strong> {formData.passportNumber}</p>}
                                                {formData.dateOfBirth && <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>}
                                                {formData.gender && <p><strong>Gender:</strong> {formData.gender}</p>}
                                                {formData.address && <p><strong>Address:</strong> {formData.address}</p>}
                                                {formData.maritalStatus && <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="register-navigation">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            prevStep();
                                        }}
                                        className="register-btn register-btn-secondary"
                                        disabled={loading}
                                    >
                                        Previous
                                    </button>
                                )}
                                <div className="register-navigation-spacer" />
                                {currentStep < 2 ? (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            nextStep();
                                        }}
                                        className="register-btn register-btn-primary"
                                    >
                                        Next Step
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="register-btn register-btn-primary"
                                        disabled={loading || success}
                                    >
                                        {loading ? 'Submitting...' : 'Submit Registration'}
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Register;
