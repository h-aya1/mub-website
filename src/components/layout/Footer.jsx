import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <div className="footer-logo-icon">
                            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 4L20 12L28 14L20 16L16 24L12 16L4 14L12 12L16 4Z" fill="url(#footerLogoGradient)"/>
                                <defs>
                                    <linearGradient id="footerLogoGradient" x1="4" y1="4" x2="28" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#86efac"/>
                                        <stop offset="1" stopColor="#166534"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span>MUB Connect</span>
                    </Link>
                    <p>
                        Bridging Ethiopian dreams with Gulf opportunities through transparent, culturally-sensitive employment placement services.
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
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Browse Jobs</Link></li>
                        <li><Link to="/auth-choice">Register</Link></li>
                        <li><Link to="/track">Track Application</Link></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li><Link to="/cultural-prep">Cultural Preparation</Link></li>
                        <li><Link to="/success-stories">Success Stories</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/support">Support</Link></li>
                    </ul>
                </div>

                <div className="footer-col certifications-col">
                    <h4>CERTIFICATIONS</h4>
                    <div className="certification-buttons">
                        <button className="cert-btn">Ethiopian Ministry of Labor</button>
                        <button className="cert-btn">Gulf Cooperation Council Certified</button>
                    </div>
                    <div className="support-badge">
                        <span className="support-text">24/7 Support</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MUB Connect. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
