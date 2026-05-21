import type { ColorGroup } from "@/types/content";
import { cn } from "@/lib/utils";

interface ColorSystemProps {
  groups: ColorGroup[];
  className?: string;
}

export function ColorSystem({ groups, className }: ColorSystemProps) {
  return (
    <div className={cn("space-y-12 my-10", className)}>
      {groups.map((group) => (
        <div key={group.name}>
          <div className="mb-4">
            <h3 className="text-[15px] font-semibold text-[var(--color-ink)]">{group.name}</h3>
            {group.description && (
              <p className="text-[13px] text-[var(--color-ink-muted)] mt-1">{group.description}</p>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {group.swatches.map((swatch) => (
              <div
                key={swatch.name}
                className="group rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-canvas-raised)]"
              >
                <div
                  className="h-20 w-full transition-transform duration-300 group-hover:scale-105 origin-bottom"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="p-3">
                  <div className="text-[12px] font-medium text-[var(--color-ink)] mb-1">{swatch.name}</div>
                  <div className="text-[11px] font-mono text-[var(--color-ink-subtle)]">{swatch.hex}</div>
                  {swatch.usage && (
                    <div className="text-[11px] text-[var(--color-ink-subtle)] mt-1 leading-snug">{swatch.usage}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
