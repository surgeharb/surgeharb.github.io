import { StaticImageData } from 'next/image';

export interface RowCardContent {
  link: string;
  title: string;
  subtitle?: string;
  additionalText?: string;
  additionalEmoji?: string;
  image: StaticImageData | string;
  location?: string;
}
