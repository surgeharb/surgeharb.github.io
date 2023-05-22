import { FC } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  nested?: boolean;
}

const Card: FC<CardProps> = ({ title, text, nested, hoverable, children, className = '' }) => {
  return (
    <div
      className={cn(
        'w-full bg-white dark:bg-slate-800 rounded-md p-4 shadow-md',
        hoverable ? 'hover:bg-slate-50 dark:hover:bg-slate-900 transition-all' : '',
        nested ? 'border dark:border-slate-700 shadow-none' : '',
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
