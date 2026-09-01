"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { NAV_ITEMS } from "@/constants/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="text-base font-semibold tracking-tight">
          SkillBridge<span className="text-foreground/50">AI</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
  <ThemeToggle />
  <Link href="/login">
    <Button variant="ghost" size="sm">
      Sign In
    </Button>
  </Link>
  <Link href="/signup">
    <Button size="sm">Get Started</Button>
  </Link>
</div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/40 bg-background/95 backdrop-blur-lg md:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
  <Link href="/signup" onClick={() => setMobileOpen(false)}>
    <Button className="w-full">Get Started</Button>
  </Link>
</li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}