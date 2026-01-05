import { useTranslations } from '../../hooks/useTranslations';
import './ContactHeroSection.css';

const ContactHeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="contact-hero-section">
            <div className="contact-hero-content">
                <h1 className="contact-hero-title">{t('contact.hero.title')}</h1>
                <p className="contact-hero-subtitle">
                    {t('contact.hero.subtitle')}
                </p>
            </div>
        </section>
    );
};

export default ContactHeroSection;


