import { FC } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ title, text, children, className = '' }) => {
  return (
    <div
      className={cn(
        'w-full bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl',
        className
      )}
    >
      {title && (
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          {title}
        </h3>
      )}
      {text && <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{text}</p>}
      {children}
    </div>
  );
};

export { Card };
