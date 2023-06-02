import { RowCardContent } from '@/models/RowCardContent';

import PreplyImage from '@/assets/images/preply.webp';
import FiblerImage from '@/assets/images/fibler.png';
import TF961Image from '@/assets/images/tf961.png';

export const companies: RowCardContent[] = [
  {
    link: 'https://preply.com',
    image: PreplyImage,
    additionalText: 'Preply',
    title: 'AI Learning',
    subtitle: 'Software Engineer',
    location: 'Barcelona 🇪🇸',
  },
  {
    link: 'https://preply.com',
    image: PreplyImage,
    additionalText: 'Preply',
    title: 'Marketing Technology',
    subtitle: 'Software Engineer',
    location: 'Barcelona 🇪🇸',
  },
  {
    link: 'https://tf961.com',
    image: TF961Image,
    title: 'Insurance Technology',
    subtitle: 'Software Engineer',
    additionalText: 'TF961',
    location: 'Beirut 🇱🇧',
  },
  {
    link: 'https://fibler.com',
    image: FiblerImage,
    title: 'Backend and Infrastructure',
    subtitle: 'Backend Engineer',
    additionalText: 'Fibler',
    location: 'Beirut 🇱🇧',
  },
];
