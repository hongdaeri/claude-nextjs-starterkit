"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";

import { loginAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">로그인</CardTitle>
          <CardDescription>이메일과 비밀번호를 입력해 주세요</CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction} className="flex flex-col gap-4">
            {state?.message && (
              <p
                role="alert"
                className="text-destructive rounded-lg border border-current/20 bg-current/5 px-3 py-2 text-sm"
              >
                {state.message}
              </p>
            )}

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">이메일</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                autoComplete="email"
                aria-describedby={state?.errors?.email ? "email-error" : undefined}
                aria-invalid={!!state?.errors?.email}
                required
              />
              {state?.errors?.email && (
                <p id="email-error" role="alert" className="text-destructive text-xs">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">비밀번호</Label>
                <Link
                  href="/forgot-password"
                  className="text-muted-foreground hover:text-foreground text-xs underline-offset-4 transition-colors hover:underline"
                >
                  비밀번호 찾기
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                aria-describedby={state?.errors?.password ? "password-error" : undefined}
                aria-invalid={!!state?.errors?.password}
                required
              />
              {state?.errors?.password && (
                <p id="password-error" role="alert" className="text-destructive text-xs">
                  {state.errors.password[0]}
                </p>
              )}
            </div>

            <Button type="submit" size="lg" disabled={isPending} className="mt-1 w-full">
              {isPending ? "로그인 중..." : "로그인하기"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-muted-foreground text-xs">
            계정이 없으신가요?{" "}
            <Link
              href="/signup"
              className="text-foreground font-medium underline-offset-4 hover:underline"
            >
              회원가입
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
