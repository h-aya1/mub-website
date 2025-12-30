import React from 'react';
import ContactHeroSection from './ContactHeroSection';
import ContactInfoSection from './ContactInfoSection';
import ContactFormSection from './ContactFormSection';
import MapSection from './MapSection';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <ContactHeroSection />
            <ContactInfoSection />
            <ContactFormSection />
            <MapSection />
        </div>
    );
};

export default Contact;
