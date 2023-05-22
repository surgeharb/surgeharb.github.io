import * as React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const ProfileCard = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-between">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://erenichu.sirv.com/Portfolio/pfp.jpg?w=108&h=108" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <h5>Serge Harb</h5>
        <h6>Software Engineer</h6>
        <div className="flex items-center justify-center">
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
            <div className="flex items-center justify-center">
              <Image src="/svg/twitter.svg" width="12" height="12" alt="twitter icon" />
              <span>surgeharb</span>
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};

export { ProfileCard };
