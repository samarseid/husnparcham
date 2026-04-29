export const Letter = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-2xl mx-auto">
      <div className="rounded-3xl p-10 sm:p-14 relative overflow-hidden" style={{ background: "var(--gradient-letter)", boxShadow: "var(--shadow-elegant)" }}>
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-30" style={{ background: "var(--gradient-glow)" }} />
        <p className="text-center text-sm uppercase tracking-[0.4em] text-primary/70 mb-6">Maktub</p>
        <h2 className="font-display text-4xl sm:text-5xl text-center mb-8 text-gradient">Sizga</h2>
        <div className="space-y-4 font-display text-lg sm:text-xl leading-relaxed text-foreground/90 italic relative z-10">
          <p>Mening go‘zalim,</p>
          <p>Men sizni ataylab izlamagan edim. Barchasi o‘z-o‘zidan boshlandi.</p>
          <p>Ammo sizni uchratganimdan so‘ng, hayotim o‘zgardi.</p>
          <p>Endi men hatto oddiy narsalarga ham boshqacha qarayman. Chunki ularda siz borsiz.</p>
          <p>Men mukammal emasman. Ammo sizni butun yuragim bilan sevaman.</p>
          <p>Va bu men uchun eng muhim narsadir.</p>
        </div>
        <p className="mt-10 text-right font-script text-3xl text-primary-glow">— Samar</p>
      </div>
    </div>
  </section>
);
