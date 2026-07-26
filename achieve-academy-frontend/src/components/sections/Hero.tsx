import laptop from "../../assets/images/laptop.png";
import cap from "../../assets/images/cap.png";
import book from "../../assets/images/book.png";

const stats = [
  {
    value: "5000+",
    label: "Students",
  },
  {
    value: "98%",
    label: "Pass Rate",
  },
  {
    value: "50+",
    label: "Expert Lecturers",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBFCFB] pt-32"
    >
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-lime-100 blur-3xl opacity-70"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:px-8">

        {/* Left Side */}
        <div className="max-w-xl">

          <h1 className="text-5xl font-extrabold leading-none text-[#033B34] md:text-6xl lg:text-7xl">

            Empowering

            <br />

            Students for a

            <br />

            <span className="text-[#78B600]">
              Brighter Future
            </span>

          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Achieve Academy provides high-quality education for
            O/L and A/L students through experienced lecturers,
            structured learning pathways, and AI-powered academic
            support to help every student achieve their full
            potential.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#courses"
              className="rounded-full bg-[#003F34] px-8 py-4 text-lg font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#002E27]"
            >
              Explore Courses
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#B8FF30] px-8 py-4 text-lg font-medium text-[#033B34] transition duration-300 hover:scale-105"
            >
              Contact Us
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex h-[500px] w-full max-w-xl items-center justify-center">

          <div className="absolute h-96 w-96 rounded-full bg-lime-200/30 blur-3xl"></div>

          <div className="relative h-[430px] w-full rounded-[36px] bg-gradient-to-br from-white via-[#FDFDFD] to-[#F3F7F2] shadow-[0_30px_70px_rgba(0,0,0,0.12)] overflow-hidden">

            {/* Glow */}

            <div className="absolute left-12 top-12 h-48 w-48 rounded-full bg-lime-200/40 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-green-100/40 blur-3xl"></div>

            <img
                src={laptop}
                alt="Laptop"
                className="absolute left-8 top-32 w-60 animate-float-slow drop-shadow-2xl transition duration-500 hover:scale-105"
                />

                <img
                src={cap}
                alt="Graduation Cap"
                className="absolute right-24 top-8 w-32 animate-float-medium transition duration-500 hover:rotate-6"
                />

                <img
                src={book}
                alt="Book"
                className="absolute bottom-6 right-8 w-56 animate-float-fast drop-shadow-xl transition duration-500 hover:scale-105"
                />

            {/* Center Text */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

                <h3 className="text-2xl font-bold text-[#063F37]">
                FUTURE
                <br />
                LEARNING
                <br />
                HUB
                </h3>

            </div>

            </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-10 border-t border-gray-200 py-14 lg:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.label}
            className="text-center"
          >

            <h2 className="text-5xl font-bold text-[#033B34]">
              {item.value}
            </h2>

            <p className="mt-4 uppercase tracking-[5px] text-gray-500">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Hero;