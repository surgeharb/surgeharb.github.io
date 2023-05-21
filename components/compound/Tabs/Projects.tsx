import ContentCard from '../ContentCard';
import './styles.module.css';

const Projects = () => (
  <div className="wrapper flex wrap justify-space-between align-center">
    <ContentCard
      name="Traverse"
      imageSrc="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72"
      imageSrcSet="https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=72&h=72 1x, https://erenichu.sirv.com/Portfolio/avasharks.jpeg?w=144&h=144 2x"
      link="https://traverse.avasharks.io"
    />
    <ContentCard
      name="Atlantis Gate"
      imageSrc="https://erenichu.sirv.com/Portfolio/ag.svg"
      imageStyle="object-fit: scale-down"
      link="https://atlantisgate.avasharks.io"
    />
  </div>
);

export default Projects;
