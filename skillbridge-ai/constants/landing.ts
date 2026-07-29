import {
  Map,
  FileSearch,
  Briefcase,
  Bot,
  MessageSquareText,
  BarChart3,
} from "lucide-react";
import type { Feature, Step, FooterColumn } from "@/types/landing";

export const FEATURES: Feature[] = [
  { icon: Map, title: "Personalized Roadmaps", description: "A step-by-step learning path tailored to your target role and current skill level." },
  { icon: FileSearch, title: "Resume Analyzer", description: "Get instant, actionable feedback on your resume before it reaches a recruiter." },
  { icon: Briefcase, title: "Job Tracker", description: "Keep every application, interview, and follow-up organized in one place." },
  { icon: Bot, title: "AI Mentor", description: "Ask questions and get guidance whenever you're stuck, day or night." },
  { icon: MessageSquareText, title: "Mock Interviews", description: "Practice real interview scenarios and build confidence before the real thing." },
  { icon: BarChart3, title: "Progress Analytics", description: "Visualize your growth and see exactly where to focus next." },
];

export const HOW_IT_WORKS: Step[] = [
  { number: 1, title: "Create your profile", description: "Tell us about your background and experience level." },
  { number: 2, title: "Select your target role", description: "Choose the role you're preparing for." },
  { number: 3, title: "Receive a personalized roadmap", description: "Get a learning path built specifically for your goal." },
  { number: 4, title: "Become interview ready", description: "Practice, track progress, and walk in with confidence." },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Roadmap", href: "#how-it-works" }] },
  { title: "Company", links: [{ label: "About", href: "#" }, { label: "Contact", href: "#" }] },
  { title: "Legal", links: [{ label: "Privacy", href: "#" }, { label: "GitHub", href: "https://github.com" }] },
];