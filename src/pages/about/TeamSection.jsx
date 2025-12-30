import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
    const team = [
        { role: "Founder & CEO", name: "Name Here", bio: "15+ years in recruitment industry" },
        { role: "Operations Director", name: "Name Here", bio: "Expert in Gulf employment regulations" },
        { role: "Placement Specialist", name: "Name Here", bio: "Dedicated to candidate success" },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="team-title">Our Team</h2>
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


