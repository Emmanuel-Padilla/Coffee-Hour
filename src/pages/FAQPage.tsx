import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import { faqSchema } from '@/lib/schema';
import PageMasthead from '@/components/PageMasthead';

export default function FAQPage() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['faq'];

  return (
    <>
      <SEO slug="faq" title={seo.title[lang]} description={seo.description[lang]} />
      <JsonLd data={faqSchema(dict.faq.items)} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.faq }]} />

      <PageMasthead eyebrow="Coffee Hour" title={dict.faq.title} subtitle={dict.faq.subtitle} index="06" word="FAQ" tone="cream" />

      <section className="container-page max-w-4xl py-16">
        <FAQAccordion items={dict.faq.items} />
      </section>
    </>
  );
}
