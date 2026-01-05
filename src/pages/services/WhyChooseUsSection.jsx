import { useTranslations } from '../../hooks/useTranslations';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
    const { t } = useTranslations();

    const reasons = [
        {
            title: t('services.whyChoose.experience'),
            description: t('services.whyChoose.experienceDesc'),
        },
        {
            title: t('services.whyChoose.ethical'),
            description: t('services.whyChoose.ethicalDesc'),
        },
        {
            title: t('services.whyChoose.support'),
            description: t('services.whyChoose.supportDesc'),
        },
        {
            title: t('services.whyChoose.opportunities'),
            description: t('services.whyChoose.opportunitiesDesc'),
        },
    ];

    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">{t('services.whyChoose.title')}</h2>
                <div className="why-choose-us-list">
                    {reasons.map((reason, i) => (
                        <div key={i} className="why-choose-us-card">
                            <h3 className="why-choose-us-card-title">{reason.title}</h3>
                            <p className="why-choose-us-card-description">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;


