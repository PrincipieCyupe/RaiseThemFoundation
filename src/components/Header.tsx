import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Stories of Impact", to: "/stories" },
  {
    label: "Our Organization",
    to: "/organization",
    children: [
      { label: "About Us", to: "/about" },
      { label: "What We Do", to: "/what-we-do" },
    ],
  },
  { label: "News", to: "/news" },
  {
    label: "Scholarship",
    to: "/scholarships",
    children: [
      { label: "Fully Funded Opportunities", to: "/scholarships/fully-funded" },
      { label: "Partially Funded Opportunities", to: "/scholarships/partially-funded" },
    ],
  },
  { label: "Volunteer", to: "/volunteer" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(229, 231, 235, 0.95)" : "rgba(229, 231, 235, 0.7)",
      }}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center" aria-label="Raise Them Foundation Home">
          <img src="/images/logo.png" alt="Raise Them Foundation" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Main navigation"
          ref={dropdownRef}
        >
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "#1C3548" }}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openDropdown === l.label ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === l.label && (
                  <div
                    className="absolute top-full left-0 mt-2 min-w-[220px] rounded-md shadow-lg border py-2 z-50"
                    style={{ backgroundColor: "rgba(229, 231, 235, 0.98)", borderColor: "rgba(28,53,72,0.1)" }}
                  >
                    {l.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 ${
                            isActive ? "bg-black/5" : ""
                          }`
                        }
                        style={({ isActive }) => ({
                          color: isActive ? "#967B5A" : "#1C3548",
                        })}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={({ isActive }) => ({
                  color: isActive ? "#967B5A" : "#1C3548",
                })}
              >
                {l.label}
              </NavLink>
            )
          )}

          <Button
            className="font-semibold px-6 hover:opacity-90"
            style={{ backgroundColor: "#1C3548", color: "rgba(229, 231, 235, 0.7)" }}
          >
            Donate
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          style={{ color: "#1C3548" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto"
          style={{ backgroundColor: "rgba(229, 231, 235, 0.98)", borderColor: "rgba(28,53,72,0.1)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: "#1C3548" }}
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileExpanded === l.label ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileExpanded === l.label && (
                  <div className="pl-4 pb-2">
                    {l.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.to}
                        className="block py-2.5 text-sm font-medium transition-colors hover:opacity-70"
                        style={({ isActive }) => ({
                          color: isActive ? "#967B5A" : "#1C3548",
                        })}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpanded(null);
                        }}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className="block py-3 text-sm font-medium transition-colors hover:opacity-70"
                style={({ isActive }) => ({
                  color: isActive ? "#967B5A" : "#1C3548",
                })}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </NavLink>
            )
          )}

          <Button
            className="w-full mt-3 font-semibold hover:opacity-90"
            style={{ backgroundColor: "#1C3548", color: "rgba(229, 231, 235, 0.7)" }}
          >
            Donate
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;