# React Study

React와 TypeScript를 공부하기 위한 학습용 프로젝트입니다.
Vite를 기반으로 구성되어 있습니다.

## 기술 스택

- **React** 19
- **TypeScript**
- **Vite** (개발 서버 및 번들러)
- **ESLint** (코드 린팅)

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

실행 후 터미널에 표시되는 주소(기본값: `http://localhost:5173`)로 접속합니다.

## 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (HMR 지원) |
| `npm run build` | 타입 체크 후 프로덕션 빌드 |
| `npm run preview` | 빌드 결과물 미리보기 |
| `npm run lint` | ESLint로 코드 검사 |

## 폴더 구조

```
React-Study/
├── public/          # 정적 파일
├── src/             # 소스 코드
│   ├── App.tsx      # 루트 컴포넌트
│   └── main.tsx     # 진입점
├── index.html       # HTML 템플릿
├── vite.config.ts   # Vite 설정
└── tsconfig.json    # TypeScript 설정
```
