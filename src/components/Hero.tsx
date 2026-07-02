"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgTextX = useTransform(scrollY, [0, 600], [0, 200]);
  const bgTextOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const stats = [
    { num: "4+", label: "Years Experience" },
    { num: "1M+", label: "App Downloads" },
    { num: "4", label: "Production Apps" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden"
    >
      <motion.div
        style={{ x: bgTextX, opacity: bgTextOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-gold/3 whitespace-nowrap pointer-events-none font-bold"
      >
        DEVELOPER
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-end relative z-10">
        <div>
          <MotionWrapper>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-gold" />
              <span className="font-mono text-xs tracking-widest uppercase text-gold">
                Mobile Software Engineer
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.92] mb-6">
              Harjinder
              <br />
              <em className="italic text-gold font-normal">Singh</em>
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="font-mono text-sm md:text-base text-text-dim leading-relaxed max-w-lg">
              React Native & React.js Developer building scalable
              cross-platform mobile applications with 4+ years of production
              experience.
            </p>
          </MotionWrapper>
        </div>

        <div className="md:text-right">
          <div className="flex md:flex-col gap-6 md:items-end">
            {stats.map((stat, i) => (
              <MotionWrapper key={stat.label} delay={0.3 + i * 0.1}>
                <div className="pt-4 border-t border-text-muted">
                  <div className="font-display text-5xl text-gold leading-none">
                    {stat.num}
                  </div>
                  <div className="font-mono text-xs tracking-widest uppercase text-text-dim mt-1">
                    {stat.label}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-widest uppercase text-text-muted">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
