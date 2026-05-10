import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("클래스 이름을 병합한다", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("Tailwind 충돌 클래스를 올바르게 병합한다", () => {
    expect(cn("p-4", "p-8")).toBe("p-8");
  });

  it("조건부 클래스를 처리한다", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  it("undefined와 null을 무시한다", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
  });

  it("빈 입력에 대해 빈 문자열을 반환한다", () => {
    expect(cn()).toBe("");
  });
});
