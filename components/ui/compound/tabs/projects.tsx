import { ContentCard } from '@/components/ui/compound/content-card';

const Projects = () => (
  <div className="flex flex-col gap-2">
    <ContentCard
      name="Traverse"
      imageSrc="/images/avasharks.jpeg"
      link="https://traverse.avasharks.io"
    />
    <ContentCard
      name="Atlantis Gate"
      imageSrc="/images/ag.svg"
      link="https://atlantisgate.avasharks.io"
    />
  </div>
);

export { Projects };
