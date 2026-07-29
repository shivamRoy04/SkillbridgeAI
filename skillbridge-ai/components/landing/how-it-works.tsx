"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/constants/landing";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>
      </div>

      <div className="flex flex-col">
        {HOW_IT_WORKS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-5"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-medium">
                {step.number}
              </div>
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="my-1 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="pb-10">
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-1 text-sm text-foreground/60">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}