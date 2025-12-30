import React from 'react';
import './JobsPageCTA.css';

const JobsPageCTA = () => {
    return (
        <section className="jobs-page-cta-section">
            <div className="jobs-page-cta-container">
                <h2 className="jobs-page-cta-title">Ready to Apply?</h2>
                <p className="jobs-page-cta-description">
                    Select a job and proceed to the application system to begin your overseas employment journey.
                </p>
                <div className="jobs-page-cta-note">
                    <p className="jobs-page-cta-note-text">
                        <strong>Note:</strong> The application system is coming soon. For now, visit our office or contact us
                        directly to apply.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JobsPageCTA;

