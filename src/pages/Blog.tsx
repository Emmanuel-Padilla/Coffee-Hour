import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useLanguage } from '@/context/LanguageContext';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { pageSeo } from '@/data/seo';
import { blogPosts } from '@/data/blog';
import PageMasthead from '@/components/PageMasthead';

export default function Blog() {
  const { dict, lang } = useLanguage();
  const path = useLocalizedPath();
  const seo = pageSeo['blog'];

  return (
    <>
      <SEO slug="blog" title={seo.title[lang]} description={seo.description[lang]} />
      <Breadcrumbs items={[{ label: dict.nav.home, to: path('') }, { label: dict.nav.blog }]} />

      <PageMasthead eyebrow="Coffee Hour Journal" title={dict.blog.title} subtitle={dict.blog.subtitle} index="07" word="NOTAS" />

      <section className="container-page grid gap-0 py-16 lg:grid-cols-2">
        {blogPosts.map((post, index) => (
          <article
            key={post.slug}
            className={`group border-ink-900/15 p-7 dark:border-white/15 sm:p-9 ${index % 2 === 0 ? 'border-b lg:border-b-0 lg:border-r' : 'border-b lg:border-b-0'} ${index > 1 ? 'lg:border-t' : ''}`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-caramel">0{index + 1} · {post.readTimeMinutes} {dict.blog.readTime}</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-navy-600 transition group-hover:text-coffee-600 dark:text-cream">{post.title[lang]}</h2>
            <p className="sr-only">
              {post.readTimeMinutes} {dict.blog.readTime}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-700 dark:text-cream/70">{post.excerpt[lang]}</p>
            <details className="mt-6">
              <summary className="cursor-pointer border-b border-coffee-600 pb-2 text-sm font-bold text-coffee-600 marker:content-none dark:text-caramel">
                {dict.cta.readMore}
              </summary>
              <div className="mt-3 space-y-3 text-sm text-ink-900 dark:text-cream/90">
                {post.body[lang].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          </article>
        ))}
      </section>
    </>
  );
}
