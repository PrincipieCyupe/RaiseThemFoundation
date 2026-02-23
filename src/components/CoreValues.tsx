const values = [
  { title: "Empowerment", desc: "We believe in the potential of every refugee youth to succeed.", color: "#967B5A" },
  { title: "Inclusivity", desc: "We embrace diversity and ensure equal opportunities for all.", color: "#1C3548" },
  { title: "Integrity", desc: "We operate with transparency and accountability.", color: "#967B5A" },
  { title: "Innovation", desc: "We seek creative solutions to overcome challenges.", color: "#1C3548" },
];

const CoreValues = () => {
  return (
    <section className="section-padding bg-background" aria-label="Core values">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="p-8 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-white"
              style={{ backgroundColor: v.color, animationDelay: `${i * 100}ms` }}
            >
              <h3 className="font-heading text-xl font-bold mb-3">
                {v.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {v.desc}
              </p>
              <div className="w-12 h-0.5 bg-white/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
