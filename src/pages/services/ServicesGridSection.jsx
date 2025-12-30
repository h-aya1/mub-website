import React from 'react';
import { Users, FileText, GraduationCap, Briefcase, LifeBuoy, CheckCircle } from 'lucide-react';
import './ServicesGridSection.css';

const ServicesGridSection = () => {
    const services = [
        {
            icon: Users,
            title: "Recruitment & Matching",
            description:
                "We identify qualified candidates and match them with suitable positions based on skills, experience, and preferences.",
            features: ["Skills assessment", "Profile evaluation", "Job matching algorithm", "Multiple opportunity options"],
        },
        {
            icon: FileText,
            title: "Documentation & Visa Processing",
            description: "Complete assistance with all required paperwork, contracts, and visa applications.",
            features: ["Contract review", "Document preparation", "Visa application", "Embassy coordination"],
        },
        {
            icon: GraduationCap,
            title: "Pre-Deployment Training",
            description: "Comprehensive training programs to prepare you for success in your new role.",
            features: ["Cultural orientation", "Language basics", "Job-specific training", "Health & safety"],
        },
        {
            icon: Briefcase,
            title: "Employer Services",
            description: "For international employers seeking qualified Ethiopian workers.",
            features: ["Candidate sourcing", "Background verification", "Recruitment support", "On-boarding assistance"],
        },
        {
            icon: LifeBuoy,
            title: "Ongoing Support",
            description: "Continuous support throughout your employment journey abroad.",
            features: ["24/7 emergency hotline", "Problem resolution", "Welfare checks", "Career counseling"],
        },
        {
            icon: CheckCircle,
            title: "Compliance & Legal",
            description: "Ensuring full compliance with all Ethiopian and Gulf employment laws.",
            features: ["Regulatory compliance", "Contract enforcement", "Legal support", "Dispute resolution"],
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


