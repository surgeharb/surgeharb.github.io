import { GamesCard } from '@/components/ui/compound/games-card';
import { ToolsCard } from '@/components/ui/compound/tools-card';
import { ProfileCard } from '@/components/ui/compound/profile-card';
import { ExperienceCard } from '@/components/ui/compound/experience-card';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-6 gap-6 grid-auto-rows-max-content max-w-6xl m-auto">
        <div className="col-span-6 lg:col-span-4">
          <div className="flex flex-col gap-6">
            <ProfileCard />
            <ExperienceCard />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <div className="flex flex-col gap-6">
            <GamesCard />
            <ToolsCard />
          </div>
        </div>
      </div>
    </main>
  );
}
