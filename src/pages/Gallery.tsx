import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import GalleryGrid from '@/components/GalleryGrid';
import GalleryCarousel from '@/components/GalleryCarousel';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import PageMasthead from '@/components/PageMasthead';

export default function Gallery() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['galeria'];

  return (
    <>
      <SEO slug="galeria" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.gallery }]} />

      <PageMasthead eyebrow="Coffee Hour" title={dict.gallery.title} subtitle={dict.gallery.subtitle} index="03" word="MOMENTOS" />

      <section className="container-page py-14">
        <GalleryCarousel />
      </section>

      <section className="bg-cream-soft py-16 dark:bg-white/5">
        <div className="container-page">
        <h2 className="font-display text-3xl font-semibold text-navy-600 dark:text-cream">
          {lang === 'en' ? 'Browse every photo' : 'Explora todas las fotos'}
        </h2>
        <div className="mt-6">
          <GalleryGrid />
        </div>
        </div>
      </section>
    </>
  );
}
