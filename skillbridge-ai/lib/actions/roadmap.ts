"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function addRoadmapModule(formData: {
  title: string;
  status: string;
  progress: number;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const { error } = await supabase.from("roadmap_modules").insert({
    user_id: user.id,
    title: formData.title,
    status: formData.status,
    progress: formData.progress,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/roadmap");
  return { success: true };
}
export async function deleteRoadmapModule(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const { error } = await supabase
    .from("roadmap_modules")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/roadmap");
  revalidatePath("/dashboard");
  return { success: true };
}