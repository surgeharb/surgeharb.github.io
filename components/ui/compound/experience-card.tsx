import * as React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Projects, Companies } from '@/components/ui/compound/tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/simple/tabs';

const ExperienceCard = () => {
  return (
    <Card>
      <Tabs defaultValue="projects">
        <TabsList>
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
