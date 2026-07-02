"use client";

import MotionWrapper from "./MotionWrapper";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Mobile",
      items: ["React Native", "React Navigation", "Android", "iOS"],
    },
    {
      title: "Frontend",
      items: ["React.js", "Redux / Redux Toolkit", "Context API", "Hooks"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    },
    {
      title: "Cloud",
      items: ["Firebase", "Firebase Cloud Messaging", "Authentication", "Google Maps"],
    },
    {
      title: "Real-Time",
      items: ["WebSockets", "XMPP", "Push Notifications", "Real-Time Chat"],
    },
    {
      title: "Tools",
      items: ["Git / GitHub", "Bitbucket", "Postman", "Android Studio"],
    },
    {
      title: "Platforms",
      items: ["Xcode", "Google Play Console", "App Store Connect", "Agile / Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">02</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Technical Skills
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <MotionWrapper key={group.title} delay={i * 0.05}>
              <div className="p-6 bg-surface border border-white/3 rounded-sm relative overflow-hidden group hover:border-gold/15 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="font-mono text-xs tracking-widest uppercase text-gold mb-6">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-dim pb-2 border-b border-white/2 hover:text-text hover:pl-2 transition-all duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
