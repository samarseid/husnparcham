import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CORRECT = "28.02.2025";

export const LoginGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [val, setVal] = useState("");
  const [err, setErr] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val === CORRECT) onUnlock();
    else { setErr(true); setTimeout(() => setErr(false), 2400); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    let out = digits;
    if (digits.length > 4) out = `${digits.slice(0, 2)}.${digits.slice(2, 4)}.${digits.slice(4)}`;
    else if (digits.length > 2) out = `${digits.slice(0, 2)}.${digits.slice(2)}`;
    setVal(out);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
      <form onSubmit={submit} className="relative z-10 glass rounded-3xl p-10 sm:p-14 max-w-md w-full text-center animate-fade-up">
        <div className="mx-auto w-16 h-16 rounded-full gradient-romance flex items-center justify-center mb-6 animate-pulse-glow">
          <Lock className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl mb-3 text-gradient">Husnparcham</h1>
        <p className="text-muted-foreground mb-2">Bu sahifa faqat siz uchun.</p>
        <p className="text-muted-foreground mb-8 text-sm">Davom etish uchun tanishgan sanamizni kiriting.</p>
        <Input
          value={val}
          onChange={handleChange}
          inputMode="numeric"
          placeholder="DD.MM.YYYY"
          className="text-center text-lg h-14 bg-background/40 border-primary/30 focus-visible:ring-primary"
        />
        <Button type="submit" className="w-full mt-5 h-12 gradient-romance text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          Login
        </Button>
        {err && (
          <p className="mt-4 text-sm text-destructive animate-fade-in">The date is incorrect. Try again.</p>
        )}
        <p className="mt-8 font-script text-2xl text-primary/70">— Samar</p>
      </form>
    </div>
  );
};
