// getDefaultLanguage.ts

import { Languages } from '@/constants/Languages';

export function getDefaultLanguage(): string {
  // Helper to match against Languages keys
  const matchLanguage = (lang: string): string | null => {
    if (Languages[lang]) return lang;
    // Try base language (e.g., 'zh' from 'zh-CN')
    const base = lang.split('-')[0];
    if (Languages[base]) return base;
    return null;
  };

  // Web
  if (typeof navigator !== 'undefined' && navigator.language) {
    // Try full code first, then base
    const found = matchLanguage(navigator.language) ||
                  (navigator.languages && navigator.languages
                    .map(matchLanguage)
                    .find(Boolean));
    if (found) return found;
  }

  // React Native
  try {
    // @ts-ignore
    const RNLocalize = require('react-native-localize');
    const locales = RNLocalize.getLocales();
    if (locales && locales.length > 0) {
      const found = matchLanguage(locales[0].languageTag) ||
                    matchLanguage(locales[0].languageCode);
      if (found) return found;
    }
  } catch (e) {
    // ignore
  }

  // Fallback
  return 'en';
}
