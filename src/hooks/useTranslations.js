import { useTranslation } from '../contexts/TranslationContext';
import { translations as enTranslations } from '../translations/en';
import { translations as amTranslations } from '../translations/am';
import { translations as omTranslations } from '../translations/om';

const translationMap = {
    en: enTranslations,
    am: amTranslations,
    om: omTranslations,
};

export const useTranslations = () => {
    const { language } = useTranslation();

    const t = (key, params = {}) => {
        const keys = key.split('.');
        let value = translationMap[language];

        for (const k of keys) {
            value = value?.[k];
        }

        // Fallback to English if translation not found
        if (!value) {
            let fallbackValue = enTranslations;
            for (const k of keys) {
                fallbackValue = fallbackValue?.[k];
            }
            value = fallbackValue || key;
        }

        // Handle string interpolation
        if (typeof value === 'string' && Object.keys(params).length > 0) {
            return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
                return params[paramKey] !== undefined ? params[paramKey] : match;
            });
        }

        return value || key;
    };

    return { t, language };
};

