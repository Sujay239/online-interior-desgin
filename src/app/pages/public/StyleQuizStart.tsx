import { useState, useCallback, lazy } from "react";
import { quizSteps, type QuizSelection } from "@/services/quizData";
import { StyleQuizForm } from "./StyleQuiz/StyleQuizForm";
const EmailCaptureDialog = lazy(() => import("./StyleQuiz/EmailCaptureDialog").then(m => ({ default: m.EmailCaptureDialog })));
import { useNavigate } from "react-router-dom";
import { ClientOnly } from "@/components/shared/ClientOnly";

const TOTAL_STEPS = quizSteps.length;

export default function StyleQuizStart() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<QuizSelection[]>([]);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Handle image selection (Option A or B)
  const handleSelect = useCallback(
    (optionId: string, imageUrl: string) => {
      const selection: QuizSelection = {
        stepId: quizSteps[currentStep].id,
        selectedOptionId: optionId,
        selectedImageUrl: imageUrl,
      };

      setSelections((prev) => [...prev, selection]);

      // Auto-advance after brief delay for visual feedback
      setTimeout(() => {
        if (currentStep < TOTAL_STEPS - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setShowEmailModal(true);
        }
      }, 400);
    },
    [currentStep]
  );

  // Handle "Neither" selection
  const handleNeither = useCallback(() => {
    const selection: QuizSelection = {
      stepId: quizSteps[currentStep].id,
      selectedOptionId: null,
      selectedImageUrl: null,
    };

    setSelections((prev) => [...prev, selection]);

    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowEmailModal(true);
    }
  }, [currentStep]);

  // Handle "SKIP ALL"
  const handleSkipAll = useCallback(() => {
    setShowEmailModal(true);
  }, []);

  // Handle email submission
  const handleEmailSubmit = useCallback(
    (email: string) => {
      console.log("Quiz results submitted:", { email, selections });
      // Future: POST to API
      setShowEmailModal(false);
      navigate("/");
    },
    [selections, navigate]
  );

  // Handle social login redirect
  const handleSocialLogin = useCallback(
    (provider: "google" | "facebook") => {
      console.log("Social login:", provider, { selections });
      navigate("/auth/login");
    },
    [selections, navigate]
  );

  // Handle skip email
  const handleSkipEmail = useCallback(() => {
    console.log("Quiz completed without email:", { selections });
    setShowEmailModal(false);
    navigate("/");
  }, [selections, navigate]);

  return (
    <>
      <title>Style Quiz | Find Your Interior Design Style</title>
      <meta
        name="description"
        content="Answer 10 quick questions comparing interior design styles to discover your unique decorating aesthetic."
      />

      <div className="flex flex-col w-full min-h-[calc(100vh-5rem)] bg-background">
        {/* Quiz Form — always rendered; modal overlays via portal */}
        <StyleQuizForm
          step={quizSteps[currentStep]}
          currentStepIndex={currentStep}
          totalSteps={TOTAL_STEPS}
          selections={selections}
          onSelect={handleSelect}
          onNeither={handleNeither}
          onSkipAll={handleSkipAll}
        />

        {/* Email Capture Modal */}
        <ClientOnly fallback={null}>
          <EmailCaptureDialog
            isOpen={showEmailModal}
            onSubmit={handleEmailSubmit}
            onSocialLogin={handleSocialLogin}
            onSkip={handleSkipEmail}
          />
        </ClientOnly>
      </div>
    </>
  );
}
