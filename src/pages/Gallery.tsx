import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  category: string;
  section: string;
}

const galleryItems: GalleryItem[] = [
  // English Club Launch
  {
    id: 1,
    src: "/images/Gallery/1.jpeg",
    alt: "First Batch of Students at English Club Launch",
    title: "First Batch of Students – English Club Launch",
    description: "The first group of students who joined the Raise Them Foundation English Club during its official launch in Mahama Refugee Camp. This marked the beginning of a new learning journey aimed at improving English communication skills, building confidence, and empowering refugee youth through education and mentorship.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Events",
    section: "English Club Launch",
  },
  {
    id: 5,
    src: "/images/Gallery/5.JPG",
    alt: "Briefing the Students During the Kickoff",
    title: "Briefing the Students During the Kickoff",
    description: "Raise Them Foundation team members addressing the students during the kickoff of the English Club initiative. This session introduced the purpose of the program, the learning activities planned, and how students would benefit from developing strong communication and leadership skills.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Events",
    section: "English Club Launch",
  },
  {
    id: 6,
    src: "/images/Gallery/6.JPG",
    alt: "Orientation and Introduction Session",
    title: "Orientation and Introduction Session",
    description: "A continuation of the orientation session where students were guided on how the English Club would operate. Participants were encouraged to actively participate, share ideas, and take advantage of the opportunity to improve their English skills.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Events",
    section: "English Club Launch",
  },

  // Learning Activities
  {
    id: 2,
    src: "/images/Gallery/2.JPG",
    alt: "Beneficiaries of the English Club",
    title: "Beneficiaries of the English Club",
    description: "Students participating in the Raise Them Foundation English Club program at Mahama Refugee Camp. These young learners are the direct beneficiaries of the initiative, gaining opportunities to improve their language skills, confidence, and ability to communicate effectively.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Youth Programs",
    section: "Learning Activities",
  },
  {
    id: 3,
    src: "/images/Gallery/3.JPG",
    alt: "Activities Begin in the English Club",
    title: "Activities Begin in the English Club",
    description: "Students actively engaging in their first learning activities after the launch of the English Club. The session focused on interactive discussions, participation, and building a comfortable environment where students could practice English while expressing their ideas.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Youth Programs",
    section: "Learning Activities",
  },
  {
    id: 4,
    src: "/images/Gallery/4.JPG",
    alt: "English Club Learning Session",
    title: "English Club Learning Session",
    description: "A classroom moment during the early English Club sessions where students participate in group discussions and language practice. These activities encourage collaboration, confidence, and active learning among the participants.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Youth Programs",
    section: "Learning Activities",
  },
  {
    id: 7,
    src: "/images/Gallery/7.JPG",
    alt: "Interactive Learning Session",
    title: "Interactive Learning Session",
    description: "Students participating in an engaging English Club session that encouraged dialogue, teamwork, and active listening. These moments demonstrate the program's focus on practical communication skills rather than traditional classroom instruction.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Youth Programs",
    section: "Learning Activities",
  },

  // Student Engagement
  {
    id: 8,
    src: "/images/Gallery/8.JPG",
    alt: "Students Excited to Begin the Journey",
    title: "Students Excited to Begin the Journey",
    description: "A joyful moment capturing students' excitement and enthusiasm as they begin their journey in the English Club. The smiles and energy reflect the positive environment created for learning, growth, and empowerment.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Success Stories",
    section: "Student Engagement",
  },

  // Community Outreach
  {
    id: 12,
    src: "/images/Gallery/12.jpeg",
    alt: "First Outreach in Mahama Refugee Camp",
    title: "First Outreach in Mahama Refugee Camp",
    description: "Our very first outreach visit to Mahama Refugee Camp, conducted with the awareness and support of the camp administration, school leadership, and UNHCR. This visit marked the beginning of our engagement with the refugee community to understand their needs and introduce our educational initiatives.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Community Impact",
    section: "Community Outreach",
  },
  {
    id: 13,
    src: "/images/Gallery/13.jpeg",
    alt: "Awareness Session with Students",
    title: "Awareness Session with Students",
    description: "Students gathering during our first outreach activity where we introduced the vision and mission of Raise Them Foundation. The session focused on explaining how education, mentorship, and skills development programs would support youth in the camp.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Community Impact",
    section: "Community Outreach",
  },
  {
    id: 14,
    src: "/images/Gallery/14.jpeg",
    alt: "Community Engagement at Mahama Refugee Camp",
    title: "Community Engagement at Mahama Refugee Camp",
    description: "A large group of students attending our awareness session about the opportunities offered by Raise Them Foundation. The event created excitement and interest among young people eager to participate in educational and leadership programs.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Community Impact",
    section: "Community Outreach",
  },
  {
    id: 15,
    src: "/images/Gallery/15.jpeg",
    alt: "Introducing Our Programs",
    title: "Introducing Our Programs",
    description: "Raise Them Foundation representatives presenting the organization's mission and programs to students during the outreach visit. The session helped build trust and understanding between the foundation and the refugee community.",
    date: "2025",
    location: "Mahama Refugee Camp",
    category: "Community Impact",
    section: "Community Outreach",
  },

  // Inspiration & Partnerships
  {
    id: 9,
    src: "/images/Gallery/9.jpg",
    alt: "Meeting Someone Who Inspired Us to Continue",
    title: "Meeting Someone Who Inspired Us to Continue",
    description: "Members of the Raise Them Foundation team meeting a mentor who greatly inspired our mission and encouraged us to continue our work supporting refugee youth. His words and perspective reinforced our commitment to education, empowerment, and community impact.",
    date: "2025",
    category: "Partnerships",
    section: "Inspiration & Partnerships",
  },
];

