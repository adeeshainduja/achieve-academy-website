import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBFCFB] pt-24 md:pt-28"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Left Glow */}
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-lime-100 opacity-70 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute right-0 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-green-200/70 blur-[150px]" />

        {/* Small Top Right Glow */}
        <div className="absolute right-20 top-10 h-60 w-60 rounded-full bg-lime-100 opacity-70 blur-[100px]" />
      </div>

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
              className="rounded-full bg-[#0B3C36] px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Courses
            </button>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-full border-2 border-[#78B600] bg-white px-10 py-5 text-lg font-semibold text-[#0B3C36] transition-all duration-300 hover:bg-lime-50"
            >
              Contact Us
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="relative h-[380px] w-full max-w-[650px] sm:h-[450px] md:h-[520px] lg:h-[650px]">

          {/* Glow Behind 3D Model */}
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-200/60 blur-[110px]" />

          <HeroScene />

        </div>

      </div>
    </section>
  );
}