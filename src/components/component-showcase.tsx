"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BUTTON_VARIANTS = [
  { variant: "default", label: "기본" },
  { variant: "secondary", label: "보조" },
  { variant: "outline", label: "아웃라인" },
  { variant: "ghost", label: "고스트" },
  { variant: "destructive", label: "삭제" },
] as const;

export function ComponentShowcase() {
  return (
    <section className="py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">컴포넌트 쇼케이스</h2>
        <p className="text-muted-foreground text-sm">shadcn/ui 컴포넌트 예시</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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

        <Card className="border-border/60">
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Input Form</CardTitle>
            <CardDescription>Input + Label 조합 예시</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="example@domain.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="name">이름</Label>
                <Input id="name" type="text" placeholder="홍길동" />
              </div>
              <Button type="submit" className="mt-1 w-full gap-2">
                제출 <ArrowRight className="size-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
