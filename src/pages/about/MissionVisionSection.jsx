import { useTranslations } from '../../hooks/useTranslations';
import './MissionVisionSection.css';

const MissionVisionSection = () => {
    const { t } = useTranslations();

    return (
        <section className="mission-vision-section">
            <div className="mission-vision-container">
                <div className="mission-vision-grid">
                    <div className="mission-vision-card">
                        <h2 className="mission-vision-title">{t('about.mission.title')}</h2>
                        <p className="mission-vision-text">
                            {t('about.mission.description')}
                        </p>
                    </div>
                    <div className="mission-vision-card">
                        <h2 className="mission-vision-title">{t('about.vision.title')}</h2>
                        <p className="mission-vision-text">
                            {t('about.vision.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;


