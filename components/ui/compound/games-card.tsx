import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const GamesCard = () => {
  return (
    <Card>
      <div className="flex items-center">
        <Image src="/svg/controller.svg" alt="controller" width="24" height="24" />
        <h6 className="title">Cool Games</h6>
      </div>
      <a href="#">
        <Card className="flex gap-2 items-center py-6">
          <Avatar>
            <AvatarImage src="https://erenichu.sirv.com/Portfolio/game.webp?w=54&h=54" alt="Game" />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center">
            <span>Metaverse RPG</span>
          </div>
        </Card>
      </a>
    </Card>
  );
};

export { GamesCard };
