import { useI18n, useContent } from "../i18n/I18nProvider";
import { useState } from "react";
import type { MemberId } from "../data/content";
import MemberModal from "../components/MemberModal";
export default function Members() {
  const {
    members
  } = useContent();
  const {
    t
  } = useI18n();
  const [selectedId, setSelectedId] = useState<MemberId | null>(null);
  const selected = members.find(member => member.id === selectedId) ?? null;
  return <section className="section members" id="integrantes" aria-labelledby="members-title">
    <div className="template-section-heading"><div className="staggered-title"><h2 id="members-title">{t("A FORMAÇÃO")}<span>{t("ATUAL.")}</span></h2></div><div className="heading-description"><span className="sound-mark" aria-hidden="true">▏▎▌▎▏</span><p>{t("Quatro histórias que se encontram no peso. Bruna, Rafaela, Cyz e Juliana dão voz, identidade e presença à nova fase da Malvada.")}</p><button className="subtle-link" type="button" onClick={() => document.getElementById("member-grid")?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
        })}>{t("Conheça as integrantes ")}<span aria-hidden="true">↗</span></button></div></div>
    <div className="member-grid" id="member-grid">{members.map(member => <article className="member-card" key={member.id} data-member-id={member.id}>
      <div className="member-photo" data-portrait={member.id}><img src={member.image} alt={member.imageAlt} loading="lazy" decoding="async" width={419} height={629} /></div>
      <div className="member-meta"><span className="member-role">{member.role.toUpperCase()}</span>{member.status && <span>{member.status}</span>}</div>
      <h3>{member.name}</h3><p className="member-summary">{member.summary}</p>
      <button className="member-button" type="button" data-bio={member.id} aria-haspopup="dialog" aria-label={t("Ler biografia de {name}", {
          name: member.name
        })} onClick={() => setSelectedId(member.id)}>{t("CONHEÇA A HISTÓRIA ")}<span aria-hidden="true">↗</span></button>
    </article>)}</div>
    <p className="formation-note"><span className="red-rule" aria-hidden="true" />{t("NOVA FORMAÇÃO ")}<span>{t("Cyz Mendes nos vocais. Indira Castillo permanece na história e nos créditos da formação anterior.")}</span></p>
    {selected && <MemberModal member={selected} onClose={() => setSelectedId(null)} />}
  </section>;
}
