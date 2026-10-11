import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { socialLinks } from '@/data';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Commands', href: '#commands' },
  { label: 'Group Tools', href: '#group-tools' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Dashboard', href: '#dashboard' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <span className="font-display font-bold text-white text-lg">X</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-base">Black Hat XMD</span>
              <span className="text-[10px] text-dark-400 uppercase tracking-widest">Clever Tech Nexus</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#pricing"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg hover:shadow-lg hover:shadow-primary-500/40 transition-all hover:scale-105"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden glass border-t border-white/5 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-medium text-dark-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="mx-4 mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
