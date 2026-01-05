import { useTranslations } from '../../hooks/useTranslations';
import './AboutHeroSection.css';

const AboutHeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="about-hero-section">
            <div className="about-hero-content">
                <h1 className="about-hero-title">{t('about.hero.title')}</h1>
                <p className="about-hero-subtitle">
                    {t('about.hero.subtitle')}
                </p>
            </div>
        </section>
    );
};

export default AboutHeroSection;


