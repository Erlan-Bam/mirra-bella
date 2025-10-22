import React, { useState, useEffect } from "react";

interface LoadingProps {
  onComplete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [visibleRings, setVisibleRings] = useState(0);
  const [visibleTexts, setVisibleTexts] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const steps = 80;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(currentStep * increment, 100);
      setProgress(newProgress);

      if (newProgress < 33) {
        setStage(1);
        setVisibleRings(0);
      } else if (newProgress < 66) {
        setStage(2);
        const stage2Progress = (newProgress - 33) / 33;
        if (stage2Progress < 0.5) {
          setVisibleRings(1);
        } else {
          setVisibleRings(2);
        }
      } else {
        setStage(3);
        setVisibleRings(5);
        const stage3Progress = (newProgress - 66) / 34;
        const textCount = Math.floor(stage3Progress * 5) + 1;
        setVisibleTexts(Math.min(textCount, 5));
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Header - Small MIRRA BELLA text at top left */}
      <div className="absolute top-16 left-32 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4A5A5]" />
        <p className="text-[#595959] text-[27px] font-medium tracking-wide">
          MIRRA BELLA
        </p>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="relative w-[285px] h-[283px] mb-16">
          {/* Base gray logo */}
          <div className="absolute inset-0">
            <img
              src="/mb-logo.svg"
              alt="Mirra Bella Logo"
              className="w-full h-full object-contain animate-spin-slow"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)",
              }}
            />
          </div>

          {/* Pink Ring */}
          {visibleRings >= 1 && (
            <div className="absolute inset-0 transition-opacity duration-700">
              <img
                src="/mb-logo.svg"
                alt="Pink ring"
                className="w-full h-full object-contain animate-spin-slow"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(59%) sepia(14%) saturate(1247%) hue-rotate(305deg) brightness(93%) contrast(86%)",
                  clipPath:
                    "polygon(0% 0%, 60% 0%, 60% 60%, 40% 60%, 40% 40%, 0% 40%)",
                }}
              />
            </div>
          )}

          {/* Yellow Ring */}
          {visibleRings >= 2 && (
            <div className="absolute inset-0 transition-opacity duration-700">
              <img
                src="/mb-logo.svg"
                alt="Yellow ring"
                className="w-full h-full object-contain animate-spin-slow"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(74%) sepia(72%) saturate(453%) hue-rotate(358deg) brightness(99%) contrast(91%)",
                  clipPath:
                    "polygon(40% 0%, 100% 0%, 100% 100%, 60% 100%, 60% 60%, 40% 60%)",
                }}
              />
            </div>
          )}

          {/* Teal Ring */}
          {visibleRings >= 3 && (
            <div className="absolute inset-0 transition-opacity duration-700">
              <img
                src="/mb-logo.svg"
                alt="Teal ring"
                className="w-full h-full object-contain animate-spin-slow"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(63%) sepia(13%) saturate(754%) hue-rotate(123deg) brightness(91%) contrast(88%)",
                  clipPath:
                    "polygon(0% 40%, 40% 40%, 40% 60%, 60% 60%, 60% 100%, 0% 100%)",
                }}
              />
            </div>
          )}

          {/* Blue Ring */}
          {visibleRings >= 4 && (
            <div className="absolute inset-0 transition-opacity duration-700">
              <img
                src="/mb-logo.svg"
                alt="Blue ring"
                className="w-full h-full object-contain animate-spin-slow"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(74%) sepia(12%) saturate(1059%) hue-rotate(168deg) brightness(91%) contrast(88%)",
                  clipPath: "circle(22% at 50% 50%)",
                }}
              />
            </div>
          )}

          {/* Purple Ring */}
          {visibleRings >= 5 && (
            <div className="absolute inset-0 transition-opacity duration-700">
              <img
                src="/mb-logo.svg"
                alt="Purple ring"
                className="w-full h-full object-contain animate-spin-slow"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(8%) saturate(1076%) hue-rotate(213deg) brightness(92%) contrast(86%)",
                  clipPath: "circle(15% at 50% 50%)",
                }}
              />
            </div>
          )}
        </div>

        {/* Large MIRRA BELLA text - Only in Stage 3 */}
        {stage === 3 && (
          <div className="mb-24 animate-fade-in">
            <h1 className="text-[#595959] text-[80px] font-light tracking-[0.3em] uppercase">
              MIRRA BELLA
            </h1>
          </div>
        )}
      </div>

      {/* Sub-brands - Fixed at bottom */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center px-8">
        <div className="flex items-start justify-center gap-12 max-w-[1200px]">
          {/* Stage 2 & 3: First 2 brands */}
          {stage >= 2 && (
            <>
              {/* Mirror & Beauty */}
              <div className="flex flex-col items-center gap-2 w-[180px] animate-fade-in-up">
                <div className="w-16 h-16 mb-1">
                  <img
                    src="/mb-logo.svg"
                    alt="Mirror & Beauty"
                    className="w-full h-full object-contain"
                    style={{ filter: "grayscale(1) brightness(0.5)" }}
                  />
                </div>
                <p className="text-[#D4A5A5] text-[9px] tracking-[0.2em] uppercase font-medium">
                  MIRROR & BEAUTY
                </p>
                {stage === 3 && visibleTexts >= 1 && (
                  <p className="text-[#5f5b52] text-[10px] text-center leading-relaxed animate-fade-in">
                    Тут должен будет появляться текст о чем раздел
                  </p>
                )}
              </div>

              {/* Education */}
              <div className="flex flex-col items-center gap-2 w-[180px] animate-fade-in-up animation-delay-100">
                <div className="w-16 h-16 mb-1">
                  <img
                    src="/mb-logo.svg"
                    alt="Education"
                    className="w-full h-full object-contain"
                    style={{ filter: "grayscale(1) brightness(0.5)" }}
                  />
                </div>
                <p className="text-[#F5B942] text-[9px] tracking-[0.2em] uppercase font-medium">
                  EDUCATION
                </p>
                {stage === 3 && visibleTexts >= 2 && (
                  <p className="text-[#5f5b52] text-[10px] text-center leading-relaxed animate-fade-in">
                    Тут должен будет появляться текст о чем раздел
                  </p>
                )}
              </div>
            </>
          )}

          {/* Stage 3: Additional 3 brands */}
          {stage === 3 && (
            <>
              {/* Mirror & Health */}
              <div className="flex flex-col items-center gap-2 w-[180px] animate-fade-in-up animation-delay-200">
                <div className="w-16 h-16 mb-1">
                  <img
                    src="/mb-logo.svg"
                    alt="Mirror & Health"
                    className="w-full h-full object-contain"
                    style={{ filter: "grayscale(1) brightness(0.5)" }}
                  />
                </div>
                <p className="text-[#7FA8A3] text-[9px] tracking-[0.2em] uppercase font-medium">
                  MIRROR & HEALTH
                </p>
                {visibleTexts >= 3 && (
                  <p className="text-[#5f5b52] text-[10px] text-center leading-relaxed animate-fade-in">
                    Тут должен будет появляться текст о чем раздел
                  </p>
                )}
              </div>

              {/* Beauty in a Drop */}
              <div className="flex flex-col items-center gap-2 w-[180px] animate-fade-in-up animation-delay-300">
                <div className="w-16 h-16 mb-1">
                  <img
                    src="/mb-logo.svg"
                    alt="Beauty in a Drop"
                    className="w-full h-full object-contain"
                    style={{ filter: "grayscale(1) brightness(0.5)" }}
                  />
                </div>
                <p className="text-[#A8CEE8] text-[9px] tracking-[0.2em] uppercase font-medium">
                  BEAUTY IN A DROP
                </p>
                {visibleTexts >= 4 && (
                  <p className="text-[#5f5b52] text-[10px] text-center leading-relaxed animate-fade-in">
                    Тут должен будет появляться текст о чем раздел
                  </p>
                )}
              </div>

              {/* Mirror & Reality */}
              <div className="flex flex-col items-center gap-2 w-[180px] animate-fade-in-up animation-delay-400">
                <div className="w-16 h-16 mb-1">
                  <img
                    src="/mb-logo.svg"
                    alt="Mirror & Reality"
                    className="w-full h-full object-contain"
                    style={{ filter: "grayscale(1) brightness(0.5)" }}
                  />
                </div>
                <p className="text-[#A8A2C4] text-[9px] tracking-[0.2em] uppercase font-medium">
                  MIRROR & REALITY
                </p>
                {visibleTexts >= 5 && (
                  <p className="text-[#5f5b52] text-[10px] text-center leading-relaxed animate-fade-in">
                    Тут должен будет появляться текст о чем раздел
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Progress bar - Only in stages 1 & 2 */}
      {stage < 3 && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#595959] text-base font-light tracking-widest mb-3">
            {Math.round(progress)}%
          </p>
          <div className="w-48 h-0.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4A5A5] via-[#F5B942] to-[#7FA8A3] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
          transform-origin: center;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-in forwards;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Loading;
