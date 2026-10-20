import { FAREWELL_SHOWS, HISTORIC_SHOWS, type Show } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export default function TourDates() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="agenda" className="relative py-28 md:py-40 px-6 md:px-10">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="reveal mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-nav text-[11px] uppercase tracking-[0.4em] text-blood mb-4">Agenda</p>
            <h2 className="font-display uppercase tracking-tightest text-white text-5xl md:text-7xl lg:text-8xl leading-[0.9]">Últimos palcos</h2>
          </div>
          <p className="font-body font-light text-sm text-white/50 max-w-xs md:text-right">Marcos históricos e as últimas apresentações da formação atual.</p>
        </div>

        <ShowGroup title="Marcos históricos" shows={HISTORIC_SHOWS} />
        <ShowGroup title="Shows de despedida" shows={FAREWELL_SHOWS} farewell />
      </div>
    </section>
  );
}

function ShowGroup({ title, shows, farewell = false }: { title: string; shows: Show[]; farewell?: boolean }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="reveal flex items-center gap-4 mb-6">
        <span className="block w-8 h-px bg-blood" />
        <h3 className="font-nav text-[11px] uppercase tracking-[0.35em] text-white/60">{title}</h3>
      </div>
      <div className="border-t border-white/10">
        {shows.map((show) => (
          <div key={`${show.date}-${show.city}`} className="reveal group grid grid-cols-12 gap-4 items-center py-7 md:py-9 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]">
            <div className="col-span-12 md:col-span-3">
              <span className="font-nav text-xs uppercase tracking-[0.2em] text-white/55 group-hover:text-blood transition-colors duration-500">{show.date}</span>
            </div>
            <div className="col-span-7 md:col-span-3">
              <span className="font-body font-light text-sm text-white/75">{show.city}</span>
            </div>
            <div className="col-span-5 md:col-span-5">
              <span className="font-display uppercase tracking-tightest text-white text-lg md:text-2xl leading-tight">{show.event}</span>
            </div>
            <div className="col-span-12 md:col-span-1 md:text-right">
              <span className={`font-nav text-[10px] uppercase tracking-[0.25em] ${farewell ? 'text-blood' : 'text-white/35'}`}>{farewell ? 'despedida' : show.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
