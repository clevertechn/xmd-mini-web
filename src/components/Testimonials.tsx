import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-gold-400 uppercase tracking-wider mb-4">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by
            <br />
            <span className="text-gradient-gold">Businesses Across Tanzania</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Hear from business owners who transformed their operations with Black Hat XMD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass glass-hover rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500/20" />
              </div>

              <p className="text-sm text-dark-200 leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-bold text-white">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-dark-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
