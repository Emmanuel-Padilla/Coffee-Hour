import { useEffect, type ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import { LanguageProvider, LANG_STORAGE_KEY, type Lang } from '@/context/LanguageContext';

import Home from '@/pages/Home';
import History from '@/pages/History';
import MenuOverview from '@/pages/MenuOverview';
import MenuCategoryPage from '@/pages/MenuCategoryPage';
import Experiences from '@/pages/Experiences';
import Gallery from '@/pages/Gallery';
import Videos from '@/pages/Videos';
import FAQPage from '@/pages/FAQPage';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import Blog from '@/pages/Blog';
import NotFound from '@/pages/NotFound';

function LangWrapper({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LanguageProvider lang={lang}>{children}</LanguageProvider>;
}

/** Renders the shared page tree once per language branch — same components, no duplicated logic. */
function PageRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="historia" element={<History />} />
      <Route path="menu" element={<MenuOverview />} />
      <Route path="menu/:category" element={<MenuCategoryPage />} />
      <Route path="experiencias" element={<Experiences />} />
      <Route path="galeria" element={<Gallery />} />
      <Route path="videos" element={<Videos />} />
      <Route path="faq" element={<FAQPage />} />
      <Route path="contacto" element={<Contact />} />
      <Route path="privacidad" element={<Privacy />} />
      <Route path="blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </>
  );
}

/** On a first-ever visit to the bare root, optionally honor the browser language once,
 * then remember the choice — never re-redirects a returning or deep-linked visitor. */
function useInitialLanguageDetection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored) return;

    const prefersEnglish = navigator.language?.toLowerCase().startsWith('en');
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, prefersEnglish ? 'en' : 'es');
    } catch {
      /* ignore */
    }
    if (prefersEnglish) {
      window.location.replace('/en');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function App() {
  useInitialLanguageDetection();

  return (
    <Routes>
      <Route element={<LangWrapper lang="es"><Layout /></LangWrapper>}>{PageRoutes()}</Route>
      <Route path="en" element={<LangWrapper lang="en"><Layout /></LangWrapper>}>
        {PageRoutes()}
      </Route>
    </Routes>
  );
}
