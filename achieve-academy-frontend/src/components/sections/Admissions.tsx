import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Online Inquiry",
    description:
      "Fill out our simple interest form with your academic background and goals.",
  },
  {
    number: "2",
    title: "Academic Interview",
    description:
      "Meet with our counselors to discuss your tailored learning path and needs.",
  },
  {
    number: "3",
    title: "Program Selection",
    description:
      "Choose your specific courses and schedules from our comprehensive list.",
  },
  {
    number: "4",
    title: "Start Learning",
    description:
      "Attend orientation and begin your journey toward academic excellence.",
    active: true,
  },
];

export default function Admissions() {
  return (
    <section className="bg-[#F8FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">

//Heading 

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#0A3D37]">
            Your Path to Enrollment
          </h2>

          <p className="mt-4 text-gray-500">
            Four simple steps to joining our community of high-achievers.
          </p>
        </div>

  //Steps 

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div key={step.number}>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white
                ${
                  step.active
                    ? "bg-lime-700"
                    : "bg-[#063D36]"
                }`}
              >
                {step.number}
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-[#0A3D37]">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {step.description}
              </p>

            </div>
          ))}

        </div>

        {/* Button */}

        <div className="mt-20 flex justify-center">

          <button className="flex items-center gap-3 rounded-full bg-[#063D36] px-12 py-5 text-xl font-semibold text-white transition hover:bg-[#0A5248]">
            Apply Today
            <ArrowRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
}