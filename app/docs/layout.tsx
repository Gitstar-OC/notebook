import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions} >
      <span
        className="absolute inset-0 z-[-1] h-[64rem] max-h-screen overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)",
        }}
      >
        <GridPattern
          squares={[
            [16, 17], 
            [18, 20], 
            [21, 18], 
            [15, 22], 
            [14 , 19], 
            [20, 22], 
            [12, 17], 
            [19, 16], 
            [12, 23]
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-[10%] inset-y-[-80%] h-[200%] skew-y-12"
          )}
        />
      </span>

      {children}
    </DocsLayout>
  );
}
