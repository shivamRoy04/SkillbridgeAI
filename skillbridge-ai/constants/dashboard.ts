import {
  LayoutDashboard,
  Map,
  Briefcase,
  FileSearch,
  Settings,
} from "lucide-react";
import type { SidebarItem } from "@/types/landing";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Roadmap", href: "/dashboard/roadmap", icon: Map },
  { label: "Job Tracker", href: "/dashboard/job-tracker", icon: Briefcase },
  { label: "Resume", href: "/dashboard/resume", icon: FileSearch },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];