# CLAUDE.md

이 파일은 Claude Code가 이 저장소에서 작업할 때 따라야 하는 운영 가이드를 제공한다. 프로젝트 정체성·기술 스택·언어 정책은 `@AGENTS.md`를 참조한다.

@AGENTS.md

## 명령어 (npm 기준)

```bash
npm run dev           # 개발 서버 (Turbopack)
npm run build         # 프로덕션 빌드 (타입 체크 포함)
npm run start         # 프로덕션 서버
npm run lint          # ESLint 검사
npm run lint:fix      # ESLint 자동 수정
npm run format        # Prettier 적용
npm run format:check  # Prettier 검사
npm run test          # Vitest 1회 실행
npm run test:watch    # Vitest watch 모드
npm run test:coverage # Vitest 커버리지 리포트
```

타입 체크 단독 실행: `npx tsc --noEmit`

## 디렉터리 구조

```
src/
  app/                  # App Router (layout.tsx, page.tsx, globals.css, favicon.ico)
  components/
    ui/                 # shadcn/ui 자동 생성 — 직접 편집 금지
    *-section.tsx       # 페이지 섹션 컴포넌트 (hero, tech-stack, component-showcase)
    theme-provider.tsx  # next-themes 래퍼
    theme-toggle.tsx    # 라이트/다크/시스템 토글
  lib/
    utils.ts            # cn() (clsx + tailwind-merge)
  test/
    setup.ts            # Vitest 전역 setup (@testing-library/jest-dom)
```

경로 별칭: `@/*` → `src/*`

## 코드 컨벤션

- **페이지 컴포지션**: `app/page.tsx`는 헤더·메인·푸터 골격만 두고 섹션은 `components/<name>-section.tsx`로 분리한다.
- **클래스 결합**: 동적 className은 항상 `cn()`으로 합친다 (Tailwind 충돌 머지 보장).
- **shadcn UI 수정**: `src/components/ui/*`는 CLI가 재생성 시 덮어쓴다. 변형이 필요하면 wrapper 컴포넌트를 따로 만들거나 `cn()`으로 className 확장만 한다.
- **base-ui API 주의**: shadcn `base-nova`의 일부 컴포넌트(예: `DropdownMenuTrigger`)는 `render={<Button .../>}` 패턴을 쓴다. Radix의 `asChild`와 다르므로 혼동 금지.
- **icons**: 신규 아이콘은 `lucide-react`에서 import한다 (다른 아이콘 라이브러리 추가 금지).

## 테마 / 스타일

- Tailwind v4 CSS-first — `tailwind.config` 파일을 만들지 않는다.
- 테마 토큰은 `src/app/globals.css`의 `@theme inline` 블록 + `:root` / `.dark` CSS 변수(oklch).
- 다크 모드는 `class` 전략 (`@custom-variant dark (&:is(.dark *))`).
- `layout.tsx`의 `lang="ko"`와 `suppressHydrationWarning`은 next-themes 호환을 위해 **변경 금지**.
- 색상을 추가/수정할 때는 `:root`와 `.dark` 양쪽 변수를 동시에 갱신한다.

## 테스트 환경

- 러너: Vitest 4, 환경: jsdom, 유틸: `@testing-library/react` + `@testing-library/jest-dom`.
- 설정: `vitest.config.ts` (글로벌 API, `@/*` alias), 진입점: `src/test/setup.ts`.
- 파일 위치: 대상 모듈 옆에 코로케이션 (`utils.test.ts`, `label.test.tsx`).
- 한국어 `describe/it` 라벨을 사용한다 (예: `it("Tailwind 충돌 클래스를 올바르게 병합한다", ...)`).

## MCP 서버 활용

`.mcp.json`에 등록된 서버를 다음 우선순위로 활용한다.

- **context7** — 라이브러리/프레임워크/SDK 문서 조회의 1순위. Next.js 16 breaking changes를 학습 데이터로 추정하지 말고 매번 확인.
- **shadcn** — 새 shadcn 컴포넌트 검색·추가 명령 생성. 수동 작성 전 항상 먼저 조회.
- **playwright** — UI/E2E 검증이 필요할 때.
- **sequential-thinking** — 다단계 설계나 트레이드오프 분석이 필요할 때.

## 함정 / 회피

- `next.config.ts`의 `turbopack.root`는 모노레포 오탐 방지용 — 의미 없이 변경하지 않는다.
- `package-lock.json` 기준 npm 워크플로 — 다른 패키지 매니저 도입 전 사용자 확인.
- `.next/`, `node_modules/`, `.playwright-mcp/`는 커밋 금지 (`.gitignore` 등록됨).
- 컴포넌트 추가 후 **변경된 코드 영역**에 대해서만 `code-reviewer` 서브에이전트(`.claude/agents/code-reviewer.md` 등록됨)를 돌린다.
