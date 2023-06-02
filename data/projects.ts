import { RowCardContent } from '@/models/RowCardContent';

import PosImage from '@/assets/images/pos.png';
import EchoImage from '@/assets/images/echo.png';
import MonkeyImage from '@/assets/images/monkey.png';
import RafflorImage from '@/assets/images/rafflor.png';

export const projects: RowCardContent[] = [
  {
    link: 'https://pos-engine.vercel.app/',
    image: PosImage,
    title: 'POS Engine',
    subtitle: 'Product Owner',
    additionalEmoji: '🛒',
    location: 'Point of Sale Sass',
  },
  {
    link: 'https://jungle.aptosmonkeys.club/',
    image: MonkeyImage,
    additionalEmoji: '🌴',
    subtitle: 'Lead Developer',
    title: 'The Jungle',
    location: 'Aptos Monkeys',
  },
  {
    link: 'https://echo.aptosmonkeys.club/',
    image: EchoImage,
    additionalEmoji: '🪙',
    title: 'Echo Trading',
    subtitle: 'Lead Developer',
    location: 'Aptos Blockchain',
  },
  {
    link: 'https://rafflor.aptosmonkeys.club/',
    image: RafflorImage,
    additionalEmoji: '🐒',
    title: 'Rafflor',
    subtitle: 'Lead Developer',
    location: 'Aptos Monkeys',
  },
];
