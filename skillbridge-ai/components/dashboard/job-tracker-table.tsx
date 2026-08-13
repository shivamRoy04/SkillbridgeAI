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
import { JOB_APPLICATIONS } from "@/constants/dashboard";
import { getStatusVariant } from "@/lib/job-status";

export function JobTrackerTable() {
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
          {JOB_APPLICATIONS.map((job) => (
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