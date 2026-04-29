import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = ({ onContinue }: { onContinue: () => void }) => (
  <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
    
    <div className="absolute inset-0 gradient-dark animate-slow-zoom" />

    <div
      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-60 animate-drift"
      style={{ background: "var(--gradient-glow)" }}
    />

    <div className="relative z-10 text-center max-w-3xl space-y-6 pb-4">
      
      <p
        className="font-script text-3xl sm:text-4xl text-primary-glow animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Husnparcham,
      </p>

      <h1
        className="font-display text-5xl sm:text-7xl leading-[1.2] pb-2 text-gradient animate-fade-up"
        style={{ animationDelay: "0.6s" }}
      >
        Bu sayt faqatgina<br />siz uchun yaratilgan.
      </h1>

      <p
        className="font-display italic text-2xl sm:text-xl text-foreground/90 animate-fade-up"
        style={{ animationDelay: "1s" }}
      >
        Oddiy emas.
      </p>

      <p
        className="font-display italic text-2xl sm:text-xl text-foreground/90 animate-fade-up"
        style={{ animationDelay: "1.2s" }}
      >
        Chunki siz oddiy emasiz
      </p>

      <Button
        onClick={onContinue}
        className="mt-8 h-14 px-12 rounded-full gradient-romance text-primary-foreground text-base font-medium animate-fade-up animate-pulse-glow hover:scale-105 transition-transform"
        style={{ animationDelay: "1.6s" }}
      >
       Davom Etish
      </Button>

      <div className="mt-12 animate-fade-in" style={{ animationDelay: "2.4s" }}>
        <ChevronDown className="w-6 h-6 mx-auto text-primary/60 animate-bounce" />
      </div>

    </div>
  </section>
);