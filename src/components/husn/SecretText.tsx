import { useState } from "react";
import { Sparkles } from "lucide-react";

export const SecretText = () => {
  const [count, setCount] = useState(0);
  const revealed = count >= 5;
  return (
    <section className="py-16 px-6 text-center">
      <button
        onClick={() => setCount((c) => c + 1)}
        className="inline-flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors text-sm"
        aria-label="Secret"
      >
        <Sparkles className="w-4 h-4" />
        <span>· · ·</span>
      </button>
      {revealed && (
        <p className="mt-6 max-w-xl mx-auto font-display italic text-lg sm:text-xl text-gradient animate-fade-up">
          Agar o'sha kuni men qog'oz bermaganimda ham, baribir sizni topardim.
        </p>
      )}
    </section>
  );
};
