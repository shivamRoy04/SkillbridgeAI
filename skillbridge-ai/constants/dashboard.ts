import {
  LayoutDashboard,
  Map,
  Briefcase,
  FileSearch,
  Settings,
  CheckCircle2,
  Flame,
  Target,
  TrendingUp,
  FileText,
} from "lucide-react";
import type {
  SidebarItem,
  StatCard,
  ActivityItem,
  ProgressDataPoint,
  JobApplication,
  RoadmapModule,
  ResumeVersion,
} from "@/types/landing";

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Roadmap", href: "/dashboard/roadmap", icon: Map },
  { label: "Job Tracker", href: "/dashboard/job-tracker", icon: Briefcase },
  { label: "Resume", href: "/dashboard/resume", icon: FileSearch },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const STAT_CARDS: StatCard[] = [
  { label: "Roadmap Progress", value: "68%", change: "+4% this week", icon: Target },
  { label: "Applications Sent", value: "12", change: "+3 this week", icon: TrendingUp },
  { label: "Mock Interviews", value: "5", change: "+1 this week", icon: CheckCircle2 },
  { label: "Day Streak", value: "9", change: "Personal best", icon: Flame },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: "1", title: "Completed: Arrays & Hashing module", time: "2h ago", icon: CheckCircle2 },
  { id: "2", title: "Applied to Frontend Engineer @ Acme", time: "5h ago", icon: TrendingUp },
  { id: "3", title: "Finished mock interview #5", time: "1d ago", icon: Target },
];

export const PROGRESS_DATA: ProgressDataPoint[] = [
  { week: "W1", progress: 10 },
  { week: "W2", progress: 22 },
  { week: "W3", progress: 35 },
  { week: "W4", progress: 41 },
  { week: "W5", progress: 55 },
  { week: "W6", progress: 68 },
];

export const JOB_APPLICATIONS: JobApplication[] = [
  { id: "1", company: "Acme Corp", role: "Frontend Engineer", status: "Interviewing", dateApplied: "Aug 2, 2026" },
  { id: "2", company: "Nimbus Labs", role: "Software Engineer I", status: "Applied", dateApplied: "Aug 5, 2026" },
  { id: "3", company: "Vertex Systems", role: "React Developer", status: "Rejected", dateApplied: "Jul 28, 2026" },
  { id: "4", company: "Orbit Technologies", role: "Junior SWE", status: "Offer", dateApplied: "Jul 20, 2026" },
  { id: "5", company: "Northwind Digital", role: "Frontend Engineer", status: "Applied", dateApplied: "Aug 9, 2026" },
];

export const ROADMAP_MODULES: RoadmapModule[] = [
  { id: "1", title: "Arrays & Hashing", status: "Completed", progress: 100 },
  { id: "2", title: "Two Pointers", status: "Completed", progress: 100 },
  { id: "3", title: "Sliding Window", status: "In Progress", progress: 60 },
  { id: "4", title: "Binary Search", status: "In Progress", progress: 30 },
  { id: "5", title: "Trees & Graphs", status: "Not Started", progress: 0 },
  { id: "6", title: "Dynamic Programming", status: "Not Started", progress: 0 },
];

export const RESUME_VERSIONS: ResumeVersion[] = [
  { id: "1", fileName: "resume_v3_final.pdf", uploadedAt: "Aug 10, 2026", score: 82 },
  { id: "2", fileName: "resume_v2.pdf", uploadedAt: "Jul 30, 2026", score: 71 },
  { id: "3", fileName: "resume_v1.pdf", uploadedAt: "Jul 15, 2026", score: 58 },
];