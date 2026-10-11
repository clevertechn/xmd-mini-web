import { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, EyeOff, LockKeyhole, User, Building2, CheckCircle2 } from 'lucide-react';
import { api, setAuth } from '@/lib/api';

type AuthMode = 'login' | 'signup';
type AuthProps = { onBack: () => void; onSuccess: () => void };

export default function Auth({ onBack, onSuccess }: AuthProps) {
  const [mode, setMode] = useState<AuthMode>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', business: '', password: '' });
  const isSignup = mode === 'signup';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const result = isSignup
      ? await api.register(form.username.trim().toLowerCase(), form.password, form.business.trim())
      : await api.login(form.username.trim().toLowerCase(), form.password);

    if (!result.ok) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setAuth(result.data.token, result.data.csrfToken);
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-500/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block px-8">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> Rudi kwenye ukurasa wa mwanzo
          </button>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
              <span className="font-display font-bold text-white text-xl">X</span>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-white">Black Hat XMD</div>
              <div className="text-[10px] text-dark-400 uppercase tracking-widest">Clever Tech Nexus</div>
            </div>
          </div>
          <h1 className="font-display text-4xl font-bold text-white leading-tight mb-5">
            Endesha biashara yako kupitia WhatsApp.
          </h1>
          <p className="text-dark-300 text-lg leading-relaxed mb-8">
            Fungua dashboard yako, unganisha bot, fuatilia hali, na derevisha WhatsApp yako bila usumbufu.
          </p>
          <div className="space-y-4">
            {['Dashboard yenye hali ya bot na WhatsApp', '290+ commands katika kategoria 20', 'Malapo salama kupitia ClickPesa'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-dark-200">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-primary-500/10">
          <button onClick={onBack} className="lg:hidden inline-flex items-center gap-2 text-sm text-dark-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Rudi
          </button>
          <div className="mb-8">
            <div className="inline-flex p-1 rounded-xl bg-dark-950/70 border border-white/5 mb-7">
              <button onClick={() => { setMode('signup'); setError(''); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isSignup ? 'bg-primary-500 text-white' : 'text-dark-400 hover:text-white'}`}>Jisajili</button>
              <button onClick={() => { setMode('login'); setError(''); }} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!isSignup ? 'bg-primary-500 text-white' : 'text-dark-400 hover:text-white'}`}>Ingia</button>
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-2">{isSignup ? 'Anza bure leo' : 'Karibu tena'}</h2>
            <p className="text-sm text-dark-400">{isSignup ? 'Unda akaunti ya biashara yako ndani ya dakika moja.' : 'Ingia kwenye XMD dashboard yako.'}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-dark-300 mb-1.5">Jina la mtumiaji (username)</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-dark-500" />
                <input
                  required
                  minLength={3}
                  maxLength={24}
                  pattern="[a-zA-Z0-9_.-]+"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="mfano: amina.boutique"
                  className="auth-input pl-10"
                />
              </div>
              <p className="text-[10px] text-dark-500 mt-1">Herufi ndogo, namba, alama ya pini, nukta au dashi. (3-24)</p>
            </div>

            {isSignup && (
              <div>
                <label className="block text-xs font-medium text-dark-300 mb-1.5">Jina la biashara</label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-dark-500" />
                  <input
                    required
                    maxLength={160}
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Kanga Boutique"
                    className="auth-input pl-10"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-dark-300 mb-1.5">Password {isSignup && '(angalau herufi 10)'}</label>
              <div className="relative">
                <LockKeyhole className="absolute left-3.5 top-3.5 w-4 h-4 text-dark-500" />
                <input
                  required
                  minLength={isSignup ? 10 : 1}
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder={isSignup ? 'Angalau herufi 10' : 'Password yako'}
                  className="auth-input pl-10 pr-10"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-3.5 text-dark-500 hover:text-white">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && <div className="rounded-lg border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-400">{error}</div>}

            <button disabled={loading} className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Inapakia...' : isSignup ? 'Fungua Akaunti' : 'Ingia kwenye Dashboard'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
          <p className="text-center text-xs text-dark-500 mt-6">Kwa kuendelea unakubali masharti ya Black Hat XMD.</p>
        </div>
      </div>
    </div>
  );
}
