import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { JobApplication } from "@/types/landing";

interface RecentActivityProps {
  jobs: JobApplication[];
}

export function RecentActivity({ jobs }: RecentActivityProps) {
  if (jobs.length === 0) {
    return (
      <Card className="p-5">
        <p className="text-sm font-medium">Recent activity</p>
        <p className="mt-4 text-sm text-foreground/60">
          Nothing yet — add a job application to see it here.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-5">
      <p className="text-sm font-medium">Recent activity</p>
      <ul className="mt-4 flex flex-col gap-4">
        {jobs.map((job) => (
          <li key={job.id} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
              <Briefcase className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm">
                Applied to {job.role} @ {job.company}
              </p>
              <p className="text-xs text-foreground/50">{job.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}