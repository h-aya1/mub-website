import React from 'react';
import { Search, Filter } from 'lucide-react';
import './JobsSearchSection.css';

const JobsSearchSection = ({
    searchTerm,
    setSearchTerm,
    showFilters,
    setShowFilters,
    selectedLocations,
    handleLocationChange,
    selectedSalaries,
    handleSalaryChange,
    locations,
    salaryRanges,
}) => {
    return (
        <section className="jobs-search-section">
            <div className="jobs-search-container">
                <div className="jobs-search-row">
                    <div className="jobs-search-input-wrapper">
                        <Search className="jobs-search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search by job title, skills..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="jobs-search-input"
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="jobs-filter-button"
                    >
                        <Filter size={20} />
                        Filters
                    </button>
                </div>

                {/* Mobile Filters */}
                {showFilters && (
                    <div className="jobs-mobile-filters">
                        <div className="jobs-mobile-filters-content">
                            <div className="jobs-mobile-filter-group">
                                <label className="jobs-filter-label">Location</label>
                                <div className="jobs-mobile-checkboxes">
                                    {locations.map((loc) => (
                                        <label key={loc} className="jobs-mobile-checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={selectedLocations.includes(loc)}
                                                onChange={() => handleLocationChange(loc)}
                                                className="jobs-mobile-checkbox"
                                            />
                                            <span>{loc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="jobs-mobile-filter-group">
                                <label className="jobs-filter-label">Minimum Salary</label>
                                <div className="jobs-mobile-checkboxes">
                                    {salaryRanges.map((salary) => (
                                        <label
                                            key={salary}
                                            className="jobs-mobile-checkbox-label"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedSalaries.includes(salary)}
                                                onChange={() => handleSalaryChange(salary)}
                                                className="jobs-mobile-checkbox"
                                            />
                                            <span>{salary === 0 ? "All Ranges" : `$${salary}+`}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobsSearchSection;

