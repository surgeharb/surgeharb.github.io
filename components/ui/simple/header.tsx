import Link from 'next/link';
import { cn } from '@/lib/utils';
import { badgeVariants } from '@/components/ui/simple/badge';

const Header = () => (
  <header className="py-4 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
    <div className="flex justify-between items-center max-w-6xl m-auto">
      <ul className="flex gap-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
      <Link
        href="mailto:hi@sergeharb.com"
        className={cn(badgeVariants({ variant: 'default' }), 'py-1')}
      >
        Get in touch!
      </Link>
    </div>
  </header>
);

export { Header };
