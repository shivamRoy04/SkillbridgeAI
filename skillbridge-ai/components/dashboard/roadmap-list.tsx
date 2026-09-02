import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DeleteModuleButton } from "@/components/dashboard/delete-module-button";
import { getModuleStatusVariant } from "@/lib/module-status";
import type { RoadmapModule } from "@/types/landing";

interface RoadmapListProps {
  modules: RoadmapModule[];
}

export function RoadmapList({ modules }: RoadmapListProps) {
  if (modules.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center gap-2 p-12 text-center">
        <p className="text-sm font-medium">No modules yet</p>
        <p className="text-sm text-foreground/60">
          Add your first roadmap module to start tracking progress.
        </p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {modules.map((module) => (
        <Card key={module.id} className="p-5">
          <div className="flex items-center justify-between">
  <p className="font-medium">{module.title}</p>
  <div className="flex items-center gap-2">
    <Badge variant={getModuleStatusVariant(module.status)}>
      {module.status}
    </Badge>
    <DeleteModuleButton id={module.id} />
  </div>
</div>
          <Progress value={module.progress} className="mt-4 h-2" />
          <p className="mt-2 text-xs text-foreground/50">{module.progress}% complete</p>
        </Card>
      ))}
    </div>
  );
}