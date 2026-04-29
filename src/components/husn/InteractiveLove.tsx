import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "./Particles";

export const InteractiveLove = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden text-center">
      {active && <FloatingParticles count={30} hearts />}
      <div className="max-w-xl mx-auto relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-foreground/90">Bu tugmani bosing…</h2>
        <Button
          onClick={() => setActive(true)}
          className="h-16 px-12 rounded-full gradient-romance text-primary-foreground text-lg font-medium animate-pulse-glow hover:scale-105 transition-transform"
        >
          <Heart className="w-5 h-5 mr-2 fill-current" /> Click
        </Button>
        {active && (
          <p className="mt-12 font-script text-5xl sm:text-7xl  text-gradient animate-fade-up leading-[1.2] pt-3 pb-2">
            Men Sizni Sevaman.
          </p>
        )}
      </div>
    </section>
  );
};
