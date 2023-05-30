import { toolsList } from '@/data/tools';
import { ToolsCard } from '@/components/ui/compound/tools-card';
import { ProfileCard } from '@/components/ui/compound/profile-card';
import { FeaturedCard } from '@/components/ui/compound/featured-card';
import { ExperienceCard } from '@/components/ui/compound/experience-card';

export default function Home() {
  return (
    <main className="min-h-screen py-6 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-6 gap-4 lg:gap-6 grid-auto-rows-max-content max-w-6xl m-auto">
        <div className="col-span-6 lg:col-span-4">
          <div className="flex flex-col gap-4 lg:gap-6">
            <ProfileCard />
            <FeaturedCard className="lg:hidden" />
            <ExperienceCard />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <div className="flex flex-col gap-4 lg:gap-6">
            <FeaturedCard className="hidden lg:flex" />
            <ToolsCard title="Other tools" tools={toolsList} />
          </div>
        </div>
      </div>
    </main>
  );
}
