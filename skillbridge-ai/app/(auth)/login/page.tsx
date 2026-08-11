"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Card className="p-6">
      <h1 className="text-xl font-semibold tracking-tight">Sign in</h1>
      <p className="mt-1 text-sm text-foreground/60">
        Auth isn&apos;t wired up yet — this simulates a successful login.
      </p>
      <Button className="mt-6 w-full" onClick={() => router.push("/dashboard")}>
        Continue
      </Button>
      <p className="mt-4 text-center text-sm text-foreground/60">
        No account?{" "}
        <Link href="/signup" className="text-foreground underline">
          Sign up
        </Link>
      </p>
    </Card>
  );
}