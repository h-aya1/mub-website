import React from 'react';
import { MapPin, DollarSign, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CountriesGridSection.css';

const CountriesGridSection = () => {
    const countries = [
        {
            id: 1,
            name: 'Saudi Arabia',
            flag: '🇸🇦',
            capital: 'Riyadh',
            description: 'Largest economy in the Middle East with diverse employment opportunities across multiple sectors.',
            opportunities: 'Healthcare, Construction, Hospitality, Domestic Services',
            averageSalary: '$300-800/month',
            visaInfo: 'Work visa sponsorship available',
            jobCount: '500+',
            popularCities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca']
        },
        {
            id: 2,
            name: 'United Arab Emirates',
            flag: '🇦🇪',
            capital: 'Abu Dhabi',
            description: 'Modern, cosmopolitan destination with excellent infrastructure and high-quality employment opportunities.',
            opportunities: 'Hospitality, Retail, Healthcare, Construction, Domestic Services',
            averageSalary: '$400-900/month',
            visaInfo: 'Residence visa with work permit',
            jobCount: '400+',
            popularCities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain']
        },
        {
            id: 3,
            name: 'Qatar',
            flag: '🇶🇦',
            capital: 'Doha',
            description: 'Rapidly growing economy with world-class facilities and competitive employment packages.',
            opportunities: 'Hospitality, Construction, Healthcare, Domestic Services, Retail',
            averageSalary: '$350-850/month',
            visaInfo: 'Work permit and residence card',
            jobCount: '200+',
            popularCities: ['Doha', 'Al Rayyan', 'Al Wakrah']
        },
        {
            id: 4,
            name: 'Kuwait',
            flag: '🇰🇼',
            capital: 'Kuwait City',
            description: 'Stable economy with strong demand for skilled and unskilled workers across various industries.',
            opportunities: 'Domestic Services, Healthcare, Construction, Hospitality',
            averageSalary: '$300-700/month',
            visaInfo: 'Work visa and civil ID required',
            jobCount: '150+',
            popularCities: ['Kuwait City', 'Al Ahmadi', 'Hawalli']
        },
        {
            id: 5,
            name: 'Bahrain',
            flag: '🇧🇭',
            capital: 'Manama',
            description: 'Small but prosperous island nation with growing employment opportunities in service sectors.',
            opportunities: 'Hospitality, Retail, Domestic Services, Healthcare',
            averageSalary: '$280-650/month',
            visaInfo: 'Work permit and CPR card',
            jobCount: '100+',
            popularCities: ['Manama', 'Riffa', 'Muharraq']
        },
        {
            id: 6,
            name: 'Oman',
            flag: '🇴🇲',
            capital: 'Muscat',
            description: 'Beautiful country with expanding economy and increasing demand for international workers.',
            opportunities: 'Hospitality, Construction, Domestic Services, Healthcare',
            averageSalary: '$250-600/month',
            visaInfo: 'Work visa and residence permit',
            jobCount: '80+',
            popularCities: ['Muscat', 'Salalah', 'Sohar']
        }
    ];

    return (
        <section className="countries-grid-section">
            <div className="countries-grid-container">
                <div className="countries-grid-header">
                    <h2 className="countries-grid-title">Explore Opportunities by Country</h2>
                    <p className="countries-grid-subtitle">
                        Each country offers unique opportunities and benefits. Choose the destination that matches your skills and career goals.
                    </p>
                </div>

                <div className="countries-grid">
                    {countries.map((country) => (
                        <div key={country.id} className="country-card">
                            <div className="country-card-header">
                                <div className="country-flag">{country.flag}</div>
                                <div className="country-title-group">
                                    <h3 className="country-name">{country.name}</h3>
                                    <p className="country-capital">
                                        <MapPin size={14} />
                                        {country.capital}
                                    </p>
                                </div>
                            </div>

                            <p className="country-description">{country.description}</p>

                            <div className="country-details">
                                <div className="country-detail-item">
                                    <Briefcase size={16} />
                                    <div>
                                        <span className="country-detail-label">Opportunities:</span>
                                        <span className="country-detail-value">{country.opportunities}</span>
                                    </div>
                                </div>

                                <div className="country-detail-item">
                                    <DollarSign size={16} />
                                    <div>
                                        <span className="country-detail-label">Average Salary:</span>
                                        <span className="country-detail-value">{country.averageSalary}</span>
                                    </div>
                                </div>

                                <div className="country-detail-item">
                                    <Users size={16} />
                                    <div>
                                        <span className="country-detail-label">Active Jobs:</span>
                                        <span className="country-detail-value">{country.jobCount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="country-popular-cities">
                                <span className="popular-cities-label">Popular Cities:</span>
                                <div className="cities-tags">
                                    {country.popularCities.map((city, idx) => (
                                        <span key={idx} className="city-tag">{city}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="country-visa-info">
                                <span className="visa-info-text">{country.visaInfo}</span>
                            </div>

                            <Link to="/jobs" className="country-explore-btn">
                                Explore Jobs
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountriesGridSection;

