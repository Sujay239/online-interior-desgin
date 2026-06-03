# Style Quiz Multi-Step Form — Implementation Plan

## Goal

Build a multi-step image-based style quiz at `/style-quiz-start` that captures user design preferences through 10 binary image comparison steps, followed by an email capture modal.

---

## Reference Analysis (from video)

The quiz flow has 3 distinct phases:

1. **Hero Entry** (`/quiz`) — Already built ✅  
2. **Multi-Step Image Quiz** (`/style-quiz-start`) — This plan
3. **Email Capture Modal** — After final selection

### Quiz UX Flow
- **Header**: Question text "Click on the style you prefer" + instruction "Point us to the styles you like by clicking on an image"
- **Image Selection**: Two large side-by-side images with a circular "OR" badge between them
- **Interaction**: Hover → gold border highlight. Click → selects image, auto-advances to next step
- **Alternatives**: "Neither" link below the OR badge, "SKIP ALL" button at bottom
- **Progress**: 10 step circles at the bottom. Completed steps show a tiny thumbnail of the selected image
- **10 total steps** of A/B image comparisons
- **Final Step**: Email capture modal with "SAVE & CONTINUE" gold button + social login options (Google, Facebook)

---

## Proposed Changes

### Data Layer

#### [NEW] [quizData.ts](../src/services/quizData.ts)

Static quiz configuration: 10 steps, each with two image options (image URL, alt text, style label). This keeps quiz content decoupled from UI components.

```typescript
interface QuizOption {
  id: string;
  imageUrl: string;
  alt: string;
  styleLabel: string;
}

interface QuizStep {
  id: number;
  optionA: QuizOption;
  optionB: QuizOption;
}
```

---

### Page & Components

#### [NEW] [StyleQuizStart.tsx](../src/app/pages/public/StyleQuizStart.tsx)

The page orchestrator. Manages quiz state (current step, selections array) and renders the quiz UI. Contains:

- SEO meta tags
- State management: `currentStep`, `selections[]`
- Delegates rendering to `StyleQuizForm`
- After step 10 → shows `EmailCaptureDialog`

#### [NEW] [StyleQuizForm.tsx](../src/app/pages/public/StyleQuiz/StyleQuizForm.tsx)

The core quiz UI component. Receives current step data, handles image selection:

- **Header**: Serif question + sans-serif instruction text
- **Image Pair**: Two responsive `BlurImage` components side-by-side with gold hover borders
- **OR Badge**: Centered circular divider with "OR" text
- **"Neither" link**: Below the OR badge
- **"SKIP ALL" button**: Centered at bottom
- **Progress Indicator**: 10 circles — empty (upcoming), thumbnail-filled (completed)
- **Animations**: Framer Motion `AnimatePresence` for smooth step transitions

#### [NEW] [EmailCaptureDialog.tsx](../src/app/pages/public/StyleQuiz/EmailCaptureDialog.tsx)

Modal shown after step 10:

- "Enter Your Email To Get Your Style!" title
- Email input field
- "SAVE & CONTINUE" gold primary button  
- "CONTINUE WITH GOOGLE" + "CONTINUE WITH FACEBOOK" social login buttons
- Privacy/terms footer text
- Uses the existing Shadcn `Dialog` component

---

### Routing

#### [MODIFY] [routes.public.tsx](../src/app/routes/routes.public.tsx)

Add the new lazy-loaded route:

```tsx
const StyleQuizStart = lazy(() => import("@/app/pages/public/StyleQuizStart"));

// In children:
{
  path: "style-quiz-start",
  element: SuspenseWrapper(StyleQuizStart),
}
```

---

#### [MODIFY] [StyleQuizHero.tsx](../src/app/pages/public/StyleQuiz/StyleQuizHero.tsx)

Update the CTA button link from `/quiz/start` to `/style-quiz-start` to match the actual route.

---

## Component Architecture

```
StyleQuizStart (page)
├── State: currentStep, selections[]
├── StyleQuizForm
│   ├── Header (question + instruction)
│   ├── ImagePair
│   │   ├── OptionA (BlurImage + hover/click)
│   │   ├── OR Badge
│   │   └── OptionB (BlurImage + hover/click)
│   ├── "Neither" link
│   ├── ProgressDots (10 circles with thumbnails)
│   └── "SKIP ALL" button
└── EmailCaptureDialog (after step 10)
```

---

## Key UX Decisions

| Aspect | Decision |
|--------|----------|
| **Step transition** | Auto-advance on image click with 400ms crossfade (Framer Motion `AnimatePresence`) |
| **Selection feedback** | Brief gold border pulse + scale on selected image before advancing |
| **Progress thumbnails** | `object-cover` thumbnails in 32px circles for completed steps |
| **"Neither" action** | Records null selection, advances normally |
| **"SKIP ALL" action** | Skips remaining steps, jumps to email capture |
| **Back navigation** | Not shown in video reference — won't implement unless requested |
| **Responsive** | Images stack vertically on mobile with OR badge between them |
| **Email modal** | Non-dismissible (no X button) — forces email or social login. Has a small "skip" text link |

---

## Verification Plan

### Automated
- TypeScript type-checking: `npx tsc --noEmit`
- Visual verification: Browser subagent screenshots of each step

### Manual
- Navigate `/quiz` → click "START MY STYLE QUIZ" → verify redirect
- Click through all 10 steps → verify progress dots fill with thumbnails
- Test "Neither" option → verify advancement
- Test "SKIP ALL" → verify email modal appears
- Verify mobile responsiveness (images stack vertically)
- Verify email modal renders with all elements
