import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  hearts?: boolean;
}

export const FloatingParticles = ({ count = 20, hearts = false }: { count?: number; hearts?: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: hearts ? 14 + Math.random() * 28 : 4 + Math.random() * 8,
      duration: 10 + Math.random() * 18,
      delay: Math.random() * 12,
      hearts,
    }));
    setParticles(arr);
  }, [count, hearts]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-up"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.hearts ? (
            <Heart
              className="text-primary fill-primary/60"
              style={{ width: p.size, height: p.size, filter: "drop-shadow(0 0 8px hsl(var(--primary)))" }}
            />
          ) : (
            <div
              className="rounded-full bg-primary"
              style={{
                width: p.size,
                height: p.size,
                boxShadow: "0 0 12px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.5)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
