import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase } from 'lucide-react';
import './JobsListingsSection.css';

const JobsListingsSection = ({
    filteredJobs,
    totalJobs,
    selectedLocations,
    handleLocationChange,
    selectedSalaries,
    handleSalaryChange,
    locations,
    salaryRanges,
}) => {
    return (
        <section className="jobs-listings-section">
            <div className="jobs-listings-container">
                <div className="jobs-listings-grid">
                    {/* Sidebar Filters - Desktop */}
                    <div className="jobs-sidebar">
                        <div className="jobs-sidebar-card">
                            <h3 className="jobs-sidebar-title">Filters</h3>

                            <div className="jobs-filter-group">
                                <label className="jobs-filter-group-label">Location</label>
                                <div className="jobs-filter-options">
                                    {locations.map((loc) => (
                                        <label key={loc} className="jobs-filter-option">
                                            <input
                                                type="checkbox"
                                                checked={selectedLocations.includes(loc)}
                                                onChange={() => handleLocationChange(loc)}
                                                className="jobs-filter-checkbox"
                                            />
                                            <span className="jobs-filter-option-text">{loc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="jobs-filter-group">
                                <label className="jobs-filter-group-label">Minimum Salary</label>
                                <div className="jobs-filter-options">
                                    {salaryRanges.map((salary) => (
                                        <label key={salary} className="jobs-filter-option">
                                            <input
                                                type="checkbox"
                                                checked={selectedSalaries.includes(salary)}
                                                onChange={() => handleSalaryChange(salary)}
                                                className="jobs-filter-checkbox"
                                            />
                                            <span className="jobs-filter-option-text">
                                                {salary === 0 ? "All Ranges" : `$${salary}+`}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="jobs-listings-content">
                        <div className="jobs-listings-header">
                            <p className="jobs-listings-count">
                                Showing {filteredJobs.length} of {totalJobs} jobs
                            </p>
                        </div>

                        <div className="jobs-listings-list">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <Link key={job.id} to={`/jobs/${job.id}`} className="jobs-job-card-link">
                                        <div className="jobs-job-card">
                                            <div className="jobs-job-card-content">
                                                <div className="jobs-job-card-main">
                                                    <h3 className="jobs-job-title">{job.title}</h3>
                                                    <p className="jobs-job-company">{job.company}</p>

                                                    <div className="jobs-job-info">
                                                        <div className="jobs-job-info-item">
                                                            <MapPin size={16} className="jobs-job-info-icon" />
                                                            {job.location}
                                                        </div>
                                                        <div className="jobs-job-info-item">
                                                            <DollarSign size={16} className="jobs-job-info-icon" />
                                                            {job.salary}
                                                        </div>
                                                        <div className="jobs-job-info-item">
                                                            <Briefcase size={16} className="jobs-job-info-icon" />
                                                            {job.experience}
                                                        </div>
                                                    </div>

                                                    <p className="jobs-job-description">{job.description}</p>
                                                </div>

                                                <div className="jobs-job-card-side">
                                                    <span className="jobs-job-type">{job.type}</span>
                                                    <p className="jobs-job-posted">{job.posted}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="jobs-empty-state">
                                    <p className="jobs-empty-text">No jobs match your criteria</p>
                                    <p className="jobs-empty-subtext">Try adjusting your filters or search terms</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobsListingsSection;

