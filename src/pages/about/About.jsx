import React from 'react';
import AboutHeroSection from './AboutHeroSection';
import MissionVisionSection from './MissionVisionSection';
import ValuesSection from './ValuesSection';
import HistorySection from './HistorySection';
import TeamSection from './TeamSection';
import CertificationsSection from './CertificationsSection';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <AboutHeroSection />
            <MissionVisionSection />
            <ValuesSection />
            <HistorySection />
            <TeamSection />
            <CertificationsSection />
        </div>
    );
};

export default About;
