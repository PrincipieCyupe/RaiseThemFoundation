import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  { name: "African Learning Link", logo: "/images/partner-all.jpg" },
  { name: "UNHCR", logo: "/images/partner-unhcr.png" },
];

const PartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-muted" aria-label="Our trusted partners">
      <div className="container-max">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Our trusted partners
        </h2>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-md rounded-full p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-8 items-center justify-center flex-wrap px-4 md:px-12"
          >
            {partners.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-28 bg-card border border-border rounded-xl flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-md rounded-full p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
