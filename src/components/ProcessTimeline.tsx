"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessTimeline({
  dense = false,
}: {
  dense?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 55%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="absolute left-[15px] top-2 bottom-2 w-px bg-ink/10 md:left-1/2 md:-translate-x-px"
      />
      <motion.div
        aria-hidden
        className="absolute left-[15px] top-2 w-px origin-top bg-bronze md:left-1/2 md:-translate-x-px"
        style={{ height }}
      />

      <ol className={dense ? "space-y-10" : "space-y-16 md:space-y-24"}>
        {processSteps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <li key={step.step} className="relative grid md:grid-cols-2 md:gap-16">
              <div
                aria-hidden
                className="absolute left-[11px] top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 border-bronze bg-parchment md:left-1/2 md:-translate-x-1/2"
              />
              <Reveal
                className={`${left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"} pl-10 md:pl-0`}
                delay={0.05}
              >
                <span className="font-display text-4xl text-bronze/90 md:text-5xl">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70 md:text-base">
                  {step.body}
                </p>
              </Reveal>
              <div className="hidden md:block" />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
