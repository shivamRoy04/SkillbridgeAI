import { Target, TrendingUp, CheckCircle2, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardsProps {
  applicationsCount: number;
  interviewingCount: number;
  avgProgress: number;
}

export function StatCards({
  applicationsCount,
  interviewingCount,
  avgProgress,
}: StatCardsProps) {
  const stats = [
    {
      label: "Roadmap Progress",
      value: `${avgProgress}%`,
      change: "Based on your modules",
      icon: Target,
    },
    {
      label: "Applications Sent",
      value: String(applicationsCount),
      change: `${interviewingCount} in interviewing`,
      icon: TrendingUp,
    },
    {
      label: "Mock Interviews",
      value: "—",
      change: "Coming soon",
      icon: CheckCircle2,
    },
    {
      label: "Day Streak",
      value: "—",
      change: "Coming soon",
      icon: Flame,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label} className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-foreground/60">{stat.label}</p>
              <Icon className="h-4 w-4 text-foreground/40" />
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-foreground/50">{stat.change}</p>
          </Card>
        );
      })}
    </div>
  );
}