import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Wrench, Handshake, BookOpen, FileText, Languages, Library, Trophy, Network, MessageSquare, CalendarHeart, Palette, Briefcase, Monitor } from "lucide-react";

const sections = [
  {
    title: "Education Support",
    description: "We break down barriers to education by guiding refugee youth through every step of their academic journey.",
    icon: GraduationCap,
    color: "bg-primary",
    items: [
      { icon: BookOpen, label: "Scholarship Guidance", desc: "Connecting students with fully and partially funded scholarship opportunities worldwide." },
      { icon: FileText, label: "Application Support", desc: "Hands-on assistance with university applications, essays, and documentation." },
      { icon: Languages, label: "Tutoring & Language Programs", desc: "Academic tutoring and language training to prepare students for higher education." },
      { icon: Library, label: "Access to Learning Materials", desc: "Providing books, digital resources, and study tools to support continuous learning." },
    ],
  },
  {
    title: "Youth Empowerment Programs",
    description: "We nurture confident, capable leaders who drive positive change in their communities.",
    icon: Users,
    color: "bg-secondary",
    items: [
      { icon: Trophy, label: "Leadership Workshops", desc: "Intensive programs that develop public speaking, decision-making, and team-building skills." },
      { icon: Network, label: "Mentorship Networks", desc: "Pairing youth with mentors from diverse professional backgrounds for guidance and inspiration." },
      { icon: MessageSquare, label: "Debate Training", desc: "Structured debate programs that sharpen critical thinking and advocacy skills." },
      { icon: CalendarHeart, label: "Community Youth Events", desc: "Organizing gatherings that foster connection, creativity, and a sense of belonging." },
    ],
  },
  {
    title: "Skills & Livelihood Training",
    description: "We equip youth with practical skills that open doors to sustainable livelihoods and economic independence.",
    icon: Wrench,
    color: "bg-primary",
    items: [
      { icon: Palette, label: "Artisan Crafts", desc: "Training in traditional and modern crafts that can generate income and preserve cultural heritage." },
      { icon: Briefcase, label: "Business Literacy", desc: "Foundational courses in entrepreneurship, financial management, and market readiness." },
      { icon: Monitor, label: "Digital Skills", desc: "Hands-on training in technology, from basic computer literacy to advanced digital tools." },
    ],
  },
  {
    title: "Partnerships & Collaboration",
    description: "We believe in the power of collective action. By partnering with NGOs, universities, and institutions, we multiply our impact and expand opportunities for refugee youth across Africa and beyond.",
    icon: Handshake,
    color: "bg-secondary",
    items: [],
  },
];

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-center justify-center mt-16 md:mt-20"
          style={{ backgroundColor: "#1C3548" }}
          aria-label="What We Do hero"
        >
          <div className="text-on-overlay text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
              What We Do
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Building pathways through education, empowerment, skills training, and strategic partnerships
            </p>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section, sIdx) => (
          <section
            key={section.title}
            className={`section-padding ${sIdx % 2 === 0 ? "bg-background" : "bg-muted"}`}
            aria-label={section.title}
          >
            <div className="container-max">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: sIdx % 2 === 0 ? "#1C3548" : "#967B5A" }}
                >
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-10">
                {section.description}
              </p>

              {/* Items Grid */}
              {section.items.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border"
                    >
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: sIdx % 2 === 0 ? "rgba(28,53,72,0.1)" : "rgba(150,123,90,0.1)" }}
                      >
                        <item.icon
                          className="w-5 h-5"
                          style={{ color: sIdx % 2 === 0 ? "#1C3548" : "#967B5A" }}
                        />
                      </div>
                      <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.label}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Partnerships CTA */}
              {section.items.length === 0 && (
                <div
                  className="rounded-xl p-8 md:p-12 text-white text-center"
                  style={{ backgroundColor: "#967B5A" }}
                >
                  <Handshake className="w-12 h-12 mx-auto mb-4 text-white/80" />
                  <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto text-white/90">
                    We collaborate with organizations like UNHCR, universities across Africa, and grassroots NGOs to create holistic support systems for displaced youth.
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
