"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function addJobApplication(formData: {
  company: string;
  role: string;
  status: string;
  dateApplied: string;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const { error } = await supabase.from("job_applications").insert({
    user_id: user.id,
    company: formData.company,
    role: formData.role,
    status: formData.status,
    date_applied: formData.dateApplied,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/job-tracker");
  return { success: true };
}