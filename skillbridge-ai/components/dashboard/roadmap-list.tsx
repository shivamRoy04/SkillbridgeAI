import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ROADMAP_MODULES } from "@/constants/dashboard";
import { getModuleStatusVariant } from "@/lib/module-status";

export function RoadmapList() {
  return (
    <div className="flex flex-col gap-4">
      {ROADMAP_MODULES.map((module) => (
        <Card key={module.id} className="p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium">{module.title}</p>
            <Badge variant={getModuleStatusVariant(module.status)}>
              {module.status}
            </Badge>
          </div>
          <Progress value={module.progress} className="mt-4 h-2" />
          <p className="mt-2 text-xs text-foreground/50">{module.progress}% complete</p>
        </Card>
      ))}
    </div>
  );
}