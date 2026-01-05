import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/useTranslations';
import './ServicesCTA.css';

const ServicesCTA = () => {
    const { t } = useTranslations();

    return (
        <section className="services-cta-section">
            <div className="services-cta-content">
                <h2 className="services-cta-title">{t('services.cta.title')}</h2>
                <p className="services-cta-description">
                    {t('services.cta.subtitle')}
                </p>
                <Link to="/auth-choice" className="services-cta-button">
                    {t('services.cta.applyNow')}
                </Link>
            </div>
        </section>
    );
};

export default ServicesCTA;


