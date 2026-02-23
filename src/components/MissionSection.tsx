const MissionSection = () => {
  return (
    <section className="relative py-24 md:py-32" aria-label="Our mission">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/mission-bg.png')" }}
      />
      <div className="overlay-dark" />
      <div className="text-on-overlay container-max px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-secondary uppercase tracking-widest text-sm font-semibold mb-4">Our Mission</p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-primary-foreground/90">
          At Raise Them Foundation, we empower refugee youth to reclaim their futures by connecting them to tailored educational and professional opportunities, guiding them through every step of their university applications, and providing transformative mentorship and skills development that ignite lasting change.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
