import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Clock, AlertCircle } from 'lucide-react';
import './FeaturedJobsSection.css';

const FeaturedJobsSection = () => {
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
        },
        {
            id: 4,
            title: 'Elderly Care Assistant',
            location: 'Kuwait City, Kuwait',
            salary: 'Monthly Salary',
            type: 'Full-time, Live-in',
            urgent: false,
            requirements: [
                'Experience in elderly care',
                'Compassionate and patient',
                'Basic medical knowledge'
            ]
        },
        {
            id: 5,
            title: 'Housekeeper',
            location: 'Abu Dhabi, UAE',
            salary: 'Monthly Salary',
            type: 'Full-time, Live-in',
            urgent: false,
            requirements: [
                'Attention to detail',
                'Experience in luxury homes',
                'Trustworthy and reliable'
            ]
        },
        {
            id: 6,
            title: 'Cook',
            location: 'Jeddah, Saudi Arabia',
            salary: 'Monthly Salary',
            type: 'Full-time',
            urgent: true,
            requirements: [
                'International cuisine expertise',
                'Hygiene certification',
                'Minimum 3 years experience'
            ]
        }
    ];

    return (
        <section className="featured-jobs-section">
            <div className="container">
                <div className="section-header-with-action">
                    <div className="section-header-left">
                        <h2>Featured Opportunities</h2>
                        <p>Handpicked positions from trusted Gulf employers seeking dedicated Ethiopian professionals.</p>
                    </div>
                    <Link to="/jobs/all" className="btn-view-all">
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
            </div>
        </section>
    );
};

export default FeaturedJobsSection;



