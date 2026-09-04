"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function uploadResume(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  const file = formData.get("file") as File;

  if (!file || file.size === 0) {
    return { error: "No file selected" };
  }

  const filePath = `${user.id}/${Date.now()}_${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("resumes")
    .upload(filePath, file);

  if (uploadError) {
    return { error: uploadError.message };
  }

  const { error: dbError } = await supabase.from("resume_versions").insert({
    user_id: user.id,
    file_name: file.name,
    file_path: filePath,
  });

  if (dbError) {
    return { error: dbError.message };
  }

  revalidatePath("/dashboard/resume");
  return { success: true };
}

export async function deleteResume(id: string, filePath: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not authenticated" };
  }

  await supabase.storage.from("resumes").remove([filePath]);

  const { error } = await supabase
    .from("resume_versions")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/resume");
  return { success: true };
}

export async function getResumeDownloadUrl(filePath: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from("resumes")
    .createSignedUrl(filePath, 60);

  if (error || !data) {
    return { error: "Could not generate download link" };
  }

  return { url: data.signedUrl };
}