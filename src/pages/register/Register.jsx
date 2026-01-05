import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Globe, FileText, CheckCircle, ArrowLeft, CheckCircle2, Save, Upload, X, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const REQUIRED_DOCUMENTS = [
    { type: 'PASSPORT', label: 'Passport Copy', accept: 'image/*,.pdf' },
    { type: 'PERSONAL_PHOTO', label: 'Personal Photo', accept: 'image/*' },
    { type: 'COC_CERTIFICATE', label: 'COC Certificate', accept: 'image/*,.pdf' },
    { type: 'LABOR_ID', label: 'Labor ID', accept: 'image/*,.pdf' }
];

const Register = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMode, setSuccessMode] = useState('SUBMITTED'); // 'SUBMITTED' or 'DRAFT'

    // Draft state
    const [draftToken, setDraftToken] = useState(localStorage.getItem('applicantDraftToken') || '');
    const [applicantId, setApplicantId] = useState(localStorage.getItem('applicantId') || '');

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
        passportExpiry: '',
        laborId: '',
        region: '',

        // Documents
        documents: []
    });

    // Track if draft has been loaded
    const draftLoadedRef = React.useRef(false);

    // Reset success state when component mounts
    useEffect(() => {
        setSuccess(false);
        setError('');
        setCurrentStep(1);
    }, []);

    // Try to restore draft if token exists
    useEffect(() => {
        const loadDraft = async () => {
            if (draftToken && !draftLoadedRef.current) {
                draftLoadedRef.current = true; // Mark as loaded
                try {
                    const response = await fetch(`${API_BASE_URL}/api/public/applicants/draft/me`, {
                        headers: {
                            'x-draft-token': draftToken
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        console.log('Loaded Draft Data:', JSON.stringify(data, null, 2)); // Debug log
                        setFormData(prev => ({
                            ...prev,
                            phone: data.phone || '',
                            firstName: data.firstName || '',
                            lastName: data.lastName || '',
                            nationality: data.nationality || '',
                            passportNumber: data.passportNumber || '',
                            email: data.email || '',
                            gender: data.gender || '',
                            dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split('T')[0] : '',
                            passportExpiry: data.passportExpiry ? data.passportExpiry.split('T')[0] : '',
                            address: data.address || '',
                            maritalStatus: data.maritalStatus || '',
                            laborId: data.laborId || '',
                            region: data.region || '',
                            documents: data.documents || []
                        }));
                        if (data.applicantId) setApplicantId(data.applicantId);
                    } else {
                        localStorage.removeItem('applicantDraftToken');
                        localStorage.removeItem('applicantId');
                        setDraftToken('');
                        draftLoadedRef.current = false;
                    }
                } catch (e) {
                    console.error("Failed to load draft", e);
                    draftLoadedRef.current = false;
                }
            }
        };
        loadDraft();
    }, [draftToken]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError('');
    };

    const handleFileUpload = async (documentType, file) => {
        if (!file) return;

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError(`File ${file.name} is too large. Maximum size is 5MB.`);
            return;
        }

        try {
            // Convert to base64
            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            // Update documents array
            console.log(`Uploading ${documentType}...`); // Debug log
            setFormData(prev => {
                const existingDocs = prev.documents || [];
                const filteredDocs = existingDocs.filter(doc => doc.documentType !== documentType);
                const newDocs = [...filteredDocs, { documentType, fileUrl: base64 }];
                console.log('New Documents State:', newDocs); // Debug log
                return {
                    ...prev,
                    documents: newDocs
                };
            });
        } catch (err) {
            setError(`Failed to upload ${file.name}`);
        }
    };

    const removeDocument = (documentType) => {
        setFormData(prev => ({
            ...prev,
            documents: (prev.documents || []).filter(doc => doc.documentType !== documentType)
        }));
    };

    const getUploadedDocument = (documentType) => {
        return (formData.documents || []).find(doc => doc.documentType === documentType);
    };

    const updateLocalStorage = (token, id) => {
        localStorage.setItem('applicantDraftToken', token);
        localStorage.setItem('applicantId', id);
        setDraftToken(token);
        setApplicantId(id);
    };

    const cleanPayload = (data) => {
        const payload = { ...data };
        Object.keys(payload).forEach(key => {
            const value = payload[key];

            // Special handling for documents array to strip backend-only fields (id, applicantId, etc.)
            if (key === 'documents' && Array.isArray(value)) {
                payload[key] = value.map(doc => ({
                    documentType: doc.documentType,
                    fileUrl: doc.fileUrl
                }));
                return;
            }

            // Keep other arrays as-is
            if (Array.isArray(value)) {
                return;
            }

            // Remove empty strings, null, and undefined
            if (value === '' || value === null || value === undefined) {
                delete payload[key];
            }
        });
        return payload;
    };

    const handleSaveDraft = async (silent = false) => {
        if (!formData.phone) {
            if (!silent) setError('Phone number is required to save a draft.');
            return false;
        }

        setLoading(true);
        setError('');

        try {
            const payload = cleanPayload(formData);
            console.log('Saving Draft Payload:', JSON.stringify(payload, null, 2)); // Debug log

            const response = await fetch(`${API_BASE_URL}/api/public/applicants/draft`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Failed to save draft' }));
                throw new Error(errorData.message || 'Failed to save draft.');
            }

            const result = await response.json();

            if (result.draftToken) {
                updateLocalStorage(result.draftToken, result.applicantId);
            }

            if (!silent) {
                setSuccessMode('DRAFT');
                setSuccess(true);
            }
            return true;

        } catch (err) {
            if (!silent) setError(err.message || 'Failed to save draft.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Check if all required documents are uploaded
        const uploadedDocTypes = new Set((formData.documents || []).map(d => d.documentType));
        const missingDocs = REQUIRED_DOCUMENTS.filter(doc => !uploadedDocTypes.has(doc.type));

        if (missingDocs.length > 0) {
            setError(`Please upload the following required documents: ${missingDocs.map(d => d.label).join(', ')}`);
            return;
        }

        // First ensure everything is saved as draft
        const saved = await handleSaveDraft(true);
        if (!saved) return;

        setLoading(true);

        try {
            const currentToken = localStorage.getItem('applicantDraftToken');

            const response = await fetch(`${API_BASE_URL}/api/public/applicants/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-draft-token': currentToken
                },
                body: JSON.stringify({ status: 'SUBMITTED' }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Submission failed' }));
                throw new Error(errorData.message || 'Submission failed. Please check your information.');
            }

            localStorage.removeItem('applicantDraftToken');
            setDraftToken('');

            setSuccessMode('SUBMITTED');
            setSuccess(true);

        } catch (err) {
            setError(err.message || 'Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const nextStep = async () => {
        if (currentStep === 1) {
            const saved = await handleSaveDraft(true);
            if (saved) {
                setCurrentStep(currentStep + 1);
            }
        } else if (currentStep === 2) {
            // Moving from documents to review
            setCurrentStep(currentStep + 1);
        } else {
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
        { number: 2, title: 'Documents', icon: FileText },
        { number: 3, title: 'Review', icon: CheckCircle },
    ];

    if (success) {
        return (
            <div className="register-page">
                <section className="register-form-section">
                    <div className="register-form-container">
                        <div className="register-success">
                            <div className="register-success-icon">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="register-success-title">
                                {successMode === 'SUBMITTED' ? 'Registration Submitted!' : 'Draft Saved!'}
                            </h2>
                            <p className="register-success-message">
                                {successMode === 'SUBMITTED'
                                    ? 'Your profile has been submitted for review. You will be notified once an admin approves your application.'
                                    : 'Your information has been saved as a draft. You can come back and finish your registration later.'}
                            </p>

                            {successMode === 'SUBMITTED' && (
                                <div className="register-success-info">
                                    <p className="register-success-note">
                                        Note: You will receive your login credentials via SMS/Email after approval.
                                    </p>
                                </div>
                            )}

                            {successMode === 'DRAFT' && (
                                <div className="register-success-info">
                                    <p className="register-success-note">
                                        Your progress is saved securely.
                                    </p>
                                </div>
                            )}

                            <div className="register-success-actions">
                                {successMode === 'DRAFT' ? (
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="register-btn register-btn-primary"
                                    >
                                        Continue Editing
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => navigate('/')}
                                        className="register-btn register-btn-primary"
                                    >
                                        Back to Home
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

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
                    <form className="register-form" onSubmit={handleSubmit}>
                        {error && (
                            <div className="register-error">
                                {error}
                            </div>
                        )}

                        {/* Step 1: Personal Information */}
                        {currentStep === 1 && (
                            <div className="register-step-content">
                                <div className="register-step-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2 className="register-step-heading" style={{ margin: 0 }}>Personal Information</h2>
                                    <button
                                        type="button"
                                        onClick={() => handleSaveDraft(false)}
                                        className="register-btn-text"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}
                                    >
                                        <Save size={16} />
                                        Save Draft
                                    </button>
                                </div>
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
                                        <label className="register-label">
                                            Passport Expiry *
                                        </label>
                                        <input
                                            type="date"
                                            name="passportExpiry"
                                            value={formData.passportExpiry || ''}
                                            onChange={handleChange}
                                            className="register-input"
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
                                            required
                                        />
                                    </div>

                                    <div className="register-input-group">
                                        <label className="register-label">Gender *</label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="register-input"
                                            required
                                        >
                                            <option value="">Select gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
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
                                            required
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

                                    <div className="register-input-group">
                                        <label className="register-label">
                                            Labor ID *
                                        </label>
                                        <input
                                            type="text"
                                            name="laborId"
                                            value={formData.laborId || ''}
                                            onChange={handleChange}
                                            className="register-input"
                                            placeholder="Enter Labor ID"
                                            required
                                        />
                                    </div>

                                    <div className="register-input-group">
                                        <label className="register-label">
                                            Region *
                                        </label>
                                        <input
                                            type="text"
                                            name="region"
                                            value={formData.region || ''}
                                            onChange={handleChange}
                                            className="register-input"
                                            placeholder="Region"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Documents */}
                        {currentStep === 2 && (
                            <div className="register-step-content">
                                <div className="register-step-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2 className="register-step-heading" style={{ margin: 0 }}>Upload Documents</h2>
                                    <button
                                        type="button"
                                        onClick={() => handleSaveDraft(false)}
                                        className="register-btn-text"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--primary-color)', cursor: 'pointer' }}
                                    >
                                        <Save size={16} />
                                        Save Draft
                                    </button>
                                </div>
                                <p className="register-step-description">
                                    Please upload the following required documents. All documents are required for submission.
                                </p>

                                <div className="document-upload-grid">
                                    {REQUIRED_DOCUMENTS.map(doc => {
                                        const uploaded = getUploadedDocument(doc.type);
                                        return (
                                            <div key={doc.type} className="document-upload-card">
                                                <div className="document-upload-header">
                                                    <FileText size={20} />
                                                    <span className="document-label">{doc.label}</span>
                                                    {uploaded && <FileCheck size={18} className="document-check" />}
                                                </div>

                                                {uploaded ? (
                                                    <div className="document-uploaded">
                                                        <span className="document-uploaded-text">✓ Uploaded</span>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeDocument(doc.type)}
                                                            className="document-remove-btn"
                                                        >
                                                            <X size={16} />
                                                            Remove
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <label className="document-upload-label">
                                                        <input
                                                            type="file"
                                                            accept={doc.accept}
                                                            onChange={(e) => handleFileUpload(doc.type, e.target.files[0])}
                                                            className="document-upload-input"
                                                        />
                                                        <div className="document-upload-button">
                                                            <Upload size={20} />
                                                            <span>Choose File</span>
                                                        </div>
                                                        <small className="document-upload-hint">
                                                            Max 5MB • {doc.accept.includes('pdf') ? 'PDF or Image' : 'Image only'}
                                                        </small>
                                                    </label>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="document-info-box">
                                    <p><strong>Important:</strong> All four documents must be uploaded before you can submit your application. You can save your progress as a draft and upload documents later.</p>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Review & Submit */}
                        {currentStep === 3 && (
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
                                            {formData.passportExpiry && <p><strong>Passport Expiry:</strong> {formData.passportExpiry}</p>}
                                            {formData.dateOfBirth && <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>}
                                            {formData.gender && <p><strong>Gender:</strong> {formData.gender}</p>}
                                            {formData.address && <p><strong>Address:</strong> {formData.address}</p>}
                                            {formData.maritalStatus && <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>}
                                            {formData.laborId && <p><strong>Labor ID:</strong> {formData.laborId}</p>}
                                            {formData.region && <p><strong>Region:</strong> {formData.region}</p>}
                                        </div>
                                    </div>

                                    <div className="register-review-group">
                                        <h3 className="register-review-title">Documents</h3>
                                        <div className="register-review-content">
                                            {REQUIRED_DOCUMENTS.map(doc => {
                                                const uploaded = getUploadedDocument(doc.type);
                                                return (
                                                    <p key={doc.type}>
                                                        <strong>{doc.label}:</strong> {uploaded ? '✓ Uploaded' : '✗ Not uploaded'}
                                                    </p>
                                                );
                                            })}
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
                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        nextStep();
                                    }}
                                    className="register-btn register-btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? 'Saving...' : 'Next Step'}
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="register-btn register-btn-primary"
                                    disabled={loading || success}
                                >
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;
