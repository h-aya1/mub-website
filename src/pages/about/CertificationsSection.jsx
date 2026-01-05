import { useTranslations } from '../../hooks/useTranslations';
import './CertificationsSection.css';

const CertificationsSection = () => {
    const { t } = useTranslations();

    return (
        <section className="certifications-section">
            <div className="certifications-container">
                <h2 className="certifications-title">{t('about.certifications.title')}</h2>
                <div className="certifications-grid">
                    <div className="certification-card">
                        <p className="certification-name">{t('about.certifications.ethiopianMinistry')}</p>
                        <p className="certification-description">{t('about.certifications.ethiopianMinistryDesc')}</p>
                    </div>
                    <div className="certification-card">
                        <p className="certification-name">{t('about.certifications.internationalStandards')}</p>
                        <p className="certification-description">{t('about.certifications.internationalStandardsDesc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;


