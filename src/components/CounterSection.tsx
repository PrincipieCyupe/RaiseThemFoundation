import { useEffect, useRef, useState } from "react";

const counters = [
  { end: 50, suffix: "+", label: "High School Students" },
  { end: 10, suffix: "+", label: "Higher Education" },
  { end: 2000, suffix: "+", label: "Funds Raised", prefix: "$" },
];

function useCountUp(end: number, trigger: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

const CounterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-padding bg-background" aria-label="Our numbers" ref={ref}>
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our numbers that speak
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These achievements inspire us to push further and reach beyond our limits. We are committed to impacting more lives every single day.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {counters.map((c) => {
              const val = useCountUp(c.end, visible);
              return (
                <div key={c.label} className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-bold text-foreground font-heading">
                    {c.prefix || ""}{val.toLocaleString()}{c.suffix}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{c.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
