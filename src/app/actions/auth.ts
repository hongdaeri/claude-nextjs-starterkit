"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식이 아닙니다"),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
});

export interface LoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string;
}

export async function loginAction(
  _prevState: LoginState | null,
  formData: FormData,
): Promise<LoginState> {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const parsed = loginSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // TODO: 실제 인증 로직 (DB 조회, 세션 발급 등)
  // 현재는 자격 증명이 올바르지 않은 경우를 시뮬레이션
  if (parsed.data.email !== "test@example.com") {
    return {
      message: "이메일 또는 비밀번호가 올바르지 않습니다",
    };
  }

  // 로그인 성공 시 redirect 처리 예시:
  // redirect("/dashboard");

  return {};
}
