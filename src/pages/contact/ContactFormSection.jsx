import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import './ContactFormSection.css';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="contact-form-section">
            <div className="contact-form-container">
                <div className="contact-form-grid">
                    {/* Form */}
                    <div className="contact-form-wrapper">
                        <h2 className="contact-form-title">Send us a Message</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="contact-input"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="contact-input"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="contact-input contact-input-full"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="contact-input contact-input-full"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                className="contact-textarea"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className="contact-submit-button">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info & Social */}
                    <div className="contact-connect-wrapper">
                        <h2 className="contact-form-title">Connect with Us</h2>
                        
                        <div className="contact-connect-card">
                            <h3 className="contact-connect-card-title">
                                <MessageSquare className="contact-connect-icon" size={20} />
                                WhatsApp Support
                            </h3>
                            <p className="contact-connect-description">
                                Chat with us on WhatsApp for quick responses and instant support.
                            </p>
                            <a
                                href="https://wa.me/251XXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-whatsapp-button"
                            >
                                Message on WhatsApp
                            </a>
                        </div>

                        <div className="contact-connect-card">
                            <h3 className="contact-connect-card-title">Follow Our Social Media</h3>
                            <p className="contact-connect-description">
                                Stay updated with job postings, company news, and employment tips.
                            </p>
                            <div className="contact-social-buttons">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-button"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-button"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-button"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;


