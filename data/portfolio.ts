export const profile = {
  name: 'Serge Harb',
  role: 'Senior AI Platform Software Engineer',
  email: 'hello@sergeharb.com',
  website: 'https://sergeharb.com',
  github: 'https://github.com/surgeharb',
  description:
    'Serge Harb helps businesses grow with practical software and AI workflows. Senior AI Platform Software Engineer at Preply.',
};

export const projects = [
  {
    title: 'CashBook',
    description:
      'AI-powered bookkeeping, invoicing and accounting for small businesses. Designed to reduce manual work to almost none.',
  },
  {
    title: 'Roundhouse',
    description:
      'A self-hosted alternative to Railway for apps, databases and agents. Built to help teams adopt AI workflows, automate routine operations and focus on shipping products that grow their business.',
  },
  {
    title: 'OpenCollectibles',
    description:
      'An AI-first platform for trading cards and collectibles, with visual binders, collection tracking and agent integrations. Built to reduce manual work and help collectors and card businesses manage growing collections.',
  },
  {
    title: 'Layali Beirut',
    description:
      'Helping grow Layali Beirut from an idea into a profitable restaurant, combining its website, digital operations and AI workflows to support the team and reach more customers.',
    href: 'https://layalibeirut.es',
  },
  {
    title: 'Perla Kitchen',
    description:
      'Helping grow Perla Kitchen from an idea into a profitable catering business, with online ordering and AI workflows that reduce admin work and support repeat business.',
    href: 'https://perla.kitchen',
  },
  {
    title: 'Snatched',
    description: 'A mobile marketplace for buying and selling second-hand fashion, with item listings, buyer and seller messaging, and order tracking.',
    href: 'https://snatchedapp.com',
    appStore: 'https://apps.apple.com/app/snatched-buy-sell-fashion/id6469592139',
  },
] satisfies { title: string; description: string; href?: string; appStore?: string }[];

export const stack = [
  'Python', 'TypeScript', 'Node.js', 'Django', 'React', 'PostgreSQL', 'AWS',
];

export function projectEnquiry(title: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(`Tell me about ${title}`)}`;
}
