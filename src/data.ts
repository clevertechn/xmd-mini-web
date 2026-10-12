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
    description: 'Each user gets their own isolated bot worker with independent WhatsApp sessions, database, and configuration. Deploy multiple bots from one panel.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI Chatbot Integration',
    description: 'Built-in AI command with OpenAI-compatible APIs. Enable chatbot mode for auto-responses in groups and private chats.',
  },
  {
    icon: 'Coins',
    title: 'Coin Economy System',
    description: 'Earn 2 coins per successful referral after a 7-day qualification period. Spend 10 coins to deploy an extra bot. Full ledger with idempotent transactions.',
  },
  {
    icon: 'Users',
    title: 'Referral Program',
    description: 'Automatic referral tracking with qualification periods. Earn coins when your referrals connect their WhatsApp bots successfully.',
  },
  {
    icon: 'CreditCard',
    title: 'ClickPesa Payments',
    description: 'Integrated Tanzanian mobile money checkout via ClickPesa hosted checkout. Starter, Pro, and Business plans in TZS with HMAC-signed webhook verification.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Group Protection Suite',
    description: 'Anti-link, anti-tag, anti-spam, anti-viewonce, anti-call, anti-bot, anti-badword, anti-image, anti-sticker, anti-audio, anti-gif, anti-contact, and anti-forward.',
  },
  {
    icon: 'Terminal',
    title: 'Live Console & Logs',
    description: 'Real-time bot command console with live log streaming via WebSocket, severity filters, search, auto-scroll, and log archive download.',
  },
  {
    icon: 'Settings',
    title: 'Full Bot Configuration',
    description: 'Configure auto-read, auto-typing, auto-react, auto-recording, anti-call presets, custom environment variables, and mode (public, private, group, pm).',
  },
  {
    icon: 'Lock',
    title: 'Secure Session Management',
    description: 'Encrypted session storage, session ID import (BlackHat~, BlackCodex~, XMD~), QR pairing, phone-code pairing, CSRF protection, and admin audit logging.',
  },
];

