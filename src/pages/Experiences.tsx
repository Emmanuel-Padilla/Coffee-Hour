import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ExperienceCard from '@/components/ExperienceCard';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { experiences } from '@/data/experiences';
import { pageSeo } from '@/data/seo';
import PageMasthead from '@/components/PageMasthead';
import ExperienceAtmosphere from '@/components/ExperienceAtmosphere';

export default function Experiences() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['experiencias'];

  return (
    <>
      <SEO slug="experiencias" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.experiences }]} />

      <PageMasthead eyebrow="Coffee Hour" title={dict.experiences.title} subtitle={dict.experiences.subtitle} index="02" word="VIVE" />

      <section className="bg-[#17120e] py-20">
        <div className="container-page">
          <ExperienceAtmosphere />
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.slug} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      <div className="container-page pb-16">
        <div className="rounded-xl border border-coffee-200 bg-cream-soft p-4 text-sm text-ink-700 dark:border-caramel/30 dark:bg-white/5 dark:text-cream/70">
          {dict.experiences.confirmBanner}
        </div>
      </div>
    </>
  );
}
