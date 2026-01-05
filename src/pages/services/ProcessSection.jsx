import { useTranslations } from '../../hooks/useTranslations';
import './ProcessSection.css';

const ProcessSection = () => {
    const { t } = useTranslations();

    const process = [
        { step: 1, title: t('services.process.application'), description: t('services.process.applicationDesc') },
        { step: 2, title: t('services.process.screening'), description: t('services.process.screeningDesc') },
        { step: 3, title: t('services.process.interview'), description: t('services.process.interviewDesc') },
        { step: 4, title: t('services.process.matching'), description: t('services.process.matchingDesc') },
        { step: 5, title: t('services.process.negotiation'), description: t('services.process.negotiationDesc') },
        { step: 6, title: t('services.process.deployment'), description: t('services.process.deploymentDesc') },
    ];

    return (
        <section className="process-section">
            <div className="process-container">
                <h2 className="process-title">{t('services.process.title')}</h2>
                <div className="process-grid">
                    {process.map((item, i) => (
                        <div key={i} className="process-item-wrapper">
                            <div className="process-card">
                                <div className="process-step-number">{item.step}</div>
                                <h3 className="process-card-title">{item.title}</h3>
                                <p className="process-card-description">{item.description}</p>
                            </div>
                            {i < process.length - 1 && <div className="process-connector" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;


