import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { albums, history, members } from '../data/content';
import { editorial } from './content';
import { ui } from './ui';

export type Language = 'pt' | 'en' | 'es';
export const languageNames: Record<Language, string> = { pt: 'Português', en: 'English', es: 'Español' };
const storageKey = 'central-malvada.language';
const isLanguage = (value: unknown): value is Language => value === 'pt' || value === 'en' || value === 'es';
function initialLanguage(): Language {
  try { const saved = localStorage.getItem(storageKey); return isLanguage(saved) ? saved : 'pt'; }
  catch { return 'pt'; }
}
export type Translate = (source: string, variables?: Record<string, string | number>) => string;
interface I18nValue { language: Language; setLanguage: (language: Language) => void; t: Translate; }
const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = useCallback<Translate>((source, variables = {}) => {
    const key = source.trim();
    const translated = language === 'pt' ? key : ui[key]?.[language] ?? key;
    const result = translated.replace(/\{(\w+)\}/g, (match, name: string) => Object.prototype.hasOwnProperty.call(variables, name) ? String(variables[name]) : match);
    return source.slice(0, source.indexOf(key)) + result + source.slice(source.indexOf(key) + key.length);
  }, [language]);
  useLayoutEffect(() => { document.documentElement.lang = language === 'pt' ? 'pt-BR' : language; }, [language]);
  useEffect(() => {
    try { localStorage.setItem(storageKey, language); } catch { /* O idioma continua disponível se o navegador bloquear o armazenamento. */ }
  }, [language]);
  useEffect(() => {
    const sync = (event: StorageEvent) => { if (event.key === storageKey) setLanguage(isLanguage(event.newValue) ? event.newValue : 'pt'); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n requires I18nProvider');
  return context;
}
export function useContent() {
  const { language } = useI18n();
  return useMemo(() => {
    if (language === 'pt') return { members, history, albums };
    const copy = editorial[language];
    return {
      members: members.map(member => ({ ...member, ...copy.members[member.id] })),
      history: history.map(era => ({ ...era, ...copy.history[era.period] })),
      albums: albums.map(album => ({ ...album, ...copy.albums[album.id] })),
    };
  }, [language]);
}