export const commandCategories: CommandCategory[] = [
  {
    name: 'Admin',
    icon: 'Shield',
    color: 'from-primary-500 to-accent-500',
    commands: ['promote', 'demote', 'kick', 'kickactive', 'kickinactive', 'warn', 'resetwarn', 'mute', 'unmute', 'add', 'all', 'tagall', 'hidetag', 'tag', 'staff', 'vcf', 'clean', 'killgc', 'join', 'approve', 'reject', 'disp', 'foregn', 'grouplink', 'revokelink', 'setgname', 'setgdesc', 'getgroupdesc', 'setgroupprofile', 'getgroupprofile', 'setwelcome', 'setgoodbye', 'welcome', 'goodbye', 'autosticker', 'setsticker', 'chatbot', 'listonline', 'listoffline', 'demoteall', 'antiall', 'antikickall'],
  },
  {
    name: 'Owner',
    icon: 'Crown',
    color: 'from-gold-400 to-gold-600',
    commands: ['mode', 'setprefix', 'setbotname', 'setbotpp', 'setownername', 'setownernumber', 'settimezone', 'setmenu', 'setmenuimage', 'setfont', 'setnewsletter', 'autoreact', 'autotyping', 'autorecording', 'autorecordtype', 'autostatusview', 'autostatusreact', 'autostatusemoji', 'autodownloadstatus', 'savestatus', 'tostatus', 'groupstatus', 'alwaysonline', 'readreceipts', 'anticall', 'anticallmsg', 'antidelete', 'antideletestatus', 'antiedit', 'antibug', 'viewonce', 'block', 'unblock', 'broadcast', 'forward', 'creategc', 'invite', 'leave', 'mygroups', 'newsletter', 'getsession', 'getjid', 'calllink', 'resetbot', 'restart', 'update', 'delete', 'cat', 'dgns', 'addsudo', 'removesudo', 'sudolist'],
  },
  {
    name: 'General',
    icon: 'Command',
    color: 'from-primary-400 to-accent-600',
    commands: ['alive', 'ping', 'botinfo', 'botstatus', 'owner', 'menu', 'sticker', 'circlesticker', 'crop', 'take', 'attp', 'fancytext', 'write', 'getpp', 'delpp', 'setpp', 'setprofile', 'getsettings', 'google', 'image', 'simage', 'memesearch', 'ssweb', 'telegramsticker', 'qr', 'pair', 'time', 'translate', 'tts', 'up', 'poll', 'groupinfo', 'inviteinfo', 'lid', 'myactivity', 'groupstats', 'reshare', 'antibug', 'apk', 'checkwa'],
  },
  {
    name: 'Media',
    icon: 'Film',
    color: 'from-gold-400 to-gold-600',
    commands: ['play', 'song', 'video', 'video2', 'video3', 'yts', 'lyrics', 'shazam', 'tiktok', 'tt', 'facebook', 'instagram', 'igs', 'igsc', 'twitter', 'snapchat', 'spotify', 'spotify2', 'soundcloud', 'pinterest', 'ptv', 'trim'],
  },
  {
    name: 'Tools',
    icon: 'Wrench',
    color: 'from-primary-400 to-accent-600',
    commands: ['audioeffects', 'catbox', 'clone', 'device', 'encrypt', 'enhance', 'fetch', 'git', 'imgbb', 'llama', 'mediafire', 'ocr', 'quotedinfo', 'shorturl', 'ssdesktop', 'ssrecord', 'tutorial', 'uguu'],
  },
  {
    name: 'Fun',
    icon: 'Gamepad2',
    color: 'from-accent-500 to-primary-700',
    commands: ['ship', 'truth', 'dare', 'joke', 'meme', 'memesearch', 'quote', 'fact', 'question', 'wyr', 'pickupline', 'complimentry', 'flirt', 'insult', 'gayrate', 'paranoia', 'pies', 'bomb', 'tictactoe', 'wasted'],
  },
  {
    name: 'Convert',
    icon: 'RefreshCw',
    color: 'from-gold-500 to-gold-600',
    commands: ['converter', 'docconvert', 'togif'],
  },
  {
    name: 'Design',
    icon: 'Palette',
    color: 'from-gold-400 to-gold-500',
    commands: ['aqualogo', 'bloodlogo', 'bronzelogo', 'chromelogo', 'copperlogo', 'crystallogo', 'darkmagiclogo', 'diamondlogo', 'dragonlogo', 'firelogo', 'glowlogo', 'goldlogo', 'gradientlogo', 'iceglowlogo', 'icelogo', 'lightninglogo', 'logomenu', 'matrixlogo', 'moonlogo', 'neonlogo', 'phoenixlogo', 'platinumlogo', 'rainbowlogo', 'shadowlogo', 'silverlogo', 'smokelogo', 'steellogo', 'sunlogo', 'titaniumlogo', 'wizardlogo'],
  },
  {
    name: 'Text Maker',
    icon: 'Type',
    color: 'from-primary-300 to-accent-400',
    commands: ['1917', 'arena', 'blackpink', 'devil', 'fire', 'glitch', 'hacker', 'ice', 'impressive', 'leaves', 'light', 'matrix', 'metallic', 'neon', 'purple', 'sand', 'snow', 'thunder'],
  },
  {
    name: 'AI',
    icon: 'BrainCircuit',
    color: 'from-accent-400 to-primary-600',
    commands: ['ai'],
  },
  {
    name: 'AI Video',
    icon: 'Video',
    color: 'from-accent-300 to-primary-500',
    commands: ['ephotoVideo', 'introvideo', 'lightningpubg', 'lovevideo', 'tigervideo', 'videogen', 'videomenu'],
  },
  {
    name: 'Ephoto360',
    icon: 'Sparkles',
    color: 'from-primary-500 to-primary-700',
    commands: ['ephoto360'],
  },
  {
    name: 'Utility',
    icon: 'Calculator',
    color: 'from-accent-300 to-primary-500',
    commands: ['calc', 'pin', 'translate', 'wame', 'weather'],
  },
  {
    name: 'Anime',
    icon: 'Sparkles',
    color: 'from-primary-300 to-accent-400',
    commands: ['hneko', 'hwaifu', 'konachan', 'megumin', 'milf', 'random', 'sfw'],
  },
  {
    name: 'Movies',
    icon: 'Clapperboard',
    color: 'from-accent-400 to-accent-600',
    commands: ['movie'],
  },
  {
    name: 'Sports',
    icon: 'Trophy',
    color: 'from-accent-400 to-primary-600',
    commands: ['sports'],
  },
  {
    name: 'Religion',
    icon: 'BookOpen',
    color: 'from-primary-500 to-primary-700',
    commands: ['holybook'],
  },
  {
    name: 'Stalker',
    icon: 'Search',
    color: 'from-primary-600 to-dark-700',
    commands: ['gitstalk', 'igstalk', 'ipstalk', 'npmstalk', 'stalkermenu', 'tiktokstalk', 'twitterstalk', 'wachannel'],
  },
  {
    name: 'Notes',
    icon: 'StickyNote',
    color: 'from-gold-400 to-gold-600',
    commands: ['addnote', 'mynote'],
  },
  {
    name: 'Reaction',
    icon: 'Heart',
    color: 'from-accent-500 to-primary-600',
    commands: ['reactions'],
  },
];

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '10,000',
    period: 'TZS / month',
    description: 'Perfect for personal use and getting started with your own WhatsApp bot.',
    features: ['1 WhatsApp bot instance', 'All 290+ commands unlocked', 'Basic group management', 'Live console access', 'Community support'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '25,000',
    period: 'TZS / month',
    description: 'For power users who need more bots and advanced management features.',
    features: ['3 WhatsApp bot instances', 'All 290+ commands unlocked', 'Advanced anti-spam & anti-link', 'AI chatbot enabled', 'Coin economy access', 'Priority support'],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Business',
    price: '50,000',
    period: 'TZS / month',
    description: 'Built for teams and businesses managing multiple WhatsApp accounts.',
    features: ['10 WhatsApp bot instances', 'All 290+ commands unlocked', 'Full group protection suite', 'AI chatbot + image generation', 'Coin economy + referral rewards', 'Admin dashboard access', 'Dedicated support'],
    highlighted: false,
  },
];

