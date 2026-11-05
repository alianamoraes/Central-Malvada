import { ChevronDown, Globe2 } from "lucide-react";
import { languageNames, useI18n } from "../i18n/I18nProvider";
import type { Language } from "../i18n/I18nProvider";
export default function LanguageSwitcher() {
  const {
    language,
    setLanguage,
    t
  } = useI18n();
  return <div className="language-switcher">
    <Globe2 size={15} strokeWidth={1.3} aria-hidden="true" />
    <label className="sr-only" htmlFor="site-language">{t("Idioma do site")}</label>
    <select id="site-language" value={language} onChange={event => setLanguage(event.currentTarget.value as Language)}>
      <option value="pt" lang="pt-BR">Português</option>
      <option value="en" lang="en">English</option>
      <option value="es" lang="es">Español</option>
    </select>
    <ChevronDown size={11} strokeWidth={1.3} aria-hidden="true" />
    <span className="sr-only" role="status" aria-live="polite">{t("Idioma selecionado: {language}", {
        language: languageNames[language]
      })}</span>
  </div>;
}
