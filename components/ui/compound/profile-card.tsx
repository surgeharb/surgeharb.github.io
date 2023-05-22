import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Flex } from '@/components/ui/simple/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const ProfileCard = () => {
  return (
    <Card padding={0}>
      <Flex direction="column" justify="between" align="center">
        <Avatar>
          <AvatarImage src="https://erenichu.sirv.com/Portfolio/pfp.jpg?w=108&h=108" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <h5>Serge Harb</h5>
        <h6>Software Engineer</h6>
        <Flex justify="center" align="center">
          <a
            href="https://github.com/surgeharb"
            rel="noopener noreferrer"
            target="_blank"
            className="social"
          >
            <Image src="/svg/github.svg" width="12" height="12" alt="gh icon" />
            <span>surgeharb</span>
          </a>
          <div className="dot">•</div>
          <a
            href="https://twitter.com/surgeharb"
            rel="noopener noreferrer"
            target="_blank"
            className="social"
          >
            <Flex justify="center" align="center" gap="xs">
              <Image src="/svg/twitter.svg" width="12" height="12" alt="twitter icon" />
              <span>surgeharb</span>
            </Flex>
          </a>
        </Flex>
      </Flex>

      <style jsx>{`
        h5 {
          margin: 0;
          margin-top: 1.5rem;
          font-weight: 500;
        }
        .social span {
          color: #585858;
          font-size: 12px;
        }
        .social:hover span {
          text-decoration: underline;
        }
        .dot {
          cursor: default;
        }
      `}</style>
    </Card>
  );
};

export { ProfileCard };
