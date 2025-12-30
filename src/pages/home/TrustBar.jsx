import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <section className="trust-bar">
            <div className="trust-bar-content">
                <div className="trust-bar-item">
                    <h3>100%</h3>
                    <p>Satisfaction</p>
                </div>
                <div className="trust-bar-item">
                    <h3>Verified</h3>
                    <p>Partners</p>
                </div>
                <div className="trust-bar-item">
                    <h3>Secure</h3>
                    <p>Platform</p>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;

