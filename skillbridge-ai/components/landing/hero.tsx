"use client";

import { motion } from "framer-motion";
import { ArrowRight, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium text-foreground/60"
        >
          Your Career Operating System
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          <span className="text-gradient">SkillBridge AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-lg text-foreground/70"
        >
          A single platform that helps students prepare for interviews with
          personalized learning roadmaps, job tracking, resume analysis, mock
          interviews, analytics and AI-powered mentoring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Roadmap
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 w-full max-w-3xl"
        >
          <Card className="flex items-center gap-4 border-border/50 bg-card/50 p-6 text-left backdrop-blur">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10">
              <MapIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Frontend Roadmap</p>
              <p className="text-sm text-foreground/60">
                68% complete — 4 milestones remaining
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}