export const stats: StatsItem[] = [
  { value: '290+', label: 'Commands Available' },
  { value: '20', label: 'Command Categories' },
  { value: '3', label: 'Subscription Plans' },
  { value: '24/7', label: 'Bot Uptime' },
];

export const groupFeatures = [
  { name: 'Anti-Link', description: 'Auto-delete messages containing WhatsApp or external links', enabled: true },
  { name: 'Anti-Tag', description: 'Block unwanted tag mentions and mass tagging', enabled: true },
  { name: 'Anti-Spam', description: 'Rate-limit messages per user with configurable thresholds (5 msgs / 5s)', enabled: true },
  { name: 'Anti-ViewOnce', description: 'Capture and forward view-once media before it disappears', enabled: true },
  { name: 'Anti-Call', description: 'Decline calls and send custom auto-reply with 5 preset messages', enabled: true },
  { name: 'Anti-Badword', description: 'Filter profanity with configurable warning system (max 3 warnings)', enabled: true },
  { name: 'Welcome System', description: 'Custom welcome messages with user avatars and group info', enabled: true },
  { name: 'Anti-Bot', description: 'Detect and remove other bots from your groups automatically', enabled: true },
  { name: 'Anti-Image', description: 'Block image messages in restricted groups', enabled: true },
  { name: 'Anti-Sticker', description: 'Block sticker spam in groups', enabled: true },
  { name: 'Anti-Audio', description: 'Block audio/voice note messages', enabled: true },
  { name: 'Anti-Gif', description: 'Block GIF messages in groups', enabled: true },
  { name: 'Anti-Contact', description: 'Block contact card sharing', enabled: true },
  { name: 'Anti-Forward', description: 'Block forwarded messages from other chats', enabled: true },
  { name: 'Anti-GroupMention', description: 'Block @everyone style group mentions', enabled: true },
  { name: 'Anti-GroupStatus', description: 'Block status updates in groups', enabled: true },
  { name: 'Goodbye System', description: 'Custom goodbye messages when members leave', enabled: true },
  { name: 'Auto-Sticker', description: 'Automatically convert images to stickers', enabled: true },
];

