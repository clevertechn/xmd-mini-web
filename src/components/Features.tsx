import {
  Bot, BrainCircuit, Coins, Users, CreditCard,
  ShieldCheck, Terminal, Settings, Lock,
} from 'lucide-react';
import { features } from '@/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  BrainCircuit,
  Coins,
  Users,
  CreditCard,
  ShieldCheck,
  Terminal,
  Settings,
  Lock,
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need to Run
            <br />
            <span className="text-gradient">Powerful WhatsApp Bots</span>
          </h2>
          <p className="text-dark-300 text-lg">
            From AI chatbot to group management, payments to multi-user deployment —
            Black Hat XMD packs it all into one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Bot;
            return (
              <div
                key={feature.title}
                className="group glass glass-hover rounded-2xl p-6 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
