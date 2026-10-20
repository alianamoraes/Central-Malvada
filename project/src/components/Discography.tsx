import { RELEASES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import { Pause, Play, Volume2 } from 'lucide-react';

export default function Discography() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="discografia" className="relative py-28 md:py-40 px-6 md:px-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="reveal mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-nav text-[11px] uppercase tracking-[0.4em] text-blood mb-4">Discografia</p>
            <h2 className="font-display uppercase tracking-tightest text-white text-5xl md:text-7xl lg:text-8xl leading-[0.9]">O Som</h2>
          </div>
          <p className="font-body font-light text-sm text-white/50 max-w-xs md:text-right">Uma discografia construída entre a urgência do português e a expansão internacional.</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {RELEASES.map((release) => (
            <article key={release.title} className="reveal grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
              <div className="relative aspect-square lg:aspect-auto min-h-[320px] lg:min-h-[440px] bg-[#0D0D0D] overflow-hidden">
                <img src={release.cover} alt={`Capa visual de ${release.title}`} className="w-full h-full object-cover grayscale contrast-125 brightness-75 transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent" />
                <div className="absolute left-7 bottom-7">
                  <p className="font-nav text-[10px] uppercase tracking-[0.3em] text-white/60">Álbum · {release.year}</p>
                  <h3 className="font-display uppercase tracking-tightest text-4xl md:text-5xl text-white mt-2">{release.title}</h3>
                </div>
              </div>

              <div className="bg-[#120909] min-h-[320px] lg:min-h-[440px] p-8 md:p-10 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-nav text-[10px] uppercase tracking-[0.3em] text-white/50">Player visual</span>
                  <Volume2 size={16} className="text-blood" />
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <button type="button" aria-label="Reproduzir prévia visual" className="w-14 h-14 rounded-full bg-blood text-white flex items-center justify-center hover:bg-[#990000] transition-colors">
                      <Play size={19} fill="currentColor" className="ml-0.5" />
                    </button>
                    <button type="button" aria-label="Pausar prévia visual" className="text-white/50 hover:text-white transition-colors"><Pause size={18} /></button>
                  </div>
                  <div className="mt-8 h-px bg-white/20 relative"><span className="absolute left-0 top-0 h-px w-1/3 bg-blood" /></div>
                  <div className="mt-3 flex justify-between font-nav text-[10px] uppercase tracking-[0.2em] text-white/40"><span>00:00</span><span>—:—</span></div>
                </div>
                <p className="font-body font-light text-xs leading-relaxed text-white/50">Layout reservado para a integração futura do player oficial.</p>
              </div>

              <div className="bg-[#0D0D0D] min-h-[320px] lg:min-h-[440px] p-8 md:p-10 flex flex-col">
                <p className="font-nav text-[10px] uppercase tracking-[0.3em] text-blood mb-8">Ficha técnica</p>
                <dl className="space-y-6 font-body text-sm">
                  {release.credits.map((credit) => (
                    <Info key={credit.label} label={credit.label} value={credit.value} />
                  ))}
                  <Info label="Formação" value={release.lineup} />
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 pb-4">
      <dt className="font-nav text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">{label}</dt>
      <dd className="font-body font-light leading-relaxed text-white/80">{value}</dd>
    </div>
  );
}
