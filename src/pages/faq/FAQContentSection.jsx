import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQContentSection.css';

const FAQContentSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            category: 'General Information',
            questions: [
                {
                    question: 'What is MUB Connect?',
                    answer: 'MUB Connect is a licensed employment agency that connects Ethiopian professionals with quality overseas employment opportunities, primarily in Gulf countries. We provide comprehensive support from application to deployment and beyond.'
                },
                {
                    question: 'Which countries do you serve?',
                    answer: 'We facilitate employment opportunities in Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman. Each country offers unique opportunities across various sectors including healthcare, hospitality, construction, and domestic services.'
                },
                {
                    question: 'Are your services free for applicants?',
                    answer: 'Our services are designed to support applicants throughout their journey. Please contact us directly to learn about our fee structure and what services are included.'
                }
            ]
        },
        {
            category: 'Application Process',
            questions: [
                {
                    question: 'How do I apply for overseas employment?',
                    answer: 'You can start by registering on our website. Complete your profile with personal information, qualifications, and preferences. Our team will review your application and contact you for the next steps.'
                },
                {
                    question: 'What documents do I need to apply?',
                    answer: 'Required documents typically include: valid passport, educational certificates, work experience certificates, medical certificate, passport-sized photos, and any relevant professional licenses. Specific requirements may vary by country and job type.'
                },
                {
                    question: 'How long does the application process take?',
                    answer: 'The timeline varies depending on the job position, country requirements, and visa processing times. Typically, the process can take anywhere from 2-6 months from application to deployment. Our team will keep you informed throughout the process.'
                },
                {
                    question: 'What happens after I submit my application?',
                    answer: 'After submission, our team will review your profile, conduct initial screening, and may schedule an interview. If selected, we will match you with suitable opportunities, assist with contract negotiation, and guide you through visa processing and pre-deployment preparation.'
                }
            ]
        },
        {
            category: 'Employment & Contracts',
            questions: [
                {
                    question: 'What types of jobs are available?',
                    answer: 'We offer opportunities across various sectors including healthcare (nurses, healthcare aides), hospitality (hotel staff, restaurant workers), construction, domestic services (housekeepers, nannies, drivers), and more. Job availability varies by country and employer needs.'
                },
                {
                    question: 'What are typical salary ranges?',
                    answer: 'Salary ranges vary significantly by country, job type, and experience level. Generally, salaries range from $250-$1000+ per month depending on the position. Specific salary information is provided when matching with opportunities.'
                },
                {
                    question: 'What benefits are typically included?',
                    answer: 'Benefits vary by employer and country but often include: accommodation (or housing allowance), medical insurance, transportation, annual leave, and sometimes food allowance. Specific benefits are detailed in your employment contract.'
                },
                {
                    question: 'Can I choose which country I want to work in?',
                    answer: 'Yes, you can indicate your country preferences during registration. We will do our best to match you with opportunities in your preferred countries, though availability depends on current job openings and employer requirements.'
                }
            ]
        },
        {
            category: 'Visa & Documentation',
            questions: [
                {
                    question: 'Who handles visa processing?',
                    answer: 'We assist with the visa application process and coordinate with relevant authorities. However, visa approval is ultimately determined by the destination country\'s immigration authorities. We guide you through all required documentation and procedures.'
                },
                {
                    question: 'What visa types are available?',
                    answer: 'Most employment opportunities require work visas or residence permits specific to the destination country. The type of visa depends on the job category, contract duration, and country regulations. We provide detailed information about visa requirements for each opportunity.'
                },
                {
                    question: 'How long are work visas valid?',
                    answer: 'Work visa validity varies by country and contract terms. Typically, initial work visas are valid for 1-2 years and can be renewed based on contract continuation. Specific validity periods are outlined in your employment contract.'
                }
            ]
        },
        {
            category: 'Training & Preparation',
            questions: [
                {
                    question: 'Do you provide training before deployment?',
                    answer: 'Yes, we offer pre-deployment training programs that include cultural orientation, basic language skills (Arabic/English as needed), job-specific training, health and safety guidelines, and information about your destination country.'
                },
                {
                    question: 'What should I expect during pre-deployment training?',
                    answer: 'Training typically covers: understanding the destination country\'s culture and customs, basic communication skills, workplace expectations, legal rights and responsibilities, health and safety protocols, and practical tips for living abroad.'
                }
            ]
        },
        {
            category: 'Support & Assistance',
            questions: [
                {
                    question: 'What support do you provide after deployment?',
                    answer: 'We provide ongoing support including 24/7 emergency hotline, assistance with problem resolution, regular welfare checks, and career counseling. Our support team remains available to help you throughout your employment period.'
                },
                {
                    question: 'What if I have problems with my employer?',
                    answer: 'If you encounter any issues, contact our support team immediately. We have dispute resolution procedures and can assist with contract-related matters, workplace concerns, or other challenges you may face.'
                },
                {
                    question: 'Can I change jobs while abroad?',
                    answer: 'Job changes depend on your contract terms and local regulations. Some contracts may have specific terms regarding job changes. We recommend discussing any concerns with our support team before making decisions.'
                }
            ]
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
                    <h3 className="faq-cta-title">Still have questions?</h3>
                    <p className="faq-cta-text">
                        If you couldn't find the answer you're looking for, please don't hesitate to contact us.
                    </p>
                    <a href="/contact" className="faq-cta-button">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQContentSection;

