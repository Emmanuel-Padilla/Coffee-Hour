import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import VideoGrid from '@/components/VideoGrid';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import PageMasthead from '@/components/PageMasthead';

export default function Videos() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['videos'];

  return (
    <>
      <SEO slug="videos" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.videos }]} />

      <PageMasthead eyebrow="Coffee Hour" title={dict.videos.title} subtitle={dict.videos.subtitle} index="04" word="PLAY" tone="caramel" />

      <section className="container-page py-16">
        <VideoGrid />
      </section>
    </>
  );
}
