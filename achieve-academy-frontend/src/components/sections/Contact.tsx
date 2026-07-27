import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = () => {
    const phone = "94712345678";

    const message = `Hello Achieve Academy,

Name: ${formData.firstName} ${formData.lastName}

Email: ${formData.email}

Phone: ${formData.phone}

Program: ${formData.program}

Message:
${formData.message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_a4vnv2f",
        "template_tn7q6sn",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
        },
        "zV5Ma56eaey1YCyir"
      );

      setSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FCF8] to-[#EEF8F3] py-24">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-lime-200/40 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-emerald-100 blur-[120px]" />

        <div
          className="absolute right-12 top-16 h-40 w-40 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#0B3C36 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-lime-300 bg-lime-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#0B3C36]">

              Contact Us

            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-[#083B35] lg:text-6xl">

              Let's Build

              <span className="block bg-gradient-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent">

                Your Future Together

              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">

              Have questions about admissions,
              programs or tuition fees?

              Our academic advisors are here to help
              you choose the best learning path.

            </p>

            {/* Contact Cards */}

            <div className="mt-12 grid gap-5 md:grid-cols-2">
                              {/* Phone */}

              <a
                href="tel:+94712345678"
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 transition-all duration-300 group-hover:bg-lime-400">

                    <Phone
                      size={24}
                      className="text-[#083B35]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Call Us
                    </p>

                    <h3 className="mt-1 font-semibold text-[#083B35]">
                      +94 71 234 5678
                    </h3>

                  </div>

                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:admissions@achieveacademy.lk"
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 transition-all duration-300 group-hover:bg-lime-400">

                    <Mail
                      size={24}
                      className="text-[#083B35]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-[#083B35]">
                      admissions@achieveacademy.lk
                    </h3>

                  </div>

                </div>

              </a>

              {/* Location */}

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 transition-all duration-300 group-hover:bg-lime-400">

                    <MapPin
                      size={24}
                      className="text-[#083B35]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Location
                    </p>

                    <h3 className="mt-1 font-semibold text-[#083B35]">
                      Colombo, Sri Lanka
                    </h3>

                  </div>

                </div>

              </a>

              {/* Working Hours */}

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100">

                    <Clock3
                      size={24}
                      className="text-[#083B35]"
                    />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Mon - Sat
                    </p>

                    <h3 className="mt-1 font-semibold text-[#083B35]">
                      8:00 AM - 7:00 PM
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
                        {/* Success Message */}

            {success && (
              <div className="mb-6 flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400">

                  <CheckCircle2
                    size={24}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-[#083B35]">
                    Thank You!
                  </h3>

                  <p className="text-sm text-gray-600">
                    We'll contact you within 24 hours.
                  </p>

                </div>

              </div>
            )}

            {/* First Row */}

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
              />

            </div>

            {/* Email */}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-5 w-full rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
            />

            {/* Phone */}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-5 w-full rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
            />

            {/* Program */}

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="mt-5 w-full rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
            >
              <option value="">
                Select a Program
              </option>

              <option value="O/L">
                G.C.E Ordinary Level
              </option>

              <option value="A/L Science">
                A/L Science
              </option>

              <option value="A/L Commerce">
                A/L Commerce
              </option>

              <option value="A/L Arts">
                A/L Arts
              </option>

              <option value="ICT">
                ICT Programs
              </option>

              <option value="English">
                English Courses
              </option>

            </select>

            {/* Message */}

            <textarea
              rows={6}
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-5 w-full rounded-2xl border border-gray-200 bg-[#F8FAFB] px-5 py-4 text-[#083B35] outline-none transition-all focus:border-lime-400 focus:ring-4 focus:ring-lime-100"
            />
                          {/* Buttons */}

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">

              {/* Send */}

              <button
                type="submit"
                disabled={loading}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lime-400 to-lime-500 px-6 py-4 font-semibold text-[#083B35] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                {loading ? "Sending..." : "Send Inquiry"}

              </button>

              {/* WhatsApp */}

              <button
                type="button"
                onClick={openWhatsApp}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-green-500 bg-green-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-600"
              >
                <MessageCircle
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                WhatsApp

              </button>

            </div>

            {/* Trust Text */}

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">

              <CheckCircle2
                size={16}
                className="text-lime-500"
              />

              <span>
                Usually responds within 24 hours
              </span>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}