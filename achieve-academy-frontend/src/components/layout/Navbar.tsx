import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl shadow-md"
          : "bg-white/15 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Achieve Academy"
            className="h-10 w-10 rounded-md bg-white object-cover p-1"
          />

          <span className="text-2xl font-bold text-[#063F37]">
            Achieve Academy
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-lg transition-colors duration-300 ${
                index === 0
                  ? "font-semibold text-[#063F37]"
                  : "text-gray-700 hover:text-[#063F37]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#6A8B33]" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#admissions"
            className="rounded-full bg-[#004D3B] px-7 py-3 font-medium text-white transition hover:bg-[#00362A]"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col gap-5 px-8 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#admissions"
              className="rounded-full bg-[#004D3B] py-3 text-center font-medium text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;