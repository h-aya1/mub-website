import { useTranslations } from '../../hooks/useTranslations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactInfoSection.css';

const ContactInfoSection = () => {
    const { t } = useTranslations();

    const contactInfo = [
        {
            icon: MapPin,
            title: t('contact.info.officeLocation'),
            content: ["Addis Ababa, Ethiopia", "High-rise business district"],
        },
        {
            icon: Phone,
            title: t('contact.info.phone'),
            content: ["+251-XXX-XXXX-XXX", t('contact.info.availableHours')],
        },
        {
            icon: Mail,
            title: t('contact.info.email'),
            content: ["info@mubagency.com", "support@mubagency.com"],
        },
        {
            icon: Clock,
            title: t('contact.info.businessHours'),
            content: [t('contact.info.mondayFriday'), t('contact.info.saturday')],
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


