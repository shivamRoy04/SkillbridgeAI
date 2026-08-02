"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "@/constants/dashboard";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border/40 px-3 py-6 md:flex">
      <Link href="/" className="mb-8 px-3 text-base font-semibold tracking-tight">
        SkillBridge<span className="text-foreground/50">AI</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-accent text-foreground"
                  : "text-foreground/60 hover:bg-accent/50 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}