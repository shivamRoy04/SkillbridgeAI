"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import type { RoadmapModule } from "@/types/landing";

interface ProgressChartProps {
  modules: RoadmapModule[];
}

export function ProgressChart({ modules }: ProgressChartProps) {
  const chartData = modules.map((m) => ({
    title: m.title.length > 12 ? m.title.slice(0, 12) + "…" : m.title,
    progress: m.progress,
  }));

  if (chartData.length === 0) {
    return (
      <Card className="flex h-full flex-col items-center justify-center gap-2 p-12 text-center">
        <p className="text-sm font-medium">No roadmap modules yet</p>
        <p className="text-sm text-foreground/60">
          Add modules on the Roadmap page to see progress here.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-5">
      <p className="text-sm font-medium">Progress by module</p>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis
              dataKey="title"
              axisLine={false}
              tickLine={false}
              className="text-xs"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              className="text-xs"
            />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="progress" fill="var(--foreground)" fillOpacity={0.8} radius={4} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}