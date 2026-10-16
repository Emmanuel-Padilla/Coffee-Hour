import type { Experience } from '@/data/experiences';
import { useLanguage } from '@/context/LanguageContext';
import { business } from '@/data/business';
import { trackEvent } from '@/lib/analytics';
import { ArrowRightIcon, PhoneIcon } from '@/components/icons';

export default function ExperienceCard({ experience, index = 0 }: { experience: Experience; index?: number }) {
  const { dict, lang } = useLanguage();
  const primary = index % 2 === 0;

  return (
    <article
      className={`group relative flex min-h-[420px] flex-col justify-between overflow-hidden p-7 sm:p-9 ${
        primary
          ? 'rounded-br-[6rem] bg-cream text-[#281d15]'
          : 'rounded-tl-[6rem] border border-white/15 bg-[#241a13] text-white'
      }`}
    >
      <span className={`pointer-events-none absolute -right-2 -top-10 font-display text-[10rem] font-semibold leading-none ${primary ? 'text-coffee-700/[0.06]' : 'text-white/[0.05]'}`}>
        0{index + 1}
      </span>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className={`text-[10px] font-bold uppercase tracking-[0.24em] ${primary ? 'text-coffee-600' : 'text-caramel'}`}>
            {lang === 'en' ? 'Coffee Hour experience' : 'Experiencia Coffee Hour'}
          </p>
          <span className={`h-px w-14 ${primary ? 'bg-coffee-700/30' : 'bg-white/25'}`} />
        </div>
        <h3 className="mt-8 max-w-md font-display text-4xl font-semibold leading-none sm:text-5xl">{experience.name[lang]}</h3>
        <p className={`mt-5 max-w-lg text-sm leading-relaxed ${primary ? 'text-ink-700' : 'text-white/70'}`}>{experience.summary[lang]}</p>

        <p className={`mt-8 text-[10px] font-bold uppercase tracking-[0.2em] ${primary ? 'text-coffee-600' : 'text-caramel'}`}>
          {dict.experiences.includes}
        </p>
        <ul className="mt-3 space-y-0">
          {experience.includes[lang].map((line) => (
            <li key={line} className={`flex gap-3 border-t py-3 text-sm ${primary ? 'border-coffee-900/15' : 'border-white/15'}`}>
              <span className={primary ? 'text-caramel' : 'text-caramel'}>+</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
        <span className={`max-w-[190px] text-xs font-semibold ${primary ? 'text-ink-700/70' : 'text-white/60'}`}>{dict.cta.checkAvailability}</span>
        <a
          href={`tel:${business.phone.tel}`}
          onClick={() => trackEvent('view_experience', { experience: experience.slug })}
          className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
            primary ? 'bg-[#17120e] text-white hover:bg-coffee-700' : 'bg-caramel text-[#17120e] hover:bg-cream'
          }`}
        >
          <PhoneIcon className="h-4 w-4" />
          {dict.cta.call}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
