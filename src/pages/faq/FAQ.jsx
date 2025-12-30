import React, { useState } from 'react';
import FAQHeroSection from './FAQHeroSection';
import FAQContentSection from './FAQContentSection';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="faq-container">
            <FAQHeroSection />
            <FAQContentSection />
        </div>
    );
};

export default FAQ;

