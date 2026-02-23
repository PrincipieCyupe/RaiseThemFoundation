import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32" aria-label="Call to action">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cta-bg.png')" }}
      />
      <div className="overlay-dark" />
      <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4">Give Us a Hand</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto mb-8 leading-tight">
          Support us and change the course of a student's life today
        </h2>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-10 py-3 text-base font-semibold transition-all duration-300 hover:scale-105">
          Support Our Mission
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
