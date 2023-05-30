import { projects } from '@/data/projects';
import { ContentCard } from '@/components/ui/compound/content-card';

const Projects = () => (
  <div className="flex flex-col gap-2">
    {projects.map((proj) => (
      <ContentCard key={proj.name} name={proj.name} imageSrc={proj.image} link={proj.link} />
    ))}
  </div>
);

export { Projects };
