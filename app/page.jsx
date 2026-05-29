
"use client";

import { useState } from "react";

export default function EmbeddedTrainingWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const syllabus = [
    {
      title: "Module 1: Introduction to C",
      topics: [
        "C Basics",
        "Variables & Data Types",
        "Operators",
        "Input/Output",
        "Practice Programs",
      ],
    },
    {
      title: "Module 2: Pointers & Memory",
      topics: [
        "Pointer Basics",
        "Pointer Arithmetic",
        "Arrays & Pointers",
        "Dynamic Memory",
        "Memory Debugging",
      ],
    },
    {
      title: "Module 3: Embedded C",
      topics: [
        "Embedded Concepts",
        "Volatile Keyword",
        "Memory Mapped IO",
        "Embedded Coding Standards",
      ],
    },
    {
      title: "Module 4: RTOS & MCU",
      topics: [
        "RTOS Basics",
        "Task Scheduling",
        "Interrupts",
        "UART/SPI/I2C/CAN",
        "Mini Projects",
      ],
    },
  ];

  const features = [
    "Live Online Classes",
    "Industry-Oriented Training",
    "Hands-on Projects",
    "Interview Preparation",
    "Lifetime Study Material",
    "Real Embedded Examples",
    "Doubt Support",
    "Placement Guidance",
  ];

  const projects = [
    "Calculator using Functions",
    "Register Level Programming",
    "Embedded Peripheral Interface Demo",
    "Mini RTOS Simulation",
    "Bit Manipulation Project",
    "Student Record System",
  ];



const handleInquiry = async (e) => {
  e.preventDefault();
console.log("API HIT");
  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const res = await fetch("/api/telegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  console.log(result);

  alert("Submitted successfully!");

  form.reset();
};

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/90 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              Embedded Academy
            </h1>
            <p className="text-sm text-slate-400">
              Code Today. Build Tomorrow.
            </p>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>

            <a href="#courses" className="hover:text-cyan-400">
              Courses
            </a>

            <a href="#syllabus" className="hover:text-cyan-400">
              Syllabus
            </a>

            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl transition-all"
          >
            Enroll Now
          </a>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-slate-300">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#syllabus">Syllabus</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-300 mb-6">
              Industry Ready Embedded Systems Course
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              C Programming
              <span className="block text-cyan-400">
                For Embedded Systems
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-relaxed">
              Learn C Programming, Embedded C, RTOS, MCU Programming,
              Debugging, CAN Protocol, and Real-Time Embedded Systems
              with industry-oriented practical training.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/C_Programming_for_Embedded_Systems_brochure.pdf"
                download
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-400 hover:text-black"
              >
  Download Brochure
</a>
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold shadow-lg shadow-cyan-500/30"
              >
                Join Live Batch
              </a>

              <a
                href="/files/syllabus.pdf"
                download
                className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-2xl font-semibold"
              >
                Download Syllabus
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  84+
                </h3>
                <p className="text-slate-400 mt-2">
                  Days Syllabus
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  100%
                </h3>
                <p className="text-slate-400 mt-2">
                  Hands-on Training
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <h3 className="text-3xl font-bold text-cyan-400">
                  Live
                </h3>
                <p className="text-slate-400 mt-2">
                  Online Classes
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-8xl font-black text-white">
                C
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-cyan-400 font-semibold">
                    Batch Timing
                  </h4>
                  <p className="text-slate-300 mt-2">
                    9:30 PM – 10:30 PM
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-cyan-400 font-semibold">
                    Mode
                  </h4>
                  <p className="text-slate-300 mt-2">
                    Live Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why Join This Course?
            </h2>

            <p className="text-slate-400 mt-4 text-lg">
              Production-level embedded systems training with practical
              exposure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  ✓
                </div>

                <h3 className="text-lg font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="py-20 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Course Highlights
            </h2>

            <p className="text-slate-400 mt-4">
              Learn industry-relevant embedded systems concepts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "C Programming Fundamentals",
                desc:
                  "Strong understanding of C language concepts from beginner to advanced level.",
              },
              {
                title: "Embedded C & MCU",
                desc:
                  "Peripheral programming, GPIO, UART, SPI, I2C, CAN and debugging.",
              },
              {
                title: "RTOS & Real-Time Systems",
                desc:
                  "Task scheduling, interrupts, synchronization and real-time applications.",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:scale-[1.02] transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl mb-6">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-relaxed">
                  {course.desc}
                </p>

                <a
                  href="#contact"
                  className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section
        id="syllabus"
        className="py-20 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Complete Syllabus
            </h2>

            <p className="text-slate-400 mt-4 text-lg">
              Step-by-step roadmap to become an embedded systems
              engineer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {syllabus.map((module, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                  {module.title}
                </h3>

                <div className="space-y-4">
                  {module.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-slate-950 rounded-xl p-4 border border-slate-800"
                    >
                      <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                        {idx + 1}
                      </div>

                      <span className="text-slate-300">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Mini Projects Included
            </h2>

            <p className="text-slate-400 mt-4 text-lg">
              Build practical embedded systems projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition-all"
              >
                <div className="text-4xl mb-5">🚀</div>

                <h3 className="text-xl font-semibold">
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] p-12 bg-gradient-to-r from-cyan-500 to-blue-700 text-center shadow-2xl shadow-cyan-500/20">
            <h2 className="text-5xl font-black leading-tight">
              Start Your Embedded Systems Journey Today
            </h2>

            <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
              Learn from fundamentals to production-level embedded
              systems development.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="#contact"
                className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
              >
                Book Free Demo
              </a>

              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
                target="_blank"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Let’s Build Your Career in Embedded Systems
            </h2>

            <p className="text-slate-400 mt-6 text-lg leading-relaxed">
              Contact us to join the next batch, book a free demo
              class, or discuss your learning roadmap.
            </p>

            <div className="mt-10 space-y-5 text-slate-300">
              <div>📞 +91 9628416763</div>

             

              <div>🌐 Live Online Classes</div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-8">
              Send Inquiry
            </h3>

            <form onSubmit={handleInquiry} className="space-y-5">
              <input
                name="name"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                placeholder="Your Name"
              />

              <input
                name="phone"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                placeholder="Phone Number"
              />

              <input
                required
                 name="email"
                type="email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                placeholder="Email Address"
              />

              <textarea
                name="message"
                required
                rows="5"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
                placeholder="Your Message"
              ></textarea>

              <button
                type="submit" 
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        //href="https://wa.me/919628416763"
        href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_NUMBER}`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        <p>© 2026 Embedded Academy. All rights reserved.</p>

        <p className="mt-2 text-sm">
          Built with Next.js + Tailwind CSS | Secure • Fast •
          Responsive
        </p>
      </footer>
    </div>
  );
}

