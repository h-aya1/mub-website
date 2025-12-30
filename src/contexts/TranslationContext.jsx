import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get language from localStorage or default to 'en'
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        // Save language preference to localStorage
        localStorage.setItem('language', language);
        // Update document direction for RTL languages if needed
        document.documentElement.lang = language;
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const value = {
        language,
        changeLanguage,
    };

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};

