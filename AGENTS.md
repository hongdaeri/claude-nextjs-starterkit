<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 응답 언어

- 모든 응답·주석·커밋 메시지·문서를 **한국어**로 작성한다.
- 식별자(변수·함수·타입명)와 외부 고유명사는 영문 그대로 둔다.

## 기술 스택 (고정)

| 영역 | 라이브러리 | 버전 |
| --- | --- | --- |
| 프레임워크 | Next.js (App Router, Turbopack 기본) | 16.2.6 |
| 런타임 | React / React DOM | 19.2.4 |
| 언어 | TypeScript | ^5 |
| 스타일 | Tailwind CSS v4 (CSS-first, **`tailwind.config` 없음**) | ^4 |
| UI | shadcn/ui (style: `base-nova`, baseColor: `neutral`) | 4.7 |
| UI 기반 | `@base-ui/react` (shadcn `base-nova`의 primitive 레이어) | ^1.4 |
| 아이콘 | lucide-react | ^1.14 |
| 다크모드 | next-themes | ^0.4 |
| 테스트 | Vitest 4 + jsdom + @testing-library/{react,jest-dom} | — |

## 의존성 추가 시 주의

- shadcn 컴포넌트는 `npx shadcn@latest add <name>`으로만 추가 (`src/components/ui/` 자동 생성).
- 신규 라이브러리 채택 전 **context7 MCP**로 최신 문서 조회 우선.
- 번들러는 Turbopack 고정 — `--webpack` 플래그·webpack 설정 추가 금지.
