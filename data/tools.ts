import { Tool } from '@/models/Tool';

export const featuredToolsList: Tool[] = [
  {
    link: 'https://scriptbook.vercel.app',
    emoji: '📓',
    alt: 'Script Book',
    name: 'Script Book',
    opensNewTab: true,
    badge: 'New!',
  },
  {
    link: 'https://packapp.vercel.app',
    emoji: '🧳',
    alt: 'Pack App',
    name: 'Pack App',
    opensNewTab: true,
    badge: 'Assistant',
  },
];

export const toolsList: Tool[] = [
  {
    link: 'https://market.strapi.io/plugins/strapi-plugin-graphs-builder',
    emoji: '📊',
    alt: 'strapi plugin graphs builder',
    name: 'Strapi Graphs Builder',
    opensNewTab: true,
    badge: 'Plugin',
  },
  {
    link: '#',
    emoji: '🌱',
    alt: 'personal growth assistant',
    name: 'Personal Growth',
    opensNewTab: false,
    badge: 'Assistant',
  },
  {
    link: '#',
    emoji: '📝',
    alt: 'interviewer copilot - assistant',
    name: 'Interviewer Copilot',
    opensNewTab: false,
    badge: 'Assistant',
  },
  {
    link: '#',
    emoji: '🎁',
    alt: 'gift card generator',
    name: 'Gift Card Generator',
    opensNewTab: false,
    badge: 'Utility',
  },
  {
    link: '#',
    emoji: '💸',
    alt: 'web3 pay as you go',
    name: 'Web3 Pay as you Go',
    opensNewTab: false,
    badge: 'Utility',
  },
];
