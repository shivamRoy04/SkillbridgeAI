import { createClient } from "@/lib/supabase/server";
import { ResumeList } from "@/components/dashboard/resume-list";
import { UploadResumeDialog } from "@/components/dashboard/upload-resume-dialog";

export default async function ResumePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: resumes } = await supabase
    .from("resume_versions")
    .select("*")
    .eq("user_id", user?.id)
    .order("uploaded_at", { ascending: false });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <p className="mt-1 text-foreground/60">Upload and manage your resume versions.</p>
        </div>
        <UploadResumeDialog />
      </div>

      <ResumeList resumes={resumes ?? []} />
    </div>
  );
}