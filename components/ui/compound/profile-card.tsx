import * as React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';
import { Github, Twitter } from 'lucide-react';

const ProfileCard = () => {
  return (
    <Card className="py-6">
      <div className="flex flex-col items-center justify-between gap-4">
        <Avatar className="w-28 h-28">
          <AvatarImage src="/images/pfp.jpeg" alt="SH" />
          <AvatarFallback>SH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-center gap-1">
          <h5 className="text-2xl font-medium">Serge Harb</h5>
          <h6 className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer</h6>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <a href="https://github.com/surgeharb" rel="noopener noreferrer" target="_blank">
            <div className="flex items-center gap-1">
              <Github size={12} />
              <span className="text-xs font-light">surgeharb</span>
            </div>
          </a>
          <div className="text-xs font-light">•</div>
          <div>
            <a href="https://twitter.com/surgeharb" rel="noopener noreferrer" target="_blank">
              <div className="flex items-center gap-1">
                <Twitter size={12} />
                <span className="text-xs font-light">surgeharb</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { ProfileCard };
