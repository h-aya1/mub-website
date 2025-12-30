import React from 'react';
import { CheckCircle, Clock, Eye } from 'lucide-react';
import './TrustSection.css';

const TrustSection = () => {
    return (
        <section className="trust-section">
            <div className="section-header">
                <h2>Your Trust, Our Priority</h2>
                <p>Licensed, certified, and committed to transparency at every step of your journey.</p>
            </div>

            <div className="trust-cards">
                <div className="trust-card">
                    <div className="trust-icon trust-icon-green">
                        <CheckCircle size={32} />
                    </div>
                    <h3>Government Licensed</h3>
                    <p>Officially licensed by Ethiopian Ministry of Labor and Social Affairs.</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-orange">
                        <CheckCircle size={32} />
                    </div>
                    <h3>GCC Certified</h3>
                    <p>Certified by Gulf Cooperation Council for international recruitment.</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-yellow">
                        <Clock size={32} />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock assistance for job seekers and their families.</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-dark-green">
                        <Eye size={32} />
                    </div>
                    <h3>Transparent Process</h3>
                    <p>No hidden fees, clear timelines, and honest communication.</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

