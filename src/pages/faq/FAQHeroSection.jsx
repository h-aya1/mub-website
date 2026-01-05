import { useTranslations } from '../../hooks/useTranslations';
import './FAQHeroSection.css';

const FAQHeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="faq-hero-section">
            <div className="faq-hero-content">
                <h1 className="faq-hero-title">{t('faq.hero.title')}</h1>
                <p className="faq-hero-subtitle">
                    {t('faq.hero.subtitle')}
                </p>
            </div>
        </section>
    );
};

export default FAQHeroSection;

