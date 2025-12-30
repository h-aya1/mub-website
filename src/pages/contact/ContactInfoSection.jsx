import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactInfoSection.css';

const ContactInfoSection = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Office Location",
            content: ["Addis Ababa, Ethiopia", "High-rise business district"],
        },
        {
            icon: Phone,
            title: "Phone",
            content: ["+251-XXX-XXXX-XXX", "Available during business hours"],
        },
        {
            icon: Mail,
            title: "Email",
            content: ["info@mubagency.com", "support@mubagency.com"],
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
        },
    ];

    return (
        <section className="contact-info-section">
            <div className="contact-info-container">
                <div className="contact-info-grid">
                    {contactInfo.map((info, i) => {
                        const Icon = info.icon;
                        return (
                            <div key={i} className="contact-info-card">
                                <div className="contact-info-icon-wrapper">
                                    <Icon className="contact-info-icon" size={24} />
                                </div>
                                <h3 className="contact-info-title">{info.title}</h3>
                                <div className="contact-info-content">
                                    {info.content.map((line, j) => (
                                        <p key={j} className="contact-info-line">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;


