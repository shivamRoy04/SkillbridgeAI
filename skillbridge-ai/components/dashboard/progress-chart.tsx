"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { PROGRESS_DATA } from "@/constants/dashboard";

export function ProgressChart() {
  return (
    <Card className="p-5">
      <p className="text-sm font-medium">Roadmap progress over time</p>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={PROGRESS_DATA}>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
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
            <Area
              type="monotone"
              dataKey="progress"
              stroke="var(--foreground)"
              fill="var(--foreground)"
              fillOpacity={0.1}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}