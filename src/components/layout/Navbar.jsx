import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Info, Settings, Mail, Globe, MapPin, HelpCircle } from 'lucide-react';
import { useTranslation } from '../../contexts/TranslationContext';
import { useTranslations } from '../../hooks/useTranslations';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const location = useLocation();
    const { language, changeLanguage } = useTranslation();
    const { t } = useTranslations();
    const languageMenuRef = useRef(null);

    // Handle click outside to close language menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
                setShowLanguageMenu(false);
            }
        };

        if (showLanguageMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLanguageMenu]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">
                        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Blue base */}
                            <rect x="2" y="22" width="36" height="6" rx="3" fill="var(--primary-blue)" />
                            {/* Golden-yellow arch */}
                            <path d="M6 22 Q20 6 34 22" stroke="var(--primary-gold)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Three dots on top of arch */}
                            <circle cx="12" cy="12" r="2.5" fill="var(--primary-blue)" />
                            <circle cx="20" cy="8" r="2.5" fill="var(--primary-gold)" />
                            <circle cx="28" cy="12" r="2.5" fill="var(--primary-blue-light)" />
                        </svg>
                    </div>
                    <div className="logo-text-container">
                        <span className="logo-text">MUB Connect</span>
                        <span className="logo-tagline">Empowering Workers, Bridging Worlds</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-menu-desktop">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        <Home size={18} />
                        <span>{t('nav.home')}</span>
                    </Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                        <Info size={18} />
                        <span>{t('nav.about')}</span>
                    </Link>
                    <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                        <Settings size={18} />
                        <span>{t('nav.services')}</span>
                    </Link>
                    <Link to="/jobs" className={`nav-link ${location.pathname === '/jobs' ? 'active' : ''}`}>
                        <Briefcase size={18} />
                        <span>{t('nav.jobs')}</span>
                    </Link>
                    <Link to="/countries" className={`nav-link ${location.pathname === '/countries' ? 'active' : ''}`}>
                        <MapPin size={18} />
                        <span>{t('nav.countries')}</span>
                    </Link>
                    <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>
                        <HelpCircle size={18} />
                        <span>{t('nav.faq')}</span>
                    </Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Mail size={18} />
                        <span>{t('nav.contact')}</span>
                    </Link>
                </div>

                {/* Right Side Actions */}
                <div className="nav-actions">
                    {/* Language Toggle */}
                    <div
                        className="language-toggle-wrapper"
                        ref={languageMenuRef}
                    >
                        <button
                            className="language-toggle-button"
                            aria-label="Change language"
                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                        >
                            <Globe size={20} />
                            <span className="language-code">{language.toUpperCase()}</span>
                        </button>
                        {showLanguageMenu && (
                            <div className="language-menu">
                                <button
                                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                                    onClick={() => {
                                        changeLanguage('en');
                                        setShowLanguageMenu(false);
                                    }}
                                >
                                    <span>English</span>
                                    {language === 'en' && <span className="check">✓</span>}
                                </button>
                                <button
                                    className={`language-option ${language === 'am' ? 'active' : ''}`}
                                    onClick={() => {
                                        changeLanguage('am');
                                        setShowLanguageMenu(false);
                                    }}
                                >
                                    <span>አማርኛ</span>
                                    {language === 'am' && <span className="check">✓</span>}
                                </button>
                                <button
                                    className={`language-option ${language === 'om' ? 'active' : ''}`}
                                    onClick={() => {
                                        changeLanguage('om');
                                        setShowLanguageMenu(false);
                                    }}
                                >
                                    <span>Oromiffa</span>
                                    {language === 'om' && <span className="check">✓</span>}
                                </button>
                            </div>
                        )}
                    </div>

                    <Link to="/register-type" className="btn-primary-nav">
                        {t('nav.startJourney')}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    <Link to="/">
                        <Home size={18} />
                        <span>{t('nav.home')}</span>
                    </Link>
                    <Link to="/about">
                        <Info size={18} />
                        <span>{t('nav.about')}</span>
                    </Link>
                    <Link to="/services">
                        <Settings size={18} />
                        <span>{t('nav.services')}</span>
                    </Link>
                    <Link to="/jobs">
                        <Briefcase size={18} />
                        <span>{t('nav.jobs')}</span>
                    </Link>
                    <Link to="/countries">
                        <MapPin size={18} />
                        <span>{t('nav.countries')}</span>
                    </Link>
                    <Link to="/faq">
                        <HelpCircle size={18} />
                        <span>{t('nav.faq')}</span>
                    </Link>
                    <Link to="/contact">
                        <Mail size={18} />
                        <span>{t('nav.contact')}</span>
                    </Link>

                    {/* Mobile Language Selector */}
                    <div className="mobile-language-selector">
                        <label className="mobile-language-label">Language / ቋንቋ / Afaan</label>
                        <div className="mobile-language-buttons">
                            <button
                                className={`mobile-language-btn ${language === 'en' ? 'active' : ''}`}
                                onClick={() => {
                                    changeLanguage('en');
                                    setIsOpen(false);
                                }}
                            >
                                EN
                            </button>
                            <button
                                className={`mobile-language-btn ${language === 'am' ? 'active' : ''}`}
                                onClick={() => {
                                    changeLanguage('am');
                                    setIsOpen(false);
                                }}
                            >
                                አማ
                            </button>
                            <button
                                className={`mobile-language-btn ${language === 'om' ? 'active' : ''}`}
                                onClick={() => {
                                    changeLanguage('om');
                                    setIsOpen(false);
                                }}
                            >
                                OM
                            </button>
                        </div>
                    </div>

                    <Link to="/register-type" className="mobile-cta">{t('nav.startJourney')}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
