import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useTranslations } from '../../hooks/useTranslations';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslations();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <div className="footer-logo-icon">
                            <img src={logo} alt="MUB Connect Logo" className="footer-logo-img" />
                        </div>
                        <span>MUB Connect</span>
                    </Link>
                    <p>
                        {t('footer.description')}
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4>{t('footer.quickLinks')}</h4>
                    <ul>
                        <li><Link to="/">{t('nav.home')}</Link></li>
                        <li><Link to="/jobs">{t('nav.jobs')}</Link></li>
                        <li><Link to="/register-type">{t('footer.register')}</Link></li>
                        <li><Link to="/track">{t('footer.trackApp')}</Link></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4>{t('footer.resources')}</h4>
                    <ul>
                        <li><Link to="/cultural-prep">{t('footer.culturalPre')}</Link></li>
                        <li><Link to="/success-stories">{t('footer.successStories')}</Link></li>
                        <li><Link to="/faq">{t('nav.faq')}</Link></li>
                        <li><Link to="/support">{t('footer.support')}</Link></li>
                    </ul>
                </div>

                <div className="footer-col certifications-col">
                    <h4>{t('footer.certifications')}</h4>
                    <div className="certification-buttons">
                        <button className="cert-btn">{t('footer.ministry')}</button>
                        <button className="cert-btn">{t('footer.gcc')}</button>
                    </div>
                    <div className="support-badge">
                        <span className="support-text">{t('footer.support247')}</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MUB Connect. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
