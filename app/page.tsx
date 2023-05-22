import { GamesCard } from '@/components/ui/compound/games-card';
import { ToolsCard } from '@/components/ui/compound/tools-card';
import { ProfileCard } from '@/components/ui/compound/profile-card';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-12 gap-6 grid-auto-rows-max-content max-w-6xl m-auto">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-col gap-6">
            <ProfileCard />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col gap-6">
            <GamesCard />
            <ToolsCard />
          </div>
        </div>
      </div>
    </main>
  );
}
