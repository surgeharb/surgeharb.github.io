import { companies } from '@/data/companies';
import { ContentRow } from '@/components/ui/compound/content-row';

const Companies = () => (
  <div className="flex flex-col gap-2">
    {companies.map((company) => (
      <ContentRow
        key={company.name}
        link={company.link}
        image={company.image}
        name={company.name}
        location={company.location}
        title={company.reponsibility}
        subtitle={company.role}
      />
    ))}
  </div>
);

export { Companies };
