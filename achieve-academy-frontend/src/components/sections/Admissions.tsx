import {
  ArrowRight,
  ClipboardCheck,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Inquiry",
    description:
      "Complete the online inquiry form with your academic information and preferred study program.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Academic Consultation",
    description:
      "Meet with our academic counselors to discuss your goals and receive personalized guidance.",
    icon: Users,
  },
  {
    number: "03",
    title: "Choose Your Program",
    description:
      "Select the most suitable course and study schedule based on your future academic aspirations.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Begin Learning",
    description:
      "Complete enrollment, attend orientation, and start your learning journey with confidence.",
    icon: GraduationCap,
  },
];

export default function Admissions() {
  return (
    <section 
        id="admissions"
        className="relative overflow-hidden bg-[#F8FCF8] py-24">
        
      {/* Background Decorations */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-lime-200/70 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[320px] w-[320px] rounded-full bg-lime-300/60 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-emerald-200/60 blur-[120px]" />

        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

        {/* Dot Pattern */}

        <div
          className="absolute right-20 top-12 h-64 w-64 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#0B3C36 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#0B3C36] backdrop-blur">

            Admissions Process

          </span>

        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-3xl text-center">

          <h2 className="text-5xl font-bold leading-tight text-[#0B3C36] md:text-6xl">

            Your Journey Begins Here

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Complete four simple steps and become part of
            Achieve Academy's learning community.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Connection Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-1 rounded-full bg-gradient-to-r from-lime-300 via-lime-400 to-lime-300 lg:block"></div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
  const Icon = step.icon;

  return (
    <div key={step.number} className="relative">

      {/* Timeline Dot */}

      {index !== steps.length - 1 && (
        <div className="absolute -right-4 top-12 z-20 hidden lg:flex h-7 w-7 items-center justify-center rounded-full bg-lime-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

          <div className="h-3 w-3 rounded-full bg-white"></div>

        </div>
      )}

      {/* Card */}

      <div className="group relative h-full overflow-hidden rounded-[30px] border border-gray-200 bg-white/70 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">

        {/* Glow */}

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-200/20 blur-3xl transition duration-500 group-hover:bg-lime-300/40"></div>

        {/* Icon */}

        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 to-emerald-300 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

          <Icon
            size={34}
            className="text-[#0B3C36]"
          />

        </div>

        {/* Number */}

        <h3 className="mt-8 text-6xl font-bold tracking-tight text-[#0B3C36]">

          {step.number}

        </h3>

        {/* Title */}

        <h4 className="mt-3 text-3xl font-bold leading-tight text-[#0B3C36]">

          {step.title}

        </h4>

        {/* Description */}

        <p className="mt-5 leading-8 text-gray-600">

          {step.description}

        </p>

        {/* Learn More */}

        <button className="group/btn mt-8 inline-flex items-center font-semibold text-[#0B3C36] transition hover:text-lime-700">

          Learn More

          <ArrowRight
            size={18}
            className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
          />

        </button>

      </div>

    </div>
  );
})}
          </div>

        </div>

        {/* Bottom Buttons */}

        <div className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row">

          {/* Primary Button */}

          <button className="group inline-flex items-center rounded-full bg-gradient-to-r from-lime-400 to-lime-500 px-10 py-5 text-lg font-semibold text-[#0B3C36] shadow-[0_10px_35px_rgba(132,204,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(132,204,22,0.45)]">

            Apply for Admission

            <ArrowRight
              size={20}
              className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

          {/* Secondary Button */}

          <button className="rounded-full border border-gray-300 bg-white px-10 py-5 text-lg font-semibold text-[#0B3C36] shadow-sm transition-all duration-300 hover:border-lime-400 hover:bg-lime-50 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

            Download Prospectus

          </button>

        </div>

      </div>

    </section>
  );
}