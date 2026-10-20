import { useState } from 'react';
import { SOCIAL_LINKS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { Instagram, Youtube, Music } from 'lucide-react';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-28 md:py-40 px-6 md:px-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="reveal mb-16 md:mb-24">
          <p className="font-nav text-[11px] uppercase tracking-[0.4em] text-blood mb-4">
            Contato
          </p>
          <h2 className="font-display uppercase tracking-tightest text-white text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
            Fale Com
            <br />
            A Central
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <form
            onSubmit={onSubmit}
            className="reveal lg:col-span-7 flex flex-col gap-10"
          >
            <Field label="Nome" name="name" type="text" />
            <Field label="E-mail" name="email" type="email" />
            <Field label="Assunto" name="subject" type="text" />
            <div className="flex flex-col">
              <label className="font-nav text-[11px] uppercase tracking-[0.3em] text-white/45 mb-3">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                className="bg-transparent border-b border-white/20 focus:border-blood outline-none py-2 font-body font-light text-white text-base transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start font-nav text-xs uppercase tracking-[0.3em] text-white/70 hover:text-blood border-b border-white/20 hover:border-blood pb-2 transition-colors duration-300"
            >
              {sent ? 'Mensagem Enviada' : 'Enviar Mensagem'}
            </button>

            {sent && (
              <p className="font-body font-light text-sm text-white/55 -mt-4">
                Recebemos sua mensagem. Retornaremos em breve.
              </p>
            )}
          </form>

          <aside className="reveal lg:col-span-5 flex flex-col gap-px">
            <p className="font-nav text-[11px] uppercase tracking-[0.3em] text-white/45 mb-6">
              Links Oficiais
            </p>
            <SocialLink
              href={SOCIAL_LINKS.instagram}
              label="Instagram"
              handle="@malvadabanda"
              icon={<Instagram size={18} />}
            />
            <SocialLink
              href={SOCIAL_LINKS.youtube}
              label="YouTube"
              handle="@MALVADABanda"
              icon={<Youtube size={18} />}
            />
            <SocialLink
              href={SOCIAL_LINKS.spotify}
              label="Spotify"
              handle="MALVADA"
              icon={<Music size={18} />}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="font-nav text-[11px] uppercase tracking-[0.3em] text-white/45 mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="bg-transparent border-b border-white/20 focus:border-blood outline-none py-2 font-body font-light text-white text-base transition-colors duration-300"
      />
    </div>
  );
}

function SocialLink({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-blood transition-colors duration-500"
    >
      <span className="flex items-center gap-4">
        <span className="text-white/45 group-hover:text-blood transition-colors duration-500">
          {icon}
        </span>
        <span className="font-nav text-sm uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
          {label}
        </span>
      </span>
      <span className="font-body font-light text-xs text-white/45 group-hover:text-blood transition-colors duration-500">
        {handle}
      </span>
    </a>
  );
}
