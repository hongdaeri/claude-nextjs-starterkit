import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center py-28 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.5 0 0 / 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)",
        }}
      />

      <div className="bg-background/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm">
        <Sparkles className="text-primary size-3" />
        Next.js 16 · Tailwind v4 · shadcn/ui
      </div>

      <h1 className="mb-6 max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl">
        빠르게 시작하는
        <br />
        <span className="from-foreground to-muted-foreground bg-gradient-to-br bg-clip-text text-transparent">
          웹 개발 스타터 킷
        </span>
      </h1>

      <p className="text-muted-foreground mb-10 max-w-md text-lg leading-relaxed">
        최신 기술 스택으로 구성된 즉시 사용 가능한 Next.js 스타터입니다. 다크 모드, 타입 안전성,
        반응형 UI가 기본 포함됩니다.
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button size="lg" className="h-11 gap-2 px-6">
          시작하기 <ArrowRight className="size-4" />
        </Button>
        <Button size="lg" variant="outline" className="h-11 gap-2 px-6">
          <ExternalLink className="size-4" />
          GitHub
        </Button>
      </div>
    </section>
  );
}
