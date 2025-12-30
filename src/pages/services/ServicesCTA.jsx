import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCTA.css';

const ServicesCTA = () => {
    return (
        <section className="services-cta-section">
            <div className="services-cta-content">
                <h2 className="services-cta-title">Ready to Get Started?</h2>
                <p className="services-cta-description">
                    Begin your journey to quality overseas employment today
                </p>
                <Link to="/auth-choice" className="services-cta-button">
                    Apply Now
                </Link>
            </div>
        </section>
    );
};

export default ServicesCTA;


