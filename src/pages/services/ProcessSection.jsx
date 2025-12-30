import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
    const process = [
        { step: 1, title: "Application", description: "Submit your application and initial documents" },
        { step: 2, title: "Screening", description: "We review your qualifications and background" },
        { step: 3, title: "Interview", description: "Initial assessment and job preference discussion" },
        { step: 4, title: "Matching", description: "Match with suitable employer opportunities" },
        { step: 5, title: "Negotiation", description: "Finalize terms and contracts with employer" },
        { step: 6, title: "Deployment", description: "Visa processing and preparation for departure" },
    ];

    return (
        <section className="process-section">
            <div className="process-container">
                <h2 className="process-title">How It Works</h2>
                <div className="process-grid">
                    {process.map((item, i) => (
                        <div key={i} className="process-item-wrapper">
                            <div className="process-card">
                                <div className="process-step-number">{item.step}</div>
                                <h3 className="process-card-title">{item.title}</h3>
                                <p className="process-card-description">{item.description}</p>
                            </div>
                            {i < process.length - 1 && <div className="process-connector" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;


