import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8">
      <div className="text-[4rem] font-bold text-[var(--color-ink-faint)] mb-4">404</div>
      <h2 className="text-[1.25rem] font-semibold text-[var(--color-ink)] mb-3">Page not found</h2>
      <p className="text-[14px] text-[var(--color-ink-muted)] mb-8 max-w-[360px]">
        This section hasn&apos;t been built yet. Add content to{" "}
        <code className="text-accent font-mono">lib/content/index.ts</code> to bring it to life.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-xl glass text-[13px] text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
      >
        Back to overview
      </Link>
    </div>
  );
}
