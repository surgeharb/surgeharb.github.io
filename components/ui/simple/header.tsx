import { Badge } from './badge';

const Header = () => (
  <header className="py-2 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
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
      <a href="mailto:hi@sergeharb.com" className="flex items-center">
        <Badge>Get in touch!</Badge>
      </a>
    </div>
  </header>
);

export { Header };
