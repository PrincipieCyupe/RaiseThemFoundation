import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Raise Them Foundation?",
    a: "Raise Them Foundation (RTF) is a youth-led nonprofit founded in April 2024 by Don Divin Niyukuri. We empower refugee youth by connecting them to educational and professional opportunities, guiding them through university applications, and providing transformative mentorship and skills training.",
  },
  {
    q: "What is your mission and vision?",
    a: "Our mission is to empower refugee youth to reclaim their futures through tailored educational opportunities, mentorship, and skills development. Our vision is a world where every refugee youth has access to quality education and the chance to thrive.",
  },
  {
    q: "Who is eligible for your programs?",
    a: "Our programs are open to refugee youth who are seeking educational and professional development opportunities. We focus on high school and higher education students from displaced communities.",
  },
  {
    q: "What services do you offer?",
    a: "We offer scholarship guidance, university application support, mentorship programs, skills training, and professional development opportunities for refugee youth.",
  },
  {
    q: "How can I support Raise Them Foundation?",
    a: "You can support us by donating, volunteering your time and expertise, partnering with us as an organization, or spreading the word about our mission on social media.",
  },
  {
    q: "Where can I find stories of impact?",
    a: "Visit our Stories of Impact page to read about the lives we've transformed through our programs and partnerships.",
  },
  {
    q: "How do you choose partners and mentors?",
    a: "We carefully select partners and mentors who share our values of empowerment, inclusivity, and integrity, and who have relevant expertise to guide refugee youth.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" aria-label="Frequently asked questions">
      <div className="container-max max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary transition-colors py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
