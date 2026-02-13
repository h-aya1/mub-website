import { useState, useEffect } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { jobService } from '../../services/jobs.service';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, MapPin, Clock, CheckCircle } from 'lucide-react';
import './FeaturedOpportunitiesSection.css';

const FeaturedOpportunitiesSection = () => {
    const { t } = useTranslations();

    // Fetch first 3 jobs (same data structure as jobs page)
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await jobService.getJobs({ pageSize: 3 });
                const mappedJobs = data.items.map(job => ({
                    id: job.id,
                    title: job.jobTitle,
                    company: job.employer?.organizationName || 'Confidential',
                    logoUrl: job.employer?.logoUrl,
                    thumbnailUrl: job.thumbnailUrl,
                    location: [job.city, job.country].filter(Boolean).join(', '),
                    salary: job.salaryRange || t('home.featured.salaryNegotiable'),
                    type: job.contractType?.replace(/_/g, ' ').toLowerCase() || 'Full time',
                    urgent: false,
                    requirements: job.jobDescription
                        ? job.jobDescription.split('\n').filter(line => line.trim().length > 0).slice(0, 3)
                        : [t('home.featured.seeDetails')]
                }));
                setFeaturedJobs(mappedJobs);
            } catch (err) {
                console.error("Failed to load featured jobs", err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [t]);

    if (loading) {
        return <div className="loading-spinner">Loading opportunities...</div>; // Simple loading state
    }

    return (
        <section className="featured-opportunities-section">
            <div className="section-header-with-action">
                <div className="section-header-left">
                    <h2>{t('home.featured.title')}</h2>
                    <p>{t('home.featured.subtitle')}</p>
                </div>
                <Link to="/jobs" className="btn-view-all">
                    {t('home.featured.viewAll')}
                    <ArrowRight size={20} />
                </Link>
            </div>

            <div className="jobs-grid">
                {featuredJobs.map(job => (
                    <div key={job.id} className="job-card-featured">
                        <div className="job-card-header-featured">
                            {(job.thumbnailUrl || job.logoUrl) && (
                                <div className="featured-job-logo">
                                    <img
                                        src={`http://localhost:3000${job.thumbnailUrl || job.logoUrl}`}
                                        alt={job.company}
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>
                            )}
                            <div className="job-title-row">
                                <h3>{job.title}</h3>
                                {job.urgent && (
                                    <span className="urgent-badge">
                                        <AlertCircle size={14} />
                                        {t('home.featured.urgent')}
                                    </span>
                                )}
                            </div>
                            <div className="job-location">
                                <MapPin size={16} />
                                <span>{job.location}</span>
                            </div>
                        </div>

                        <div className="job-salary-bar">
                            {t('home.featured.monthlySalary')}
                        </div>

                        <div className="job-type-badge">
                            <Clock size={14} />
                            <span>{job.type}</span>
                        </div>

                        <div className="job-requirements">
                            <h4>{t('home.featured.requirements')}:</h4>
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
                            {t('services.cta.applyNow')}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedOpportunitiesSection;

