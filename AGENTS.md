<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 프로젝트 컨텍스트

- 모든 응답과 주석은 **한국어**로 작성하세요.
- **기술 스택**: Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui (base-nova) · lucide-react v1 · next-themes
- **번들러**: Turbopack (기본값, `--webpack` 플래그 없이 사용)
- **스타일**: Tailwind v4 CSS-first 방식 (`globals.css`의 `@theme inline` 블록, `tailwind.config` 없음)
- **컴포넌트**: `src/components/ui/` (shadcn/ui), `src/components/` (공통 컴포넌트)
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add <component-name>`
