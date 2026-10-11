import { Check } from 'lucide-react';
import { groupFeatures } from '@/data';

export default function GroupTools() {
  return (
    <section id="group-tools" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">
              Group Protection
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Complete Group
              <br />
              <span className="text-gradient">Management Suite</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Keep your WhatsApp groups safe and organized with automated moderation,
              anti-spam, custom welcome messages, and a full protection toolkit —
              all configurable from your web dashboard.
            </p>

            <div className="space-y-3">
              {groupFeatures.map((feature, index) => (
                <div
                  key={feature.name}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{feature.name}</span>
                    <span className="text-dark-400 ml-2 text-sm">— {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative">
            <div className="glass rounded-2xl p-6 shadow-2xl shadow-primary-500/10">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-white">Group Settings Panel</h3>
                <span className="px-2.5 py-1 rounded-md bg-primary-500/20 text-xs font-medium text-primary-400">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                {groupFeatures.slice(0, 6).map((feature, index) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-dark-950/50 border border-white/5 hover:border-primary-500/20 transition-all"
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{feature.name}</div>
                      <div className="text-xs text-dark-400">{feature.description}</div>
                    </div>
                    {/* Toggle switch */}
                    <div
                      className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                        index % 3 !== 2 ? 'bg-primary-500' : 'bg-dark-700'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                          index % 3 !== 2 ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-dark-400">Anti-Call Preset</span>
                <div className="flex gap-2">
                  {['No calls', 'Text me', 'DND'].map((preset, i) => (
                    <span
                      key={preset}
                      className={`px-3 py-1 rounded-md text-xs font-medium ${
                        i === 0
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-400 bg-dark-950/50'
                      }`}
                    >
                      {preset}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 glass rounded-xl px-4 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                </div>
                <span className="text-xs font-semibold text-white">Auto-Moderating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
