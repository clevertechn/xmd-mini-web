import {
  Headphones, Megaphone, ShoppingCart, CalendarClock,
  GraduationCap, Building2, ArrowRight,
} from 'lucide-react';
import { useCases } from '@/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones,
  Megaphone,
  ShoppingCart,
  CalendarClock,
  GraduationCap,
  Building2,
};

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-accent-400 uppercase tracking-wider mb-4">
            Business Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for
            <br />
            <span className="text-gradient">Tanzanian Businesses</span>
          </h2>
          <p className="text-dark-300 text-lg">
            From customer support to order management, marketing to appointments —
            Black Hat XMD transforms how your business communicates on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => {
            const Icon = iconMap[useCase.icon] || Headphones;
            return (
              <div
                key={useCase.title}
                className="group glass glass-hover rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                  <Icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
                      <span className="text-xs text-dark-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark-400 text-sm">
            Over <span className="text-primary-400 font-bold">150+ businesses</span> in Tanzania trust Black Hat XMD for their WhatsApp automation.
          </p>
        </div>
      </div>
    </section>
  );
}
