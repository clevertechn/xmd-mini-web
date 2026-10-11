export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CommandCategory {
  name: string;
  icon: string;
  color: string;
  commands: string[];
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface StatsItem {
  value: string;
  label: string;
}

export const features: Feature[] = [
  {
    icon: 'Bot',
    title: 'Multi-User Bot Deployment',
    description: 'Deploy and manage multiple WhatsApp bot instances from a single dashboard. Each user gets their own isolated bot worker with independent sessions.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI-Powered Commands',
    description: 'Built-in AI chatbot integration, smart responses, image generation, and video processing capabilities powered by external AI APIs.',
  },
  {
    icon: 'Coins',
    title: 'Coin Economy System',
    description: 'Users earn coins through referrals, spend them to deploy bots, and admins can grant coins. Full ledger tracking with idempotent transactions.',
  },
  {
    icon: 'Users',
    title: 'Referral Program',
    description: 'Automatic referral tracking with 7-day qualification periods. Earn 2 coins per successful referral that connects their WhatsApp bot.',
  },
  {
    icon: 'CreditCard',
    title: 'ClickPesa Payments',
    description: 'Integrated Tanzanian mobile money checkout via ClickPesa hosted checkout. Supports Starter, Pro, and Business subscription plans in TZS.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Group Management',
    description: 'Anti-link, anti-tag, anti-spam, anti-viewonce, anti-call, welcome/goodbye messages, badword filtering, and more group protection tools.',
  },
  {
    icon: 'Terminal',
    title: 'Live Console & Logs',
    description: 'Real-time bot command console with live log streaming, severity filters, search, auto-scroll, and CSV export capabilities.',
  },
  {
    icon: 'Settings',
    title: 'Full Bot Configuration',
    description: 'Configure auto-read, auto-typing, auto-react, anti-call presets, custom environment variables, and all group settings from the web panel.',
  },
  {
    icon: 'Lock',
    title: 'Secure Session Management',
    description: 'Encrypted session storage, secure session ID import/export, CSRF protection, and admin audit logging for all sensitive operations.',
  },
];

export const commandCategories: CommandCategory[] = [
  {
    name: 'Admin',
    icon: 'Shield',
    color: 'from-primary-500 to-accent-500',
    commands: ['promote', 'demote', 'kick', 'warn', 'groupinfo', 'setprofile', 'everyone'],
  },
  {
    name: 'AI',
    icon: 'BrainCircuit',
    color: 'from-accent-400 to-primary-600',
    commands: ['ai', 'gpt', 'dalle', 'chatbot', 'translate', 'imagine'],
  },
  {
    name: 'Media',
    icon: 'Film',
    color: 'from-gold-400 to-gold-600',
    commands: ['play', 'ytmp3', 'ytmp4', 'facebook', 'tiktok', 'instagram', 'media'],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    color: 'from-primary-400 to-accent-600',
    commands: ['sticker', 'toimg', 'tomp3', 'tovn', 'rename', 'pdf', 'docx'],
  },
  {
    name: 'Fun',
    icon: 'Gamepad2',
    color: 'from-accent-500 to-primary-700',
    commands: ['ship', 'character', 'truth', 'dare', 'joke', 'meme', 'quote'],
  },
  {
    name: 'Convert',
    icon: 'RefreshCw',
    color: 'from-gold-500 to-gold-600',
    commands: ['sticker', 'toimage', 'tovideo', 'togif', 'bass', 'slow', 'reverse'],
  },
  {
    name: 'Anime',
    icon: 'Sparkles',
    color: 'from-primary-300 to-accent-400',
    commands: ['anime', 'manga', 'character', 'waifu', 'neko', 'foxgirl'],
  },
  {
    name: 'Sports',
    icon: 'Trophy',
    color: 'from-accent-300 to-primary-500',
    commands: ['livescore', 'fixtures', 'standings', 'stats', 'cricket', 'football'],
  },
  {
    name: 'Design',
    icon: 'Palette',
    color: 'from-gold-400 to-gold-500',
    commands: ['logo', 'banner', 'neon', 'glitch', 'fire', 'style'],
  },
  {
    name: 'Religion',
    icon: 'BookOpen',
    color: 'from-primary-500 to-primary-700',
    commands: ['quran', 'hadith', 'prayer', 'verse', 'audio'],
  },
  {
    name: 'Movies',
    icon: 'Clapperboard',
    color: 'from-accent-400 to-accent-600',
    commands: ['movie', 'series', 'cast', 'rating', 'trailer', 'search'],
  },
  {
    name: 'Stalker',
    icon: 'Search',
    color: 'from-primary-600 to-dark-700',
    commands: ['github', 'instagram', 'tiktok', 'twitter', 'profile'],
  },
];

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '10,000',
    period: 'TZS / month',
    description: 'Perfect for personal use and getting started with your own WhatsApp bot.',
    features: [
      '1 WhatsApp bot instance',
      'All 200+ commands unlocked',
      'Basic group management',
      'Live console access',
      'Community support',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '25,000',
    period: 'TZS / month',
    description: 'For power users who need more bots and advanced management features.',
    features: [
      '3 WhatsApp bot instances',
      'All 200+ commands unlocked',
      'Advanced anti-spam & anti-link',
      'AI chatbot enabled',
      'Coin economy access',
      'Priority support',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '50,000',
    period: 'TZS / month',
    description: 'Built for teams and businesses managing multiple WhatsApp accounts.',
    features: [
      '10 WhatsApp bot instances',
      'All 200+ commands unlocked',
      'Full group protection suite',
      'AI chatbot + image generation',
      'Coin economy + referral rewards',
      'Admin dashboard access',
      'Dedicated support',
    ],
    highlighted: false,
  },
];

export const stats: StatsItem[] = [
  { value: '200+', label: 'Commands Available' },
  { value: '21', label: 'Command Categories' },
  { value: '3', label: 'Subscription Plans' },
  { value: '24/7', label: 'Bot Uptime' },
];

export const groupFeatures = [
  { name: 'Anti-Link', description: 'Auto-delete messages containing links', enabled: true },
  { name: 'Anti-Tag', description: 'Block unwanted tag mentions', enabled: true },
  { name: 'Anti-Spam', description: 'Rate-limit messages per user with configurable thresholds', enabled: true },
  { name: 'Anti-ViewOnce', description: 'Capture and forward view-once media', enabled: true },
  { name: 'Anti-Call', description: 'Decline calls and send custom auto-reply messages', enabled: true },
  { name: 'Anti-Badword', description: 'Filter profanity with warning system', enabled: true },
  { name: 'Welcome System', description: 'Custom welcome messages with user avatars', enabled: true },
  { name: 'Anti-Bot', description: 'Detect and remove other bots from groups', enabled: true },
];

export interface UseCase {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export const useCases: UseCase[] = [
  {
    icon: 'Headphones',
    title: 'Customer Support',
    description: 'Automate responses to common customer questions, route complex issues to human agents, and provide 24/7 support without hiring additional staff.',
    benefits: ['Auto-reply to FAQs', 'Smart ticket routing', '24/7 availability', 'Reduce response time by 80%'],
  },
  {
    icon: 'Megaphone',
    title: 'Marketing & Promotions',
    description: 'Broadcast promotional messages, product launches, and special offers to your entire customer base with scheduled campaigns and delivery tracking.',
    benefits: ['Bulk broadcast campaigns', 'Scheduled messaging', 'Delivery receipts', 'Customer segmentation'],
  },
  {
    icon: 'ShoppingCart',
    title: 'Order Management',
    description: 'Let customers place orders, track deliveries, and receive order confirmations directly through WhatsApp — no app or website required.',
    benefits: ['Automated order taking', 'Real-time order tracking', 'Payment confirmations', 'Receipt generation'],
  },
  {
    icon: 'CalendarClock',
    title: 'Appointments & Bookings',
    description: 'Allow clients to book, reschedule, and cancel appointments through WhatsApp. Send automatic reminders to reduce no-shows.',
    benefits: ['Automated booking flow', 'Reminder notifications', 'Calendar sync', 'Reduce no-shows by 60%'],
  },
  {
    icon: 'GraduationCap',
    title: 'Education & Training',
    description: 'Deliver course materials, quizzes, and progress updates to students via WhatsApp groups. Perfect for online schools and training programs.',
    benefits: ['Course content delivery', 'Automated quizzes', 'Progress tracking', 'Student engagement analytics'],
  },
  {
    icon: 'Building2',
    title: 'Internal Operations',
    description: 'Streamline internal communication, send company announcements, and manage team coordination through dedicated WhatsApp groups.',
    benefits: ['Team announcements', 'Shift scheduling', 'Report collection', 'Internal notifications'],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Amina Hassan',
    role: 'Owner',
    company: 'Kanga Boutique, Dar es Salaam',
    content: 'Black Hat XMD imebadilisha biashara yangu. Wateja wengi sasa wanaagiza moja kwa moja kupitia WhatsApp. Nimongeza mauzo kwa 40% ndani ya miezi mitatu.',
    rating: 5,
    avatar: 'AH',
  },
  {
    name: 'Joseph Mwakyusa',
    role: 'Marketing Manager',
    company: 'TechHub Tanzania',
    content: 'Tulianza kutumia XMD kwa matangazo ya biashara. Sasa tunafikia wateja 5,000+ kwa pindi moja. Mfumo wa coin economy umefanya iwe rahisi kuongeza bots zetu.',
    rating: 5,
    avatar: 'JM',
  },
  {
    name: 'Fatma Said',
    role: 'Founder',
    company: 'QuickFix Services, Arusha',
    content: 'Wateja wetu wanapenda kushughulikia kila kitu kupitia WhatsApp. XMD inatusaidia kupokea maombi, kuthibitisha, na kutuma ukumbusho. Hakuna tena wateja waliopotea.',
    rating: 5,
    avatar: 'FS',
  },
  {
    name: 'David Kimaro',
    role: 'Director',
    company: 'Kili Tours & Safaris',
    content: 'Tunatumia XMD kwa safari bookings. Wateja kutoka nje wanapata majibu haraka, hata wakati timu yetu iko shambani. Hii imesaidia sana kushinda wateja wapya.',
    rating: 5,
    avatar: 'DK',
  },
  {
    name: 'Grace Mushi',
    role: 'CEO',
    company: 'Grace Beauty Spa, Mwanza',
    content: 'System ya miadi inafanya kazi vizuri sana. Wateza wanajibitisha wenyewe, na ukumbusho unawasili moja kwa moja. Idadi ya wateza wasiojitokeza imepungua sana.',
    rating: 5,
    avatar: 'GM',
  },
  {
    name: 'Ibrahim Omar',
    role: 'Operations Lead',
    company: 'Zanzibar Fresh Foods',
    content: 'Tunatumia XMD kupokea order za bidhaa kutoka kwa maduka 30+. Kila order inarekodiwa na kuthibitishwa moja kwa moja. Mfumo huu ni neema kwa biashara yetu.',
    rating: 5,
    avatar: 'IO',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Je, Black Hat XMD inafanya kazi na WhatsApp Business?',
    answer: 'Ndiyo, XMD inafanya kazi na akaunti za WhatsApp kawaida na WhatsApp Business. Unaweza kuunganisha akaunti yako yoyote na bot itafanya kazi mara moja.',
  },
  {
    question: 'Ni muda gani inachukua kuansha bot yangu?',
    answer: 'Baada ya kulipia mpango wako, unaweza kuansha bot yako ndani ya dakika chache. Unahitaji tu kuskan QR code kutoka WhatsApp yako na bot itaanza kufanya kazi mara moja.',
  },
  {
    question: 'Je, ninaweza kuwa na bots zaidi ya moja?',
    answer: 'Ndiyo. Kila mpango unakuja na idadi fulani ya bots (Starter: 1, Pro: 3, Business: 10). Unaweza kuongeza bots zaidi kwa kutumia coins unazopata kupitia referrals au kununua coins ziada.',
  },
  {
    question: 'Je, malipo yanafanywaje?',
    answer: 'Tunatumia ClickPesa, mfumo wa malipo wa simu nchini Tanzania. Unaweza kulipa kupitia M-Pesa, Tigo Pesa, Airtel Money, au Halopesa. Malipo ni ya kila mwezi na unaweza kughairi wakati wowote.',
  },
  {
    question: 'Je, bot inaweza kufanya kazi 24/7?',
    answer: 'Ndiyo, bot inafanya kazi masaa 24 ya siku mara kwa mara. Inaendeshwa kwenye seva zetu zenye uhakika, hivyo hupotezi wateja hata wakati unalala.',
  },
  {
    question: 'Je, data yangu ni salama?',
    answer: 'Uhakika. Session zako zimefichwawa kwa encryption, na tunatumia CSRF protection na admin audit logging. Hatupati neno wala data ya wateja wako kwa mtu yeyote.',
  },
  {
    question: 'Je, ninaweza kukusisha bot na mifumo mingine?',
    answer: 'Ndiyo, XMD ina API na webhook support ambayo inakuwezesha kuunganisha na CRM, ERP, au mfumo wowote wa biashara. Timu yetu inaweza kukusaidia kwenye ushirikiano huo.',
  },
  {
    question: 'Je, kuna msaada kama napata shida?',
    answer: 'Ndiyo. Wateja wa Starter wanapata community support, Pro wanapata priority support, na Business wanapata dedicated support na mshauri wa kibinafsi.',
  },
];

export const socialLinks = {
  github: 'https://github.com/clevertechn/black-hat-xmd',
  instagram: 'https://instagram.com/clevertechn',
  youtube: 'http://youtube.com/@clevertechn',
};
