import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = () => {
    const phone = "94712345678"; // Replace with your WhatsApp number

    const message = `Hello Achieve Academy,

Name: ${formData.firstName} ${formData.lastName}

Email: ${formData.email}

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
        program: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#032720] via-[#054237] to-[#08614C] py-24">

      {/* Background */}

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-lime-400/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <span className="inline-flex rounded-full border border-lime-300/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-lime-300 backdrop-blur-xl">
              Contact Us
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
              Let's Build
              <span className="block text-lime-300">
                Your Future Together
              </span>
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-300">
              Have questions about admissions,
              courses or fees?
              Our admissions team is ready to help
              you choose the right learning path.
            </p>

            <div className="mt-10 space-y-5">
                              {/* Phone Card */}

              <a
                href="tel:+94712345678"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                <div className="rounded-xl bg-lime-300 p-3">
                  <Phone size={22} className="text-[#054237]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Call Us
                  </h3>

                  <p className="text-sm text-gray-300">
                    +94 71 234 5678
                  </p>
                </div>

              </a>

              {/* Email Card */}

              <a
                href="mailto:admissions@achieveacademy.lk"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                <div className="rounded-xl bg-lime-300 p-3">
                  <Mail size={22} className="text-[#054237]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Email
                  </h3>

                  <p className="text-sm text-gray-300">
                    admissions@achieveacademy.lk
                  </p>
                </div>

              </a>

              {/* Address Card */}

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                <div className="rounded-xl bg-lime-300 p-3">
                  <MapPin size={22} className="text-[#054237]" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Visit Us
                  </h3>

                  <p className="text-sm text-gray-300">
                    Colombo, Sri Lanka
                  </p>
                </div>

              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-3xl"
          >
                        {/* Success Message */}

            {success && (
              <div className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/20 p-5">
                <h3 className="font-semibold text-green-300">
                  ✅ Inquiry Sent Successfully
                </h3>

                <p className="mt-2 text-sm text-gray-100">
                  Thank you for contacting Achieve Academy.
                  Our admissions team will contact you soon.
                </p>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-5 w-full rounded-xl bg-[#25D366] py-3 font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Continue on WhatsApp
                </button>
              </div>
            )}

            {/* First & Last Name */}

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-lime-300"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-lime-300"
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
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-lime-300"
            />

            {/* Program */}

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-lime-300"
            >
              <option value="" className="text-black">
                Select a Program
              </option>

              <option value="O/L" className="text-black">
                G.C.E Ordinary Level
              </option>

              <option value="A/L Science" className="text-black">
                A/L Science
              </option>

              <option value="A/L Commerce" className="text-black">
                A/L Commerce
              </option>

              <option value="A/L Arts" className="text-black">
                A/L Arts
              </option>

              <option value="ICT" className="text-black">
                ICT Programs
              </option>

              <option value="English" className="text-black">
                English Courses
              </option>

            </select>

            {/* Message */}

            <textarea
              rows={5}
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 outline-none focus:border-lime-300"
            />
                        {/* Buttons */}

            <div className="mt-6 space-y-4">

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-lime-300 py-3 font-semibold text-[#054237] transition hover:bg-lime-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={20} />

                {loading ? "Sending..." : "Send Inquiry"}

              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-green-500 bg-green-500/20 py-3 font-semibold text-white transition hover:bg-green-500"
              >
                <MessageCircle size={20} />

                Chat on WhatsApp

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}