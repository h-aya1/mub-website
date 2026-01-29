import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle2, FileText, AlertCircle } from 'lucide-react';
import './PartnerRegister.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const PartnerRegister = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        organizationName: '',
        country: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        ownerName: '',
        ownerIdNumber: '',
        licenseNumber: '',
        licenseFileUrl: '',
        licenseExpiry: ''
    });

    const [licenseFileName, setLicenseFileName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setError(`File ${file.name} is too large. Maximum size is 5MB.`);
            return;
        }

        try {
            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            setFormData(prev => ({
                ...prev,
                licenseFileUrl: base64
            }));
            setLicenseFileName(file.name);
            setError('');
        } catch (err) {
            setError('Failed to process file. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formData.licenseFileUrl) {
            setError('Please upload your business license document.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/employers/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Registration failed' }));
                throw new Error(errorData.message || 'Registration failed. Please check your information.');
            }

            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="partner-register-page">
                <div className="partner-register-container">
                    <div className="partner-register-form" style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '5rem',
                            height: '5rem',
                            borderRadius: '50%',
                            background: 'rgba(25, 45, 99, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary-blue)',
                            margin: '0 auto 1.5rem'
                        }}>
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="partner-register-title">Registration Submitted!</h2>
                        <p className="partner-register-subtitle" style={{ marginBottom: '2rem' }}>
                            Thank you for registering your organization. Your application is under review.
                            We will contact you via email once approved.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="partner-btn partner-btn-primary"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="partner-register-page">
            <div className="partner-register-container">
                <div className="partner-register-header">
                    <button
                        onClick={() => navigate(-1)}
                        className="partner-btn partner-btn-secondary"
                        style={{ marginBottom: '1rem', border: 'none', padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <ArrowLeft size={16} /> Back
                    </button>
                    <h1 className="partner-register-title">Partner Registration</h1>
                    <p className="partner-register-subtitle">
                        Join MUB Connect to find top talent
                    </p>
                </div>

                <form className="partner-register-form" onSubmit={handleSubmit}>
                    {error && (
                        <div style={{
                            background: '#fee2e2',
                            color: 'var(--primary-gold)',
                            padding: '1rem',
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <AlertCircle size={20} />
                            {error}
                        </div>
                    )}

                    <div className="partner-form-grid">
                        <div className="partner-input-group partner-input-full">
                            <label className="partner-label">Organization Name *</label>
                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="e.g., Al Noor Manpower LLC"
                                minLength={2}
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">Country *</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="e.g., UAE"
                                minLength={2}
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">Contact Email *</label>
                            <input
                                type="email"
                                name="contactEmail"
                                value={formData.contactEmail}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="hr@company.com"
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">Contact Phone *</label>
                            <input
                                type="tel"
                                name="contactPhone"
                                value={formData.contactPhone}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="+971 50 000 0000"
                                minLength={6}
                                required
                            />
                        </div>

                        <div className="partner-input-group partner-input-full">
                            <label className="partner-label">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="Full business address"
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">Owner Name *</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="Full name of owner"
                                minLength={2}
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">Owner ID Number *</label>
                            <input
                                type="text"
                                name="ownerIdNumber"
                                value={formData.ownerIdNumber}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="National ID / Passport No."
                                minLength={3}
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">License Number *</label>
                            <input
                                type="text"
                                name="licenseNumber"
                                value={formData.licenseNumber}
                                onChange={handleChange}
                                className="partner-input"
                                placeholder="Business License No."
                                minLength={3}
                                required
                            />
                        </div>

                        <div className="partner-input-group">
                            <label className="partner-label">License Expiry Date</label>
                            <input
                                type="date"
                                name="licenseExpiry"
                                value={formData.licenseExpiry}
                                onChange={handleChange}
                                className="partner-input"
                            />
                        </div>

                        <div className="partner-input-group partner-input-full">
                            <label className="partner-label">Business License Document *</label>
                            <div className="partner-file-upload">
                                <label className="partner-btn partner-btn-secondary file-input-wrapper" style={{ width: '100%', textAlign: 'center', border: '2px dashed rgba(0,0,0,0.2)', padding: '2rem' }}>
                                    <input
                                        type="file"
                                        accept=".pdf,image/*"
                                        onChange={handleFileUpload}
                                        className="file-input"
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
                                        <Upload size={24} style={{ marginBottom: '0.5rem', color: 'var(--primary-blue)' }} />
                                        <span>{licenseFileName ? 'Change File' : 'Click to Upload License (PDF/Image)'}</span>
                                        <small style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>Max 5MB</small>
                                    </div>
                                </label>
                            </div>
                            {licenseFileName && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', fontSize: '0.9rem', marginTop: '-1rem' }}>
                                    <FileText size={16} />
                                    {licenseFileName}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="partner-form-actions">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="partner-btn partner-btn-secondary"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="partner-btn partner-btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Register Organization'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PartnerRegister;
