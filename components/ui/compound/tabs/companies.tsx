import { companies } from '@/data/companies';
import { ContentRow } from '@/components/ui/compound/content-row';

const Companies = () => (
  <div className="flex flex-col gap-2">
    {companies.map((company) => (
      <ContentRow key={company.title} {...company} />
    ))}
  </div>
);

export { Companies };
