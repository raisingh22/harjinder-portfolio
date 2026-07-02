"use client";

import MotionWrapper from "./MotionWrapper";

export default function About() {
  const highlights = [
    {
      icon: "📱",
      title: "Cross-Platform",
      desc: "Android & iOS from a single codebase",
    },
    {
      icon: "🏗️",
      title: "Architecture",
      desc: "Scalable mobile app architecture",
    },
    {
      icon: "⚡",
      title: "Performance",
      desc: "Optimized for speed & reliability",
    },
    {
      icon: "🔗",
      title: "Real-Time",
      desc: "WebSockets & XMPP integration",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper>
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-gold tracking-wider">01</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">About</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-text-muted to-transparent" />
          </div>
        </MotionWrapper>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionWrapper delay={0.1}>
            <div className="text-text-dim leading-relaxed space-y-4">
              <p>
                <strong className="text-text font-medium">
                  React Native Developer
                </strong>{" "}
                with 4+ years of experience building scalable Android and iOS
                applications using React Native, React.js, JavaScript, Redux
                Toolkit, Firebase, and Node.js.
              </p>
              <p>
                Experienced in developing{" "}
                <strong className="text-text font-medium">
                  B2B e-commerce platforms
                </strong>
                , real-time communication systems, location-based services, and
                push notification infrastructure. Contributed to production
                applications with more than{" "}
                <strong className="text-text font-medium">
                  1 million downloads
                </strong>{" "}
                while collaborating with cross-functional teams to deliver
                high-performance mobile experiences.
              </p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <MotionWrapper key={item.title} delay={0.2 + i * 0.1}>
                <div className="p-6 bg-surface-2 border border-gold/5 rounded-sm hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="font-mono text-xs tracking-wider uppercase text-gold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-dim">{item.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
