import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';

export interface ContentRowProps {
  url: string;
  leftText: string;
  rightText: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ url, leftText, rightText }) => {
  const abbr = leftText.charAt(0).toUpperCase();

  return (
    <div className="flex">
      <div>
        <Avatar>
          <AvatarImage src={url} alt={abbr} />
          <AvatarFallback>{abbr}</AvatarFallback>
        </Avatar>
        <span>{leftText}</span>
      </div>
      <span>{rightText}</span>
    </div>
  );
};

export { ContentRow };
