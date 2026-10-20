import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-700 ${
        scrolled
          ? 'bg-[#0D0D0D]/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => go('inicio')}
          className="font-bebas tracking-wide text-xl md:text-2xl text-white"
          aria-label="Central Malvada — início"
        >
          MALVADA<span className="text-blood">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="font-nav text-[13px] uppercase tracking-[0.18em] text-white/70 hover:text-blood transition-colors duration-300 link-underline"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        } bg-[#0D0D0D]/95 backdrop-blur-md`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="font-nav text-sm uppercase tracking-[0.2em] text-white/80 hover:text-blood transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
