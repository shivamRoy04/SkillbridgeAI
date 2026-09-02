import { createClient } from "@/lib/supabase/server";
import { RoadmapList } from "@/components/dashboard/roadmap-list";
import { AddModuleDialog } from "@/components/dashboard/add-module-dialog";

export default async function RoadmapPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: modules } = await supabase
    .from("roadmap_modules")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: true });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Roadmap</h1>
          <p className="mt-1 text-foreground/60">
            Your personalized path to interview-ready.
          </p>
        </div>
        <AddModuleDialog />
      </div>

      <RoadmapList modules={modules ?? []} />
    </div>
  );
}