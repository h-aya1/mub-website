import { useTranslations } from '../../hooks/useTranslations';
import './ValuesSection.css';

const ValuesSection = () => {
    const { t } = useTranslations();

    const values = [
        {
            title: t('about.values.integrity'),
            description: t('about.values.integrityDesc'),
        },
        {
            title: t('about.values.excellence'),
            description: t('about.values.excellenceDesc'),
        },
        {
            title: t('about.values.support'),
            description: t('about.values.supportDesc'),
        },
        {
            title: t('about.values.compliance'),
            description: t('about.values.complianceDesc'),
        },
    ];

    return (
        <section className="values-section">
            <div className="values-container">
                <h2 className="values-title">{t('about.values.title')}</h2>
                <div className="values-grid">
                    {values.map((value, i) => (
                        <div key={i} className="value-card">
                            <h3 className="value-card-title">{value.title}</h3>
                            <p className="value-card-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;


