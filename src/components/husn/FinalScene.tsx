import { useEffect, useState } from "react";

const lines = [
  "28.02.2025 — 13:30",
  "Barchasi Shu Yerda Boshlangan",
  "Sizni yaxshi ko'raman Husnparcham.",
];

export const FinalScene = () => {
  const [show, setShow] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        lines.forEach((_, i) =>
          setTimeout(() => setShow(i + 1), 120 + i * 180)
        );
      }
    }, { threshold: 0.4 });

    const el = document.getElementById("final-scene");
    if (el) obs.observe(el);

    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="final-scene"
      className="min-h-screen flex items-center justify-center bg-black px-6 py-40 overflow-visible"
    >
      <div className="text-center max-w-2xl overflow-visible">

        {lines.map((l, i) => (
          <div
            key={i}
            className={`transition-all duration-1000 ${
              show > i
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <p
              className={`font-display leading-[1.3] py-3 text-2xl sm:text-4xl ${
                i === 2
                  ? "text-gradient text-3xl sm:text-5xl tracking-tight"
                  : "text-foreground/80"
              }`}
              style={{
                transform: show > i ? "translateY(0px)" : "translateY(16px)",
                transition: "all 1s ease"
              }}
            >
              {l}
            </p>
          </div>
        ))}

        <p
          className={`mt-16 font-script text-4xl text-primary-glow transition-opacity duration-1500 ${
            show >= 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          — Samar
        </p>

      </div>
    </section>
  );
};