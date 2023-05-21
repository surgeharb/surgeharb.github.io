import { FC } from 'react';
import './styles.module.css';

interface CardProps {
  h?: boolean;
  mb0?: boolean;
  hover?: boolean;
  compact?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({
  h = false,
  mb0 = false,
  hover = false,
  compact = false,
  fullHeight = false,
  children,
}) => {
  const classes = `
        flex
        radius
        ${mb0 ? 'mb0' : ''}
        ${hover ? 'hover' : ''}
        ${compact ? 'compact' : ''}
        ${fullHeight ? 'full-height' : ''}
        ${h ? 'horizontal' : 'vertical'}
    `;

  return <div className={classes.trim()}>{children}</div>;
};

export default Card;
