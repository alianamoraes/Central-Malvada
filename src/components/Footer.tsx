import { useI18n } from "../i18n/I18nProvider";
import { officialLinks } from "../data/content";
export default function Footer() {
  const {
    t
  } = useI18n();
  return <footer className="global-footer">
    <a className="footer-cm" href="#/inicio">CENTRAL<br />MALVADA<span aria-hidden="true">✳</span></a>
    <div className="footer-pages"><a href="#/banda">{t("A BANDA")}</a><a href="#/integrantes">{t("INTEGRANTES")}</a><a href="#/discografia">{t("DISCOGRAFIA")}</a><a href="#/agenda">{t("AGENDA")}</a><a href="#/contato">{t("CONTATO DO FÃ-CLUBE")}</a></div>
    <div className="footer-official"><p>{t("REDES OFICIAIS DA BANDA")}</p><a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM ↗</a><a href={officialLinks.youtube} target="_blank" rel="noopener noreferrer">YOUTUBE ↗</a><a href={officialLinks.spotify} target="_blank" rel="noopener noreferrer">SPOTIFY ↗</a></div>
    <div className="footer-fan-notice">{t("Somos um fã-clube feito por fãs. Não representamos a banda, sua assessoria ou sua equipe de contratação. ")}<a href="#/contato">{t("Entenda nossos canais ↗")}</a></div>
    <div className="global-footer-bottom"><div className="footer-copyright"><span>© {new Date().getFullYear()} CENTRAL MALVADA</span><span className="footer-development">{t("Site desenvolvido por Aliana Moraes e Bruna Alves.")}</span></div><span>{t("FOTO E TEXTOS FORNECIDOS PELA CENTRAL.")}</span><span>{t("SITE EM CONSTRUÇÃO")}</span></div>
  </footer>;
}
