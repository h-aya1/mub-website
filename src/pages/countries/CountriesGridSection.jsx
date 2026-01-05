import { useTranslations } from '../../hooks/useTranslations';
import { MapPin, DollarSign, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CountriesGridSection.css';

const CountriesGridSection = () => {
    const { t } = useTranslations();

    const countries = [
        {
            id: 1,
            name: t('countries.list.saudi.name'),
            flag: '🇸🇦',
            capital: t('countries.list.saudi.capital'),
            description: t('countries.list.saudi.description'),
            opportunities: t('countries.list.saudi.opportunities'),
            averageSalary: '$300-800/month',
            visaInfo: t('countries.list.saudi.visaInfo'),
            jobCount: '500+',
            popularCities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca']
        },
        {
            id: 2,
            name: t('countries.list.uae.name'),
            flag: '🇦🇪',
            capital: t('countries.list.uae.capital'),
            description: t('countries.list.uae.description'),
            opportunities: t('countries.list.uae.opportunities'),
            averageSalary: '$400-900/month',
            visaInfo: t('countries.list.uae.visaInfo'),
            jobCount: '400+',
            popularCities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain']
        },
        {
            id: 3,
            name: t('countries.list.qatar.name'),
            flag: '🇶🇦',
            capital: t('countries.list.qatar.capital'),
            description: t('countries.list.qatar.description'),
            opportunities: t('countries.list.qatar.opportunities'),
            averageSalary: '$350-850/month',
            visaInfo: t('countries.list.qatar.visaInfo'),
            jobCount: '200+',
            popularCities: ['Doha', 'Al Rayyan', 'Al Wakrah']
        },
        {
            id: 4,
            name: t('countries.list.kuwait.name'),
            flag: '🇰🇼',
            capital: t('countries.list.kuwait.capital'),
            description: t('countries.list.kuwait.description'),
            opportunities: t('countries.list.kuwait.opportunities'),
            averageSalary: '$300-700/month',
            visaInfo: t('countries.list.kuwait.visaInfo'),
            jobCount: '150+',
            popularCities: ['Kuwait City', 'Al Ahmadi', 'Hawalli']
        },
        {
            id: 5,
            name: t('countries.list.bahrain.name'),
            flag: '🇧🇭',
            capital: t('countries.list.bahrain.capital'),
            description: t('countries.list.bahrain.description'),
            opportunities: t('countries.list.bahrain.opportunities'),
            averageSalary: '$280-650/month',
            visaInfo: t('countries.list.bahrain.visaInfo'),
            jobCount: '100+',
            popularCities: ['Manama', 'Riffa', 'Muharraq']
        },
        {
            id: 6,
            name: t('countries.list.oman.name'),
            flag: '🇴🇲',
            capital: t('countries.list.oman.capital'),
            description: t('countries.list.oman.description'),
            opportunities: t('countries.list.oman.opportunities'),
            averageSalary: '$250-600/month',
            visaInfo: t('countries.list.oman.visaInfo'),
            jobCount: '80+',
            popularCities: ['Muscat', 'Salalah', 'Sohar']
        }
    ];

    return (
        <section className="countries-grid-section">
            <div className="countries-grid-container">
                <div className="countries-grid-header">
                    <h2 className="countries-grid-title">{t('countries.grid.title')}</h2>
                    <p className="countries-grid-subtitle">
                        {t('countries.grid.subtitle')}
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
                                        <span className="country-detail-label">{t('countries.grid.labels.opportunities')}</span>
                                        <span className="country-detail-value">{country.opportunities}</span>
                                    </div>
                                </div>

                                <div className="country-detail-item">
                                    <DollarSign size={16} />
                                    <div>
                                        <span className="country-detail-label">{t('countries.grid.labels.averageSalary')}</span>
                                        <span className="country-detail-value">{country.averageSalary}</span>
                                    </div>
                                </div>

                                <div className="country-detail-item">
                                    <Users size={16} />
                                    <div>
                                        <span className="country-detail-label">{t('countries.grid.labels.activeJobs')}</span>
                                        <span className="country-detail-value">{country.jobCount}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="country-popular-cities">
                                <span className="popular-cities-label">{t('countries.grid.labels.popularCities')}</span>
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
                                {t('countries.grid.labels.explore')}
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

