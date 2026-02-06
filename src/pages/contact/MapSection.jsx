import { useTranslations } from '../../hooks/useTranslations';
import './MapSection.css';

const MapSection = () => {
    const { t } = useTranslations();

    return (
        <section className="map-section">
            <div className="map-container">
                <h2 className="map-title">{t('contact.map.title')}</h2>
                <div className="map-frame-container">
                    <iframe
                        title="MUB Agency Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11589434856!2d38.69830560802773!3d9.022736202422002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1707248354785!5m2!1sen!2sus"
                        className="map-iframe"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
