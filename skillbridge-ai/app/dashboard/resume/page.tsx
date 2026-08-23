import { ResumeList } from "@/components/dashboard/resume-list";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <p className="mt-1 text-foreground/60">Upload and track your resume versions.</p>
        </div>
        <Button size="sm">Upload New</Button>
      </div>

      <ResumeList />
    </div>
  );
}