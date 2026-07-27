import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  TrendingUp,
  Palette,
  Monitor,
  Globe,
  Users,
  Clock3,
  BarChart3,
} from "lucide-react";

const programs = [
  {
    title: "G.C.E. Ordinary Level",
    category: "O/L Programme",
    description:
      "Prepare confidently for the G.C.E. Ordinary Level examination through structured lessons, experienced lecturers, and regular assessments.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
    icon: BookOpen,
    students: "1,200+",
    duration: "12 Months",
    level: "Beginner",
  },
  {
    title: "A/L Science",
    category: "Science Stream",
    description:
      "Master Physics, Chemistry, Biology, and Combined Mathematics with expert lecturers and exam-focused learning.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900",
    icon: FlaskConical,
    students: "950+",
    duration: "24 Months",
    level: "Advanced",
  },
  {
    title: "A/L Commerce",
    category: "Commerce Stream",
    description:
      "Learn Accounting, Business Studies and Economics through practical lessons and modern teaching methods.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    icon: TrendingUp,
    students: "850+",
    duration: "24 Months",
    level: "Intermediate",
  },
  {
    title: "A/L Arts",
    category: "Arts Stream",
    description:
      "Develop your knowledge in History, Sinhala, Geography, Political Science and other Arts subjects.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900",
    icon: Palette,
    students: "700+",
    duration: "24 Months",
    level: "Intermediate",
  },
  {
    title: "ICT Programmes",
    category: "Technology",
    description:
      "Build strong ICT knowledge including programming, digital literacy and practical computer skills.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
    icon: Monitor,
    students: "650+",
    duration: "10 Months",
    level: "Beginner",
  },
  {
    title: "English Courses",
    category: "Language",
    description:
      "Improve speaking, grammar, writing, reading and listening through interactive English lessons.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900",
    icon: Globe,
    students: "900+",
    duration: "8 Months",
    level: "All Levels",
  },
];

export default function Programs() {
  return (
    <section 
        id="programs"
        className="relative overflow-hidden bg-[#f8fbf8] py-24">

      {/* Background Decorations */}
      <div className="absolute inset-0">

        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-lime-100 blur-3xl opacity-70"></div>

        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-70"></div>

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-50 blur-3xl"></div>

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="rounded-full border border-lime-200 bg-lime-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-lime-700">

            Academic Programs

          </span>

        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-3xl text-center">

          <h2 className="text-4xl font-bold leading-tight text-[#0b3c36] md:text-5xl">

            Explore Our
            <span className="block text-lime-600">
              Learning Programs
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            We provide comprehensive learning experiences designed
            to help students achieve academic excellence through
            expert guidance, structured lessons and continuous support.

          </p>

        </div>

        {/* Cards Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
  const Icon = program.icon;

  return (
    <div
      key={program.title}
      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-lime-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={program.image}
          alt={program.title}
          className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0b3c36] backdrop-blur">
            {program.category}
          </span>
        </div>

      </div>

      {/* Card Content */}
      <div className="p-7">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">

          <Icon size={26} />

        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-[#0b3c36] transition-colors duration-300 group-hover:text-lime-700">

          {program.title}

        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-600">

          {program.description}

        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100"></div>

        {/* Metadata */}

        <div className="grid grid-cols-3 gap-4">

          <div>

            <div className="flex items-center gap-2 text-lime-600">

              <Users size={16} />

              <span className="text-xs font-semibold uppercase">
                Students
              </span>

            </div>

            <p className="mt-2 font-bold text-[#0b3c36]">
              {program.students}
            </p>

          </div>

          <div>

            <div className="flex items-center gap-2 text-lime-600">

              <Clock3 size={16} />

              <span className="text-xs font-semibold uppercase">
                Duration
              </span>

            </div>

            <p className="mt-2 font-bold text-[#0b3c36]">
              {program.duration}
            </p>

          </div>

          <div>

            <div className="flex items-center gap-2 text-lime-600">

              <BarChart3 size={16} />

              <span className="text-xs font-semibold uppercase">
                Level
              </span>

            </div>

            <p className="mt-2 font-bold text-[#0b3c36]">
              {program.level}
            </p>

          </div>

        </div>

        {/* Button */}

        <button className="mt-8 flex items-center gap-3 font-semibold text-[#0b3c36] transition-all duration-300 group-hover:gap-5 group-hover:text-lime-700">

          View Details

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-100 transition-all duration-300 group-hover:bg-lime-600 group-hover:text-white">

            <ArrowRight size={18} />

          </div>

        </button>

      </div>

    </div>
  );
})}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24">

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0b3c36] via-[#14532d] to-[#0b3c36] px-8 py-16 shadow-2xl">

            {/* Decorations */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl"></div>

            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"></div>

            <div className="relative z-10 text-center">

              <span className="inline-flex rounded-full border border-lime-300/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-lime-200 backdrop-blur">

                Admissions Open

              </span>

              <h3 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">

                Start Your Learning Journey

                <span className="block text-lime-300">
                  With Achieve Academy
                </span>

              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">

                Join thousands of successful students learning with
                experienced lecturers, structured lessons, modern
                classrooms, and continuous academic support.

              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

                <button className="group inline-flex items-center rounded-full bg-lime-400 px-8 py-4 text-lg font-semibold text-[#0b3c36] transition-all duration-300 hover:scale-105 hover:bg-lime-300">

                  Explore All Programs

                  <ArrowRight
                    className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                    size={20}
                  />

                </button>

                <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0b3c36]">

                  Contact Admissions

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}