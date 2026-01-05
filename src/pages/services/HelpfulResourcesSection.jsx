import { useTranslations } from '../../hooks/useTranslations';
import { ExternalLink, FileText, Database, Globe, CheckCircle, Shield } from 'lucide-react';
import './HelpfulResourcesSection.css';

const HelpfulResourcesSection = () => {
    const { t } = useTranslations();

    const resources = [
        {
            id: 1,
            name: t('services.resources.items.tawtheeq.name'),
            description: t('services.resources.items.tawtheeq.description'),
            icon: FileText,
            category: t('services.resources.items.tawtheeq.category'),
            url: 'https://tawtheeq.musaned.com.sa/'
        },
        {
            id: 2,
            name: t('services.resources.items.lmis.name'),
            description: t('services.resources.items.lmis.description'),
            icon: Database,
            category: t('services.resources.items.lmis.category'),
            url: 'https://lmis.gov.et/'
        },
        {
            id: 3,
            name: t('services.resources.items.mofa.name'),
            description: t('services.resources.items.mofa.description'),
            icon: Globe,
            category: t('services.resources.items.mofa.category'),
            url: 'https://visa.mofa.gov.sa/'
        },
        {
            id: 4,
            name: t('services.resources.items.easyenjaz.name'),
            description: t('services.resources.items.easyenjaz.description'),
            icon: CheckCircle,
            category: t('services.resources.items.easyenjaz.category'),
            url: 'https://www.easyenjaz.net/'
        },
        {
            id: 5,
            name: t('services.resources.items.nyala.name'),
            description: t('services.resources.items.nyala.description'),
            icon: Shield,
            category: t('services.resources.items.nyala.category'),
            url: 'https://www.nyalainsurancesc.com/'
        }
    ];

    return (
        <section className="helpful-resources-section">
            <div className="helpful-resources-container">
                <div className="helpful-resources-header">
                    <h2 className="helpful-resources-title">{t('services.resources.title')}</h2>
                    <p className="helpful-resources-subtitle">
                        {t('services.resources.subtitle')}
                    </p>
                </div>

                <div className="helpful-resources-grid">
                    {resources.map((resource) => {
                        const Icon = resource.icon;
                        return (
                            <a
                                key={resource.id}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-card resource-card-link"
                            >
                                <div className="resource-icon-wrapper">
                                    <Icon className="resource-icon" size={24} />
                                </div>
                                <div className="resource-category">{resource.category}</div>
                                <h3 className="resource-name">{resource.name}</h3>
                                <p className="resource-description">{resource.description}</p>
                                <div className="resource-footer">
                                    <span className="resource-note">
                                        <ExternalLink size={14} />
                                        Visit Website →
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HelpfulResourcesSection;

