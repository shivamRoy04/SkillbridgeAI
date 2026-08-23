import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RESUME_VERSIONS } from "@/constants/dashboard";

export function ResumeList() {
  return (
    <div className="flex flex-col gap-4">
      {RESUME_VERSIONS.map((resume) => (
        <Card key={resume.id} className="flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">{resume.fileName}</p>
              <p className="text-xs text-foreground/50">Uploaded {resume.uploadedAt}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold">{resume.score}/100</p>
              <p className="text-xs text-foreground/50">Score</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}