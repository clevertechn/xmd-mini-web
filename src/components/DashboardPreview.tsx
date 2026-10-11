import { LayoutDashboard, Bot, Coins, FileText, Settings, CreditCard, Terminal, BarChart3 } from 'lucide-react';

const dashboardFeatures = [
  { icon: LayoutDashboard, title: 'Dashboard Overview', description: 'Monitor all your bot instances, connection status, and key metrics at a glance.' },
  { icon: Bot, title: 'Bot Management', description: 'Start, stop, restart, and deploy bot instances with one click from the panel.' },
  { icon: Coins, title: 'Coin Wallet', description: 'Track your coin balance, referral earnings, and transaction history in real-time.' },
  { icon: CreditCard, title: 'Billing & Subscriptions', description: 'Manage your subscription plan, view billing history, and checkout via ClickPesa.' },
  { icon: Terminal, title: 'Live Console', description: 'Send commands directly to your bot and watch logs stream in real-time.' },
  { icon: FileText, title: 'Bot Logs', description: 'Searchable, filterable log archive with severity levels and CSV export.' },
  { icon: Settings, title: 'Bot Settings', description: 'Configure auto-read, auto-typing, anti-call, environment variables, and more.' },
  { icon: BarChart3, title: 'Admin Analytics', description: 'Admin-only dashboard with user counts, wallet totals, payment ledgers, and audit logs.' },
];

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary-400 uppercase tracking-wider mb-4">
            Web Panel
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Manage Everything from
            <br />
            <span className="text-gradient">One Dashboard</span>
          </h2>
          <p className="text-dark-300 text-lg">
            A full-featured web panel to control your bots, track coins, manage billing,
            and configure every aspect of your WhatsApp bot platform.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10 mb-12">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-950/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-danger-500/80" />
              <div className="w-3 h-3 rounded-full bg-gold-500/80" />
              <div className="w-3 h-3 rounded-full bg-accent-500/80" />
            </div>
            <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-dark-950/50 text-xs text-dark-400 font-mono">
              https://xmd.clevertechn.com/dashboard
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="grid lg:grid-cols-[200px_1fr] min-h-[400px]">
            {/* Sidebar */}
            <div className="border-r border-white/5 p-4 bg-dark-950/30 hidden lg:block">
              <div className="flex items-center gap-2 mb-6 px-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                  <span className="font-display font-bold text-white text-sm">X</span>
                </div>
                <span className="font-display font-semibold text-white text-sm">XMD Panel</span>
              </div>
              <div className="space-y-1">
                {['Dashboard', 'Bots', 'Console', 'Billing', 'Settings', 'Coins'].map((item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
                      i === 0 ? 'bg-primary-500/15 text-primary-400 font-medium' : 'text-dark-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Dashboard Overview</h3>
                  <p className="text-xs text-dark-400">Welcome back, Anon User</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-primary-500/15 text-xs font-medium text-primary-400">
                    10 Coins
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">AU</span>
                  </div>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Active Bots', value: '2', color: 'text-accent-400' },
                  { label: 'Commands Run', value: '1,247', color: 'text-primary-400' },
                  { label: 'Groups', value: '15', color: 'text-gold-400' },
                  { label: 'Referrals', value: '8', color: 'text-accent-400' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-dark-950/50 border border-white/5">
                    <div className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Bot list */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Your Bots</div>
                {['Main Bot', 'Support Bot'].map((bot, i) => (
                  <div key={bot} className="flex items-center justify-between p-3 rounded-lg bg-dark-950/50 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{bot}</div>
                        <div className="text-xs text-dark-400">+255 794 *** 700</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                      </span>
                      <span className="text-xs text-accent-400 font-medium">Online</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dashboardFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass glass-hover rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-primary-500/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-dark-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
