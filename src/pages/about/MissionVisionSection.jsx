import React from 'react';
import './MissionVisionSection.css';

const MissionVisionSection = () => {
    return (
        <section className="mission-vision-section">
            <div className="mission-vision-container">
                <div className="mission-vision-grid">
                    <div className="mission-vision-card">
                        <h2 className="mission-vision-title">Our Mission</h2>
                        <p className="mission-vision-text">
                            To provide ethical, professional employment placement services that connect qualified Ethiopian workers
                            with quality opportunities in the Gulf region, while ensuring compliance with all local and
                            international regulations.
                        </p>
                    </div>
                    <div className="mission-vision-card">
                        <h2 className="mission-vision-title">Our Vision</h2>
                        <p className="mission-vision-text">
                            To be the most trusted foreign employment agency in Ethiopia, known for our integrity, success rate, and
                            unwavering commitment to the welfare of our job seekers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;


