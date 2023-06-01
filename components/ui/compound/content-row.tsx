import React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

export interface ContentRowProps {
  link: string;
  image: string;
  title: string;
  subtitle?: string;
  location?: string;
  name: string;
}

const ContentRow: React.FC<ContentRowProps> = ({
  link,
  name,
  image,
  title,
  subtitle,
  location,
}) => {
  const abbr = name.charAt(0).toUpperCase();

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
            {!!subtitle && <span className="text-gray-500 text-xs">{subtitle}</span>}
          </div>
        </div>
        <div>
          <span>{name}</span>
          {!!location && <span className="hidden sm:inline"> - {location}</span>}
        </div>
      </Card>
    </a>
  );
};

export { ContentRow };
