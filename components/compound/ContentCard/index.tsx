import { CSSProperties } from 'react';
import Card from '@/components/simple/Card';
import Avatar from '@/components/simple/Avatar';
import Flex from '@/components/simple/Flex';

interface ContentCardProps {
  link?: string;
  name?: string;
  imageSrc: string;
  imageStyle?: CSSProperties;
}

const ContentCard: React.FC<ContentCardProps> = ({
  link = '#',
  name = 'Unspecified',
  imageSrc,
  imageStyle,
}) => {
  return (
    <a href={link} target="_blank">
      <Card mb0 hover>
        <Flex direction="column" justify="center" align="center">
          <Avatar imageSrc={imageSrc} imageStyle={imageStyle} />
          <span>{name}</span>
        </Flex>
      </Card>

      <style jsx>{`
        a {
          display: block;
          width: 140px;
        }
      `}</style>
    </a>
  );
};

export default ContentCard;
