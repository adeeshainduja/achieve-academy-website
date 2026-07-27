import { useEffect, useState } from "react";
import { BotMessageSquare, Menu, Search, X } from "lucide-react";
import logo from "../../assets/images/logo.png";


const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 30);

      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 70) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto mt-1 flex max-w-[1600px] items-center justify-between rounded-xl border border-white/10 px-8 py-2 transition-all duration-500 ${
          isScrolled
            ? "bg-[#1B1F29]/95 backdrop-blur-xl shadow-2xl"
            : "bg-[#1B1F29]/90 backdrop-blur-lg"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Achieve Academy"
            className="h-7 w-7 rounded-lg object-cover"
          />

          <span className="text-2xl font-bold tracking-tight text-white">
            Achieve Academy
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative text-lg font-medium transition-all duration-300 ${
                index === 0
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}

              <span
                className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-[#39E63F] transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">

          <button
            onClick={() => {
              window.dispatchEvent(new Event("open-ai-chat"));
            }}
            className="flex items-center gap-2 rounded-full border border-[#2F3744] bg-[#222833] px-5 py-2 text-white transition-all duration-300 hover:border-[#39E63F] hover:bg-[#2A313D]"
          >
            <BotMessageSquare
              size={20}
              className="text-[#39E63F]"
            />

            <span className="font-medium">
              AI Assistant
            </span>
          </button>

          <a
            href="#admissions"
            className="rounded-full bg-[#499A13] px-7 py-2 font-semibold text-[#1B1F29] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#2DD636]"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mx-3 mt-3 rounded-2xl border border-white/10 bg-[#1B1F29] p-6 shadow-2xl">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 transition hover:translate-x-2 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-1 flex items-center overflow-hidden rounded-full border border-[#2F3744] bg-[#222833]">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent px-5 py-3 text-white placeholder:text-gray-400 outline-none"
              />

              <button className="flex h-12 w-14 items-center justify-center bg-[#39E63F]">
                <Search size={20} className="text-white" />
              </button>
            </div>

            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 rounded-full bg-[#39E63F] py-3 text-center font-semibold text-[#1B1F29] transition hover:bg-[#2DD636]"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;