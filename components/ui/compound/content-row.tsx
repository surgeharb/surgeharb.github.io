import React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

export interface ContentRowProps {
  url: string;
  leftText: string;
  rightText: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ url, leftText, rightText }) => {
  const abbr = leftText.charAt(0).toUpperCase();

  return (
    <Card nested hoverable className="w-full flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={url} alt={abbr} />
          <AvatarFallback>{abbr}</AvatarFallback>
        </Avatar>
        <span>{leftText}</span>
      </div>
      <span>{rightText}</span>
    </Card>
  );
};

export { ContentRow };
