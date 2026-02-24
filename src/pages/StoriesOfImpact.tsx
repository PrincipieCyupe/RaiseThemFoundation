import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Quote, GraduationCap, Users, BookOpen } from "lucide-react";

const stories = [
  {
    name: "Chanelle Nishimwe",
    image: "/images/stories/chanelle.png",
    institution: "African Leadership University",
    program: "BSc Hons Entrepreneurial Leadership",
    story:
      "We connected Chanelle to ALU's flagship BSc Hons Entrepreneurial Leadership program, guiding her through essay development, interview prep, and application submission to ensure her admission.",
    quote:
      "RTF believed in me when I doubted myself—now I'm on the path to becoming a change-maker.",
  },
  {
    name: "Raissa Mpawenayo",
    image: "/images/stories/raissa.png",
    institution: "African Leadership University",
    program: "BSc Hons Entrepreneurial Leadership",
    story:
      "Raissa received one-on-one coaching on scholarship essays and mock interviews, culminating in her acceptance into ALU's three-year entrepreneurial leadership degree.",
    quote:
      "The mentors at RTF didn't just help me apply; they inspired me to dream bigger.",
  },
  {
    name: "Kenny Freury Niyomucamanza",
    image: "/images/stories/kenny.png",
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    program: "Mastercard Foundation Scholars Program — STEM Undergraduate",
    story:
      "We navigated Kenny through KNUST's rigorous entry requirements and helped him in the Mastercard Foundation Scholars program application process — securing his admission and supporting his online application for a STEM undergraduate program.",
    quote:
      "With RTF's support, I went from uncertainty to KNUST's campus, ready for a future in science.",
  },
  {
    name: "Elvis Ndatimana",
    image: "/images/stories/elvis.png",
    institution: "University of Rwanda",
    program: "Mastercard Foundation Scholars Program",
    story:
      "Elvis's application to the University of Rwanda was strengthened by RTF's tailored scholarship-research, document review, and interview coaching, earning him a full Mastercard Foundation scholarship.",
    quote:
      "RTF opened the door to the Mastercard Scholars Program—I couldn't be more grateful.",
  },
  {
    name: "Hertz Benis Ninziza",
    image: "/images/stories/hertz.png",
    institution: "Cornerstone Leadership Academy, Rwanda",
    program: "Fully-Funded Scholarship Cohort",
    story:
      "We guided Hertz through CLA's competitive selection—preparing him for written tests, interviews, and character-development essays required for their fully-funded scholarship cohort.",
    quote:
      "The RTF team championed my application—today I study alongside Rwanda's future leaders.",
  },
  {
    name: "Dominique Kwizerimana",
    image: "/images/stories/dominique.png",
    institution: "Ashesi University",
    program: "Undergraduate Programmes",
    story:
      "Dominique's pathway to Ashesi was made possible through RTF's support with DreamApply registration, document uploads, and scholarship essay revisions for Ghana's selective admissions portal.",
    quote:
      "RTF coached me step-by-step—now I'm part of Ashesi's community of ethical leaders.",
  },
];

const highlights = [
  { icon: GraduationCap, value: "7", label: "Students Placed" },
  { icon: Users, value: "6+", label: "Partner Institutions" },
  { icon: BookOpen, value: "100%", label: "Scholarship Success Rate" },
];

const StoriesOfImpact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section
          className="relative min-h-[90vh] flex items-center mt-16 md:mt-20"
          style={{ backgroundColor: "#1C3548" }}
          aria-label="Stories of impact hero"
        >
          <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Stories of{" "}
                <span style={{ color: "#B08D57" }}>Impact</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
                Since April 2024, Raise Them Foundation has guided seven refugee
                students through scholarship applications and secured their
                placements at leading institutions across Africa.
              </p>
              <Button
                className="px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#FFFFFF", color: "#1C3548" }}
                onClick={() =>
                  document
                    .getElementById("student-stories")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Read Their Stories
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Highlights ─── */}
        <section className="section-padding bg-muted" aria-label="Impact highlights">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">
                Our Reach
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Impact at a Glance
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-card rounded-lg border border-border p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "hsl(205 42% 20% / 0.1)" }}
                  >
                    <h.icon size={26} className="text-primary" />
                  </div>
                  <p className="font-heading text-4xl font-bold text-foreground mb-2">
                    {h.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Student Stories ─── */}
        <section
          id="student-stories"
          className="section-padding bg-background"
          aria-label="Student success stories"
        >
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">
                Their Journeys
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Scholars
              </h2>
            </div>

            <div className="space-y-12">
              {stories.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center bg-card rounded-lg border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {/* Photo */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {s.name}
                      </h3>
                      <p className="text-secondary font-semibold text-sm mt-1">
                        {s.institution}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {s.program}
                      </p>
                    </div>
                    <p className="text-foreground leading-relaxed">{s.story}</p>
                    <div className="bg-muted rounded-lg p-5 border border-border">
                      <Quote size={20} className="text-secondary/40 mb-2" />
                      <p className="italic text-foreground leading-relaxed">
                        "{s.quote}"
                      </p>
                      <p className="text-muted-foreground text-sm mt-2 font-semibold">
                        — {s.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          className="relative py-24 md:py-32"
          aria-label="Call to action"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/cta-bg.png')" }}
          />
          <div className="overlay-dark" />
          <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4">
              Be Part of Their Story
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto mb-8 leading-tight">
              Help the next refugee student reach their dream institution
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-10 py-3 text-base font-semibold transition-all duration-300 hover:scale-105">
                Support Our Mission
              </Button>
              <Button
                className="px-10 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#FFFFFF", color: "#1C3548" }}
                onClick={() => (window.location.href = "/volunteer")}
              >
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StoriesOfImpact;
