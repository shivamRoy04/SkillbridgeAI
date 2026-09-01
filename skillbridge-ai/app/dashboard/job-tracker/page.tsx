import { createClient } from "@/lib/supabase/server";
import { JobTrackerTable } from "@/components/dashboard/job-tracker-table";
import { AddJobDialog } from "@/components/dashboard/add-job-dialog";

export default async function JobTrackerPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: jobs } = await supabase
    .from("job_applications")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Job Tracker</h1>
          <p className="mt-1 text-foreground/60">
            Track every application in one place.
          </p>
        </div>
        <AddJobDialog />
      </div>

      <JobTrackerTable jobs={jobs ?? []} />
    </div>
  );
}