const categories = [
  "All",
  "Events",
  "Youth Programs",
  "Success Stories",
  "Community Impact",
  "Partnerships",
];

const sections = [
  "English Club Launch",
  "Learning Activities",
  "Student Engagement",
  "Community Outreach",
  "Inspiration & Partnerships",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const featuredItems = galleryItems.slice(0, 4);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - matching About page pattern */}
        <section 
          className="relative min-h-[50vh] flex items-center justify-center mt-16 md:mt-20" 
          style={{ backgroundColor: "#1C3548" }}
          aria-label="Gallery hero"
        >
          <div className="text-on-overlay text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Moments of Impact
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Capturing the journey of transformation, hope, and empowerment through our work with refugee communities
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-background" aria-label="Gallery introduction">
          <div className="container-max">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#1C3548" }}>
                Our Story in Pictures
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Welcome to our visual journey. This gallery showcases the meaningful work we do at Raise Them Foundation — from educational programs in refugee communities to the inspiring moments of growth and connection. Each image represents a life touched, a skill developed, and a future made brighter.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Highlights */}
        <section className="section-padding bg-gray-50" aria-label="Featured highlights">
          <div className="container-max">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: "#1C3548" }}>
              Featured Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-300 mt-1">
                        {item.location || item.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter & Gallery Section */}
        <section className="section-padding bg-background" id="gallery" aria-label="Photo gallery">
          <div className="container-max">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "text-white shadow-md"
                      : "text-gray-600 hover:text-white bg-gray-100 hover:bg-gray-600"
                  }`}
                  style={{
                    backgroundColor: activeCategory === category ? "#1C3548" : "#f3f4f6",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Section Grouped Gallery */}
            {activeCategory === "All" ? (
              <div className="space-y-14">
                {sections.map((section) => {
                  const sectionItems = galleryItems.filter(
                    (item) => item.section === section
                  );
                  if (sectionItems.length === 0) return null;

                  return (
                    <div key={section}>
                      <h3 
                        className="text-xl md:text-2xl font-semibold mb-6 pb-3 border-b"
                        style={{ color: "#1C3548", borderColor: "#e5e7eb" }}
                      >
                        {section}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {sectionItems.map((item, index) => (
                          <div
                            key={item.id}
                            className={`group cursor-pointer transition-all duration-500 ${
                              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setSelectedImage(item)}
                          >
                            <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group cursor-pointer transition-all duration-500 ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-white rounded-lg overflow-hidden">
          {selectedImage && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[60vh] object-contain bg-gray-100"
                />
              </div>

              {/* Details */}
              <div className="p-5 md:p-6">
                <h3 
                  className="text-xl md:text-2xl font-semibold mb-3" 
                  style={{ color: "#1C3548" }}
                >
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{selectedImage.date}</span>
                  </div>
                  {selectedImage.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>{selectedImage.location}</span>
                    </div>
                  )}
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "#f3f4f6", color: "#4b5563" }}
                  >
                    {selectedImage.category}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
