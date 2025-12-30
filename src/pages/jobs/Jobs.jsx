import React, { useState, useMemo } from 'react';
import JobsHeroSection from './JobsHeroSection';
import JobsSearchSection from './JobsSearchSection';
import JobsListingsSection from './JobsListingsSection';
import JobsPageCTA from './JobsPageCTA';
import './Jobs.css';

// Note: This is demo data. In production, fetch from database/API
const mockJobs = [
    {
        id: 1,
        title: "Domestic Helper",
        company: "Private Household",
        location: "Saudi Arabia",
        salary: "$200-300/month",
        salaryMin: 200,
        type: "Full-time",
        experience: "2+ years",
        posted: "Dec 20, 2025",
        description:
            "Seeking experienced domestic helper for household management. Responsibilities include cleaning, cooking, and childcare.",
    },
    {
        id: 2,
        title: "Healthcare Aide",
        company: "Al Noor Hospital",
        location: "United Arab Emirates",
        salary: "$400-550/month",
        salaryMin: 400,
        type: "Full-time",
        experience: "3+ years",
        posted: "Dec 19, 2025",
        description:
            "Healthcare professionals needed for nursing support and patient care duties in modern hospital facility.",
    },
    {
        id: 3,
        title: "Construction Worker",
        company: "Gulf Construction Ltd",
        location: "Qatar",
        salary: "$350-450/month",
        salaryMin: 350,
        type: "Full-time",
        experience: "2+ years",
        posted: "Dec 18, 2025",
        description: "Skilled construction workers needed for ongoing infrastructure projects with competitive benefits.",
    },
    {
        id: 4,
        title: "Hotel Housekeeper",
        company: "Luxury Hotel Group",
        location: "United Arab Emirates",
        salary: "$280-380/month",
        salaryMin: 280,
        type: "Full-time",
        experience: "1+ year",
        posted: "Dec 18, 2025",
        description: "Housekeeping staff for 5-star hotel. Must be reliable, detail-oriented, and customer-focused.",
    },
    {
        id: 5,
        title: "Nanny/Childcare Provider",
        company: "Private Family",
        location: "Kuwait",
        salary: "$250-350/month",
        salaryMin: 250,
        type: "Full-time",
        experience: "2+ years",
        posted: "Dec 17, 2025",
        description:
            "Experienced nanny needed for family with children. Responsibilities include childcare and light household tasks.",
    },
    {
        id: 6,
        title: "Chef/Cook",
        company: "Restaurant Group",
        location: "Bahrain",
        salary: "$500-700/month",
        salaryMin: 500,
        type: "Full-time",
        experience: "3+ years",
        posted: "Dec 16, 2025",
        description:
            "Professional chef with experience in Middle Eastern and international cuisine for upscale restaurant.",
    },
    {
        id: 7,
        title: "Office Cleaner",
        company: "Cleaning Services Co.",
        location: "Saudi Arabia",
        salary: "$220-280/month",
        salaryMin: 220,
        type: "Full-time",
        experience: "1+ year",
        posted: "Dec 16, 2025",
        description: "Office and building cleaning services. Evening shift available with transportation provided.",
    },
    {
        id: 8,
        title: "Nurse - Medical Care",
        company: "King Fahad Medical City",
        location: "Saudi Arabia",
        salary: "$800-1000/month",
        salaryMin: 800,
        type: "Full-time",
        experience: "5+ years",
        posted: "Dec 15, 2025",
        description: "RN or LPN with extensive experience in patient care and medical procedures for major medical center.",
    },
];

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocations, setSelectedLocations] = useState(["All"]);
    const [selectedSalaries, setSelectedSalaries] = useState([0]);
    const [showFilters, setShowFilters] = useState(false);

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
        return mockJobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesLocation =
                selectedLocations.includes("All") || selectedLocations.includes(job.location);

            const matchesSalary =
                selectedSalaries.includes(0) ||
                selectedSalaries.some((minSalary) => job.salaryMin >= minSalary);

            return matchesSearch && matchesLocation && matchesSalary;
        });
    }, [searchTerm, selectedLocations, selectedSalaries]);

    return (
        <div className="jobs-page">
            <JobsHeroSection totalJobs={mockJobs.length} />
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
            <JobsListingsSection
                filteredJobs={filteredJobs}
                totalJobs={mockJobs.length}
                selectedLocations={selectedLocations}
                handleLocationChange={handleLocationChange}
                selectedSalaries={selectedSalaries}
                handleSalaryChange={handleSalaryChange}
                locations={locations}
                salaryRanges={salaryRanges}
            />
            <JobsPageCTA />
        </div>
    );
};

export default Jobs;
