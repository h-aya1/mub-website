import React, { useState, useMemo, useEffect } from 'react';
import { jobService } from '../../services/jobs.service';
import JobsHeroSection from './JobsHeroSection';
import JobsSearchSection from './JobsSearchSection';
import JobsListingsSection from './JobsListingsSection';
import JobsPageCTA from './JobsPageCTA';
import './Jobs.css';



const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocations, setSelectedLocations] = useState(["All"]);
    const [selectedSalaries, setSelectedSalaries] = useState([0]);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await jobService.getJobs({ pageSize: 50 });
                const mappedJobs = data.items.map(job => {
                    let salaryMin = 0;
                    if (job.salaryRange) {
                        const match = job.salaryRange.match(/(\d+)/);
                        if (match) salaryMin = parseInt(match[0], 10);
                    }
                    return {
                        id: job.id,
                        title: job.jobTitle,
                        company: job.employer?.organizationName || 'Confidential',
                        logoUrl: job.employer?.logoUrl, // Add logoUrl
                        thumbnailUrl: job.thumbnailUrl, // Add thumbnailUrl
                        location: job.city ? `${job.city}, ${job.country}` : job.country,
                        salary: job.salaryRange || 'Check details',
                        salaryMin: salaryMin,
                        type: job.contractType?.replace(/_/g, ' ').toLowerCase() || 'Full time',
                        vacancies: job.vacancies,
                        posted: new Date(job.createdAt).toLocaleDateString(),
                        description: job.jobDescription
                    };
                });
                setJobs(mappedJobs);
            } catch (err) {
                console.error("Failed to fetch jobs", err);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const locations = ["All", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain"];
    const salaryRanges = [0, 300, 500, 800];

    // Handle location selection
    const handleLocationChange = (location) => {
        if (location === "All") {
            setSelectedLocations(["All"]);
        } else {
            setSelectedLocations((prev) => {
                const newLocations = prev.includes("All")
                    ? [location]
                    : prev.includes(location)
                        ? prev.filter((loc) => loc !== location)
                        : [...prev.filter((loc) => loc !== "All"), location];
                return newLocations.length === 0 ? ["All"] : newLocations;
            });
        }
    };

    // Handle salary selection
    const handleSalaryChange = (salary) => {
        if (salary === 0) {
            setSelectedSalaries([0]);
        } else {
            setSelectedSalaries((prev) => {
                const newSalaries = prev.includes(0)
                    ? [salary]
                    : prev.includes(salary)
                        ? prev.filter((sal) => sal !== salary)
                        : [...prev.filter((sal) => sal !== 0), salary];
                return newSalaries.length === 0 ? [0] : newSalaries;
            });
        }
    };

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesLocation =
                selectedLocations.includes("All") || selectedLocations.some(loc => job.location.includes(loc));

            const matchesSalary =
                selectedSalaries.includes(0) ||
                selectedSalaries.some((minSalary) => job.salaryMin >= minSalary);

            return matchesSearch && matchesLocation && matchesSalary;
        });
    }, [jobs, searchTerm, selectedLocations, selectedSalaries]);

    return (
        <div className="jobs-page">
            <JobsHeroSection totalJobs={jobs.length} />
            <JobsSearchSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                selectedLocations={selectedLocations}
                handleLocationChange={handleLocationChange}
                selectedSalaries={selectedSalaries}
                handleSalaryChange={handleSalaryChange}
                locations={locations}
                salaryRanges={salaryRanges}
            />
            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>Loading jobs...</div>
            ) : (
                <JobsListingsSection
                    filteredJobs={filteredJobs}
                    totalJobs={jobs.length}
                    selectedLocations={selectedLocations}
                    handleLocationChange={handleLocationChange}
                    selectedSalaries={selectedSalaries}
                    handleSalaryChange={handleSalaryChange}
                    locations={locations}
                    salaryRanges={salaryRanges}
                />
            )}
            <JobsPageCTA />
        </div>
    );
};

export default Jobs;
