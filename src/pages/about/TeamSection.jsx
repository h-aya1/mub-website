import { useTranslations } from '../../hooks/useTranslations';
import './TeamSection.css';

const TeamSection = () => {
    const { t } = useTranslations();

    const team = [
        { role: t('about.team.roles.ceo'), name: "Name Here", bio: t('about.team.bios.ceo') },
        { role: t('about.team.roles.operations'), name: "Name Here", bio: t('about.team.bios.operations') },
        { role: t('about.team.roles.specialist'), name: "Name Here", bio: t('about.team.bios.specialist') },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="team-title">{t('about.team.title')}</h2>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-card-image" />
                            <div className="team-card-content">
                                <h3 className="team-card-name">{member.name}</h3>
                                <p className="team-card-role">{member.role}</p>
                                <p className="team-card-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;


