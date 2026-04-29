import { Heart } from "lucide-react";

const events = [
  { date: "2025-02-28", title: "Tanishuv", body: "Ilk bor ko‘zlaringizga qaragan kunim. O‘sha kundan boshlab hammasi o‘zgardi." },
  { date: "2025-03-04", title: "Ilk uchrashuv", body: "Birinchi marta yuzma-yuz gaplashganimiz. Shu kuni kechasi men ilk bor hislarimni aytganman." },
  { date: "2025-03-28", title: "Birinchi tortishuv", body: "Bu kunni eslash yoqmaydi. Lekin aynan shu holat bizni yanada yaqinlashtirdi." },
  { date: "2025-05-25", title: "Rejalashtirilgan uchrashuv", body: "Hammasi rejalashtirilgandek bo‘lmadi. Lekin baribir bu kun ham bizniki." },
  { date: "2025-08-06", title: "Ilk quchoq", body: "Men uchun yangi tuyg‘u. Eng samimiy va eng yaqin lahza. Faqat siz bilan." },
  { date: "2025-09-11", title: "Xayrlashgan kun", body: "Bu joyni so‘z bilan ifodalash qiyin. Lekin bu ham bizning tariximizning bir qismi." },
];

export const Story = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-3xl mx-auto">

      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.2] pb-2 text-gradient">
          Our story 
        </h2>
        <p className="mt-3 font-script text-2xl text-primary/70">
          Bizning hikoyamiz
        </p>
      </div>

      <div className="relative">

        {/* center line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

        {events.map((e, i) => (
          <div
            key={e.date}
            className={`relative mb-12 flex flex-col sm:flex-row items-center ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >

            {/* dot */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-romance ring-4 ring-background animate-pulse-glow" />

            {/* empty spacer */}
            <div className="hidden sm:block sm:w-1/2" />

            {/* card */}
            <div
              className={`w-full sm:w-1/2 px-4 sm:px-10 ${
                i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
              }`}
            >
              <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors">
                
                <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-2">
                  <Heart className="w-3.5 h-3.5 fill-primary" />
                  {e.date}
                </div>

                <h3 className="font-display text-2xl mb-2">
                  {e.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {e.body}
                </p>

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  </section>
);