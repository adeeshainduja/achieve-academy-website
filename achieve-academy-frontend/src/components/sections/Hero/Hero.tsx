import HeroScene from "./HeroScene";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBFCFB] pt-28"
    >
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-lime-100 opacity-70 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row lg:px-8">

        {/* Left */}
        <div className="max-w-xl">

          <h1 className="text-5xl font-extrabold leading-tight text-[#033B34] md:text-6xl lg:text-7xl">
            Empowering
            <br />
            Students For A
            <br />
            <span className="text-[#78B600]">
              Brighter Future
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Achieve Academy provides high quality education,
            experienced lecturers and AI-powered learning
            to help every student achieve academic excellence.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
              onClick={() =>
                document.getElementById("programs")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full bg-[#0B3C36] px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              Explore Courses
            </button>

            <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-full bg-lime-400 px-10 py-5 text-lg font-semibold text-[#0B3C36] transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </button>

          </div>

        </div>

        {/* Right */}
        <div className="relative h-[650px] w-full max-w-[650px]">
          <HeroScene />
        </div>

      </div>
    </section>
  );
}