import { Card } from '@/components/ui/simple/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/simple/avatar-new';

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
      <Card className="mb-0 py-6">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={imageSrc} alt={abbr} />
            <AvatarFallback>{abbr}</AvatarFallback>
          </Avatar>
          <span>{name}</span>
        </div>
      </Card>
    </a>
  );
};

export { ContentCard };
