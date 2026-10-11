import { Github, Instagram, Youtube, Heart } from 'lucide-react';
import { socialLinks } from '@/data';

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'Group Tools', href: '#group-tools' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Dashboard', href: '#dashboard' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="font-display font-bold text-white text-lg">X</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base">Black Hat XMD</span>
                <span className="text-[10px] text-dark-400 uppercase tracking-widest">Clever Tech Nexus</span>
              </div>
            </div>
            <p className="text-sm text-dark-400 max-w-xs leading-relaxed">
              The ultimate WhatsApp multi-command bot platform. Built by Clever Tech Nexus
              for the African tech community.
            </p>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-white hover:border-primary-500/30 transition-all" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-400">
            &copy; {new Date().getFullYear()} Clever Tech Nexus. All rights reserved.
          </p>
          <p className="text-xs text-dark-400 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-danger-500 fill-current" /> for the WhatsApp community
          </p>
        </div>
      </div>
    </footer>
  );
}
