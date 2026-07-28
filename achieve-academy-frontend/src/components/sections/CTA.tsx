import { ArrowRight } from "lucide-react";
import graduate from "../../assets/images/graduate.jpg";

export default function CTA() {
  return (
    <section id="cta" className="bg-[#F8FAFB] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] bg-[#1B1F29] px-5 py-8 shadow-2xl sm:px-8 sm:py-10 lg:px-10">

          {/* Background Glow */}
          <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#39E63F]/10 blur-3xl md:right-16 md:h-80 md:w-80" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Enroll With
                <span className="block text-[#39E63F]">
                  Us Today
                </span>
              </h2>

              <p className="mt-6 max-w-full text-base leading-8 text-gray-300 sm:text-lg lg:max-w-lg">
                Take the first step toward academic success with Achieve
                Academy. Learn from experienced lecturers, structured
                learning programs, and prepare confidently for your
                G.C.E. O/L and A/L examinations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#499A13] px-7 py-3 font-semibold text-[#1B1F29] transition-all duration-300 hover:scale-105 hover:bg-[#2DD636]"
                >
                  Enroll Now
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B1F29]"
                >
                  Contact Us
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-400 sm:text-base">
                Admissions are now open for O/L & A/L batches.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">

                {/* Green Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-[#39E63F]/20 blur-3xl" />

                {/* Circle */}
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#39E63F]/20 bg-gradient-to-br from-[#2B313D] to-[#1B1F29] shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">

                  <img
                    src={graduate}
                    alt="Graduate Student"
                    className="h-56 w-56 rounded-full object-cover object-top shadow-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                  />

                </div>

                {/* Caption */}
                <div className="mt-5 text-center sm:mt-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Graduate Student
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
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