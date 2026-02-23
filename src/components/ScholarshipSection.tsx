const scholarships = [
  {
    title: "African Leadership University (ALU) Scholarship",
    date: "Apply before: February 15, 2026",
    excerpt:
      "Join the new generation of changemakers in Africa with a world-class education from ALU. Applications are open for May 2026 intake across multiple campuses.",
    image: "/images/alu-scholarship.png",
  },
  {
    title: "Earth University — Fully Funded Scholarship in Costa Rica",
    date: "Open to all African Countries",
    excerpt:
      "A fully funded scholarship opportunity at Earth University in Costa Rica for students from all African countries pursuing studies in agricultural sciences and sustainability.",
    image: "/images/earth-university-scholarship.png",
  },
  {
    title: "Ashesi University — Mastercard Foundation Scholars Program",
    date: "Rolling Admissions",
    excerpt:
      "Educating a new generation of leaders for Africa. The Mastercard Foundation Scholars Program at Ashesi covers full tuition, accommodation, and living expenses.",
    image: "/images/ashesi-scholarship.png",
  },
];

const ScholarshipSection = () => {
  return (
    <section className="section-padding bg-muted" aria-label="Latest scholarships">
      <div className="container-max">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Latest scholarships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarships.map((s, i) => (
            <article
              key={i}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="h-52 overflow-hidden bg-card flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3">{s.date}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {s.excerpt}
                </p>
                <span className="text-secondary font-semibold text-sm cursor-pointer hover:underline">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
