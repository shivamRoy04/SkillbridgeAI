"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadResume } from "@/lib/actions/resume";

export function UploadResumeDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload() {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    const result = await uploadResume(formData);

    setLoading(false);

    if (result.error) {
      setError(result.error);
      return;
    }

    setOpen(false);
    setFile(null);
    router.refresh();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger
  render={
    <Button size="sm" className="gap-2">
      <Upload className="h-4 w-4" />
      Upload New
    </Button>
  }
/>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload resume</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="resume-file">Choose a file (PDF recommended)</Label>
            <Input
              id="resume-file"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}