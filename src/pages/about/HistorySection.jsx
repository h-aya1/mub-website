import { useTranslations } from '../../hooks/useTranslations';
import './HistorySection.css';

const HistorySection = () => {
    const { t } = useTranslations();

    const milestones = [
        {
            year: "2010",
            title: t('about.history.founded'),
            description: t('about.history.foundedDesc'),
        },
        {
            year: "2015",
            title: t('about.history.expansion'),
            description: t('about.history.expansionDesc'),
        },
        {
            year: "2020",
            title: t('about.history.digital'),
            description: t('about.history.digitalDesc'),
        },
        {
            year: "2025",
            title: t('about.history.today'),
            description: t('about.history.todayDesc'),
            isLast: true,
        },
    ];

    return (
        <section className="history-section">
            <div className="history-container">
                <h2 className="history-title">{t('about.history.title')}</h2>
                <div className="history-timeline">
                    {milestones.map((milestone, i) => (
                        <div key={i} className="history-item">
                            <div className="history-item-indicator">
                                <div className="history-year-badge">{milestone.year}</div>
                                {!milestone.isLast && <div className="history-connector" />}
                            </div>
                            <div className="history-item-content">
                                <h3 className="history-item-title">{milestone.title}</h3>
                                <p className="history-item-description">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;


