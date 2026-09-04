"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addJobApplication } from "@/lib/actions/jobs";

export function AddJobDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [dateApplied, setDateApplied] = useState("");

  async function handleSubmit() {
    setLoading(true);

    const result = await addJobApplication({
      company,
      role,
      status,
      dateApplied,
    });

    setLoading(false);

    if (result.success) {
      setOpen(false);
      setCompany("");
      setRole("");
      setStatus("Applied");
      setDateApplied("");
      router.refresh();
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger
  render={
    <Button size="sm" className="gap-2">
      <Plus className="h-4 w-4" />
      Add Application
    </Button>
  }
/>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add job application</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Corp"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Frontend Engineer"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger id="status">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Applied">Applied</SelectItem>
                <SelectItem value="Interviewing">Interviewing</SelectItem>
                <SelectItem value="Offer">Offer</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dateApplied">Date Applied</Label>
            <Input
              id="dateApplied"
              type="date"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
            />
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Adding..." : "Add Application"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}