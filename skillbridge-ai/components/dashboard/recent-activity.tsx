import { Card } from "@/components/ui/card";
import { RECENT_ACTIVITY } from "@/constants/dashboard";

export function RecentActivity() {
  return (
    <Card className="p-5">
      <p className="text-sm font-medium">Recent activity</p>
      <ul className="mt-4 flex flex-col gap-4">
        {RECENT_ACTIVITY.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-foreground/50">{item.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}