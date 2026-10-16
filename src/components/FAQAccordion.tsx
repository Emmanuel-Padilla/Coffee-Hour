import { ChevronDownIcon } from '@/components/icons';

interface FaqItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-coffee-900/20 dark:border-white/20">
      {items.map((item, index) => (
        <details key={item.q} className="group border-b border-coffee-900/20 py-6 open:pb-7 dark:border-white/20">
          <summary className="grid cursor-pointer list-none grid-cols-[36px_1fr_40px] items-center gap-3 text-left marker:content-none">
            <span className="font-display text-xs italic text-caramel">{String(index + 1).padStart(2, '0')}</span>
            <span className="font-display text-xl font-semibold text-navy-600 dark:text-cream">{item.q}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-coffee-900/20 transition group-open:rotate-180 group-open:bg-caramel dark:border-white/20">
              <ChevronDownIcon className="h-4 w-4 text-coffee-600 dark:text-caramel group-open:dark:text-[#17120e]" />
            </span>
          </summary>
          <p className="ml-[52px] mt-4 max-w-2xl text-sm leading-relaxed text-ink-700 dark:text-cream/70">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
