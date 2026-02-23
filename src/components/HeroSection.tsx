import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center mt-16 md:mt-20" aria-label="Hero">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="overlay-dark" />
      <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Empower{" "}
            <span style={{ color: "#1C3548" }}>refugee youth</span>{" "}
            through{" "}
            <span style={{ color: "#1C3548" }}>learning</span> and{" "}
            <span style={{ color: "#1C3548" }}>growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed">
            Together, we can build pathways where every refugee youth rises with dignity, opportunity, and hope.
          </p>
          <Button
            className="px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#FFFFFF", color: "#1C3548" }}
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
