import { MEMBERS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function Members() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="membros" className="relative py-28 md:py-40 px-6 md:px-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="reveal mb-16 md:mb-24">
          <p className="font-nav text-[11px] uppercase tracking-[0.4em] text-blood mb-4">A Formação</p>
          <h2 className="font-display uppercase tracking-tightest text-white text-5xl md:text-7xl lg:text-8xl leading-[0.9]">Membros</h2>
          <p className="mt-6 max-w-xl font-body font-light text-sm leading-[1.7] text-white/60">Quatro instrumentistas, quatro histórias e uma linguagem comum: o peso, a presença e a liberdade do rock.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MEMBERS.map((member) => (
            <article key={member.name} className="reveal group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#161616]">
                <img src={member.image} alt={member.name} loading="lazy" className="member-img w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              </div>
              <div className="pt-5">
                <h3 className="font-display uppercase tracking-tightest text-white text-xl md:text-2xl leading-tight">{member.name}</h3>
                <p className="font-nav text-[11px] uppercase tracking-[0.25em] text-blood mt-2">{member.role}</p>
                <div className="mt-5 space-y-4 border-t border-white/10 pt-4">
                  <p className="font-body font-light text-xs leading-[1.7] text-white/65">{member.history}</p>
                  <p className="font-body font-light text-xs leading-[1.7] text-white/85">{member.importance}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
