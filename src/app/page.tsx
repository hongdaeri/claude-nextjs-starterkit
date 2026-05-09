import { ArrowRight, Component, ExternalLink, FileCode2, Palette, Sparkles, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TECH_STACK = [
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

const BUTTON_VARIANTS = [
  { variant: "default", label: "기본" },
  { variant: "secondary", label: "보조" },
  { variant: "outline", label: "아웃라인" },
  { variant: "ghost", label: "고스트" },
  { variant: "destructive", label: "삭제" },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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
        {/* Hero */}
        <section className="relative flex flex-col items-center py-28 text-center">
          {/* 도트 그리드 배경 */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, oklch(0.5 0 0 / 0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)",
            }}
          />

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm">
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

        {/* Tech Stack */}
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

        {/* 섹션 구분선 */}
        <div className="from-border/0 via-border to-border/0 h-px bg-gradient-to-r" />

        {/* Component Showcase */}
        <section className="py-16">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight">컴포넌트 쇼케이스</h2>
            <p className="text-muted-foreground text-sm">shadcn/ui 컴포넌트 예시</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Button variants */}
            <Card className="border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-base">Button Variants</CardTitle>
                <CardDescription>다양한 버튼 스타일</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {BUTTON_VARIANTS.map(({ variant, label }) => (
                    <Button key={variant} variant={variant} size="sm">
                      {label}
                    </Button>
                  ))}
                </div>
                <div className="border-border/50 flex flex-wrap items-center gap-2 border-t pt-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card className="border-border/60">
              <CardHeader className="pb-4">
                <CardTitle className="text-base">Input Form</CardTitle>
                <CardDescription>Input + Label 조합 예시</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="example@domain.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" type="text" placeholder="홍길동" />
                </div>
                <Button className="mt-1 w-full gap-2">
                  제출 <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <p className="text-muted-foreground container mx-auto px-4 text-center text-xs">
          Built with Next.js 16 · Tailwind CSS v4 · shadcn/ui · lucide-react
        </p>
      </footer>
    </div>
  );
}
