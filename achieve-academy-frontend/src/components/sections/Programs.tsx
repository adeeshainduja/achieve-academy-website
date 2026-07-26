import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  TrendingUp,
  Palette,
  Monitor,
  Globe,
} from "lucide-react";

const programs = [
  {
    title: "G.C.E. Ordinary Level",
    category: "O/L",
    description:
      "Prepare confidently for the G.C.E. Ordinary Level examination through structured lessons, experienced lecturers, and regular assessments.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    icon: BookOpen,
  },
  {
    title: "A/L Science",
    category: "Science Stream",
    description:
      "Comprehensive preparation for Physics, Chemistry, Biology, and Combined Mathematics with practical exam-focused learning.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    icon: FlaskConical,
  },
  {
    title: "A/L Commerce",
    category: "Commerce Stream",
    description:
      "Master Accounting, Business Studies, and Economics through interactive lessons and practical applications.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    icon: TrendingUp,
  },
  {
    title: "A/L Arts",
    category: "Arts Stream",
    description:
      "Develop strong knowledge in History, Sinhala, Geography, Political Science, and other Arts subjects.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
    icon: Palette,
  },
  {
    title: "ICT Programs",
    category: "Information Technology",
    description:
      "Learn computer fundamentals, programming basics, digital literacy, and modern technology skills.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    icon: Monitor,
  },
  {
    title: "English Courses",
    category: "English Language",
    description:
      "Improve grammar, speaking, listening, reading, and writing skills through engaging English language programs.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    icon: Globe,
  },
];

export default function Programs() {
  return (
    <section className="bg-[#f8fafb] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#0b3c36]">
            Our Academic Programs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600 leading-8">
            Explore our comprehensive learning programs designed to help
            O/L and A/L students achieve academic excellence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-7">

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-lime-700">
                    <Icon size={15} />
                    {program.category}
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-[#0b3c36]">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {program.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 font-bold uppercase tracking-widest text-[#0b3c36] transition hover:gap-3">
                    View Details
                    <ArrowRight size={18} />
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}