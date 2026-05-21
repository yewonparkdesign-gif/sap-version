import { Info, AlertTriangle, Lightbulb, StickyNote } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "insight" | "note";

interface CalloutProps {
  variant: CalloutVariant;
  body: string;
  className?: string;
}

const styles: Record<CalloutVariant, { bg: string; border: string; label: string }> = {
  info:    { bg: "bg-[var(--sap-blue-6)]/[0.08]",   border: "border-[var(--sap-blue-6)]/20",   label: "Note" },
  warning: { bg: "bg-[var(--sap-mango-5)]/[0.08]",  border: "border-[var(--sap-mango-5)]/20",  label: "Warning" },
  insight: { bg: "bg-[var(--sap-indigo-5)]/[0.08]", border: "border-[var(--sap-indigo-5)]/20", label: "Insight" },
  note:    { bg: "bg-[var(--color-glass-bg)]",       border: "border-[var(--color-border)]",    label: "Note" },
};

function CalloutIcon({ variant }: { variant: CalloutVariant }) {
  const cls = "shrink-0 mt-0.5";
  switch (variant) {
    case "info":    return <Info size={14} className={cn(cls, "text-[var(--sap-blue-6)]")} />;
    case "warning": return <AlertTriangle size={14} className={cn(cls, "text-[var(--sap-mango-5)]")} />;
    case "insight": return <Lightbulb size={14} className={cn(cls, "text-[var(--sap-indigo-5)]")} />;
    case "note":    return <StickyNote size={14} className={cn(cls, "text-[var(--color-ink-subtle)]")} />;
  }
}

export function Callout({ variant, body, className }: CalloutProps) {
  const s = styles[variant];
  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-3.5 rounded-xl border my-6 text-[14px] leading-relaxed",
        s.bg,
        s.border,
        className
      )}
    >
      <CalloutIcon variant={variant} />
      <p className="text-[var(--color-ink-muted)]">{body}</p>
    </div>
  );
}
