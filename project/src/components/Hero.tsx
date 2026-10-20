import { BAND_IMAGE } from '@/data/content';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={BAND_IMAGE} alt="Banda MALVADA" className="hero-img w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/30 to-[#0D0D0D]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,13,0.62)_100%)]" />
      </div>

      <div className="relative z-10 px-6 text-center">
        <p className="font-nav text-[11px] md:text-xs uppercase tracking-[0.5em] text-white/65 mb-6 md:mb-8">Fã-Clube Oficial</p>
        <h1 className="font-display uppercase tracking-tightest text-white leading-[0.82] text-[16vw] md:text-[12vw] lg:text-[180px]">
          Central
          <br />
          <span className="text-blood">Malvada</span>
        </h1>
        <p className="mt-8 md:mt-10 font-body font-light text-sm md:text-base text-white/70 max-w-xl mx-auto tracking-wide">
          A história, o som e as mulheres por trás da banda brasileira de hard/heavy rock.
        </p>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-blood" />
          <span className="font-nav text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/55">Site em Construção</span>
          <span className="block w-8 h-px bg-blood" />
        </div>
      </div>
    </section>
  );
}
