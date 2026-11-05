import { useI18n } from "./i18n/I18nProvider";
import { useLayoutEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { routeTitles, usePage } from "./routing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Band from "./pages/Band";
import Members from "./pages/Members";
import Discography from "./pages/Discography";
import Agenda from "./pages/Agenda";
import Contact from "./pages/Contact";
const pages = {
  inicio: Home,
  banda: Band,
  integrantes: Members,
  discografia: Discography,
  agenda: Agenda,
  contato: Contact
};
export default function App() {
  const {
    t
  } = useI18n();
  const page = usePage();
  const main = useRef<HTMLElement>(null);
  const previousPage = useRef(page);
  const Content = pages[page];
  useLayoutEffect(() => {
    document.body.dataset.route = page;
    document.title = t(routeTitles[page]);
    document.querySelector("meta[name=\"description\"]")?.setAttribute("content", t("Central Malvada: fã-clube feito por fãs da banda brasileira de hard rock Malvada. Formação, história, discos e canais oficiais. Não representamos a banda."));
    if (previousPage.current !== page) {
      const previous = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      main.current?.focus({
        preventScroll: true
      });
      document.documentElement.style.scrollBehavior = previous;
    }
    previousPage.current = page;
  }, [page, t]);
  function navigate(event: MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>("a[href^=\"#/\"]");
    if (!anchor || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    // Atualiza o fragmento no próprio documento, inclusive quando o site está incorporado.
    const hash = anchor.getAttribute("href")!;
    if (location.hash !== hash) location.hash = hash;else window.scrollTo({
      top: 0,
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
    });
  }
  return <div onClick={navigate}>
    <Header page={page} />
    <main id="conteudo" ref={main} tabIndex={-1}>
      {page === "inicio" ? <Content /> : <div data-page={page} className="inner-page" key={page}>
        <h1 className="sr-only">{t(routeTitles[page])}</h1>
        <div className="page-topline"><a href="#/inicio">{t("← INÍCIO")}</a><span>CENTRAL MALVADA / {t(page.toUpperCase())}</span></div><Content />
      </div>}
    </main>
    <Footer />
  </div>;
}
