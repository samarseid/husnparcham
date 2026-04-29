import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";

const items = [
  { src: "/images/1743231663589 (1).jpg", },
  { src: "/images/1747860118757 (1).jpg", },
  { src: "/images/1754147761629 (1).jpg", },
  { src: "/images/1755531730971 (1).jpg",  },
  { src: "/images/IMG_20250502_183935_159 (1).jpg", },
  { src: "/images/IMG_20250619_112840_185 (1).jpg",  },
];

export const Gallery = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="mt-3 font-script text-5xl text-primary/70">
            Husnparchamning Suratlari
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item.src)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={item.src}
                
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* CLEAN DARK OVERLAY (blur yo‘q) */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />

              {/* CAPTION */}
              <div className="relative z-10 h-full flex items-end p-6">
                <p className="text-center text-sm text-white/90 font-display italic drop-shadow-lg">
                 
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL VIEWER */}
      {active && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setActive(null)}
          >
            <X size={32} />
          </button>

          <img
            src={active}
            className="max-w-[90%] max-h-[85%] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}

    </section>
  );
};