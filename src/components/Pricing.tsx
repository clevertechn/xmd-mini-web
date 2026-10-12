import { Check, Star } from 'lucide-react';
import { plans } from '@/data';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-gold-400 uppercase tracking-wider mb-4">
            Pricing Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-gradient-gold">Plan</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Pay with ClickPesa mobile money in Tanzanian Shillings.
            Cancel anytime, upgrade or downgrade as needed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass border-2 border-primary-500/40 shadow-2xl shadow-primary-500/20 lg:scale-105'
                  : 'glass border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-xs font-semibold text-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-dark-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-display text-4xl font-bold text-gradient">{plan.price}</span>
                </div>
                <span className="text-xs text-dark-400">{plan.period}</span>
              </div>

              <div className="space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-500/15 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-sm text-dark-200">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-primary-500 to-accent-600 text-white hover:shadow-lg hover:shadow-primary-500/40 hover:scale-[1.02]'
                    : 'glass text-white hover:border-primary-500/30'
                }`}
              >
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-dark-400">
            All plans include 290+ commands, group management tools, and web panel access.
            Payments processed securely via ClickPesa hosted checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
