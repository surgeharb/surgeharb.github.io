import React from 'react';

type GapSize = 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: GapSize;
  children: React.ReactNode;
}

const gapValues: Record<GapSize, string> = {
  none: '0',
  '2xs': '0.25rem',
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 'sm',
  children,
}) => {
  const gapValue = gapValues[gap];

  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} flex-${wrap} gap-${gapValue}`}
    >
      {children}
    </div>
  );
};

export { Flex };
