import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    plan: 'Pro',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const waMessage = `*Mwombaji:* ${form.name}%0A*Biashara:* ${form.business}%0A*Simu:* ${form.phone}%0A*Plan:* ${form.plan}%0A*Ujumbe:* ${form.message}`;
    window.open(`https://wa.me/255794469700?text=${waMessage}`, '_blank');
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-accent-400 uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              <span className="text-gradient">Your Business?</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Jaza fomu hapa au wasiliana nasi moja kwa moja. Timu yetu itakufanyia
              usanidi wa bot yako na kukuongoza jinsi ya kupata manufaa makubwa kwa biashara yako.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl glass">
                <div className="w-11 h-11 rounded-lg bg-primary-500/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs text-dark-400 uppercase tracking-wider">Simu</div>
                  <div className="text-sm font-medium text-white">+255 794 469 700</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass">
                <div className="w-11 h-11 rounded-lg bg-accent-500/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <div className="text-xs text-dark-400 uppercase tracking-wider">Barua Pepe</div>
                  <div className="text-sm font-medium text-white">support@clevertechn.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl glass">
                <div className="w-11 h-11 rounded-lg bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-dark-400 uppercase tracking-wider">Ofisi</div>
                  <div className="text-sm font-medium text-white">Dar es Salaam, Tanzania</div>
                </div>
              </div>

              <a
                href="https://wa.me/255794469700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/25 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-xs text-dark-400 uppercase tracking-wider">WhatsApp ya Haraka</div>
                  <div className="text-sm font-medium text-white">Tuma ujumbe moja kwa moja</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-6 lg:p-8 shadow-2xl shadow-primary-500/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Asante, {form.name || 'rafiki'}!
                </h3>
                <p className="text-dark-300 text-sm max-w-sm">
                  Ujumbe wako umepokelewa. Timu yetu itakwasiliana nawe ndani ya saa 24
                  kupitia simu au WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', business: '', phone: '', email: '', plan: 'Pro', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 text-sm font-semibold text-white glass rounded-lg hover:border-primary-500/40 transition-all"
                >
                  Tuma Ujumbe Mwingine
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Omba Biashara Yako
                </h3>
                <p className="text-sm text-dark-400 mb-6">
                  Jaza taarifa hapa na tutakupigia simu haraka.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Jina Lako
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Mfano: Amina Hassan"
                      className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:border-primary-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Jina la Biashara
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Mfano: Kanga Boutique"
                      className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:border-primary-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Namba ya Simu
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+255 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:border-primary-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-300 mb-1.5">
                      Barua Pepe (hiari)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mfano@biashara.com"
                      className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:border-primary-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-dark-300 mb-1.5">
                    Mpanga Unayopenda
                  </label>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm focus:outline-none focus:border-primary-500/40 transition-colors"
                  >
                    <option value="Starter">Starter — 10,000 TZS/mwezi</option>
                    <option value="Pro">Pro — 25,000 TZS/mwezi</option>
                    <option value="Business">Business — 50,000 TZS/mwezi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-dark-300 mb-1.5">
                    Ujumbe wako
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Eleza mahitaji yako ya biashara..."
                    className="w-full px-4 py-3 rounded-lg bg-dark-950/50 border border-white/5 text-white text-sm placeholder:text-dark-500 focus:outline-none focus:border-primary-500/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {submitting ? 'Inatuma...' : 'Tuma Ombi'}
                  {!submitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
