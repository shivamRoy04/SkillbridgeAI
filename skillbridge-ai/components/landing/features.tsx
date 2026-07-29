"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FEATURES } from "@/constants/landing";

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need, in one place
        </h2>
        <p className="mt-4 text-foreground/70">
          Six tools working together to get you interview-ready, faster.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group h-full border-border/50 p-6 transition-colors hover:border-foreground/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/10 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}