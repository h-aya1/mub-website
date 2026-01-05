import { useTranslations } from '../../hooks/useTranslations';
import './JobsHeroSection.css';

const JobsHeroSection = ({ totalJobs }) => {
    const { t } = useTranslations();

    return (
        <section className="jobs-hero-section">
            <div className="jobs-hero-container">
                <h1 className="jobs-hero-title">{t('jobs.hero.title')}</h1>
                <p className="jobs-hero-subtitle">
                    {t('jobs.hero.subtitle', { count: totalJobs })}
                </p>
            </div>
        </section>
    );
};

export default JobsHeroSection;

