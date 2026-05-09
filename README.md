# Next.js Starter Kit

Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui 기반의 즉시 사용 가능한 웹 개발 스타터 킷입니다.

## 기술 스택

| 패키지                                                    | 버전   | 설명                               |
| --------------------------------------------------------- | ------ | ---------------------------------- |
| [Next.js](https://nextjs.org)                             | 16.2.6 | App Router, Turbopack 기본 번들러  |
| [TypeScript](https://www.typescriptlang.org)              | ^5     | 타입 안전성                        |
| [Tailwind CSS](https://tailwindcss.com)                   | v4.2   | CSS-first 방식, config 파일 불필요 |
| [shadcn/ui](https://ui.shadcn.com)                        | 4.7.0  | new-york 스타일 컴포넌트           |
| [lucide-react](https://lucide.dev)                        | v1.14  | 아이콘 라이브러리                  |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6  | 다크 모드                          |
| [React](https://react.dev)                                | 19.2.4 |                                    |

## Prerequisites

- **Node.js 20.9+** 필수 (권장: Node.js 22 LTS)

```bash
# nvm 사용 시
nvm install 22 && nvm use 22

# 버전 확인
node -v
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (Turbopack)
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 스크립트

| 명령어                 | 설명                       |
| ---------------------- | -------------------------- |
| `npm run dev`          | 개발 서버 실행 (Turbopack) |
| `npm run build`        | 프로덕션 빌드              |
| `npm run start`        | 프로덕션 서버 실행         |
| `npm run lint`         | ESLint 검사                |
| `npm run lint:fix`     | ESLint 자동 수정           |
| `npm run format`       | Prettier 포맷 적용         |
| `npm run format:check` | Prettier 포맷 검사         |

## 디렉토리 구조

```
claude-nextjs-starterkit/
├── public/                     # 정적 파일
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (ThemeProvider 포함)
│   │   ├── page.tsx            # 데모 페이지
│   │   ├── globals.css         # 전역 스타일 (@theme inline + OKLCH 색상)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   ├── theme-provider.tsx  # next-themes 래퍼
│   │   └── theme-toggle.tsx    # 다크 모드 토글
│   └── lib/
│       └── utils.ts            # cn() 유틸 (clsx + tailwind-merge)
├── .prettierrc.json
├── .prettierignore
├── AGENTS.md                   # AI 코딩 에이전트 가이드
├── CLAUDE.md
├── components.json             # shadcn/ui 설정
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add <컴포넌트명>

# 예시
npx shadcn@latest add badge
npx shadcn@latest add dialog
npx shadcn@latest add sonner
```

추가된 컴포넌트는 `src/components/ui/` 디렉토리에 생성됩니다.

## 다크 모드

헤더의 토글 버튼으로 **라이트 / 다크 / 시스템** 세 가지 테마를 전환할 수 있습니다.

- `ThemeProvider`: `src/app/layout.tsx`에서 앱 전체를 감쌉니다.
- `ThemeToggle`: `src/components/theme-toggle.tsx`에서 테마 변경 UI를 제공합니다.
- 색상 변수: `src/app/globals.css`의 `@theme inline` 블록에서 OKLCH 형식으로 정의됩니다.

## Tailwind CSS v4 특징

- `tailwind.config.{js,ts}` 파일이 **없습니다**.
- 테마 커스텀은 `src/app/globals.css`의 `@theme { ... }` 블록에서 CSS 변수로 설정합니다.
- `postcss.config.mjs`에 `@tailwindcss/postcss` 플러그인을 사용합니다.

```css
/* globals.css 예시 */
@import "tailwindcss";

@theme inline {
  --color-primary: oklch(0.21 0.006 285.885);
  /* ... */
}
```
