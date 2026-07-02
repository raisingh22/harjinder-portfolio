"use client";

import MotionWrapper from "./MotionWrapper";

export default function Projects() {
  const projects = [
    {
      num: "PROJECT 01",
      title: "B2B Ecommerce Platform",
      desc: [
        "Delivered four production mobile applications",
        "Implemented live order tracking with Google Maps",
        "Built real-time customer chat via WebSockets",
        "Push notifications using Firebase Cloud Messaging",
        "Supported applications with 1M+ downloads",
      ],
      tech: [
        "React Native",
        "Redux Toolkit",
        "Firebase",
        "Google Maps",
        "WebSockets",
        "REST APIs",
      ],
    },
    {
      num: "PROJECT 02",
      title: "Push Notification Platform",
      desc: [
        "Built internal token generation service",
        "Stored device information securely",
        "Delivered push notifications through API integration",
        "Designed scalable backend architecture",
      ],
      tech: ["Node.js", "Express", "MongoDB", "FCM"],
    },
    {
      num: "PROJECT 03",
      title: "Car Accessories Showroom",
      desc: [
        "Built customer-facing shopping application",
        "Designed responsive mobile UI",
        "Integrated backend services for catalog & orders",
        "Improved browsing experience with optimized performance",
      ],
      tech: ["React Native", "REST APIs", "Redux"],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">04</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Key Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <MotionWrapper key={project.title} delay={i * 0.1}>
              <div className="p-8 bg-surface border border-white/3 rounded-sm relative overflow-hidden group hover:-translate-y-2 hover:border-gold/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="font-mono text-xs text-text-muted tracking-widest mb-6">
                    {project.num}
                  </div>

                  <h3 className="font-display text-xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {project.desc.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-dim pl-5 relative leading-relaxed"
                      >
                        <span className="absolute left-0 text-gold text-xs">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs tracking-wider uppercase px-2 py-1 bg-gold/5 text-gold-dim rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
