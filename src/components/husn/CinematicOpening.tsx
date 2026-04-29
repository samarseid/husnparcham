import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const LINES = [
  "Men tasodiflarga ishonmasdim…",
  "Har narsa reja edi deb o'ylardim…",
  "Lekin…",
  "28-fevral…",
  "hammasini o'zgartirdi.",
  "Husnparcham…",
  "Bu sahifa faqat siz uchun.",
];

export const CinematicOpening = ({ onContinue }: { onContinue: () => void }) => {
  const [idx, setIdx] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (idx > LINES.length) { setDone(true); return; }
    const t = setTimeout(() => setIdx((i) => i + 1), 2600);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative z-10 max-w-2xl text-center w-full">
        <div className="relative min-h-[160px] flex items-center justify-center">
          {LINES.map((line, i) => (
            <p
              key={i}
              className="absolute inset-0 flex items-center justify-center font-display text-2xl sm:text-4xl text-foreground/90 px-4"
              style={{ transition: "opacity 1.2s ease", opacity: i === idx - 1 ? 1 : 0, pointerEvents: "none" }}
            >
              {line}
            </p>
          ))}
        </div>
        {done && (
          <Button
            onClick={onContinue}
            className="mt-12 px-10 h-12 gradient-romance text-primary-foreground rounded-full animate-fade-up hover:scale-105 transition-transform"
          >
            Boshlash
          </Button>
        )}
      </div>
    </div>
  );
};
