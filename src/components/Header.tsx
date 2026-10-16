import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { business } from '@/data/business';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { MenuIcon, CloseIcon, PhoneIcon } from '@/components/icons';
import { trackEvent } from '@/lib/analytics';
import logoNav from '@/assets/images/logo-nav.webp';

export default function Header() {
  const { dict } = useLanguage();
  const path = useLocalizedPath();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navItems: { label: string; to: string }[] = [
    { label: dict.nav.home, to: path('') },
    { label: dict.nav.history, to: path('historia') },
    { label: dict.nav.menu, to: path('menu') },
    { label: dict.nav.experiences, to: path('experiencias') },
    { label: dict.nav.gallery, to: path('galeria') },
    { label: dict.nav.contact, to: path('contacto') },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-xs font-semibold transition-all ${isActive ? 'bg-white/10 text-caramel' : 'text-white/70 hover:bg-white/5 hover:text-white'}`;

  return (
    <div className="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <header className="mx-auto flex max-w-content items-center justify-between gap-3 rounded-full bg-[#14110d]/95 py-2 pl-2 pr-2.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,.8)] ring-1 ring-white/10 backdrop-blur sm:pl-2.5 sm:pr-3">
        <Link
          to={path('')}
          className="flex shrink-0 items-center gap-3"
          aria-label={business.legalDisplayName}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
            <img src={logoNav} alt="Coffee Hour" className="h-9 w-9 rounded-full object-cover" width={36} height={36} />
          </span>
          <span className="hidden xl:block">
            <span className="block font-display text-sm font-semibold leading-none text-white">Coffee Hour</span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-caramel">Chapala</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher dark />
          <ThemeToggle dark />
          <a
            href={`tel:${business.phone.tel}`}
            onClick={() => trackEvent('click_phone', { location: 'header' })}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-cream"
          >
            {business.phone.display}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${business.phone.tel}`}
            onClick={() => trackEvent('click_phone', { location: 'header-mobile' })}
            aria-label={dict.cta.callNow}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-coffee-600"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-[#14110d] p-4 shadow-lg ring-1 ring-white/10 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium ${isActive ? 'bg-white/10 text-caramel' : 'text-white/90'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Link
              to={path('menu')}
              onClick={() => setOpen(false)}
              className="rounded-full bg-caramel px-4 py-3 text-center text-sm font-semibold text-ink-900"
            >
              {dict.cta.viewMenu}
            </Link>
            <Link
              to={path('contacto')}
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/25 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {dict.cta.getDirections}
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <LanguageSwitcher dark />
            <ThemeToggle dark />
          </div>
        </div>
      )}
    </div>
  );
}
