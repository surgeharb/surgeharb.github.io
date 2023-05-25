import React from 'react';
import { featuredToolsList } from '@/data/tools';
import { Card } from '@/components/ui/simple/card';
import { ToolsCard } from './tools-card';

type Props = {
  className?: string;
};

const FeaturedCard = ({ className }: Props) => {
  return <ToolsCard title="Featured tools" tools={featuredToolsList} className={className} />;
};

export { FeaturedCard };
