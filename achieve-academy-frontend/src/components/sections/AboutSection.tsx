import {
  GraduationCap,
  Brain,
  Users,
  TrendingUp,
} from "lucide-react";

import aboutImage from "../../assets/images/about.jpg";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Lecturers",
  },
  {
    icon: Brain,
    title: "AI Learning Support",
  },
  {
    icon: Users,
    title: "Small Batch Classes",
  },
  {
    icon: TrendingUp,
    title: "Career Guidance",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFB] to-green-50 py-16 lg:py-20"
    >
      {/* Background Decorations */}

      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-lime-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT IMAGE */}

          <div className="relative">

            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-lime-300/30 blur-2xl" />

            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-300/20 blur-3xl" />

                  <img
                    src={aboutImage}
                    alt="Achieve Academy Students"
                    className="relative z-10 h-[600px] w-full rounded-[28px] object-cover shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition duration-500 hover:scale-[1.02] lg:h-[520px]"
                  />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center rounded-full bg-lime-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#14532D]">
              About Achieve Academy
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#12372A] lg:text-5xl">
              Building Academic Excellence
              <br />

              <span className="bg-gradient-to-r from-[#16A34A] to-[#84CC16] bg-clip-text text-transparent">
                for Every Student
              </span>
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
              At Achieve Academy, we are dedicated to providing quality
              education for O/L and A/L students through experienced
              lecturers, innovative teaching methods, structured learning
              programs, and a supportive environment that empowers every
              learner to achieve academic excellence and future success.
            </p>

            {/* Features */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-100 to-green-100 transition group-hover:scale-110">
                      <Icon
                        className="text-green-700"
                        size={26}
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#12372A]">
                        {item.title}
                      </h3>
                    </div>

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