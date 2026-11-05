import { useI18n } from "../i18n/I18nProvider";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Info, Instagram } from "lucide-react";
import { officialLinks } from "../data/content";
export default function Contact() {
  const {
    t
  } = useI18n();
  const [prepared, setPrepared] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);
  const draft = prepared ? `${t("Para: Central Malvada — fã-clube")}\n${t("De:")} ${prepared.name} <${prepared.email}>\n\n${prepared.message}` : "";
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    formRef.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach(field => field.setCustomValidity(""));
  }, [t]);
  const [copyStatus, setCopyStatus] = useState("");
  const preview = useRef<HTMLTextAreaElement>(null);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || message.length < 10) {
      const field = form.elements.namedItem(!name ? "name" : "message") as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(t(!name ? "Informe seu nome." : "Escreva pelo menos 10 caracteres, sem contar espaços nas pontas."));
      field.reportValidity();
      return;
    }
    setPrepared({
      name,
      email,
      message
    });
    setCopyStatus("");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Rascunho copiado. Nenhuma mensagem foi enviada.");
    } catch {
      preview.current?.focus();
      preview.current?.select();
      setCopyStatus("Selecione e copie o texto com Ctrl+C ou pelo menu do seu dispositivo.");
    }
  }
  return <>
    <aside className="fan-disclaimer" aria-labelledby="fan-disclaimer-title"><div className="flex items-center gap-3"><Info size={22} strokeWidth={1.4} aria-hidden="true" /><h2 id="fan-disclaimer-title">{t("SOMOS UM FÃ-CLUBE.")}</h2></div><p>{t("A Central Malvada é um espaço feito e administrado por fãs. ")}<strong>{t("Não somos a banda Malvada, sua assessoria, produtora ou equipe de agenciamento.")}</strong>{t(" Não falamos em nome das integrantes nem respondemos pela banda.")}</p><p>{t("Não intermediamos shows, cachês, contratos, ingressos ou parcerias comerciais da Malvada. Para assuntos profissionais, comunicados e contatos da banda, consulte os canais oficiais.")}</p><a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17} strokeWidth={1.4} aria-hidden="true" />{t(" IR PARA @MALVADABANDA ")}<ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" /><span className="sr-only">{t(" (abre em nova aba)")}</span></a></aside>
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-main"><p className="eyebrow">{t("CONTATO EXCLUSIVO COM O FÃ-CLUBE")}</p><h2 id="contact-title">{t("FALE COM")}<br />{t("A CENTRAL.")}</h2><p className="contact-description">{t("Memórias de um show, sugestões para o site, correções de conteúdo ou vontade de falar de rock. Este canal é para conversar com quem cuida do fã-clube — não com as integrantes.")}</p><div className="social-links"><a href={officialLinks.instagram} target="_blank" rel="noopener noreferrer">{t("INSTAGRAM DA BANDA ")}<span aria-hidden="true">↗</span></a><a href={officialLinks.youtube} target="_blank" rel="noopener noreferrer">{t("YOUTUBE DA BANDA ")}<span aria-hidden="true">↗</span></a><a href={officialLinks.spotify} target="_blank" rel="noopener noreferrer">SPOTIFY <span aria-hidden="true">↗</span></a></div></div>
      <form ref={formRef} className="contact-form" id="contact-form" onSubmit={prepare} aria-describedby="form-note form-privacy"><h3>{t("MENSAGEM PARA O FÃ-CLUBE.")}</h3><p className="form-note" id="form-note">{t("O envio para a equipe da Central ainda está em preparação. Você pode escrever e copiar um rascunho. Nenhuma mensagem será encaminhada à banda.")}</p><div className="form-field"><label htmlFor="name">{t("SEU NOME")}</label><input id="name" name="name" autoComplete="name" placeholder={t("Como podemos te chamar?")} required maxLength={100} onInput={event => event.currentTarget.setCustomValidity("")} onInvalid={event => event.currentTarget.setCustomValidity(t("Informe seu nome."))} /></div><div className="form-field"><label htmlFor="email">{t("SEU E-MAIL")}</label><input id="email" name="email" type="email" autoComplete="email" placeholder={t("voce@exemplo.com")} required maxLength={254} onInput={event => event.currentTarget.setCustomValidity("")} onInvalid={event => event.currentTarget.setCustomValidity(t(event.currentTarget.value ? "Informe um e-mail válido." : "Informe seu e-mail."))} /></div><div className="form-field"><label htmlFor="message">{t("SUA MENSAGEM PARA A CENTRAL")}</label><textarea id="message" name="message" rows={3} placeholder={t("Pode aumentar o volume.")} required minLength={10} maxLength={5000} onInput={event => event.currentTarget.setCustomValidity("")} onInvalid={event => event.currentTarget.setCustomValidity(t("Escreva pelo menos 10 caracteres, sem contar espaços nas pontas."))} /></div><div className="form-bottom"><p id="form-privacy">{t("Nenhum dado é enviado ou armazenado.")}</p><button className="text-button" type="submit">{t("PREPARAR MENSAGEM ")}<span aria-hidden="true">↗</span></button></div>
      {draft && <div className="form-result" id="form-result"><p role="status">{t("Rascunho preparado, mas não enviado. O canal de envio do fã-clube ainda está em construção.")}</p><textarea ref={preview} value={draft} readOnly aria-label={t("Rascunho para o fã-clube, não enviado")} /><button type="button" onClick={copy}>{t("COPIAR RASCUNHO ↗")}</button><p role="status">{t(copyStatus)}</p></div>}
      </form>
    </section>
  </>;
}
