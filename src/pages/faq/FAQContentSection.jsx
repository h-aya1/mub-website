import { useState } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQContentSection.css';

const FAQContentSection = () => {
    const { t } = useTranslations();
    const [openIndex, setOpenIndex] = useState(null);

    const getQuestions = (categoryKey) => {
        const items = t(`faq.categories.${categoryKey}.items`, { returnObjects: true });
        if (!items) return [];
        return Object.values(items).map(item => ({
            question: item.q,
            answer: item.a
        }));
    };

    const faqCategories = [
        {
            category: t('faq.categories.general.title'),
            questions: getQuestions('general')
        },
        {
            category: t('faq.categories.process.title'),
            questions: getQuestions('process')
        },
        {
            category: t('faq.categories.employment.title'),
            questions: getQuestions('employment')
        },
        {
            category: t('faq.categories.visa.title'),
            questions: getQuestions('visa')
        },
        {
            category: t('faq.categories.training.title'),
            questions: getQuestions('training')
        },
        {
            category: t('faq.categories.support.title'),
            questions: getQuestions('support')
        }
    ];

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-content-section">
            <div className="faq-content-container">
                <div className="faq-categories">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="faq-category">
                            <h2 className="faq-category-title">
                                <HelpCircle size={20} />
                                {category.category}
                            </h2>
                            <div className="faq-questions">
                                {category.questions.map((item, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openIndex === index;
                                    return (
                                        <div key={questionIndex} className="faq-item">
                                            <button
                                                className={`faq-question ${isOpen ? 'open' : ''}`}
                                                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                            >
                                                <span className="faq-question-text">{item.question}</span>
                                                <ChevronDown
                                                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                                                    size={20}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="faq-answer">
                                                    <p>{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <h3 className="faq-cta-title">{t('faq.cta.title')}</h3>
                    <p className="faq-cta-text">
                        {t('faq.cta.text')}
                    </p>
                    <a href="/contact" className="faq-cta-button">
                        {t('faq.cta.button')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQContentSection;

