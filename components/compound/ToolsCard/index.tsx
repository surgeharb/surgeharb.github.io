import React from 'react';
import Image from 'next/image';
import Card from '@/components/simple/Card';
import Avatar from '@/components/simple/Avatar';

const ToolsCard = () => {
  return (
    <Card>
      <div className="title-container flex align-center">
        <Image src="/svg/archive.svg" alt="apps" width="24" height="24" />
        <h6 className="title">Awesome Tools</h6>
      </div>
      <a href="/tools/wallets-manager">
        <Card h hover mb0 compact>
          <Avatar size="sm" imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54" />
          <div className="flex align-center">Multi-Wallet Manager</div>
        </Card>
      </a>
      <a href="#">
        <Card h hover mb0 compact>
          <Avatar size="sm" imageSrc="https://erenichu.sirv.com/Portfolio/wallet.webp?w=54&h=54" />
          <div className="flex align-center">Wallet Tracker</div>
        </Card>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <Card h hover mb0 compact>
          <Avatar
            size="sm"
            imageSrc="https://erenichu.sirv.com/Portfolio/twitter.jpeg?cy=3&w=54&h=54"
          />
          <div className="flex align-center">Twitter Banner Generator</div>
        </Card>
      </a>
      <a href="https://bulksender.avasharks.io" target="_blank" rel="noopener noreferrer">
        <Card h hover mb0 compact>
          <Avatar
            size="sm"
            imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
          />
          <div className="flex align-center">Avalanche Ava Sharks - NFTs Bulk Sender</div>
        </Card>
      </a>

      <style jsx>{`
        .title-container {
          margin: 0;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .title {
          font-weight: 600;
          color: var(--secondary-color);
        }
        h6 {
          margin-bottom: 0;
        }
        div {
          margin-left: 1.5rem;
        }
        a {
          margin-bottom: 1.5rem;
        }
        a:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </Card>
  );
};

export default ToolsCard;
