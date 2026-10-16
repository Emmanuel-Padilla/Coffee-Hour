import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

export default function NotFound() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();

  return (
    <>
      <SEO
        slug=""
        noindex
        title={lang === 'en' ? '404 — Page Not Found | Coffee Hour Chapala' : '404 — Página no encontrada | Coffee Hour Chapala'}
        description={dict.notFound.body}
      />
      <div className="relative flex min-h-[72vh] flex-col items-center justify-center overflow-hidden bg-[#17120e] px-4 py-20 text-center text-white">
        <p className="pointer-events-none absolute font-display text-[16rem] font-bold leading-none text-white/[0.035] sm:text-[26rem]">404</p>
        <p className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-caramel">Coffee Hour · Chapala</p>
        <h1 className="relative mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl">{dict.notFound.title}</h1>
        <p className="relative mt-5 max-w-md text-sm leading-relaxed text-white/70">{dict.notFound.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={path('')} className="relative rounded-full bg-caramel px-6 py-3 text-sm font-bold text-[#17120e] hover:bg-cream">
            {dict.cta.backHome}
          </Link>
          <Link
            to={path('menu')}
            className="relative rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {dict.cta.viewMenu}
          </Link>
        </div>
      </div>
    </>
  );
}
