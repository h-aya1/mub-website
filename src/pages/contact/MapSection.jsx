import React from 'react';
import { MapPin } from 'lucide-react';
import './MapSection.css';

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="map-container">
                <h2 className="map-title">Visit Our Office</h2>
                <div className="map-placeholder">
                    <div className="map-placeholder-content">
                        <MapPin className="map-placeholder-icon" size={48} />
                        <p className="map-placeholder-text">Google Map Placeholder</p>
                        <p className="map-placeholder-subtext">Insert Google Maps embed here</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;


