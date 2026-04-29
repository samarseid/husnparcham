import { Smile, MessageCircle, HandHeart, Sun, Sparkles, Feather, Clock4, Star } from "lucide-react";

const reasons = [
  { icon: Smile, text: "Siz kulganingizda hamma narsa jim bo'ladi" },
  { icon: MessageCircle, text: "Siz bilan gaplashish menga tinchlik beradi." },
  { icon: HandHeart, text: "Siz meni tushunishga harakat qilasan." },
  { icon: Sun, text: "Siz bilan oddiy kun ham qadrli." },
  { icon: Sparkles, text: "Siz meni o‘zgartirding. Yaxshi tomonga." },
  { icon: Feather, text: "Siz bilan bo'lganda men doim o'zligimcha qolaman" },
  { icon: Clock4, text: "Siz bilan vaqt tez o'tadi" },
  { icon: Star, text: "Siz — mening eng yaxshi qarorim" },
];

export const Reasons = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.2] pb-2 text-gradient">Why I love you</h2>
        <p className="mt-3 font-script text-2xl text-primary/70">Sizni nega sevaman</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="group glass rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 hover:border-primary/60"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl gradient-romance flex items-center justify-center mb-4 group-hover:animate-heartbeat">
              <r.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-foreground/90 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
