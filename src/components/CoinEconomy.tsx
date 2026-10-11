import { Coins, Gift, UserPlus, Clock, ArrowRight } from 'lucide-react';

export default function CoinEconomy() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: coin visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main coin */}
              <div className="relative w-64 h-64 mx-auto animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-2xl shadow-gold-500/30" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-gold-500 to-gold-400 flex items-center justify-center">
                  <Coins className="w-24 h-24 text-gold-600" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-400/50 to-transparent blur-2xl" />
              </div>

              {/* Floating info cards */}
              <div className="absolute top-0 -left-4 glass rounded-xl px-4 py-3 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent-400" />
                  <div>
                    <div className="text-xs text-dark-400">Referral Reward</div>
                    <div className="text-sm font-bold text-white">+2 Coins</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 glass rounded-xl px-4 py-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-gold-400" />
                  <div>
                    <div className="text-xs text-dark-400">Deploy Bot Cost</div>
                    <div className="text-sm font-bold text-white">10 Coins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-gold-400 uppercase tracking-wider mb-4">
              Coin Economy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Earn Coins,
              <br />
              <span className="text-gradient-gold">Deploy More Bots</span>
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Every user gets a coin wallet. Earn coins by referring friends whose bots
              stay connected for 7 days. Spend coins to deploy additional bot instances.
              Admins can grant coins manually with full audit trail.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl glass">
                <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Refer Friends</h3>
                  <p className="text-sm text-dark-300">Share your unique referral code. When someone signs up using it, they get tracked in your referral list.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass">
                <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">7-Day Qualification</h3>
                  <p className="text-sm text-dark-300">Referred users must connect their WhatsApp bot and keep it running for 7 days before coins are rewarded.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl glass">
                <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Spend to Deploy</h3>
                  <p className="text-sm text-dark-300">Each additional bot instance costs 10 coins. Every transaction is recorded in an immutable ledger with idempotency keys.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
