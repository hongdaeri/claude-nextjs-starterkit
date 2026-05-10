import { Component, FileCode2, Palette, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TechItem {
  icon: LucideIcon;
  title: string;
  description: string;
  iconClass: string;
  bgClass: string;
}

const TECH_STACK: TechItem[] = [
  {
    icon: Zap,
    title: "Next.js 16",
    description: "App Router, Turbopack, React Server Components",
    iconClass: "text-amber-500",
    bgClass: "bg-amber-500/10",
  },
  {
    icon: FileCode2,
    title: "TypeScript",
    description: "타입 안전성, 자동완성, 개발 생산성 향상",
    iconClass: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "@theme CSS 변수 기반, config 파일 불필요",
    iconClass: "text-cyan-500",
    bgClass: "bg-cyan-500/10",
  },
  {
    icon: Component,
    title: "shadcn/ui",
    description: "복사-붙여넣기 방식의 커스터마이징 가능한 UI 컴포넌트",
    iconClass: "text-violet-500",
    bgClass: "bg-violet-500/10",
  },
];

export function TechStackSection() {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">기술 스택</h2>
        <p className="text-muted-foreground text-sm">현대적인 웹 개발을 위한 최적의 조합</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK.map(({ icon: Icon, title, description, iconClass, bgClass }) => (
          <Card
            key={title}
            className="border-border/60 group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="pb-3">
              <div
                className={`mb-3 flex size-10 items-center justify-center rounded-xl ${bgClass}`}
              >
                <Icon className={`size-5 ${iconClass}`} />
              </div>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
