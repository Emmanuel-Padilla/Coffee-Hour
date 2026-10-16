import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import PageMasthead from '@/components/PageMasthead';

export default function Privacy() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['privacidad'];

  return (
    <>
      <SEO slug="privacidad" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.privacy }]} />

      <PageMasthead eyebrow="Coffee Hour" title={dict.privacy.title} subtitle={dict.privacy.intro} index="08" word="LEGAL" tone="cream" />
      <div className="container-page max-w-3xl py-16">

        <div className="mt-8 space-y-6">
          {dict.privacy.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-xl font-semibold text-navy-600 dark:text-cream">{s.h}</h2>
              <p className="mt-2 text-sm text-ink-700 dark:text-cream/70">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-coffee-200 bg-cream-soft p-4 text-sm text-ink-700 dark:border-caramel/30 dark:bg-white/5 dark:text-cream/70">
          {dict.privacy.confirmNote}
        </div>
      </div>
    </>
  );
}
