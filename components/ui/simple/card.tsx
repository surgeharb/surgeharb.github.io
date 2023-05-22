import * as React from 'react';

interface CardProps {
  direction?: 'row' | 'col';
  padding?: number;
  margin?: number;
  borderRadius?: number;
  bgColor?: string;
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  direction = 'col',
  padding = 4,
  margin = 0,
  borderRadius = 0,
  bgColor = 'white',
  hoverEffect = false,
  children,
}) => {
  const baseClasses = `
        flex
        ${direction === 'row' ? 'flex-row' : 'flex-col'}
        p-${padding}
        m-${margin}
        rounded-${borderRadius}
        bg-${bgColor}
        ${hoverEffect ? 'hover:shadow-lg' : ''}
    `;

  return <div className={baseClasses.trim()}>{children}</div>;
};

export { Card };
