"use client";

import MotionWrapper from "./MotionWrapper";

export default function Achievements() {
  const achievements = [
    {
      icon: "★",
      text: "Contributed to mobile applications exceeding 1 million downloads",
    },
    {
      icon: "◆",
      text: "Developed and maintained four production B2B mobile applications",
    },
    {
      icon: "⚡",
      text: "Built real-time communication using WebSockets and XMPP",
    },
    {
      icon: "◉",
      text: "Delivered cross-platform applications for Android and iOS from a single codebase",
    },
    {
      icon: "✓",
      text: "Successfully shipped multiple applications to production environments",
    },
  ];

  return (
    <section id="achievements" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">05</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Achievements
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <div className="space-y-4 max-w-3xl">
          {achievements.map((item, i) => (
            <MotionWrapper key={item.text} delay={i * 0.1}>
              <div className="flex items-start gap-6 p-6 border-l-2 border-gold bg-gold/3 hover:bg-gold/5 hover:translate-x-1 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold rounded-full text-gold text-lg">
                  {item.icon}
                </div>
                <p className="text-sm text-text-dim leading-relaxed">
                  {item.text}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
