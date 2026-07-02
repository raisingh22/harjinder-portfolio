"use client";

import MotionWrapper from "./MotionWrapper";

export default function Contact() {
  const links = [
    { label: "Email", href: "mailto:harjinder@example.com" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Portfolio", href: "#" },
  ];

  return (
    <section id="contact" className="py-40 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Let's <em className="italic text-gold">connect</em>
          </h2>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <p className="text-text-dim max-w-lg mx-auto mb-12 leading-relaxed">
            Open to new opportunities in React Native, React.js, and mobile
            engineering roles.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase px-8 py-3 border border-gold/30 text-gold rounded-sm relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                <span className="relative z-10 group-hover:text-bg transition-colors duration-400">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
