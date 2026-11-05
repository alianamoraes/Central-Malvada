import { useI18n } from "../i18n/I18nProvider";
export default function Agenda() {
  const {
    t
  } = useI18n();
  return <section className="section agenda" id="agenda" aria-labelledby="agenda-title">
      <div className="section-heading horizontal"><div><p className="eyebrow">{t("O LUGAR ONDE TUDO ACONTECE")}</p><h2 id="agenda-title">{t("NA")}<br />{t("ESTRADA.")}</h2></div><p className="section-note">{t("Palcos que fazem história.")}<br />{t("Encontros que ficam.")}</p></div>
      <div className="agenda-columns"><div><h3 className="small-heading">{t("MARCOS DA FORMAÇÃO")}</h3><ul className="milestone-list"><li><span className="event-year">2026</span><div><h4>Michael Schenker</h4><p>{t("Eurotour · Alemanha, Holanda e França")}</p></div><span className="event-type">{t("TURNÊ")}</span></li><li><span className="event-year">2026</span><div><h4>Bangers Open Air</h4><p>{t("Brasil")}</p></div><span className="event-type">{t("FESTIVAL")}</span></li><li><span className="event-year">2026</span><div><h4>Rock in Rio</h4><p>{t("Palco Sunset · com Day Limns")}</p></div><span className="event-type">{t("FESTIVAL")}</span></li></ul></div>
      <div className="farewell"><div className="small-heading-row"><h3 className="small-heading">{t("DESPEDIDA DA FORMAÇÃO ANTERIOR")}</h3><span className="archive-tag">{t("ARQUIVO · OUT 2026")}</span></div><p className="farewell-intro">{t("Registro das datas anunciadas para a despedida da formação com Indira Castillo.")}</p><article className="show"><div className="show-date"><strong>23</strong><span>{t("OUT / 2026")}</span></div><div><h4>Goiânia <span>GO</span></h4><p>{t("Sexta-feira")}</p></div><span className="show-archive">{t("DATA PASSADA")}</span></article><article className="show"><div className="show-date"><strong>24</strong><span>{t("OUT / 2026")}</span></div><div><h4>Brasília <span>DF</span></h4><p>{t("Sábado")}</p></div><span className="show-archive">{t("DATA PASSADA")}</span></article><p className="agenda-note">{t("Datas de outubro de 2026 mantidas como registro da agenda anunciada. Novas apresentações serão publicadas por aqui.")}</p></div></div>
    </section>;
}