export interface UseCase {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export const useCases: UseCase[] = [
  { icon: 'Headphones', title: 'Customer Support', description: 'Automate responses to common customer questions with AI chatbot mode, route complex issues to human agents, and provide 24/7 support without hiring additional staff.', benefits: ['AI auto-reply to FAQs', 'Chatbot mode for groups', '24/7 availability', 'Reduce response time by 80%'] },
  { icon: 'Megaphone', title: 'Marketing & Promotions', description: 'Broadcast promotional messages, product launches, and special offers to your entire customer base with scheduled campaigns and delivery tracking.', benefits: ['Broadcast to all contacts', 'Hidetag for clean group posts', 'Delivery receipts', 'Customer segmentation'] },
  { icon: 'ShoppingCart', title: 'Order Management', description: 'Let customers place orders, track deliveries, and receive order confirmations directly through WhatsApp — no app or website required.', benefits: ['Automated order taking', 'Real-time order tracking', 'Payment confirmations via ClickPesa', 'Receipt generation'] },
  { icon: 'CalendarClock', title: 'Appointments & Bookings', description: 'Allow clients to book, reschedule, and cancel appointments through WhatsApp. Send automatic reminders to reduce no-shows.', benefits: ['Automated booking flow', 'Reminder notifications', 'Calendar sync', 'Reduce no-shows by 60%'] },
  { icon: 'GraduationCap', title: 'Education & Training', description: 'Deliver course materials, quizzes, and progress updates to students via WhatsApp groups. Perfect for online schools and training programs.', benefits: ['Course content delivery', 'Notes system (addnote/mynote)', 'Progress tracking', 'Student engagement analytics'] },
  { icon: 'Building2', title: 'Internal Operations', description: 'Streamline internal communication, send company announcements, and manage team coordination through dedicated WhatsApp groups with full anti-spam protection.', benefits: ['Team announcements via broadcast', 'Shift scheduling', 'Group protection suite', 'Internal notifications'] },
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
  { name: 'Amina Hassan', role: 'Owner', company: 'Kanga Boutique, Dar es Salaam', content: 'Black Hat XMD imebadilisha biashara yangu. Wateja wengi sasa wanaagiza moja kwa moja kupitia WhatsApp. Nimongeza mauzo kwa 40% ndani ya miezi mitatu.', rating: 5, avatar: 'AH' },
  { name: 'Joseph Mwakyusa', role: 'Marketing Manager', company: 'TechHub Tanzania', content: 'Tulianza kutumia XMD kwa matangazo ya biashara. Sasa tunafikia wateja 5,000+ kwa pindi moja. Mfumo wa coin economy umefanya iwe rahisi kuongeza bots zetu.', rating: 5, avatar: 'JM' },
  { name: 'Fatma Said', role: 'Founder', company: 'QuickFix Services, Arusha', content: 'Wateja wetu wanapenda kushughulikia kila kitu kupitia WhatsApp. XMD inatusaidia kupokea maombi, kuthibitisha, na kutuma ukumbusho. Hakuna tena wateja waliopotea.', rating: 5, avatar: 'FS' },
  { name: 'David Kimaro', role: 'Director', company: 'Kili Tours & Safaris', content: 'Tunatumia XMD kwa safari bookings. Wateja kutoka nje wanapata majibu haraka, hata wakati timu yetu iko shambani. Hii imesaidia sana kushinda wateja wapya.', rating: 5, avatar: 'DK' },
  { name: 'Grace Mushi', role: 'CEO', company: 'Grace Beauty Spa, Mwanza', content: 'System ya miadi inafanya kazi vizuri sana. Wateza wanajibitisha wenyewe, na ukumbusho unawasili moja kwa moja. Idadi ya wateza wasiojitokeza imepungua sana.', rating: 5, avatar: 'GM' },
  { name: 'Ibrahim Omar', role: 'Operations Lead', company: 'Zanzibar Fresh Foods', content: 'Tunatumia XMD kupokea order za bidhaa kutoka kwa maduka 30+. Kila order inarekodiwa na kuthibitishwa moja kwa moja. Mfumo huu ni neema kwa biashara yetu.', rating: 5, avatar: 'IO' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  { question: 'Je, Black Hat XMD inafanya kazi na WhatsApp Business?', answer: 'Ndiyo, XMD inafanya kazi na akaunti za WhatsApp kawaida na WhatsApp Business. Unaweza kuunganisha akaunti yako yoyote kwa kutumia phone number pairing code au QR code.' },
  { question: 'Ni muda gani inachukua kuansha bot yangu?', answer: 'Baada ya kulipia mpango wako, unaweza kuansha bot yako ndani ya dakika chache. Unahitaji tu kuomba pairing code kwa kutuma namba yako ya simu na kuingiza code hiyo kwenye WhatsApp yako.' },
  { question: 'Je, ninaweza kuwa na bots zaidi ya moja?', answer: 'Ndiyo. Kila mpango unakuja na idadi fulani ya bots (Starter: 1, Pro: 3, Business: 10). Unaweza kuongeza bots zaidi kwa kutumia coins unazopata kupitia referrals au kununua coins ziada.' },
  { question: 'Je, malipo yanafanywaje?', answer: 'Tunatumia ClickPesa, mfumo wa malapo wa simu nchini Tanzania. Unaweza kulipa kupitia M-Pesa, Tigo Pesa, Airtel Money, au Halopesa. Malapo ni ya kila mwezi na unaweza kughairi wakati wowote.' },
  { question: 'Je, bot inaweza kufanya kazi 24/7?', answer: 'Ndiyo, bot inafanya kazi masaa 24 ya siku mara kwa mara. Inaendeshwa kwenye seva zetu zenye uhakika na ina automatic restart kwa mabadiliko ya kutoweka.' },
  { question: 'Je, data yangu ni salama?', answer: 'Uhakika. Session zako zimefichwawa kwa encryption, na tunatumia CSRF protection, admin audit logging, na HMAC-signed webhook verification. Hatupati neno wala data ya wateja wako kwa mtu yeyote.' },
  { question: 'Je, ninaweza kuunganisha bot na mifumo mingine?', answer: 'Ndiyo, XMD ina custom environment variables ambazo unaweza kuweka API keys za mifumo yako. Pia ina webhook support na API ya kushirikiana na CRM, ERP, au mfumo wowote wa biashara.' },
  { question: 'Je, kuna msaada kama napata shida?', answer: 'Ndiyo. Wateja wa Starter wanapata community support, Pro wanapata priority support, na Business wanapata dedicated support na mshauri wa kibinafsi.' },
];

export const socialLinks = {
  github: 'https://github.com/clevertechn/xmd-mini',
  instagram: 'https://instagram.com/clevertechn',
  youtube: 'http://youtube.com/@clevertechn',
};
