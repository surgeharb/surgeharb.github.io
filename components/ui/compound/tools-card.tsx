import React from 'react';
import { Boxes } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tool } from '@/models/Tool';
import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar';
import { Badge } from '../simple/badge';

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
          {!tool.emoji && (
            <Avatar>
              <AvatarImage src={tool.src} alt={tool.alt} />
              <AvatarFallback>{tool.name.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex items-center justify-between flex-1">
            <div className="flex items-center gap-3">
              <span>{tool.emoji}</span>
              <span>{tool.name}</span>
            </div>
            {tool.badge && <Badge variant="secondary">{tool.badge}</Badge>}
          </div>
        </Card>
      </a>
    ))}
  </Card>
);

export { ToolsCard };
