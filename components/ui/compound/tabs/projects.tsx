import { Flex } from '@/components/ui/simple/flex';
import { ContentCard } from '@/components/ui/compound/content-card';

const Projects = () => (
  <Flex>
    <ContentCard
      name="Traverse"
      imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
      link="https://traverse.avasharks.io"
    />
    <ContentCard
      name="Atlantis Gate"
      imageSrc="https://erenichu.sirv.com/Portfolio/ag.svg"
      link="https://atlantisgate.avasharks.io"
    />
  </Flex>
);

export { Projects };
