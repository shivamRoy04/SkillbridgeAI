"use client";

import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getResumeDownloadUrl, deleteResume } from "@/lib/actions/resume";
import type { ResumeVersion } from "@/types/landing";

interface ResumeListProps {
  resumes: ResumeVersion[];
}

export function ResumeList({ resumes }: ResumeListProps) {
  async function handleView(filePath: string) {
    const result = await getResumeDownloadUrl(filePath);
    if (result.url) {
      window.open(result.url, "_blank");
    }
  }

  async function handleDelete(id: string, filePath: string) {
    await deleteResume(id, filePath);
    window.location.reload();
  }

  if (resumes.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center gap-2 p-12 text-center">
        <p className="text-sm font-medium">No resumes uploaded yet</p>
        <p className="text-sm text-foreground/60">
          Upload your first resume to get started.
        </p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {resumes.map((resume) => (
        <Card key={resume.id} className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{resume.file_name}</p>
              <p className="text-xs text-foreground/50">
                Uploaded {new Date(resume.uploaded_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleView(resume.file_path)}
            >
              View
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(resume.id, resume.file_path)}
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}