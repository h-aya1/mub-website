import { useTranslations } from '../../hooks/useTranslations';
import { CheckCircle, Clock, Eye } from 'lucide-react';
import './TrustSection.css';

const TrustSection = () => {
    const { t } = useTranslations();

    return (
        <section className="trust-section">
            <div className="section-header">
                <h2>{t('home.trust.title')}</h2>
                <p>{t('home.trust.subtitle')}</p>
            </div>

            <div className="trust-cards">
                <div className="trust-card">
                    <div className="trust-icon trust-icon-green">
                        <CheckCircle size={32} />
                    </div>
                    <h3>{t('home.trust.governmentLicensed')}</h3>
                    <p>{t('home.trust.governmentLicensedDesc')}</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-orange">
                        <CheckCircle size={32} />
                    </div>
                    <h3>{t('home.trust.gccCertified')}</h3>
                    <p>{t('home.trust.gccCertifiedDesc')}</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-yellow">
                        <Clock size={32} />
                    </div>
                    <h3>{t('home.trust.support247')}</h3>
                    <p>{t('home.trust.support247Desc')}</p>
                </div>
                <div className="trust-card">
                    <div className="trust-icon trust-icon-dark-green">
                        <Eye size={32} />
                    </div>
                    <h3>{t('home.trust.transparentProcess')}</h3>
                    <p>{t('home.trust.transparentProcessDesc')}</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;

