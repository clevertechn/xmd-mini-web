import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import Auth from '@/components/Auth';
import Dashboard from '@/components/Dashboard';
import { supabase } from '@/lib/supabase';
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

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) setShowAuth(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (checkingSession) return <div className="min-h-screen bg-dark-950 flex items-center justify-center"><div className="w-10 h-10 rounded-full border-2 border-primary-500 border-t-transparent animate-spin" /></div>;
  if (session) return <Dashboard onSignOut={() => void supabase.auth.signOut()} />;
  if (showAuth) return <Auth onBack={() => setShowAuth(false)} onSuccess={() => undefined} />;

  return <div className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden"><Navbar onOpenAuth={() => setShowAuth(true)} /><main><Hero /><Features /><UseCases /><Commands /><GroupTools /><CoinEconomy /><DashboardPreview /><Testimonials /><Pricing /><FAQ /><ContactForm /><CTA /></main><div className="fixed bottom-5 right-5 z-40 lg:hidden"><button onClick={() => setShowAuth(true)} className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm font-semibold shadow-lg shadow-primary-500/30">Jisajili / Ingia</button></div><Footer /></div>;
}
