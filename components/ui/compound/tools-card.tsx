import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const ToolsCard = () => {
  return (
    <Card>
      <div className="title-container flex align-center">
        <Image src="/svg/archive.svg" alt="apps" width="24" height="24" />
        <h6 className="title">Awesome Tools</h6>
      </div>
      <a href="/tools/wallets-manager">
        <Card>
          <Avatar>
            <AvatarImage
              src="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
              alt="Wallet"
            />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div className="flex align-center">Multi-Wallet Manager</div>
        </Card>
      </a>
      <a href="#">
        <Card>
          <Avatar>
            <AvatarImage
              src="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54"
              alt="Wallet"
            />
            <AvatarFallback>W</AvatarFallback>
          </Avatar>
          <div className="flex align-center">Wallet Tracker</div>
        </Card>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Card>
          <Avatar>
            <AvatarImage
              src="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54"
              alt="Twitter"
            />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          <div className="flex align-center">Twitter Banner Generator</div>
        </Card>
      </a>
      <a href="https://bulksender.avasharks.io" target="_blank" rel="noopener noreferrer">
        <Card>
          <Avatar>
            <AvatarImage
              src="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
              alt="AvaSharks"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex align-center">Avalanche Ava Sharks - NFTs Bulk Sender</div>
        </Card>
      </a>
    </Card>
  );
};

export { ToolsCard };
