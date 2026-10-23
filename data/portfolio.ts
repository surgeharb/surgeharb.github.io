export const profile = {
  name: 'Serge Harb',
  role: 'Senior AI Platform Software Engineer',
  email: 'hello@sergeharb.com',
  website: 'https://sergeharb.com',
  github: 'https://github.com/surgeharb',
  description:
    'Serge Harb builds AI platforms, business software, mobile apps and websites. Senior AI Platform Software Engineer at Preply.',
};

export const projects = [
  {
    title: 'CashBook & Servicebook',
    description:
      'Bookkeeping and restaurant software for small businesses. Building a platform that connects accounting, inventory workflows and the shopping experience.',
  },
  {
    title: 'Snatched',
    description: 'A mobile marketplace for buying and selling second-hand fashion, with item listings, buyer and seller messaging, and order tracking.',
    href: 'https://snatchedapp.com',
    appStore: 'https://apps.apple.com/app/snatched-buy-sell-fashion/id6469592139',
  },
  {
    title: 'Roundhouse',
    description:
      'A self-hosted alternative to Railway for deploying apps, databases and agents. Infrastructure you can run and control yourself.',
  },
  {
    title: 'OpenCollectibles',
    description:
      'An AI-first platform for trading cards and collectibles management, with collection tracking, visual binders and an API for agents.',
  },
  {
    title: 'Layali Beirut',
    description:
      'A restaurant website I build and maintain for an active client, helping customers discover the restaurant and its food.',
    href: 'https://www.layalibeirut.com',
  },
  {
    title: 'Perla Kitchen',
    description:
      'A catering website I build and maintain for an active client, with menus and a weekly meal ordering experience.',
    href: 'https://www.perla.kitchen',
  },
] satisfies { title: string; description: string; href?: string; appStore?: string }[];

export const stack = [
  'Python', 'TypeScript', 'Node.js', 'Django', 'React', 'PostgreSQL', 'AWS',
];

export function projectEnquiry(title: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about ${title}`)}`;
}
