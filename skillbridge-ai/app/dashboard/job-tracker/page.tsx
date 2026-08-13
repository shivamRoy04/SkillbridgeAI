import { JobTrackerTable } from "@/components/dashboard/job-tracker-table";

export default function JobTrackerPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Job Tracker</h1>
        <p className="mt-1 text-foreground/60">
          Track every application in one place.
        </p>
      </div>

      <JobTrackerTable />
    </div>
  );
}