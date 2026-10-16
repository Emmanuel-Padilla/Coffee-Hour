import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallButton from '@/components/FloatingCallButton';
import ScrollToTop from '@/components/ScrollToTop';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
