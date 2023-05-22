import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Flex } from '@/components/ui/simple/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const GamesCard = () => {
  return (
    <Card>
      <Flex direction="column" justify="center" align="center">
        <Image src="/svg/controller.svg" alt="controller" width="24" height="24" />
        <h6 className="title">Cool Games</h6>
      </Flex>
      <a href="#">
        <Card padding={0}>
          <Avatar>
            <AvatarImage src="https://erenichu.sirv.com/Portfolio/game.webp?w=54&h=54" alt="Game" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <Flex align="center">
            <span>Metaverse RPG</span>
          </Flex>
        </Card>
      </a>

      <style jsx>{`
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

export { GamesCard };
