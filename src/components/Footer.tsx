export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-white/3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-text-muted tracking-wider">
          © 2025 Harjinder Singh. All rights reserved.
        </p>
        <p className="font-mono text-xs text-text-muted tracking-wider">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
