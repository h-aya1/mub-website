import React from 'react';
import CountriesHeroSection from './CountriesHeroSection';
import CountriesGridSection from './CountriesGridSection';
import './Countries.css';

const Countries = () => {
    return (
        <div className="countries-container">
            <CountriesHeroSection />
            <CountriesGridSection />
        </div>
    );
};

export default Countries;



