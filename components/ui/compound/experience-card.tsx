import * as React from 'react';
import { Card } from '@/components/ui/simple/card';
import { Projects, Companies, Skills } from '@/components/ui/compound/tabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/simple/tabs';

const ExperienceCard = () => {
  return (
    <Card>
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Projects />
        </TabsContent>
        <TabsContent value="companies">
          <Companies />
        </TabsContent>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export { ExperienceCard };
