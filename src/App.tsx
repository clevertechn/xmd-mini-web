import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import Commands from '@/components/Commands';
import GroupTools from '@/components/GroupTools';
import CoinEconomy from '@/components/CoinEconomy';
import DashboardPreview from '@/components/DashboardPreview';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { api, isAuthenticated, clearAuth } from '@/lib/api';

export default function App() {
  const [authed, setAuthed] = useState(isAuthenticated());
  const [checking, setChecking] = useState(isAuthenticated());
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) { setChecking(false); return; }
    void api.me().then((result) => {
      if (!result.ok) { clearAuth(); setAuthed(false); }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <div className="min-h-screen bg-dark-950 flex items-center justify-center"><div className="w-10 h-10 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" /></div>;
  }

  if (authed) return <Dashboard onSignOut={() => { clearAuth(); setAuthed(false); }} />;
  if (showAuth) return <Auth onBack={() => setShowAuth(false)} onSuccess={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden">
      <Navbar onOpenAuth={() => setShowAuth(true)} />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Commands />
        <GroupTools />
        <CoinEconomy />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ContactForm />
        <CTA />
        <div className="fixed bottom-5 right-5 z-40 lg:hidden">
          <button onClick={() => setShowAuth(true)} className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/30">Jisajili / Ingia</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
