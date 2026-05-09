import { ArrowRight, Component, ExternalLink, FileCode2, Palette, Zap } from "lucide-react";
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
  },
  {
    icon: FileCode2,
    title: "TypeScript",
    description: "타입 안전성, 자동완성, 개발 생산성 향상",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "@theme CSS 변수 기반, config 파일 불필요",
  },
  {
    icon: Component,
    title: "shadcn/ui",
    description: "복사-붙여넣기 방식의 커스터마이징 가능한 UI 컴포넌트",
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
      <header className="bg-background/80 sticky top-0 z-10 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Zap className="text-primary size-5" />
            <span className="text-sm font-semibold">Next.js Starter Kit</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto flex-1 space-y-16 px-4 py-12">
        {/* Hero */}
        <section className="space-y-6 pt-8 text-center">
          <div className="bg-muted text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <Zap className="size-3" />
            Next.js 16 · Tailwind v4 · shadcn/ui
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            빠르게 시작하는
            <br />
            <span className="text-muted-foreground">웹 개발 스타터 킷</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            최신 기술 스택으로 구성된 즉시 사용 가능한 Next.js 스타터입니다. 다크 모드, 타입 안전성,
            반응형 UI가 기본 포함됩니다.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              시작하기 <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <ExternalLink className="size-4" /> GitHub
            </Button>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold">기술 스택</h2>
            <p className="text-muted-foreground text-sm">현대적인 웹 개발을 위한 최적의 조합</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 mb-2 flex size-9 items-center justify-center rounded-lg">
                    <Icon className="text-primary size-5" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Component Showcase */}
        <section className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold">컴포넌트 쇼케이스</h2>
            <p className="text-muted-foreground text-sm">shadcn/ui 컴포넌트 예시</p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Button variants */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Button Variants</CardTitle>
                <CardDescription>다양한 버튼 스타일</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {BUTTON_VARIANTS.map(({ variant, label }) => (
                    <Button key={variant} variant={variant}>
                      {label}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Input Form</CardTitle>
                <CardDescription>Input + Label 조합 예시</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="example@domain.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" type="text" placeholder="홍길동" />
                </div>
                <Button className="w-full gap-2">
                  제출 <ArrowRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="text-muted-foreground container mx-auto px-4 text-center text-xs">
          Built with Next.js 16 · Tailwind CSS v4 · shadcn/ui · lucide-react
        </div>
      </footer>
    </div>
  );
}
