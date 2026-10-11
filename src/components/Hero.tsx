import { ArrowRight, Terminal, Zap, Shield } from 'lucide-react';
import { stats } from '@/data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              <span className="text-xs font-medium text-dark-300 uppercase tracking-wider">Version 1.0.0 — Live</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              The Ultimate
              <br />
              <span className="text-gradient">WhatsApp Bot</span>
              <br />
              Platform
            </h1>

            <p className="text-lg text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              Deploy powerful WhatsApp bots with 200+ commands across 21 categories.
              AI chatbot, media tools, group management, coin economy, and multi-user
              deployment — all from one dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:scale-105"
              >
                Start Your Bot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#commands"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white glass rounded-xl hover:border-primary-500/40 transition-all"
              >
                <Terminal className="w-4 h-4" />
                Explore Commands
              </a>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-950/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-danger-500/80" />
                  <div className="w-3 h-3 rounded-full bg-gold-500/80" />
                  <div className="w-3 h-3 rounded-full bg-accent-500/80" />
                </div>
                <span className="text-xs text-dark-400 font-mono ml-2">black-hat-xmd@console</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-2 min-h-[320px]">
                <div className="text-dark-400">
                  <span className="text-accent-400">➜</span> <span className="text-primary-400">xmd</span> bot deployed successfully
                </div>
                <div className="text-dark-300">
                  <span className="text-accent-400">➜</span> Connecting to WhatsApp...
                </div>
                <div className="text-accent-400">
                  <span className="text-accent-400">✓</span> Session authenticated
                </div>
                <div className="text-dark-300">
                  <span className="text-accent-400">➜</span> Loading 200+ commands...
                </div>
                <div className="text-primary-400">
                  <span className="text-accent-400">✓</span> 21 command categories loaded
                </div>
                <div className="text-dark-300">
                  <span className="text-accent-400">➜</span> <span className="text-white">.menu</span>
                </div>
                <div className="text-dark-400 pl-4">
                  ┌─ BLACK HAT XMD MENU ─┐
                </div>
                <div className="text-dark-300 pl-4">
                  │ <span className="text-accent-400">Admin</span> │ <span className="text-primary-400">AI</span> │ <span className="text-gold-400">Media</span> │
                </div>
                <div className="text-dark-300 pl-4">
                  │ <span className="text-accent-400">Tools</span> │ <span className="text-primary-400">Fun</span> │ <span className="text-gold-400">Anime</span> │
                </div>
                <div className="text-dark-300 pl-4">
                  │ <span className="text-accent-400">Sports</span> │ <span className="text-primary-400">Movies</span> │ <span className="text-gold-400">More</span> │
                </div>
                <div className="text-dark-400 pl-4">
                  └──────────────────────┘
                </div>
                <div className="text-dark-300">
                  <span className="text-accent-400">➜</span> <span className="text-white">.ai tell me a joke</span>
                </div>
                <div className="text-dark-400 pl-4">
                  <span className="text-accent-400">AI:</span> Why don't programmers
                  tell jokes? They always
                  need too many threads!
                </div>
                <div className="text-accent-400 flex items-center gap-1">
                  <span className="text-accent-400">➜</span>
                  <span className="inline-block w-2 h-4 bg-accent-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold-400" />
                <span className="text-xs font-semibold text-white">Instant Deploy</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 shadow-xl animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-400" />
                <span className="text-xs font-semibold text-white">Secure Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
