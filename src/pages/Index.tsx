import { useState } from "react";
import { LoginGate } from "@/components/husn/LoginGate";
import { CinematicOpening } from "@/components/husn/CinematicOpening";
import { AudioToggle } from "@/components/husn/AudioToggle";
import { ThemeToggle } from "@/components/husn/ThemeToggle";
import { FloatingParticles } from "@/components/husn/Particles";
import { Hero } from "@/components/husn/Hero";
import { LoveCounter } from "@/components/husn/LoveCounter";
import { Story } from "@/components/husn/Story";
import { Gallery } from "@/components/husn/Gallery";
import { Letter } from "@/components/husn/Letter";
import { Reasons } from "@/components/husn/Reasons";
import { InteractiveLove } from "@/components/husn/InteractiveLove";
import { SecretText } from "@/components/husn/SecretText";
import { FinalScene } from "@/components/husn/FinalScene";

type Stage = "login" | "opening" | "story";

const Index = () => {
  const [stage, setStage] = useState<Stage>("login");

  // LOGIN
  if (stage === "login")
    return <LoginGate onUnlock={() => setStage("opening")} />;

  // OPENING
  if (stage === "opening")
    return (
      <main className="relative gradient-dark min-h-screen">
        <AudioToggle />
        <CinematicOpening onContinue={() => setStage("story")} />
      </main>
    );

  // MAIN PAGE
  return (
    <main className="relative gradient-dark min-h-screen">
      <AudioToggle />
      <ThemeToggle />
      <FloatingParticles count={18} />

      <div className="relative z-10">
        <Hero
          onContinue={() =>
            document
              .getElementById("counter")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <div id="counter">
          <LoveCounter />
        </div>

        <Story />
        <Gallery />
        <Letter />
        <Reasons />
        <InteractiveLove />
        <SecretText />
        <FinalScene />
      </div>
    </main>
  );
};

export default Index;