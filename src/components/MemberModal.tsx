import { useI18n } from "../i18n/I18nProvider";
import { useEffect, useRef } from "react";
import type { Member } from "../data/content";
export default function MemberModal({
  member,
  onClose
}: {
  member: Member;
  onClose: () => void;
}) {
  const {
    t
  } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef(document.activeElement as HTMLElement | null);
  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (returnFocus.current?.isConnected) returnFocus.current.focus();
    };
  }, []);
  return <dialog ref={ref} className="member-dialog" id="member-dialog" aria-labelledby="dialog-name" onCancel={event => {
    event.preventDefault();
    onClose();
  }} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
  }}>
    <button className="dialog-close" type="button" onClick={onClose} aria-label={t("Fechar biografia")}>{t("FECHAR ")}<span aria-hidden="true">×</span></button>
    <div className="dialog-member-layout"><img className="dialog-photo" src={member.image} alt={member.imageAlt} />
      <div><p className="dialog-role">{member.role}{member.status && ` · ${member.status}`}</p><h2 id="dialog-name">{member.name}</h2><p className="dialog-bio">{member.bio}</p></div>
    </div>
  </dialog>;
}
