import React from 'react';
import HeroSection from './HeroSection';
import TrustSection from './TrustSection';
import TrustBar from './TrustBar';
import FeaturedOpportunitiesSection from './FeaturedOpportunitiesSection';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <TrustSection />
            <TrustBar />
            <FeaturedOpportunitiesSection />
        </div>
    );
};

export default Home;

