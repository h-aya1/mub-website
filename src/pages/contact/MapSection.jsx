import { useTranslations } from '../../hooks/useTranslations';
import { MapPin } from 'lucide-react';
import './MapSection.css';

const MapSection = () => {
    const { t } = useTranslations();

    return (
        <section className="map-section">
            <div className="map-container">
                <h2 className="map-title">{t('contact.map.title')}</h2>
                <div className="map-placeholder">
                    <div className="map-placeholder-content">
                        <MapPin className="map-placeholder-icon" size={48} />
                        <p className="map-placeholder-text">{t('contact.map.placeholder')}</p>
                        <p className="map-placeholder-subtext">{t('contact.map.placeholderDesc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;


