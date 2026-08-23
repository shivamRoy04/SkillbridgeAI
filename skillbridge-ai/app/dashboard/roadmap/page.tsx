import { RoadmapList } from "@/components/dashboard/roadmap-list";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Roadmap</h1>
        <p className="mt-1 text-foreground/60">Your personalized path to interview-ready.</p>
      </div>

      <RoadmapList />
    </div>
  );
}