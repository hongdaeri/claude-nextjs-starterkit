import { Zap } from "lucide-react";

import { ComponentShowcase } from "@/components/component-showcase";
import { HeroSection } from "@/components/hero-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/70 sticky top-0 z-10 border-b backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-foreground text-background flex size-6 items-center justify-center rounded-md">
              <Zap className="size-3.5" />
            </div>
            <span className="text-sm font-semibold tracking-tight">Next.js Starter Kit</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4">
        <HeroSection />
        <TechStackSection />
        <div className="from-border/0 via-border to-border/0 h-px bg-gradient-to-r" aria-hidden="true" />
        <ComponentShowcase />
      </main>

      <footer className="border-t py-8">
        <p className="text-muted-foreground container mx-auto px-4 text-center text-xs">
          Built with Next.js 16 · Tailwind CSS v4 · shadcn/ui · lucide-react
        </p>
      </footer>
    </div>
  );
}
