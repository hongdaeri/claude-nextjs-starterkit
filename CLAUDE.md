# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

```bash
npm run dev          # Turbopack 개발 서버
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npm run lint:fix     # ESLint 자동 수정
npm run format       # Prettier 포맷팅
npm run format:check # Prettier 검사
```

TypeScript 타입 검사 (별도 명령어 없음 — `next build`가 타입 체크 포함):
```bash
npx tsc --noEmit
```

## 아키텍처

### 디렉터리 구조

```
src/
  app/           # Next.js App Router (page.tsx, layout.tsx, globals.css)
  components/
    ui/          # shadcn/ui 자동 생성 컴포넌트 (수동 편집 지양)
    *.tsx        # 공통 컴포넌트 (ThemeProvider, ThemeToggle 등)
  lib/
    utils.ts     # cn() 유틸리티 (clsx + tailwind-merge)
  hooks/         # 커스텀 훅 (현재 미사용)
```

### 테마 시스템

- `ThemeProvider` (`src/components/theme-provider.tsx`) — next-themes 래퍼, `layout.tsx`에서 전체 감싸기
- 다크 모드: `class` 전략 (`.dark` 클래스 토글)
- CSS 변수는 oklch 색공간 사용 (`globals.css`의 `:root` / `.dark` 블록)
- `@theme inline` 블록이 Tailwind 유틸리티와 CSS 변수를 연결

### 스타일링 규칙

- Tailwind v4 CSS-first 방식 — `tailwind.config` 파일 없음
- 테마 토큰 추가/수정은 `globals.css`의 `@theme inline` 블록에서
- 컴포넌트 클래스 조합 시 항상 `cn()` 사용
- Prettier + `prettier-plugin-tailwindcss`로 클래스 순서 자동 정렬

### shadcn/ui

- 스타일: `base-nova`, 색상 기반: `neutral`, CSS 변수 방식
- 컴포넌트 추가: `npx shadcn@latest add <component-name>`
- `src/components/ui/` 파일은 shadcn CLI가 관리 — 직접 편집 시 재생성 시 덮어쓰임 주의
- 아이콘: `lucide-react` v1

### 경로 별칭

`@/*` → `src/*` (예: `@/lib/utils`, `@/components/ui/button`)
