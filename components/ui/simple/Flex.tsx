import * as React from 'react';

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
  '2xs': '0.25',
  xs: '0.5',
  sm: '1',
  md: '1.5',
  lg: '2',
  xl: '2.5',
};

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 'sm',
  children,
}) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} flex-${wrap} gap-${gapValues[gap]}`}
    >
      {children}
    </div>
  );
};

export { Flex };
