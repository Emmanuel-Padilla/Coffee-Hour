import beansLight from '@/assets/textures/beans.svg';
import beansDark from '@/assets/textures/beans-dark.svg';

/**
 * Decorative coffee-bean scatter for accent sections. Purely visual — absolutely
 * positioned, pointer-events-none, and invisible to screen readers.
 * tone="light" (white beans) for dark backgrounds, tone="warm" (coffee beans) for pale ones.
 */
export default function BeanTexture({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'warm' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ backgroundImage: `url(${tone === 'light' ? beansLight : beansDark})`, backgroundSize: '180px 180px' }}
    />
  );
}
