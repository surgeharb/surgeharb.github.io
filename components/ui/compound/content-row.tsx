import React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

export interface ContentRowProps {
  link: string;
  image: string;
  title: string;
  subtitle?: string;
  rightText: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ link, image, rightText, title, subtitle }) => {
  const abbr = rightText.charAt(0).toUpperCase();

  return (
    <a href={link} target="_blank">
      <Card nested hoverable className="w-full flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={image} alt={abbr} />
            <AvatarFallback>{abbr}</AvatarFallback>
          </Avatar>
          <div>
            <span className="block text-bold">{title}</span>
            {subtitle && <span className="text-gray-500 text-xs">{subtitle}</span>}
          </div>
        </div>
        <span>{rightText}</span>
      </Card>
    </a>
  );
};

export { ContentRow };
