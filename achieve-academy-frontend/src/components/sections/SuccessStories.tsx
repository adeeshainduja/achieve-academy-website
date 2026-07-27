import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nethmi Perera",
    role: "A/L Biology Student",
    school: "Visakha Vidyalaya",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "The Biology and Chemistry classes helped me improve from C grades to A grades. The lecturers explained every lesson clearly, and the weekly revision papers gave me the confidence to face my A/L examination.",
  },
  {
    id: 2,
    name: "Kavindu Fernando",
    role: "O/L Student",
    school: "Ananda College",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I joined Achieve Academy just six months before my O/L exam. The structured revision program and regular model papers helped me achieve 9A passes. The teachers were always supportive whenever I had questions.",
  },
  {
    id: 3,
    name: "Sithumi Jayasinghe",
    role: "Engineering Undergraduate",
    school: "University of Moratuwa",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "The Mathematics classes and individual mentoring made a huge difference in my A/L preparation. Thanks to the guidance I received, I was able to enter the Engineering Faculty at the University of Moratuwa.",
  },
];

export default function SuccessStories() {
  return (
    <section 
        id="success-stories"
        className="bg-[#F8FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-[#083B35]">
            Student Success Stories
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Hear from students who achieved their academic goals at Achieve
            Academy.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((student) => (
            <div
              key={student.id}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rating */}
              <div className="mb-6 flex text-lime-600">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="italic leading-8 text-gray-600">
                "{student.review}"
              </p>

              {/* Student */}
              <div className="mt-8 flex items-center gap-4">

                <img
                  src={student.image}
                  alt={student.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>

                  <h4 className="font-semibold text-[#083B35]">
                    {student.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {student.role}
                  </p>

                  <p className="text-sm font-medium text-lime-700">
                    {student.school}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Statistics */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 text-center">

          <div>
            <h3 className="text-4xl font-bold text-[#083B35]">
              98%
            </h3>
            <p className="mt-2 text-gray-500">
              Student Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#083B35]">
              2,500+
            </h3>
            <p className="mt-2 text-gray-500">
              Successful Students
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#083B35]">
              120+
            </h3>
            <p className="mt-2 text-gray-500">
              University Selections
            </p>
          </div>

        </div>

        {/* Read More Button */}
        <div className="mt-14 flex justify-center">

          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            Read More Success Stories

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>
    </section>
  );
}