import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "./label";

describe("Label", () => {
  it("텍스트를 렌더링한다", () => {
    const { getByText } = render(<Label>이름</Label>);
    expect(getByText("이름")).toBeInTheDocument();
  });

  it("htmlFor 속성을 전달한다", () => {
    const { getByText } = render(<Label htmlFor="input-id">이름</Label>);
    expect(getByText("이름")).toHaveAttribute("for", "input-id");
  });

  it("커스텀 className을 적용한다", () => {
    const { getByText } = render(<Label className="custom-class">이름</Label>);
    expect(getByText("이름")).toHaveClass("custom-class");
  });

  it("data-slot 속성이 label로 설정된다", () => {
    const { getByText } = render(<Label>이름</Label>);
    expect(getByText("이름")).toHaveAttribute("data-slot", "label");
  });
});
