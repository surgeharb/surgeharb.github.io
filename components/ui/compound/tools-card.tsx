import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Tool } from '@/models/Tool';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';
import { Boxes } from 'lucide-react';

type Props = {
  title: string;
  tools: Tool[];
  className?: string;
};

const ToolsCard = ({ title, tools, className }: Props) => (
  <Card className={cn('flex flex-col gap-2', className)}>
    <div className="flex items-center gap-2">
      <Boxes size={16} />
      <h6 className="title">{title}</h6>
    </div>
    {tools.map((tool) => (
      <a
        key={tool.name}
        href={tool.link}
        target={tool.opensNewTab ? '_blank' : undefined}
        rel={tool.opensNewTab ? 'noopener noreferrer' : undefined}
      >
        <Card nested hoverable className="flex gap-2 items-center">
          <Avatar>
            {!!tool.src && <AvatarImage src={tool.src} alt={tool.alt} />}
            {!!tool.emoji && (
              <AvatarFallback className="text-2xl bg-transparent">{tool.emoji}</AvatarFallback>
            )}
            {!tool.emoji && <AvatarFallback>{tool.name.charAt(0)}</AvatarFallback>}
          </Avatar>
          <div className="flex align-center">{tool.name}</div>
        </Card>
      </a>
    ))}
  </Card>
);

export { ToolsCard };
