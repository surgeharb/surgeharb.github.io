import Card from '@/components/simple/Card';
import { Flex } from '@/components/ui/simple/Flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/Avatar';

interface ContentCardProps {
  link?: string;
  name?: string;
  imageSrc: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  link = '#',
  name = 'Unspecified',
  imageSrc,
}) => {
  const abbr = name.charAt(0).toUpperCase();

  return (
    <a href={link} target="_blank">
      <Card mb0 hover>
        <Flex direction="column" justify="center" align="center">
          <Avatar>
            <AvatarImage src={imageSrc} alt={abbr} />
            <AvatarFallback>{abbr}</AvatarFallback>
          </Avatar>
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
