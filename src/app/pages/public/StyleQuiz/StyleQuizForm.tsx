import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { QuizStep, QuizSelection } from "@/services/quizData";
import { BlurImage } from "@/components/shared/BlurImage";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StyleQuizFormProps {
  step: QuizStep;
  currentStepIndex: number;
  totalSteps: number;
  selections: QuizSelection[];
  onSelect: (optionId: string, imageUrl: string) => void;
  onNeither: () => void;
  onSkipAll: () => void;
}

export function StyleQuizForm({
  step,
  currentStepIndex,
  totalSteps,
  selections,
  onSelect,
  onNeither,
  onSkipAll,
}: StyleQuizFormProps) {
  // Track which option is currently being "selected" for brief visual feedback
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleImageClick = (optionId: string, imageUrl: string) => {
    if (selectedId) return; // Prevent double-click during transition
    setSelectedId(optionId);
    onSelect(optionId, imageUrl);

    // Reset after transition completes
    setTimeout(() => setSelectedId(null), 500);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 space-y-3">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground">
          Click on the style you prefer
        </h1>
        <p className="text-muted-foreground text-sm md:text-base font-light max-w-lg mx-auto">
          Point us to the styles you like by clicking on an image
        </p>
      </div>

      {/* Image Comparison — AnimatePresence for smooth transitions */}
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Image Pair Container */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              {/* Option A */}
              <ImageOption
                option={step.optionA}
                isSelected={selectedId === step.optionA.id}
                isDisabled={selectedId !== null}
                onClick={() =>
                  handleImageClick(step.optionA.id, step.optionA.imageUrl)
                }
              />

              {/* OR Badge — Centered between images */}
              <div className="relative z-10 flex-shrink-0 -my-2 md:my-0 md:-mx-3">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background border-2 border-border shadow-lg flex items-center justify-center">
                  <span className="text-xs md:text-sm font-bold text-muted-foreground tracking-wider">
                    OR
                  </span>
                </div>
              </div>

              {/* Option B */}
              <ImageOption
                option={step.optionB}
                isSelected={selectedId === step.optionB.id}
                isDisabled={selectedId !== null}
                onClick={() =>
                  handleImageClick(step.optionB.id, step.optionB.imageUrl)
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* "Neither" link */}
        <button
          onClick={onNeither}
          disabled={selectedId !== null}
          className="mt-6 text-sm text-muted-foreground underline underline-offset-4 hover:text-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Neither
        </button>
      </div>

      {/* Progress Dots */}
      <div className="mt-8 md:mt-12 flex items-center justify-center gap-2 md:gap-3">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const selection = selections[index];
          const isCurrent = index === currentStepIndex;
          const isCompleted = index < selections.length;

          return (
            <div
              key={index}
              className={cn(
                "w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden transition-all duration-300 flex items-center justify-center border-2",
                isCurrent && "ring-2 ring-gold ring-offset-2 ring-offset-background border-gold",
                isCompleted && !isCurrent && "border-gold/60",
                !isCompleted && !isCurrent && "border-border"
              )}
            >
              {isCompleted && selection?.selectedImageUrl ? (
                <img
                  src={selection.selectedImageUrl}
                  alt={`Step ${index + 1} selection`}
                  className="w-full h-full object-cover"
                />
              ) : isCompleted && !selection?.selectedImageUrl ? (
                // "Neither" was chosen — show checkmark
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground" />
                </div>
              ) : (
                // Empty upcoming dot
                <div className="w-full h-full bg-muted/30" />
              )}
            </div>
          );
        })}
      </div>

      {/* "SKIP ALL" button */}
      <button
        id="skip-all-btn"
        onClick={onSkipAll}
        className="mt-6 mb-4 text-xs text-muted-foreground uppercase tracking-[0.2em] underline underline-offset-4 hover:text-gold transition-colors"
      >
        Skip All
      </button>
    </div>
  );
}

// ============================================================
// Image Option — Clickable image card with hover/select states
// ============================================================

interface ImageOptionProps {
  option: { id: string; imageUrl: string; alt: string; styleLabel: string };
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

function ImageOption({
  option,
  isSelected,
  isDisabled,
  onClick,
}: ImageOptionProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled && !isSelected}
      className={cn(
        "group relative w-full md:w-1/2 overflow-hidden rounded-xl transition-all duration-300 cursor-pointer border-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        isSelected
          ? "border-gold scale-[0.98] shadow-2xl"
          : "border-transparent hover:border-gold/70 hover:scale-[1.02] hover:shadow-2xl",
        isDisabled && !isSelected && "opacity-60 cursor-not-allowed"
      )}
    >
      <BlurImage
        src={option.imageUrl}
        alt={option.alt}
        ratio={3 / 4}
        className={cn(
          "transition-transform duration-500",
          !isDisabled && "group-hover:scale-105"
        )}
        containerClassName="rounded-lg"
      />

      {/* Style Label overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-6">
        <span className="text-white font-serif text-lg md:text-xl font-medium drop-shadow-lg">
          {option.styleLabel}
        </span>
      </div>

      {/* Selected overlay */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gold/20 flex items-center justify-center rounded-lg"
        >
          <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-xl">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
        </motion.div>
      )}
    </button>
  );
}
