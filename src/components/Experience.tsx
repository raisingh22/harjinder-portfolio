"use client";

import MotionWrapper from "./MotionWrapper";

export default function Experience() {
  const experiences = [
    {
      date: "Nov 2024 — Feb 2026",
      company: "Bizcrum Infotech Pvt Ltd",
      role: "Associate Software Engineer",
      bullets: [
        "Developed and maintained 4 production React Native applications supporting Android and iOS platforms",
        "Contributed to applications that achieved 1M+ downloads through scalable mobile architecture",
        "Built Google Maps location tracking to improve delivery visibility and customer experience",
        "Integrated Firebase Cloud Messaging for real-time push notifications",
        "Designed WebSocket and XMPP-based chat functionality for instant customer support",
        "Collaborated with backend engineers to integrate REST APIs and improve application stability",
      ],
      tags: [
        "React Native",
        "Redux Toolkit",
        "Firebase",
        "Google Maps",
        "WebSockets",
        "REST APIs",
        "JavaScript",
        "Git",
      ],
    },
    {
      date: "Jan 2024 — Nov 2024",
      company: "DKC Tradex Business",
      role: "Freelance React Native Developer",
      bullets: [
        "Delivered a production mobile application for an international herbs and spices marketplace",
        "Built reusable React Native components that reduced future development effort",
        "Integrated REST APIs for product catalog, authentication, and order management",
        "Optimized application performance to improve user experience",
      ],
      tags: ["React Native", "REST APIs", "Redux", "Firebase"],
    },
    {
      date: "Jan 2023 — Jan 2024",
      company: "Independent",
      role: "React.js Developer",
      bullets: [
        "Developed responsive web applications using React.js",
        "Implemented reusable UI components to accelerate feature delivery",
        "Integrated backend APIs and optimized frontend performance",
        "Participated in Agile development cycles",
      ],
      tags: ["React.js", "Redux", "REST APIs", "JavaScript"],
    },
    {
      date: "Nov 2021 — Jan 2023",
      company: "Bijins",
      role: "React Native Developer",
      bullets: [
        "Built production-ready React Native features for Android and iOS",
        "Integrated REST APIs and managed application state",
        "Improved UI responsiveness and application performance",
        "Participated in debugging, testing, and code reviews",
      ],
      tags: ["React Native", "JavaScript", "REST APIs", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">03</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-text-muted to-transparent" />

          {experiences.map((exp, i) => (
            <MotionWrapper key={exp.role} delay={i * 0.1}>
              <div className="relative pb-16 last:pb-0">
                <div className="absolute -left-12 top-2 w-2.5 h-2.5 rounded-full bg-bg border-2 border-gold group-hover:bg-gold transition-colors" />

                <div className="flex flex-wrap gap-6 items-baseline mb-4">
                  <span className="font-mono text-xs text-gold tracking-wider">
                    {exp.date}
                  </span>
                  <span className="font-mono text-xs text-text-dim tracking-wider">
                    {exp.company}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mb-4">
                  {exp.role}
                </h3>

                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-text-dim leading-relaxed pl-5 relative"
                    >
                      <span className="absolute left-0 top-2 w-1.5 h-px bg-gold" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 border border-gold/15 text-gold-dim rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
