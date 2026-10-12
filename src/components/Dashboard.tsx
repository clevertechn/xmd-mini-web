import { useEffect, useState, useCallback } from 'react';
import {
  LayoutDashboard, Bot, CreditCard, Settings, LogOut, Plus,
  Activity, Users, Zap, TrendingUp, CircleCheck, CircleAlert, X,
  Phone, RefreshCw, Power, Copy, Check,
} from 'lucide-react';
import { api, type User, type BotStatus, type Settings as BotSettings } from '@/lib/api';

type DashboardProps = { onSignOut: () => void };

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'WhatsApp', icon: Phone },
  { label: 'Settings', icon: Settings },
  { label: 'Billing', icon: CreditCard },
];

export default function Dashboard({ onSignOut }: DashboardProps) {
  const [activeView, setActiveView] = useState('Overview');
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<BotStatus | null>(null);
  const [settings, setSettings] = useState<BotSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [showPairForm, setShowPairForm] = useState(false);
  const [pairPhone, setPairPhone] = useState('');

  const loadAll = useCallback(async () => {
    const [meResult, statusResult] = await Promise.all([api.me(), api.status()]);
    if (meResult.ok) setUser(meResult.data);
    if (statusResult.ok) setStatus(statusResult.data);
    if (!loading) return;
    const settingsResult = await api.getSettings();
    if (settingsResult.ok) setSettings(settingsResult.data);
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    void loadAll();
    const interval = setInterval(async () => {
      const result = await api.status();
      if (result.ok) setStatus(result.data);
    }, 5000);
    return () => clearInterval(interval);
  }, [loadAll]);

  const handlePair = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
    const result = await api.pair(pairPhone.trim());
    if (!result.ok) { setMessage(result.error); return; }
    setMessage(result.data.message);
    setShowPairForm(false);
    setPairPhone('');
    setTimeout(async () => {
      const s = await api.status();
      if (s.ok) setStatus(s.data);
    }, 3000);
  };

  const handleResetSession = async () => {
    const result = await api.resetSession();
    if (!result.ok) { setMessage(result.error); return; }
    setMessage('WhatsApp session imefutwa.');
    const s = await api.status();
    if (s.ok) setStatus(s.data);
  };

  const handleControl = async (action: string) => {
    const result = await api.control(action);
    if (!result.ok) { setMessage(result.error); return; }
    setMessage(result.data.message);
    const s = await api.status();
    if (s.ok) setStatus(s.data);
  };

  const handleSaveSettings = async (newSettings: Partial<BotSettings>) => {
    const result = await api.saveSettings(newSettings);
    if (!result.ok) { setMessage(result.error); return; }
    setSettings(result.data.settings);
    setMessage('Mipangilio imehifadhiwa.');
  };

  const handleSaveProfile = async (businessName: string) => {
    const result = await api.saveProfile(businessName);
    if (!result.ok) { setMessage(result.error); return; }
    setUser(result.data.user);
    setMessage('Taarifa za biashara zimehifadhiwa.');
  };

  if (loading) {
    return <div className="min-h-screen bg-dark-950 text-dark-200 flex items-center justify-center"><div className="text-center"><div className="w-10 h-10 rounded-full border-2 border-primary-500 border-t-transparent animate-spin mx-auto mb-4" /><p className="text-sm text-dark-400">Inapakia dashboard...</p></div></div>;
  }

  return (
    <div className="min-h-screen bg-dark-950 text-dark-200 flex">
      <aside className="hidden lg:flex w-64 border-r border-white/5 bg-dark-950/70 flex-col p-5 fixed inset-y-0">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center"><span className="font-display font-bold text-white text-lg">X</span></div>
          <div><div className="font-display font-bold text-white">XMD Panel</div><div className="text-[10px] text-dark-500 uppercase tracking-widest">Business Console</div></div>
        </div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return <button key={item.label} onClick={() => setActiveView(item.label)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left ${activeView === item.label ? 'bg-primary-500/15 text-primary-400' : 'text-dark-400 hover:text-white hover:bg-white/5'}`}><Icon className="w-4 h-4" />{item.label}</button>;
          })}
        </nav>
        <button onClick={onSignOut} className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-dark-400 hover:text-danger-400 hover:bg-danger-500/5 transition-all"><LogOut className="w-4 h-4" />Toka</button>
      </aside>

      <main className="w-full lg:ml-64">
        <header className="sticky top-0 z-30 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div><div className="text-xs text-dark-500 mb-1">{user?.businessName || user?.username || 'Biashara yako'}</div><h1 className="font-display text-xl font-bold text-white">{activeView}</h1></div>
            <div className="flex items-center gap-3"><div className="hidden sm:block text-right"><div className="text-sm text-white font-medium">{user?.username || 'Mtumiaji'}</div><div className="text-xs text-dark-500">{status?.paired ? 'WhatsApp Connected' : 'Not connected'}</div></div><div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-sm font-bold text-white">{(user?.username || 'X').slice(0, 2).toUpperCase()}</div></div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {message && <div className="mb-6 rounded-xl border border-primary-500/30 bg-primary-500/10 px-4 py-3 text-sm text-primary-300 flex items-center justify-between"><span>{message}</span><button onClick={() => setMessage('')} className="text-primary-400 hover:text-white"><X className="w-4 h-4" /></button></div>}

          {activeView === 'Overview' && <Overview status={status} onNavigate={setActiveView} onPair={() => setShowPairForm(true)} />}
          {activeView === 'WhatsApp' && <WhatsAppView status={status} onPair={() => setShowPairForm(true)} onReset={handleResetSession} onControl={handleControl} />}
          {activeView === 'Settings' && settings && <SettingsView settings={settings} user={user} onSaveSettings={handleSaveSettings} onSaveProfile={handleSaveProfile} />}
          {activeView === 'Billing' && <BillingView />}
        </div>
      </main>

      {showPairForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="glass rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <div><h2 className="font-display text-xl font-bold text-white">Unganisha WhatsApp</h2><p className="text-xs text-dark-400 mt-1">Weka namba ya simu ya WhatsApp yako.</p></div>
              <button onClick={() => setShowPairForm(false)} className="text-dark-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handlePair} className="space-y-4">
              <input required value={pairPhone} onChange={(e) => setPairPhone(e.target.value)} placeholder="+255 7XX XXX XXX" className="auth-input" />
              <p className="text-xs text-dark-500">Namba haitumiki tena baada ya kuunganishwa. Utapata pairing code kwenye ukurasa wa WhatsApp.</p>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white font-semibold">Omba Pairing Code</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

type OverviewProps = { status: BotStatus | null; onNavigate: (view: string) => void; onPair: () => void };
function Overview({ status, onNavigate, onPair }: OverviewProps) {
  const connected = status?.paired ?? false;
  const stats = [
    { label: 'WhatsApp', value: connected ? 'Connected' : 'Offline', icon: Phone, color: connected ? 'text-accent-400' : 'text-dark-400' },
    { label: 'Worker', value: status?.processRunning ? 'Running' : 'Stopped', icon: Activity, color: status?.processRunning ? 'text-accent-400' : 'text-gold-400' },
    { label: 'Bot State', value: status?.label || 'Unknown', icon: Bot, color: 'text-primary-400' },
    { label: 'Commands', value: '290+', icon: Zap, color: 'text-gold-400' },
  ];
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div><p className="text-sm text-dark-400 mb-2">Karibu kwenye control center yako</p><h2 className="font-display text-3xl font-bold text-white">Fuatilia bot yako kwa urahisi.</h2></div>
        {!connected && <button onClick={onPair} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/20 transition-all"><Plus className="w-4 h-4" />Unganisha WhatsApp</button>}
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="glass rounded-2xl p-5"><div className="flex items-center justify-between mb-4"><div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Icon className={`w-5 h-5 ${stat.color}`} /></div><TrendingUp className="w-4 h-4 text-dark-600" /></div><div className={`font-display text-xl font-bold ${stat.color}`}>{stat.value}</div><div className="text-xs text-dark-400 mt-1">{stat.label}</div></div>; })}
      </div>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div><h3 className="font-display text-lg font-bold text-white">Hali ya WhatsApp</h3><p className="text-xs text-dark-500">Mada ya bot yako kwa sasa</p></div>
          <button onClick={() => onNavigate('WhatsApp')} className="text-sm text-primary-400 hover:text-primary-300">Soma zaidi</button>
        </div>
        {status ? (
          <div className="flex items-center justify-between p-4 rounded-xl bg-dark-950/50 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center"><Phone className="w-5 h-5 text-primary-400" /></div>
              <div><div className="text-sm font-semibold text-white">{status.number || 'Namba haijaunganishwa'}</div><div className="text-xs text-dark-500">{status.label}</div></div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className={`w-2 h-2 rounded-full ${connected ? 'bg-accent-400' : 'bg-gold-400'}`} />
              <span className={connected ? 'text-accent-400' : 'text-gold-400'}>{connected ? 'Online' : 'Pending'}</span>
            </div>
          </div>
        ) : <p className="text-sm text-dark-500">Subiri, inapakia hali...</p>}
      </div>
    </div>
  );
}

type WhatsAppViewProps = { status: BotStatus | null; onPair: () => void; onReset: () => void; onControl: (action: string) => void };
function WhatsAppView({ status, onPair, onReset, onControl }: WhatsAppViewProps) {
  const [copied, setCopied] = useState(false);
  const connected = status?.paired ?? false;

  const copyCode = () => {
    if (status?.pairingCode) {
      void navigator.clipboard.writeText(status.pairingCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      <div><h2 className="font-display text-2xl font-bold text-white">WhatsApp Connection</h2><p className="text-sm text-dark-400 mt-1">Unganisha na derevisha bot yako ya WhatsApp.</p></div>

      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${connected ? 'bg-accent-500/15' : 'bg-dark-950/50'}`}><Phone className={`w-6 h-6 ${connected ? 'text-accent-400' : 'text-dark-500'}`} /></div>
            <div><div className="text-sm font-semibold text-white">{status?.number || 'Haijaunganishwa'}</div><div className="text-xs text-dark-500">{status?.label || 'Offline'}</div></div>
          </div>
          <div className="flex items-center gap-2"><span className={`w-3 h-3 rounded-full ${connected ? 'bg-accent-400 animate-pulse' : 'bg-gold-400'}`} /><span className={`text-sm font-medium ${connected ? 'text-accent-400' : 'text-gold-400'}`}>{connected ? 'Connected' : 'Not connected'}</span></div>
        </div>

        {status?.pairingCode && !connected && (
          <div className="mb-6 rounded-xl border border-primary-500/30 bg-primary-500/10 p-5 text-center">
            <p className="text-xs text-primary-300 uppercase tracking-wider mb-2">Pairing Code Yako</p>
            <div className="font-display text-3xl font-bold text-white tracking-[0.3em] mb-3">{status.pairingCode}</div>
            <button onClick={copyCode} className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300">{copied ? <><Check className="w-4 h-4" /> Imekopiwa</> : <><Copy className="w-4 h-4" /> Kopi code</>}</button>
            <p className="text-xs text-dark-500 mt-3">Ingiza code hii kwenye WhatsApp → Settings → Linked Devices → Link with phone number.</p>
          </div>
        )}

        {status?.lastError && !connected && (
          <div className="mb-4 rounded-xl border border-danger-500/30 bg-danger-500/10 px-4 py-3 text-sm text-danger-400 flex items-center gap-2"><CircleAlert className="w-4 h-4 shrink-0" />{status.lastError}</div>
        )}

        <div className="flex flex-wrap gap-3">
          {!connected && <button onClick={onPair} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm font-semibold"><Phone className="w-4 h-4" />Omba Pairing Code</button>}
          {connected && <><button onClick={() => onControl('restart')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm font-semibold text-white hover:border-primary-500/30"><RefreshCw className="w-4 h-4" />Restart Bot</button><button onClick={() => onControl('stop')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm font-semibold text-white hover:border-danger-500/30"><Power className="w-4 h-4" />Stop Bot</button><button onClick={onReset} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm font-semibold text-danger-400 hover:border-danger-500/30"><X className="w-4 h-4" />Futa Session</button></>}
        </div>
      </div>
    </div>
  );
}

type SettingsViewProps = { settings: BotSettings; user: User | null; onSaveSettings: (s: Partial<BotSettings>) => void; onSaveProfile: (businessName: string) => void };
function SettingsView({ settings, user, onSaveSettings, onSaveProfile }: SettingsViewProps) {
  const [form, setForm] = useState(settings);
  const [businessName, setBusinessName] = useState(user?.businessName || '');

  return (
    <div className="space-y-6">
      <div><h2 className="font-display text-2xl font-bold text-white">Settings</h2><p className="text-sm text-dark-400 mt-1">Sasisha mipangilio ya bot na akaunti yako.</p></div>

      <form onSubmit={(e) => { e.preventDefault(); onSaveProfile(businessName); }} className="glass rounded-2xl p-6 max-w-2xl space-y-5">
        <h3 className="font-display text-lg font-bold text-white">Taarifa za Biashara</h3>
        <label className="block"><span className="block text-xs text-dark-400 mb-2">Jina la biashara</span><input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="auth-input" /></label>
        <button className="px-5 py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold">Hifadhi</button>
      </form>

      <form onSubmit={(e) => { e.preventDefault(); onSaveSettings(form); }} className="glass rounded-2xl p-6 max-w-2xl space-y-5">
        <h3 className="font-display text-lg font-bold text-white">Mipangilio ya Bot</h3>
        <label className="block"><span className="block text-xs text-dark-400 mb-2">Jina la bot</span><input value={form.botName} onChange={(e) => setForm({ ...form, botName: e.target.value })} className="auth-input" /></label>
        <label className="block"><span className="block text-xs text-dark-400 mb-2">Prefix ya commands</span><input value={form.prefix} onChange={(e) => setForm({ ...form, prefix: e.target.value })} className="auth-input" maxLength={5} /></label>
        <label className="block"><span className="block text-xs text-dark-400 mb-2">Mode</span><select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })} className="auth-input"><option value="public">Public (wote)</option><option value="private">Private (owner tu)</option><option value="group">Group tu</option><option value="pm">PM tu</option></select></label>
        <div className="flex items-center justify-between py-2"><span className="text-sm text-dark-300">Auto-read messages</span><button type="button" onClick={() => setForm({ ...form, autoRead: !form.autoRead })} className={`relative w-12 h-6 rounded-full transition-colors ${form.autoRead ? 'bg-primary-500' : 'bg-dark-700'}`}><span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${form.autoRead ? 'left-6' : 'left-0.5'}`} /></button></div>
        <div className="flex items-center justify-between py-2"><span className="text-sm text-dark-300">Auto-react</span><button type="button" onClick={() => setForm({ ...form, autoReact: !form.autoReact })} className={`relative w-12 h-6 rounded-full transition-colors ${form.autoReact ? 'bg-primary-500' : 'bg-dark-700'}`}><span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${form.autoReact ? 'left-6' : 'left-0.5'}`} /></button></div>
        <button className="px-5 py-3 rounded-xl bg-primary-500 text-white text-sm font-semibold">Hifadhi Mipangilio</button>
      </form>
    </div>
  );
}

function BillingView() {
  return (
    <div className="space-y-6">
      <div><h2 className="font-display text-2xl font-bold text-white">Billing</h2><p className="text-sm text-dark-400 mt-1">Manage subscription yako na malipo.</p></div>
      <div className="glass rounded-2xl p-6 max-w-2xl">
        <div className="flex items-center justify-between mb-6"><div><div className="text-xs text-dark-500 uppercase tracking-wider">Current plan</div><div className="font-display text-3xl font-bold text-white mt-1">Free Trial</div></div><CircleCheck className="w-8 h-8 text-accent-400" /></div>
        <div className="rounded-xl border border-gold-500/20 bg-gold-500/10 p-4 flex items-center gap-3"><CircleAlert className="w-5 h-5 text-gold-400 shrink-0" /><span className="text-sm text-dark-300">Malapo ya ClickPesa yataonekana hapa baada ya checkout kuunganishwa. Plani: Starter (TSh 10,000), Pro (TSh 25,000), Business (TSh 50,000) kwa mwezi.</span></div>
      </div>
    </div>
  );
}
