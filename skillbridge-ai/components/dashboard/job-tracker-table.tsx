import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getStatusVariant } from "@/lib/job-status";
import type { JobApplication } from "@/types/landing";

interface JobTrackerTableProps {
  jobs: JobApplication[];
}

export function JobTrackerTable({ jobs }: JobTrackerTableProps) {
  if (jobs.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center gap-2 p-12 text-center">
        <p className="text-sm font-medium">No applications yet</p>
        <p className="text-sm text-foreground/60">
          Add your first job application to start tracking.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Date Applied</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.company}</TableCell>
              <TableCell className="text-foreground/70">{job.role}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(job.status)}>{job.status}</Badge>
              </TableCell>
              <TableCell className="text-right text-foreground/60">
                {job.dateApplied}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}