import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Commands from '@/components/Commands';
import GroupTools from '@/components/GroupTools';
import CoinEconomy from '@/components/CoinEconomy';
import Pricing from '@/components/Pricing';
import DashboardPreview from '@/components/DashboardPreview';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Commands />
        <GroupTools />
        <CoinEconomy />
        <DashboardPreview />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
