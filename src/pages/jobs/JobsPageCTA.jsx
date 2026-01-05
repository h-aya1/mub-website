import { useTranslations } from '../../hooks/useTranslations';
import './JobsPageCTA.css';

const JobsPageCTA = () => {
    const { t } = useTranslations();

    return (
        <section className="jobs-page-cta-section">
            <div className="jobs-page-cta-container">
                <h2 className="jobs-page-cta-title">{t('jobs.cta.title')}</h2>
                <p className="jobs-page-cta-description">
                    {t('jobs.cta.subtitle')}
                </p>
                <div className="jobs-page-cta-note">
                    <p className="jobs-page-cta-note-text">
                        <strong>{t('jobs.cta.note')}</strong> {t('jobs.cta.noteText')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JobsPageCTA;

