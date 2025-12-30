import React from 'react';
import './HistorySection.css';

const HistorySection = () => {
    const milestones = [
        {
            year: "2010",
            title: "Founded",
            description: "MUB Agency was established with a vision to improve employment opportunities for Ethiopians.",
        },
        {
            year: "2015",
            title: "Expansion",
            description: "Expanded operations to cover all major Gulf countries with dedicated regional teams.",
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Launched online application system to streamline the placement process.",
        },
        {
            year: "2025",
            title: "Today",
            description: "Proudly serving as Ethiopia's leading foreign employment agency with 10,000+ successful placements.",
            isLast: true,
        },
    ];

    return (
        <section className="history-section">
            <div className="history-container">
                <h2 className="history-title">Our Journey</h2>
                <div className="history-timeline">
                    {milestones.map((milestone, i) => (
                        <div key={i} className="history-item">
                            <div className="history-item-indicator">
                                <div className="history-year-badge">{milestone.year}</div>
                                {!milestone.isLast && <div className="history-connector" />}
                            </div>
                            <div className="history-item-content">
                                <h3 className="history-item-title">{milestone.title}</h3>
                                <p className="history-item-description">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;


