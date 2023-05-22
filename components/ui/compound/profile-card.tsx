import * as React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

const ProfileCard = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-between gap-4">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://erenichu.sirv.com/Portfolio/pfp.jpg?w=108&h=108" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-center gap-1">
          <h5 className="text-2xl font-medium">Serge Harb</h5>
          <h6 className="text-sm font-light text-gray-500">Software Engineer</h6>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <a href="https://github.com/surgeharb" rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-1">
              <Image src="/svg/github.svg" width="12" height="12" alt="gh icon" />
              <span className="text-xs font-light text-gray-500">surgeharb</span>
            </div>
          </a>
          <div className="text-xs font-light">•</div>
          <div>
            <a href="https://twitter.com/surgeharb" rel="noopener noreferrer" target="_blank">
              <div className="flex items-center gap-1">
                <Image src="/svg/twitter.svg" width="12" height="12" alt="twitter icon" />
                <span className="text-xs font-light text-gray-500">surgeharb</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { ProfileCard };
