import { NAV_LINKS, SOCIAL_LINKS } from '@/data/content';
import { Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative px-6 md:px-10 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16">
          <div>
            <p className="font-bebas text-3xl text-white tracking-wide">
              MALVADA<span className="text-blood">.</span>
            </p>
            <p className="mt-3 font-body font-light text-xs text-white/40 max-w-xs leading-relaxed">
              Central Malvada — fã-clube oficial. Hard / Heavy Rock, Brasil.
            </p>
          </div>

          <div>
            <p className="font-nav text-[10px] uppercase tracking-[0.3em] text-white/35 mb-5">
              Navegação
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="font-nav text-xs uppercase tracking-[0.15em] text-white/60 hover:text-blood transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-nav text-[10px] uppercase tracking-[0.3em] text-white/35 mb-5">
              Oficial
            </p>
            <ul className="flex flex-col gap-3">
              <SocialRow
                href={SOCIAL_LINKS.instagram}
                label="Instagram"
                icon={<Instagram size={15} />}
              />
              <SocialRow
                href={SOCIAL_LINKS.youtube}
                label="YouTube"
                icon={<Youtube size={15} />}
              />
              <SocialRow
                href={SOCIAL_LINKS.spotify}
                label="Spotify"
                icon={<Music size={15} />}
              />
            </ul>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-body font-light text-[11px] text-white/30">
            © {new Date().getFullYear()} Central Malvada. Site não oficial de
            fã-clube.
          </p>
          <p className="font-nav text-[10px] uppercase tracking-[0.3em] text-white/25">
            Site em Construção
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialRow({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 font-nav text-xs uppercase tracking-[0.18em] text-white/60 hover:text-blood transition-colors"
      >
        <span className="text-white/40">{icon}</span>
        {label}
      </a>
    </li>
  );
}
