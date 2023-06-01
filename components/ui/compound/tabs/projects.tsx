import { projects } from '@/data/projects';
import { ContentRow } from '@/components/ui/compound/content-row';

const Projects = () => (
  <div className="flex flex-col gap-2">
    {projects.map((project) => (
      <ContentRow key={project.title} {...project} />
    ))}
  </div>
);

export { Projects };
