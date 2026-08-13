import { Card } from "@/components/ui/card";
import { STAT_CARDS } from "@/constants/dashboard";

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STAT_CARDS.map((stat) => {
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