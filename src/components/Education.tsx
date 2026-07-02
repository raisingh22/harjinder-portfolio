"use client";

import MotionWrapper from "./MotionWrapper";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">06</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="flex flex-col md:flex-row gap-12 items-center p-12 bg-surface border border-white/3 rounded-sm">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">
                Bachelor of Computer Science (IT)
              </h3>
              <div className="font-mono text-xs tracking-wider uppercase text-gold mb-1">
                Guru Kashi University
              </div>
              <div className="text-sm text-text-dim">GPA: 7.8 / 10</div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
