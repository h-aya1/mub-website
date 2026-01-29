import React from 'react';
import { ArrowRight } from 'lucide-react';
import './JourneySection.css';

const JourneySection = () => {
    const journeySteps = [
        {
            number: 1,
            title: 'Register & Profile',
            description: 'Create your account and complete your professional profile with documents and skills.'
        },
        {
            number: 2,
            title: 'Browse & Apply',
            description: 'Explore verified job opportunities and apply to positions matching your skills.'
        },
        {
            number: 3,
            title: 'Interview & Selection',
            description: 'Connect with employers through our platform and complete the selection process.'
        },
        {
            number: 4,
            title: 'Prepare & Depart',
            description: 'Complete cultural preparation, documentation, and travel arrangements with our support.'
        }
    ];

    return (
        <section className="journey-section">
            <div className="container">
                <div className="section-header">
                    <h2>Your Journey to Success</h2>
                    <p>A transparent, step-by-step process designed to make your Gulf employment dream a reality.</p>
                </div>

                <div className="journey-steps">
                    {journeySteps.map((step, index) => (
                        <div key={step.number} className="journey-step">
                            {index < journeySteps.length - 1 && (
                                <div className="journey-arrow">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                            <div className="journey-step-content">
                                <div className="journey-number">{step.number}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;





