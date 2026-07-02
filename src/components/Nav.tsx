"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      style={{ y, opacity }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 backdrop-blur-xl bg-bg/70 border-b border-gold/5"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-mono text-sm tracking-wider text-gold uppercase">
          HS<span className="text-text-muted">.dev</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-xs tracking-widest uppercase text-text-dim hover:text-text transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 font-mono text-xs text-green">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Available for work
        </div>
      </div>
    </motion.nav>
  );
}
