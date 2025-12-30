import React from 'react';
import { ExternalLink, FileText, Database, Globe, CheckCircle, Shield } from 'lucide-react';
import './HelpfulResourcesSection.css';

const HelpfulResourcesSection = () => {
    const resources = [
        {
            id: 1,
            name: 'Tawtheeq - Musaned Partnership Contracts',
            description: 'This platform facilitates the creation and management of partnership contracts related to domestic labor services.',
            icon: FileText,
            category: 'Contract Management',
            url: 'https://tawtheeq.musaned.com.sa/'
        },
        {
            id: 2,
            name: 'Ethiopian Labor Market Information System (LMIS)',
            description: 'This site offers comprehensive data on the labor market in Ethiopia, helping users access vital information for employment and workforce planning.',
            icon: Database,
            category: 'Labor Market Data',
            url: 'https://lmis.gov.et/'
        },
        {
            id: 3,
            name: 'Visa MOFA - Visa Inquiry Services',
            description: 'Users can inquire about visa information, application procedures, and requirements for various visa types.',
            icon: Globe,
            category: 'Visa Services',
            url: 'https://visa.mofa.gov.sa/'
        },
        {
            id: 4,
            name: 'Easyenjaz',
            description: 'This platform simplifies the visa application process, providing a seamless experience in managing domestic labor services and related paperwork.',
            icon: CheckCircle,
            category: 'Visa Processing',
            url: 'https://www.easyenjaz.net/'
        },
        {
            id: 5,
            name: 'FETA|P Agency (Nyala Insurance)',
            description: 'This website serves as a portal for insurance services, offering user login access for managing insurance-related queries and transactions.',
            icon: Shield,
            category: 'Insurance Services',
            url: 'https://www.nyalainsurancesc.com/'
        }
    ];

    return (
        <section className="helpful-resources-section">
            <div className="helpful-resources-container">
                <div className="helpful-resources-header">
                    <h2 className="helpful-resources-title">Helpful Resources</h2>
                    <p className="helpful-resources-subtitle">
                        These websites are valuable tools used in our daily operations. They provide essential services for employment, visa information, and domestic labor management.
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

