import React from 'react';
import './CertificationsSection.css';

const CertificationsSection = () => {
    return (
        <section className="certifications-section">
            <div className="certifications-container">
                <h2 className="certifications-title">Licenses & Certifications</h2>
                <div className="certifications-grid">
                    <div className="certification-card">
                        <p className="certification-name">Ethiopian Ministry of Labor</p>
                        <p className="certification-description">Licensed Foreign Employment Agency</p>
                    </div>
                    <div className="certification-card">
                        <p className="certification-name">International Standards</p>
                        <p className="certification-description">Compliant with ILO Convention on Decent Work</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;


