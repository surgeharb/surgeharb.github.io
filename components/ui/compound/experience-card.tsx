import * as React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Projects, Companies, Skills } from '@/components/ui/compound/tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/simple/tabs';

type Props = {
  className?: string;
};

const ExperienceCard = ({ className }: Props) => {
  return (
    <Card className={className}>
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="companies">
          <Companies />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export { ExperienceCard };
