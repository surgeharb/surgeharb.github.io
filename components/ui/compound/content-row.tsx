import React from 'react';
import { Card } from '@/components/ui/simple/card';
import { RowCardContent } from '@/models/RowCardContent';
import { Avatar, AvatarNextImage } from '@/components/ui/simple/avatar';

const ContentRow: React.FC<RowCardContent> = ({
  link,
  image,
  title,
  subtitle,
  location,
  additionalText,
  additionalEmoji,
}) => (
  <a href={link} target="_blank">
    <Card nested hoverable className="w-full flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarNextImage src={image} alt={additionalText || title} placeholder="blur" />
        </Avatar>
        <div>
          <span className="block text-bold">{title}</span>
          {!!subtitle && <span className="text-gray-500 text-xs">{subtitle}</span>}
        </div>
      </div>
      <div>
        {!!additionalText && <span>{additionalText}</span>}
        {!!additionalText && <span className="hidden sm:inline"> • </span>}
        {!!location && <span className="hidden sm:inline">{location}</span>}
        {!!additionalEmoji && <span> {additionalEmoji}</span>}
      </div>
    </Card>
  </a>
);

export { ContentRow };
