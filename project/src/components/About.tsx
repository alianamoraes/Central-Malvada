import { ERAS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="relative py-28 md:py-40 px-6 md:px-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="reveal mb-16 md:mb-24 max-w-3xl">
          <p className="font-nav text-[11px] uppercase tracking-[0.4em] text-blood mb-4">Sobre a Banda</p>
          <h2 className="font-display uppercase tracking-tightest text-white text-5xl md:text-7xl lg:text-8xl leading-[0.9]">Uma história<br />em movimento</h2>
        </div>

        <div className="space-y-px bg-white/10">
          {ERAS.map((era) => (
            <article key={era.title} className="reveal bg-[#0D0D0D] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="font-nav text-xs uppercase tracking-[0.3em] text-white/50 lg:sticky lg:top-28">{era.period}</p>
              </div>
              <div className="lg:col-span-9 max-w-4xl">
                <h3 className="font-display uppercase tracking-tightest text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">{era.title}</h3>
                <div className="hairline w-16 mb-6" />
                <p className="font-body font-light text-white/75 leading-[1.75] text-sm md:text-base">{era.body}</p>
                <ul className="mt-8 space-y-3">
                  {era.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 font-body font-light text-sm text-white/90">
                      <span className="mt-2 block w-4 h-px bg-blood shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
