import { useLanguage } from '@/context/LanguageContext';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import { business } from '@/data/business';
import coffeeHour7 from '@/assets/images/coffeehour-7.webp';
import heroInterior from '@/assets/images/hero-interior.webp';

export default function ExperienceAtmosphere() {
  const { dict, lang } = useLanguage();
  const imageRef = useParallax<HTMLImageElement>(20);
  const revealRef = useReveal<HTMLDivElement>();
  const moments = lang === 'en' ? ['Coffee', 'Conversation', 'Time well spent'] : ['Café', 'Conversación', 'Tiempo bien compartido'];

  return (
    <div ref={revealRef} className="reveal-section reveal-from-left grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="relative pb-16 sm:pb-20">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[48%_48%_2rem_2rem]">
          <img ref={imageRef} src={coffeeHour7} alt={lang === 'en' ? 'Coffee Hour patio and coffee bar' : 'Patio y barra de Coffee Hour'} width={1240} height={930} loading="lazy" className="absolute inset-x-0 -top-[7%] h-[114%] w-full object-cover" />
        </div>
        <div className="absolute -bottom-2 right-4 h-36 w-36 overflow-hidden rounded-full border-[6px] border-[#17120e] shadow-2xl sm:right-10 sm:h-44 sm:w-44">
          <img src={heroInterior} alt={lang === 'en' ? 'Coffee Hour bar detail' : 'Detalle de la barra de Coffee Hour'} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <span className="absolute bottom-8 left-5 rounded-full bg-caramel px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#17120e] sm:left-8">{dict.common.inTheCenter}</span>
      </div>

      <div className="lg:pl-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-caramel">{lang === 'en' ? 'The Coffee Hour rhythm' : 'El ritmo de Coffee Hour'}</p>
        <h3 className="mt-5 font-display text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">{dict.home.valueProps[1].title}</h3>
        <p className="mt-6 text-base leading-relaxed text-white/65">{dict.home.valueProps[1].body}</p>
        <p className="mt-7 border-l border-caramel pl-5 font-display text-xl italic leading-relaxed text-cream">“{business.positioning[lang]}”</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {moments.map((moment, index) => (
            <span key={moment} className={`rounded-full border px-4 py-2 text-xs font-semibold ${index === 1 ? 'border-caramel bg-caramel text-[#17120e]' : 'border-white/20 text-white/70'}`}>{moment}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
