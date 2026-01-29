import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building2, Target, BarChart3, Globe } from 'lucide-react';
import { useTranslations } from '../../hooks/useTranslations';
import './HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    {t('home.hero.title')} <br></br>
                    <span className="highlight">{t('home.hero.titleHighlight')}</span>
                </h1>
                <p className="hero-subtitle">
                    {t('home.hero.subtitle')}
                </p>
                <div className="hero-buttons">
                    <Link to="/register-type" className="btn btn-primary">
                        {t('home.hero.startJourney')}
                        <ArrowRight size={20} />
                    </Link>
                    <Link to="/jobs" className="btn btn-secondary">
                        {t('home.hero.browseJobs')}
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="hero-stats">
                    <div className="stat-card">
                        <Building2 size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>1247+</h3>
                            <p>{t('home.hero.activeJobs')}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Target size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>5832+</h3>
                            <p>{t('home.hero.successfulPlacements')}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <BarChart3 size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>342+</h3>
                            <p>{t('home.hero.partnerEmployers')}</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <Globe size={32} className="stat-icon" />
                        <div className="stat-content">
                            <h3>6</h3>
                            <p>{t('home.hero.countriesServed')}</p>
                        </div>
                    </div>
                </div>

                {/* Feature Indicators */}
                <div className="hero-features">
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>{t('home.hero.governmentLicensed')}</span>
                    </div>
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>{t('home.hero.gccCertified')}</span>
                    </div>
                    <div className="feature-indicator">
                        <CheckCircle size={16} />
                        <span>{t('home.hero.support247')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;



