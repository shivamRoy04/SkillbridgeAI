import { StatCards } from "@/components/dashboard/stat-cards";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-foreground/60">Welcome back. Here&apos;s your overview.</p>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressChart />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
}