import { useTranslations } from '../../hooks/useTranslations';
import './CountriesHeroSection.css';

const CountriesHeroSection = () => {
    const { t } = useTranslations();

    return (
        <section className="countries-hero-section">
            <div className="countries-hero-content">
                <h1 className="countries-hero-title">{t('countries.hero.title')}</h1>
                <p className="countries-hero-subtitle">
                    {t('countries.hero.subtitle')}
                </p>
            </div>
        </section>
    );
};

export default CountriesHeroSection;

