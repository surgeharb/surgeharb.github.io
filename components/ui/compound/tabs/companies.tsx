import { ContentRow } from '@/components/ui/compound/content-row';

const Companies = () => (
  <div className="flex flex-col gap-4">
    <ContentRow
      url="/images/preply.png"
      rightText="Preply, Barcelona 🇪🇸"
      leftText="Senior Software Engineer"
    />
    <ContentRow
      url="/images/tf961.jpeg"
      rightText="TF961, Lebanon 🇱🇧"
      leftText="Senior Software Engineer"
    />
    <ContentRow
      url="/images/fibler.jpeg"
      rightText="Fibler, Lebanon 🇱🇧"
      leftText="Software Engineer"
    />
  </div>
);

export { Companies };
