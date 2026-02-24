import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Mail } from "lucide-react";

const founderStory = {
  name: "Don Divin Niyukuri",
  title: "Founder & CEO",
  image: "/images/team/don-divin.jpg",
  paragraphs: [
    "Don Divin Niyukuri is a visionary changemaker and founder of the Raise Them Foundation and EcoPig Farming Ltd, dedicated to empowering refugee and marginalized youth through education, sustainable livelihoods, and climate-smart innovation. Having spent over a decade in Mahama Refugee Camp, Don Divin transformed personal adversity into a mission to create pathways for youth to thrive, even in the face of significant challenges.",
    "He is currently pursuing a degree in Psychology at the University of Bristol, UK, where he continues to develop his leadership, strategic thinking, and advocacy skills. Don Divin's impact extends through working with iDebate Rwanda, Women for Wildlife Conservation, Tariyaa Travel, and his role as an ACN Ambassador, amplifying youth voices and promoting sustainable development across Africa.",
    "Recognized globally, he is a Rise Global Winner, Mastercard Foundation FAST Fund awardee, and recipient of the Trailblazer Award on Refugee Day, June 20, 2025.",
    "Driven by the belief that transformation begins with resilience, education, and opportunity, Don Divin envisions a world where displaced and underserved youth can realize their full potential and contribute meaningfully to their communities.",
  ],
};

const teamMembers = [
  {
    name: "Abdoul Aziz Irakoze",
    role: "Program Director",
    image: "/images/team/abdoul-aziz.jpg",
    bio: "A committed changemaker dedicated to uplifting marginalized communities through education, gender equity, and inclusive innovation. Pursuing a Bachelor's in Entrepreneurial Leadership at the African Leadership University.",
  },
  {
    name: "Jean Expert Niyonyishu",
    role: "Co-Founder & Executive Secretary",
    image: "/images/team/jean-expert.jpg",
    bio: "Anchors the organization's coordination, drives seamless documentation, and builds strong strategic relationships with partners. A trusted guide for refugees seeking access to higher education.",
  },
  {
    name: "Raissa Mpawenayo",
    role: "Operations Manager",
    image: "/images/team/raissa.jpg",
    bio: "Ensures the smooth day-to-day operations of the foundation, coordinating programs and logistics to maximize impact for refugee youth.",
  },
  {
    name: "Principie Cyubahiro",
    role: "IT & Web Support Officer",
    image: "/images/team/principie.jpg",
    bio: "Manages the online presence of the organization and improves general technical productivity. President of the KAJU Cooperative and founder of the Tegura Youth Initiative.",
  },
  {
    name: "Justine Neema",
    role: "IT Support Specialist",
    image: "/images/team/justine.jpg",
    bio: "Passionate about using technology to support community-driven solutions. Pursuing a Bachelor's in Software Engineering at the African Leadership University.",
  },
  {
    name: "Odile Niyomugaba",
    role: "Chief Impact & Partnerships Lead",
    image: "/images/team/odile.jpg",
    bio: "Driven by a passion for social impact through education, gender equality, and refugee empowerment. Pursuing an MPhil in International Relations at the University of Oxford.",
  },
  {
    name: "Kenny Fleury Niyomucamanza",
    role: "International Relations Coordinator",
    image: "/images/team/kenny.jpg",
    bio: "Committed to service, leadership, and strengthening community resilience. Currently pursuing Medical Imaging and Sonography at KNUST in Ghana.",
  },
  {
    name: "Loic Ishimwe",
    role: "Social Media & Communication Lead",
    image: "/images/team/loic.jpg",
    bio: "Committed to empowering young refugee students with academic, professional, and leadership skills. Honored as a Compassion Hero 2024 by the Global Compassion Coalition.",
  },
  {
    name: "Alain Mbabazi",
    role: "Media & Storytelling Coordinator",
    image: "/images/team/alain.jpg",
    bio: "A dedicated student at the African Leadership University with a strong background in leadership, education, and community development.",
  },
  {
    name: "Clovis Iradukunda",
    role: "Organizational Development Lead",
    image: "/images/team/clovis.jpg",
    bio: "Studying at Le Mans University in France, driven by a passion for helping others and creating meaningful impact through education and youth empowerment.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative min-h-[50vh] flex items-center justify-center mt-16 md:mt-20" style={{ backgroundColor: "#1C3548" }} aria-label="About hero">
          <div className="text-on-overlay text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Meet the team behind the mission to empower refugee youth
            </p>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="section-padding bg-background" aria-label="Founder's story">
          <div className="container-max">
            <div className="text-center mb-12">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-2">Our Beginning</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Founder's Story</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-3 rounded-2xl bg-secondary/20 -rotate-3" />
                  <img
                    src={founderStory.image}
                    alt={founderStory.name}
                    className="relative rounded-2xl w-full aspect-[3/4] object-cover shadow-xl"
                  />
                  <div className="relative mt-4 text-center">
                    <h3 className="font-heading text-xl font-bold text-foreground">{founderStory.name}</h3>
                    <p className="text-secondary font-medium text-sm">{founderStory.title}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-5">
                {founderStory.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-muted" aria-label="Our team">
          <div className="container-max">
            <div className="text-center mb-14">
              <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-2">The People</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Passionate individuals working together to create lasting change for refugee youth across Africa.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-secondary text-sm font-semibold mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
