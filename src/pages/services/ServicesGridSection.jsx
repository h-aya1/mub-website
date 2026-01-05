import { useTranslations } from '../../hooks/useTranslations';
import { Users, FileText, GraduationCap, Briefcase, LifeBuoy, CheckCircle } from 'lucide-react';
import './ServicesGridSection.css';

const ServicesGridSection = () => {
    const { t } = useTranslations();

    // Helper to get array from translation object if it exists, otherwise return empty array
    // This handles the case where t() might return the key string if array logic isn't implicitly handled by the hook for arrays
    // But since useTranslations hook seems simple, we might need to manually access the object structure or just loop 
    // However, the patterns seen so far suggest I should construct the array here using specific keys if I don't want to change the hook logic.
    // The safest bet is to construct the array manually with t calls for specific indices if the structure is known, or just use the keys I defined.

    const services = [
        {
            icon: Users,
            title: t('services.grid.recruitment.title'),
            description: t('services.grid.recruitment.description'),
            features: [
                t('services.grid.recruitment.features.0', { defaultValue: "Skills assessment" }),
                t('services.grid.recruitment.features.1', { defaultValue: "Profile evaluation" }),
                t('services.grid.recruitment.features.2', { defaultValue: "Job matching algorithm" }),
                t('services.grid.recruitment.features.3', { defaultValue: "Multiple opportunity options" })
            ],
            // Since the hook in useTranslations.js splits by '.' and traverses, looking up an array index should work if the data is an array. 
            // Let's assume t('key.features.0') works if features is an array.
            // Wait, looking at useTranslations.js:
            /*
            const t = (key, params = {}) => {
                const keys = key.split('.');
                let value = translationMap[language];
                for (const k of keys) { value = value?.[k]; }
                ...
            */
            // Yes, accessing array by index in path 'features.0' should work in JS object traversal.
        },
        {
            icon: FileText,
            title: t('services.grid.documentation.title'),
            description: t('services.grid.documentation.description'),
            features: [
                t('services.grid.documentation.features.0'),
                t('services.grid.documentation.features.1'),
                t('services.grid.documentation.features.2'),
                t('services.grid.documentation.features.3')
            ],
        },
        {
            icon: GraduationCap,
            title: t('services.grid.training.title'),
            description: t('services.grid.training.description'),
            features: [
                t('services.grid.training.features.0'),
                t('services.grid.training.features.1'),
                t('services.grid.training.features.2'),
                t('services.grid.training.features.3')
            ],
        },
        {
            icon: Briefcase,
            title: t('services.grid.employer.title'),
            description: t('services.grid.employer.description'),
            features: [
                t('services.grid.employer.features.0'),
                t('services.grid.employer.features.1'),
                t('services.grid.employer.features.2'),
                t('services.grid.employer.features.3')
            ],
        },
        {
            icon: LifeBuoy,
            title: t('services.grid.support.title'),
            description: t('services.grid.support.description'),
            features: [
                t('services.grid.support.features.0'),
                t('services.grid.support.features.1'),
                t('services.grid.support.features.2'),
                t('services.grid.support.features.3')
            ],
        },
        {
            icon: CheckCircle,
            title: t('services.grid.compliance.title'),
            description: t('services.grid.compliance.description'),
            features: [
                t('services.grid.compliance.features.0'),
                t('services.grid.compliance.features.1'),
                t('services.grid.compliance.features.2'),
                t('services.grid.compliance.features.3')
            ],
        },
    ];

    return (
        <section className="services-grid-section">
            <div className="services-grid-container">
                <div className="services-grid">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div key={i} className="service-card">
                                <div className="service-icon-wrapper">
                                    <Icon className="service-icon" size={24} />
                                </div>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-description">{service.description}</p>
                                <ul className="service-features">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="service-feature-item">
                                            <CheckCircle size={16} className="service-feature-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesGridSection;


