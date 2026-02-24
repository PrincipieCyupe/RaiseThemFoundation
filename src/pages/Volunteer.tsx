import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, BookOpen, Calendar, Settings, Heart, Clock, Award, Star, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const opportunities = [
  {
    icon: Users,
    title: "Mentor",
    description:
      "Support a refugee student academically or professionally. Guide them through career choices, university applications, and personal growth.",
  },
  {
    icon: BookOpen,
    title: "Tutor",
    description:
      "Assist with school subjects or English proficiency. Help students bridge learning gaps and build confidence in the classroom.",
  },
  {
    icon: Calendar,
    title: "Event Volunteer",
    description:
      "Support workshops, youth activities, and community events. Bring energy and ideas to programs that inspire young refugees.",
  },
  {
    icon: Settings,
    title: "Program Support",
    description:
      "Help with training logistics, outreach campaigns, and administrative tasks that keep our programs running smoothly.",
  },
];

const mentorshipBlocks = [
  {
    icon: Heart,
    title: "How Mentorship Works",
    text: "Mentors are matched with refugee youth based on shared interests and goals. Through regular virtual or in-person sessions, mentors provide guidance, accountability, and encouragement.",
  },
  {
    icon: Star,
    title: "Roles of a Mentor",
    text: "A mentor serves as a trusted advisor — listening, motivating, and helping mentees navigate academic, social, and career challenges with empathy and respect.",
  },
  {
    icon: Award,
    title: "Benefits for the Mentee",
    text: "Mentees gain improved confidence, stronger communication skills, expanded networks, and clearer pathways toward higher education and employment.",
  },
  {
    icon: Clock,
    title: "Expected Time Commitment",
    text: "We ask mentors to dedicate at least 2–4 hours per month over a minimum of 6 months, ensuring meaningful and lasting impact.",
  },
];

const testimonials = [
  {
    name: "Amina K.",
    role: "Mentee, Class of 2025",
    quote:
      "My mentor helped me believe in myself when I couldn't. I went from struggling in school to earning a scholarship at ALU. I owe so much to this program.",
  },
  {
    name: "David M.",
    role: "Volunteer Mentor",
    quote:
      "Being a mentor has been one of the most fulfilling experiences of my life. Watching my mentee grow and achieve her goals reminds me why this work matters.",
  },
];

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    skills: "",
    availability: "",
    motivation: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.areaOfInterest ||
      !formData.motivation.trim()
    ) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Application submitted!",
        description: "Thank you for volunteering. We'll get back to you soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        areaOfInterest: "",
        skills: "",
        availability: "",
        motivation: "",
      });
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative min-h-[50vh] flex items-center justify-center mt-16 md:mt-20" style={{ backgroundColor: "#1C3548" }} aria-label="Volunteer hero">
          <div className="text-on-overlay text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Give us a <span style={{ color: "#B08D57" }}>hand</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Join us in empowering refugee youth through mentorship, education, and community support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#FFFFFF", color: "#1C3548" }}
                onClick={() =>
                  document.getElementById("volunteer-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Become a Volunteer
              </Button>
              <Button
                className="px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
                style={{ backgroundColor: "#FFFFFF", color: "#1C3548" }}
                onClick={() =>
                  document.getElementById("opportunities")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* ─── Opportunities ─── */}
        <section id="opportunities" className="section-padding bg-muted" aria-label="Volunteer opportunities">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">How You Can Help</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Volunteer Opportunities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((op) => (
                <div
                  key={op.title}
                  className="bg-card rounded-lg border border-border p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "hsl(205 42% 20% / 0.1)" }}
                  >
                    <op.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{op.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{op.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Mentor–Mentee Program ─── */}
        <section className="section-padding bg-background" aria-label="Mentorship program">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">Our Flagship Program</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Mentor–Mentee Program
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentorshipBlocks.map((block) => (
                <div
                  key={block.title}
                  className="bg-muted rounded-lg p-6 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(30 24% 47% / 0.15)" }}
                  >
                    <block.icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{block.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
                </div>
              ))}
            </div>

            {/* Success Stories */}
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
                Success Stories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-card rounded-lg border border-border p-8 shadow-sm"
                  >
                    <Quote size={28} className="text-secondary/40 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                    <div>
                      <p className="font-heading font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Application Form ─── */}
        <section
          id="volunteer-form"
          className="relative py-24 md:py-32"
          aria-label="Volunteer application form"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/mission-bg.png')" }}
          />
          <div className="overlay-dark" />
          <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3">
                  Ready to Make a Difference?
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
                  Apply to Volunteer
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-card/95 backdrop-blur-sm rounded-lg border border-border p-8 md:p-10 shadow-xl space-y-6 text-foreground"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+250 xxx xxx xxx"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      maxLength={20}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="areaOfInterest" className="text-foreground">
                      Area of Interest <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.areaOfInterest}
                      onValueChange={(v) => handleChange("areaOfInterest", v)}
                    >
                      <SelectTrigger id="areaOfInterest">
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mentor">Mentor</SelectItem>
                        <SelectItem value="tutor">Tutor</SelectItem>
                        <SelectItem value="event">Event Volunteer</SelectItem>
                        <SelectItem value="program">Program Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-foreground">Skills</Label>
                  <Input
                    id="skills"
                    placeholder="e.g., Teaching, Marketing, Counseling..."
                    value={formData.skills}
                    onChange={(e) => handleChange("skills", e.target.value)}
                    maxLength={200}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-foreground">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="e.g., Weekends, 4 hours/week"
                    value={formData.availability}
                    onChange={(e) => handleChange("availability", e.target.value)}
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-foreground">
                    Short Motivation Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us why you'd like to volunteer with Raise Them Foundation..."
                    rows={4}
                    value={formData.motivation}
                    onChange={(e) => handleChange("motivation", e.target.value)}
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 py-3 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  {submitting ? "Submitting..." : "Apply to Volunteer"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
