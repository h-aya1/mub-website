import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Target, BarChart3, Globe } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Bridging Dreams with <span className="highlight">Opportunity</span>
                </h1>
                <p className="hero-subtitle">
                    Your trusted partner connecting Ethiopian talent with Gulf opportunities through transparent, culturally-sensitive employment placement.
                </p>
                <div className="hero-buttons">
                    <Link to="/auth-choice" className="btn btn-primary">
                        Start Your Journey
                        <ArrowRight size={20} />
                    </Link>
                    <Link to="/jobs" className="btn btn-secondary">
                        Browse Jobs
                    </Link>
                </div>
                
                {/* Statistics Cards */}
                <div className="hero-stats">
                    <div className="stat-card">
                        <Building2 size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>1247+</h3>
                            <p>Active Jobs</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Target size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>5832+</h3>
                            <p>Successful Placements</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <BarChart3 size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>342+</h3>
                            <p>Partner Employers</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Globe size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>6</h3>
                            <p>Countries Served</p>
                        </div>
                    </div>
                </div>

                {/* Feature Indicators */}
                <div className="hero-features">
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>Government Licensed</span>
                    </div>
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>GCC Certified</span>
                    </div>
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



