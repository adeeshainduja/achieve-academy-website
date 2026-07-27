import { ArrowRight } from "lucide-react";
import graduate from "../../assets/images/graduate.jpg";

export default function CTA() {
  return (
    <section id="cta" className="bg-[#F8FAFB] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#1B1F29] px-10 py-10 shadow-2xl">

          {/* Background Glow */}
          <div className="absolute right-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#39E63F]/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold leading-tight text-white">
                Enroll With
                <span className="block text-[#39E63F]">
                  Us Today
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-gray-300">
                Take the first step toward academic success with Achieve
                Academy. Learn from experienced lecturers, structured
                learning programs, and prepare confidently for your
                G.C.E. O/L and A/L examinations.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#499A13] px-7 py-3 font-semibold text-[#1B1F29] transition-all duration-300 hover:scale-105 hover:bg-[#2DD636]"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-gray-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B1F29]"
                >
                  Contact Us
                </a>
              </div>

              <p className="mt-6 text-gray-400">
                Admissions are now open for O/L & A/L batches.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">

                {/* Green Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#39E63F]/20 blur-3xl"></div>

                {/* Outer Circle */}
                <div className="relative flex h-80 w-80 items-center justify-center rounded-full border-4 border-[#39E63F]/20 bg-gradient-to-br from-[#2B313D] to-[#1B1F29] shadow-2xl">

                  {/* Image */}
                  <img
                    src={graduate}
                    alt="Graduate Student"
                    className="h-72 w-72 rounded-full object-cover object-top shadow-xl"
                  />
                </div>

                {/* Caption */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    Graduate Student
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Success Story
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}