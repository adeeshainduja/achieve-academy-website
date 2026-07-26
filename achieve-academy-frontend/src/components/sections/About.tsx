import {
  GraduationCap,
  Brain,
  Users,
  TrendingUp,
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Experienced Lecturers",
      description:
        "Learn from industry veterans and PhD holders.",
    },
    {
      icon: Brain,
      title: "AI Learning Support",
      description:
        "Leverage personalized AI tutors for mastery.",
    },
    {
      icon: Users,
      title: "Small Batch Classes",
      description:
        "Ensuring individual attention for every student.",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description:
        "Step-by-step roadmaps to your dream career.",
    },
  ];

  return (
    <section className="bg-[#F8FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="flex justify-center">
            <img
              src="/images/about.jpg"
              alt="students"
              className="w-full max-w-md rounded-[24px] shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="inline-flex rounded-full bg-lime-300 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900">
              About Achieve Academy
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#113B34]">
              Building Academic Excellence
              <br />
              for Every Student
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At Achieve Academy, we are committed to providing
              quality education for O/L and A/L students through
              experienced lecturers, structured learning programs,
              and a supportive learning environment. Our goal is to
              help every student develop the knowledge, confidence,
              and skills needed for academic success and future
              opportunities.
            </p>

            {/* Cards */}

            <div className="mt-10 grid grid-cols-2 gap-6">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Icon
                      className="mb-5 text-lime-600"
                      size={22}
                    />

                    <h3 className="text-2xl font-semibold text-[#113B34]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}