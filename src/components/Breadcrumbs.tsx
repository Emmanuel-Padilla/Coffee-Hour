import { Link } from 'react-router-dom';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { business } from '@/data/business';

interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schemaItems = items.map((c) => ({ name: c.label, url: `${business.url}${c.to ?? ''}` }));

  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6 text-sm text-ink-700 dark:text-cream/60">
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.to && i !== items.length - 1 ? (
              <Link to={item.to} className="hover:text-coffee-600 dark:hover:text-caramel">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-900 dark:text-cream">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
