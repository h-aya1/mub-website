import { useTranslations } from '../../hooks/useTranslations';
import './ServicesHeroSection.css';

const ServicesHeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="services-hero-section">
            <div className="services-hero-content">
                <h1 className="services-hero-title">{t('services.hero.title')}</h1>
                <p className="services-hero-subtitle">
                    {t('services.hero.subtitle')}
                </p>
            </div>
        </section>
    );
};

export default ServicesHeroSection;


