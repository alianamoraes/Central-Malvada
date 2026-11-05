import { useI18n } from "../i18n/I18nProvider";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Page } from "../routing";
import LanguageSwitcher from "./LanguageSwitcher";
const navigation: {
  page: Page;
  label: string;
}[] = [{
  page: "banda",
  label: "A banda"
}, {
  page: "integrantes",
  label: "Integrantes"
}, {
  page: "discografia",
  label: "Discos"
}, {
  page: "agenda",
  label: "Agenda"
}, {
  page: "contato",
  label: "Contato"
}];
export default function Header({
  page
}: {
  page: Page;
}) {
  const {
    t,
    language
  } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [page, language]);
  useEffect(() => {
    const click = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = matchMedia("(min-width: 801px)");
    const resize = () => setOpen(false);
    document.addEventListener("pointerdown", click);
    document.addEventListener("keydown", key);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", click);
      document.removeEventListener("keydown", key);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  return <>
    <a className="skip-link" href="#conteudo" onClick={event => {
      event.preventDefault();
      document.getElementById("conteudo")?.focus();
      document.getElementById("conteudo")?.scrollIntoView();
    }}>{t("Pular para o conteúdo")}</a>
    <header className="global-header" ref={ref}>
      <a className="global-brand" href="#/inicio" aria-label={t("Central Malvada — início")}>CM<span aria-hidden="true">✳</span></a>
      <span className="header-tagline">{t("HARD ROCK BRASILEIRO. SEM FRONTEIRAS.")}</span>

      <nav className={`navigation global-nav${open ? " is-open" : ""}`} id="menu" aria-label={t("Menu principal")}>
        {navigation.map(link => <a key={link.page} href={`#/${link.page}`} aria-current={page === link.page ? "page" : undefined} onClick={() => setOpen(false)}>{t(link.label)}{link.page === "contato" && <span aria-hidden="true"> ↗</span>}</a>)}
      </nav>
      <div className="header-actions"><LanguageSwitcher /><button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(value => !value)}><span>{t(open ? "FECHAR" : "MENU")}</span>{open ? <X size={20} strokeWidth={1} aria-hidden="true" /> : <Menu size={20} strokeWidth={1} aria-hidden="true" />}</button></div>
    </header>
  </>;
}
