import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const START = new Date("2025-02-28T13:30:00").getTime();

const calc = () => {
  const diff = Math.max(0, Date.now() - START);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
};

export const LoveCounter = () => {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "kun", value: t.days },
    { label: "soat", value: t.hours },
    { label: "daqiqa", value: t.minutes },
    { label: "soniya", value: t.seconds },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 text-primary/80 mb-4">
          <Clock className="w-5 h-5" />
          <span className="text-sm uppercase tracking-[0.3em]">
            Tanishganimizdan Buyon
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl mb-12 leading-[1.2] pb-2 text-gradient">
          Biz tanishganimizga…
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center"
            >
              <div
                className="font-display text-4xl sm:text-6xl leading-[1.1] pb-2 text-gradient tabular-nums"
              >
                {String(it.value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {it.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 font-script text-3xl text-primary-glow">
          va har soniya sizni yanada ko'proq sevib boryapman.
        </p>

      </div>
    </section>
  );
};