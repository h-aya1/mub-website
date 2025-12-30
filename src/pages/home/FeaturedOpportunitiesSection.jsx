import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Clock, AlertCircle } from 'lucide-react';
import './FeaturedOpportunitiesSection.css';

const FeaturedOpportunitiesSection = () => {
    // Fetch first 3 jobs (same data structure as jobs page)
    const featuredJobs = [
        {
            id: 1,
            title: 'Household Manager',
            location: 'Dubai, UAE',
            salary: 'Monthly Salary',
            type: 'Full-time, Live-in',
            urgent: true,
            requirements: [
                'Minimum 2 years experience',
                'English communication skills',
                'Cooking and cleaning expertise'
            ]
        },
        {
            id: 2,
            title: 'Private Driver',
            location: 'Riyadh, Saudi Arabia',
            salary: 'Monthly Salary',
            type: 'Full-time',
            urgent: false,
            requirements: [
                'Valid international driving license',
                'Clean driving record',
                'Basic Arabic preferred'
            ]
        },
        {
            id: 3,
            title: 'Childcare Specialist',
            location: 'Doha, Qatar',
            salary: 'Monthly Salary',
            type: 'Full-time, Live-in',
            urgent: true,
            requirements: [
                'Experience with children 0-5 years',
                'First aid certification',
                'Patient and caring nature'
            ]
        }
    ];

    return (
        <section className="featured-opportunities-section">
            <div className="section-header-with-action">
                <div className="section-header-left">
                    <h2>Featured Opportunities</h2>
                    <p>Handpicked positions from trusted Gulf employers seeking dedicated Ethiopian professionals.</p>
                </div>
                <Link to="/jobs" className="btn-view-all">
                    View All Jobs
                    <ArrowRight size={20} />
                </Link>
            </div>

            <div className="jobs-grid">
                {featuredJobs.map(job => (
                    <div key={job.id} className="job-card-featured">
                        <div className="job-card-header-featured">
                            <div className="job-title-row">
                                <h3>{job.title}</h3>
                                {job.urgent && (
                                    <span className="urgent-badge">
                                        <AlertCircle size={14} />
                                        Urgent
                                    </span>
                                )}
                            </div>
                            <div className="job-location">
                                <MapPin size={16} />
                                <span>{job.location}</span>
                            </div>
                        </div>

                        <div className="job-salary-bar">
                            {job.salary}
                        </div>

                        <div className="job-type-badge">
                            <Clock size={14} />
                            <span>{job.type}</span>
                        </div>

                        <div className="job-requirements">
                            <h4>Key Requirements:</h4>
                            <ul>
                                {job.requirements.map((req, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link to="/auth-choice" state={{ from: `/jobs/${job.id}` }} className="btn-apply-featured">
                            Apply Now
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedOpportunitiesSection;

