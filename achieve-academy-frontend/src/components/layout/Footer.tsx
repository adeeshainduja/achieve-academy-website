import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#032720] text-white">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-6">

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Achieve Academy"
                className="h-14 w-14 rounded-xl object-contain bg-white p-1"
              />

              <div>

                <h2 className="text-3xl font-bold">
                  Achieve Academy
                </h2>

                <p className="text-sm text-lime-300">
                  Excellence in Education
                </p>

              </div>

            </div>

            <p className="mt-5 max-w-sm leading-7 text-gray-300">
              Redefining the standard of excellence for the next
              generation of global learners through innovative,
              student-centered education.
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-gray-300">

                <MapPin
                  size={18}
                  className="text-lime-300"
                />

                <span>Nugegoda, Sri Lanka</span>

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <Phone
                  size={18}
                  className="text-lime-300"
                />

                <span>+94 71 234 5678</span>

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <Mail
                  size={18}
                  className="text-lime-300"
                />

                <span>
                  admissions@achieveacademy.lk
                </span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-8 flex gap-3">

              {([] as Array<typeof Mail>).map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-[#032720]"
                >
                  <Icon size={18} />
                </a>

              ))}

            </div>

          </div>

          {/* ================= EXPLORE ================= */}

          <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
              Explore
            </h3>

            <ul className="space-y-3">

              {[
                "Home",
                "About",
                "Courses",
                "Admissions",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-lime-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= RESOURCES ================= */}

          <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
              Resources
            </h3>

            <ul className="space-y-3">

              {[
                "Student Portal",
                "Faculty Login",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-lime-300"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= NEWSLETTER ================= */}
                    <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
              Newsletter
            </h3>

            <p className="mb-5 leading-7 text-gray-300">
              Subscribe to receive academic news,
              announcements and upcoming events.
            </p>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-gray-400 outline-none"
                />

                <button
                  className="flex items-center gap-2 bg-lime-400 px-5 font-semibold text-[#032720] transition-all duration-300 hover:bg-lime-300"
                >
                  <Send size={18} />
                  Go
                </button>

              </div>

            </div>

            <p className="mt-4 text-xs leading-6 text-gray-500">
              We respect your privacy. No spam, only important
              announcements and academic updates.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-gray-400">
              © 2026 Achieve Academy. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6">

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-gray-400 transition hover:text-lime-300"
              >
                Terms of Service
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 transition hover:text-lime-300"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}