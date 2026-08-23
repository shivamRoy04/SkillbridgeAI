import type { ModuleStatus } from "@/types/landing";

export function getModuleStatusVariant(status: ModuleStatus): "default" | "secondary" | "outline" {
  switch (status) {
    case "Completed":
      return "default";
    case "In Progress":
      return "secondary";
    case "Not Started":
    default:
      return "outline";
  }
}