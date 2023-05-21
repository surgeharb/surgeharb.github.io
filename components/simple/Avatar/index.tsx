import { FC, CSSProperties } from 'react';
import './styles.css';
import Image from 'next/image';

type sizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizes: Record<sizesType, string> = {
  xs: '36px',
  sm: '54px',
  md: '72px',
  lg: '108px',
  xl: '144px',
};

interface AvatarProps {
  size?: sizesType;
  circle?: boolean;
  imageStyle?: CSSProperties;
  imageSrc?: string;
}

const Avatar: FC<AvatarProps> = ({
  size = 'md',
  circle = false,
  imageStyle = {},
  imageSrc = '',
}) => {
  const imgSrc =
    imageSrc || 'https://erenichu.sirv.com/Portfolio/pfp.jpg?grayscale=true&blur=30&w=108&h=108';

  const classes = circle ? 'circle' : '';

  return (
    <Image
      src={imgSrc}
      width={+sizes[size]}
      height={+sizes[size]}
      style={imageStyle}
      alt="profile"
      className={classes}
    />
  );
};

export default Avatar;
