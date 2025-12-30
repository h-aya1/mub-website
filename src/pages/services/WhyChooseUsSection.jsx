import React from 'react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
    const reasons = [
        {
            title: "15+ Years of Experience",
            description: "Proven track record with thousands of successful placements.",
        },
        {
            title: "Ethical Practices",
            description:
                "Fully compliant with all Ethiopian and international employment regulations.",
        },
        {
            title: "Comprehensive Support",
            description: "From initial application through employment and beyond.",
        },
        {
            title: "Competitive Opportunities",
            description: "Access to positions with attractive salaries and benefits.",
        },
    ];

    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">Why Choose MUB?</h2>
                <div className="why-choose-us-list">
                    {reasons.map((reason, i) => (
                        <div key={i} className="why-choose-us-card">
                            <h3 className="why-choose-us-card-title">{reason.title}</h3>
                            <p className="why-choose-us-card-description">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;


