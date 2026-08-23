import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export interface ActivityItem {
  id: string;
  title: string;
  time: string;
  icon: LucideIcon;
}

export interface ProgressDataPoint {
  week: string;
  progress: number;
}

export type JobStatus = "Applied" | "Interviewing" | "Offer" | "Rejected";

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  dateApplied: string;
}

export type ModuleStatus = "Not Started" | "In Progress" | "Completed";

export interface RoadmapModule {
  id: string;
  title: string;
  status: ModuleStatus;
  progress: number;
}

export interface ResumeVersion {
  id: string;
  fileName: string;
  uploadedAt: string;
  score: number;
}