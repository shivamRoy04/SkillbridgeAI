import type { JobStatus } from "@/types/landing";

export function getStatusVariant(status: JobStatus): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Offer":
      return "default";
    case "Interviewing":
      return "secondary";
    case "Rejected":
      return "destructive";
    case "Applied":
    default:
      return "outline";
  }
}