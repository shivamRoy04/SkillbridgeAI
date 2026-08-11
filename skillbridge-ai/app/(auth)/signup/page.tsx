"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();

  return (
    <Card className="p-6">
      <h1 className="text-xl font-semibold tracking-tight">Create an account</h1>
      <p className="mt-1 text-sm text-foreground/60">
        Auth isn&apos;t wired up yet — this simulates a successful signup.
      </p>
      <Button className="mt-6 w-full" onClick={() => router.push("/dashboard")}>
        Continue
      </Button>
      <p className="mt-4 text-center text-sm text-foreground/60">
        Already have an account?{" "}
        <Link href="/login" className="text-foreground underline">
          Sign in
        </Link>
      </p>
    </Card>
  );
}