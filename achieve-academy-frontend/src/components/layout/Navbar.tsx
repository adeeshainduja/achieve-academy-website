import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
        className="
            fixed top-0 left-0 z-50 w-full
            border-b border-white/20
            bg-green/15
            backdrop-blur-xl
            supports-[backdrop-filter]:bg-white/10
            transition-all duration-300
        "
        >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-2.5">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Achieve Academy"
            className="w-10 h-10 rounded bg-white p-1"
          />

          <h1 className="text-2xl font-bold text-[#0C3D33]">
            Achieve Academy
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative text-lg transition ${
                index === 0
                  ? "font-semibold text-[#0C3D33]"
                  : "text-gray-700 hover:text-[#0C3D33]"
              }`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#5B7F2C]" />
              )}
            </a>
          ))}
        </nav>

        {/* Button */}
        <div className="hidden lg:block">
          <button className="rounded-full bg-[#004D3B] px-8 py-3 text-white font-medium hover:bg-[#00352A] transition">
            Enroll Now
          </button>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="flex flex-col gap-6 px-8 py-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            ))}

            <button className="rounded-full bg-[#004D3B] py-3 text-white">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;