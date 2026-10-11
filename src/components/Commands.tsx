import { useState } from 'react';
import {
  Shield, BrainCircuit, Film, Wrench, Gamepad2, RefreshCw,
  Sparkles, Trophy, Palette, BookOpen, Clapperboard, Search,
} from 'lucide-react';
import { commandCategories } from '@/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  BrainCircuit,
  Film,
  Wrench,
  Gamepad2,
  RefreshCw,
  Sparkles,
  Trophy,
  Palette,
  BookOpen,
  Clapperboard,
  Search,
};

export default function Commands() {
  const [active, setActive] = useState(0);

  return (
    <section id="commands" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-gold-400 uppercase tracking-wider mb-4">
            Command Library
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-gradient-gold">200+ Commands</span>
            <br />
            Across 21 Categories
          </h2>
          <p className="text-dark-300 text-lg">
            From AI to media downloads, group admin tools to fun games —
            explore the full command catalog.
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Category sidebar */}
          <div className="flex flex-wrap lg:flex-col gap-2">
            {commandCategories.map((cat, index) => {
              const Icon = iconMap[cat.icon] || Wrench;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(index)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all flex-1 lg:flex-none text-left ${
                    active === index
                      ? 'glass border border-primary-500/40 text-white'
                      : 'text-dark-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0 ${active === index ? 'opacity-100' : 'opacity-50'}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Command display */}
          <div className="glass rounded-2xl p-6 lg:p-8 min-h-[300px]">
            {commandCategories.map((cat, index) => {
              if (index !== active) return null;
              const Icon = iconMap[cat.icon] || Wrench;
              return (
                <div key={cat.name} className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{cat.name}</h3>
                      <p className="text-sm text-dark-400">{cat.commands.length} commands available</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cat.commands.map((cmd) => (
                      <div
                        key={cmd}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 hover:border-primary-500/30 transition-all group cursor-default"
                      >
                        <span className="text-primary-400 font-mono text-sm">.</span>
                        <span className="text-dark-200 font-mono text-sm group-hover:text-white transition-colors">{cmd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
