import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar-new';

const ToolsCard = () => {
  const tools = [
    {
      link: '/tools/wallets-manager',
      src: 'https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54',
      alt: 'Wallet',
      name: 'Multi-Wallet Manager',
    },
    {
      link: '#',
      src: 'https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54',
      alt: 'Wallet',
      name: 'Wallet Tracker',
    },
    {
      link: '#',
      src: 'https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54',
      alt: 'Twitter',
      name: 'Twitter Banner Generator',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      link: 'https://bulksender.avasharks.io',
      src: 'https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72',
      alt: 'AvaSharks',
      name: 'Avalanche Ava Sharks - NFTs Bulk Sender',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  return (
    <Card className="flex flex-col gap-2">
      <div className="flex align-center">
        <Image src="/svg/archive.svg" alt="apps" width="24" height="24" />
        <h6 className="title">Awesome Tools</h6>
      </div>
      {tools.map((tool) => (
        <a key={tool.name} href={tool.link} target={tool.target} rel={tool.rel}>
          <Card className="flex gap-2 items-center py-6">
            <Avatar>
              <AvatarImage src={tool.src} alt={tool.alt} />
              <AvatarFallback>{tool.alt.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex align-center">{tool.name}</div>
          </Card>
        </a>
      ))}
    </Card>
  );
};

export { ToolsCard };
