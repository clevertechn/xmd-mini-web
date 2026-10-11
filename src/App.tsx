import Navbar from '@/components/Navbar';
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
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden">
      <Navbar />
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
      </main>
      <Footer />
    </div>
  );
}
