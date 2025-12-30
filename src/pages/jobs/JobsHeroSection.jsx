import React from 'react';
import './JobsHeroSection.css';

const JobsHeroSection = ({ totalJobs }) => {
    return (
        <section className="jobs-hero-section">
            <div className="jobs-hero-container">
                <h1 className="jobs-hero-title">Job Opportunities</h1>
                <p className="jobs-hero-subtitle">
                    Browse {totalJobs} available positions across the Gulf
                </p>
            </div>
        </section>
    );
};

export default JobsHeroSection;

