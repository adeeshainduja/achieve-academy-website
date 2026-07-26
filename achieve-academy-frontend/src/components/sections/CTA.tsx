import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#F8FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#043B2E] to-[#06513F] px-8 py-24 text-center shadow-2xl">

          {/* Heading */}

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready to Achieve Your
            <span className="block text-lime-300">
              Academic Goals?
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you're preparing for your <strong>G.C.E. O/L</strong> or
            <strong> G.C.E. A/L</strong> examinations, Achieve Academy is here
            to guide you with experienced lecturers, structured learning
            programs, regular assessments, and personalized academic support.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <button className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-10 py-4 text-lg font-semibold text-[#043B2E] transition-all duration-300 hover:scale-105 hover:bg-lime-400">
              Enroll Now
              <ArrowRight size={20} />
            </button>

            <button className="rounded-full border border-white/30 px-10 py-4 text-lg font-medium text-white transition hover:bg-white hover:text-[#043B2E]">
              Contact Us
            </button>

          </div>

          {/* Bottom Text */}

          <p className="mt-10 text-sm tracking-wide text-gray-300">
            Admissions are now open for O/L and A/L batches.
          </p>

        </div>
      </div>
    </section>
  );
}