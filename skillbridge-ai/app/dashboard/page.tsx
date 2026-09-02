import { createClient } from "@/lib/supabase/server";
import { StatCards } from "@/components/dashboard/stat-cards";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: jobs } = await supabase
    .from("job_applications")
    .select("*")
    .eq("user_id", user?.id);

  const { data: modules } = await supabase
    .from("roadmap_modules")
    .select("*")
    .eq("user_id", user?.id);

  const applicationsCount = jobs?.length ?? 0;
  const interviewingCount =
    jobs?.filter((job) => job.status === "Interviewing").length ?? 0;

  const avgProgress =
    modules && modules.length > 0
      ? Math.round(
          modules.reduce((sum, m) => sum + m.progress, 0) / modules.length
        )
      : 0;

  const recentJobs = (jobs ?? [])
    .slice()
    .sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-foreground/60">Welcome back. Here&apos;s your overview.</p>
      </div>

      <StatCards
        applicationsCount={applicationsCount}
        interviewingCount={interviewingCount}
        avgProgress={avgProgress}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProgressChart modules={modules ?? []} />
        </div>
        <RecentActivity jobs={recentJobs} />
      </div>
    </div>
  );
}