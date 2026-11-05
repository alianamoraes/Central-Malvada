import { useI18n, useContent } from "../i18n/I18nProvider";
import { Instagram, ArrowUpRight } from "lucide-react";
import { officialLinks, bandLogo } from "../data/content";
export default function Band() {
  const {
    history,
    members
  } = useContent();
  const {
    t
  } = useI18n();
  return <>
    <section className="band-overview" aria-labelledby="band-overview-title">
      <div className="grid gap-10 lg:grid-cols-2">
        <div><p className="eyebrow">{t("A BANDA / OS CANAIS SÃO DELAS.")}</p><img className="band-wordmark" src={bandLogo} alt={t("Malvada — novo logo da banda")} width={1280} height={428} /><h2 id="band-overview-title">{t("DO BRASIL")}<br />{t("PARA O MUNDO.")}</h2><p className="band-description">{t("Hard e heavy rock brasileiro, com riffs marcantes e uma trajetória que começou em 2020, em São Paulo. A formação atual reúne Bruna Tsuruda, Rafaela Reoli, Cyz Mendes e Juliana Salgado.")}</p></div>
        <div className="flex flex-col justify-between gap-8">
          <dl className="band-facts grid grid-cols-2 gap-x-8 gap-y-6"><div><dt>{t("ORIGEM")}</dt><dd>{t("São Paulo, Brasil")}</dd></div><div><dt>{t("ATIVIDADE")}</dt><dd>{t("Desde 2020")}</dd></div><div><dt>{t("SONORIDADE")}</dt><dd>Hard rock / Heavy rock</dd></div><div><dt>{t("ÁLBUNS DE ESTÚDIO")}</dt><dd>A Noite Vai Ferver (2021)<br />Malvada (2025)</dd></div></dl>
          <a className="band-instagram" href={officialLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={26} strokeWidth={1.4} aria-hidden="true" /><span><small>{t("INSTAGRAM OFICIAL DA BANDA")}</small><strong>@malvadabanda</strong><span>{t("Publicações e comunicados diretamente da Malvada.")}</span></span><ArrowUpRight size={27} strokeWidth={1.2} aria-hidden="true" /><span className="sr-only">{t("Abre em nova aba")}</span></a>
        </div>
      </div>
      <div className="band-lineup grid grid-cols-2 gap-5 lg:grid-cols-4">{members.map(member => <a href="#/integrantes" key={member.id} className="band-lineup-item" data-member-id={member.id}><img src={member.image} alt={member.imageAlt} loading="lazy" width={64} height={86} /><span><strong>{member.name}</strong><small>{member.role}</small></span><ArrowUpRight size={15} strokeWidth={1.2} aria-hidden="true" /></a>)}</div>
      <p className="band-source-note">{t("Informações reunidas pelo fã-clube a partir do material fornecido à Central. Para comunicados oficiais e assuntos profissionais, consulte os canais da banda.")}</p>
    </section>
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="section-heading"><p className="eyebrow">{t("DA QUARENTENA AOS GRANDES PALCOS")}</p><h2 id="about-title">{t("NOSSA")}<br />{t("HISTÓRIA.")}</h2></div>
      <div className="about-intro"><p className="large-copy">{t("Começou à distância.")}<br />{t("Foi longe demais para parar.")}</p><p className="muted">{t("De um grupo de WhatsApp em São Paulo à estrada na Europa. Uma trajetória de riffs, reinvenção e presença.")}</p></div>
      <div className="history" id="history">{history.map(era => <article className="history-row" key={era.period}><span className="history-period">{era.period}</span><h3 className="history-title">{era.title}</h3><div className="history-copy">{era.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></article>)}</div>
    </section>
  </>;
}
