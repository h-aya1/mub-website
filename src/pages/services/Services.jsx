import React from 'react';
import ServicesHeroSection from './ServicesHeroSection';
import ServicesGridSection from './ServicesGridSection';
import ProcessSection from './ProcessSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesCTA from './ServicesCTA';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <ServicesHeroSection />
            <ServicesGridSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <ServicesCTA />
        </div>
    );
};

export default Services;
