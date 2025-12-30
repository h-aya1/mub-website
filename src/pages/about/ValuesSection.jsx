import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
    const values = [
        {
            title: "Integrity",
            description: "We operate with complete transparency and ethical practices in all our dealings.",
        },
        {
            title: "Excellence",
            description: "We strive for the highest standards in matching and placement services.",
        },
        {
            title: "Support",
            description: "We provide continuous support to both job seekers and employers.",
        },
        {
            title: "Compliance",
            description: "Full adherence to Ethiopian and international employment regulations.",
        },
    ];

    return (
        <section className="values-section">
            <div className="values-container">
                <h2 className="values-title">Our Core Values</h2>
                <div className="values-grid">
                    {values.map((value, i) => (
                        <div key={i} className="value-card">
                            <h3 className="value-card-title">{value.title}</h3>
                            <p className="value-card-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;


