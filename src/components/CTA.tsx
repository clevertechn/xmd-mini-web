import { ArrowRight } from 'lucide-react';
import { socialLinks } from '@/data';
import { Github, Instagram, Youtube } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass rounded-3xl p-10 lg:p-16 text-center overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-accent-500/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Deploy Your
              <br />
              <span className="text-gradient">WhatsApp Bot?</span>
            </h2>
            <p className="text-dark-300 text-lg max-w-xl mx-auto mb-8">
              Join the Clever Tech Nexus community. Get started in minutes with
              290+ commands, AI integration, and full group management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:scale-105"
              >
                Choose Your Plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white glass rounded-xl hover:border-primary-500/40 transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 mt-10 pt-8 border-t border-white/5">
              <span className="text-sm text-dark-400">Follow Clever Tech Nexus:</span>
              <div className="flex gap-3">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
