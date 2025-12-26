import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    import("gsap")
      .then(({ gsap }) => {
        const tl = gsap.timeline({ defaults: { opacity: 1 } });

        tl.fromTo(
          ".hero-title",
          { opacity: 0, y: -60 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        )
          .fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.6"
          )
          .fromTo(
            ".hero-desc",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          )
          .fromTo(
            ".hero-cta",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.2"
          )
          .fromTo(
            ".hero-socials a",
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              duration: 0.5,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          );
      })
      .catch(() => {
        // Fallback: ensure content is visible even if GSAP fails to load
        const elements = document.querySelectorAll(
          ".hero-title, .hero-subtitle, .hero-desc, .hero-cta, .hero-socials"
        );
        elements.forEach((el) => {
          if (el) el.style.opacity = "1";
        });
      });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center py-20">
        <div className="hero-title mb-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-[0_4px_20px_rgba(96,165,250,0.8)]">
            Santu Jhankri Magar
          </h1>
        </div>

        <p className="hero-subtitle text-xl md:text-2xl text-blue-300 font-semibold mb-4 drop-shadow-lg">
          Full Stack Developer & UI/UX Enthusiast
        </p>

        <p className="hero-desc text-base md:text-lg text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
          Computer Engineering Student at{" "}
          <span className="text-cyan-300 font-semibold">
            Himalaya College of Engineering
          </span>
          <br />
          Passionate about creating responsive and clean user interfaces with
          expertise in{" "}
          <span className="text-cyan-300 font-semibold">Next.js</span>,{" "}
          <span className="text-blue-300 font-semibold">React.js</span>,{" "}
          <span className="text-green-300 font-semibold">Node.js</span>, and{" "}
          <span className="text-yellow-300 font-semibold">Express.js</span>
          <br />
          Building scalable web applications with{" "}
          <span className="text-emerald-300 font-semibold">MongoDB</span>,{" "}
          <span className="text-sky-300 font-semibold">MySQL</span>, and{" "}
          <span className="text-indigo-300 font-semibold">PostgreSQL</span>
        </p>

        <div className="hero-cta flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-transparent border-2 border-blue-400 rounded-full font-semibold text-blue-400 hover:bg-blue-400 hover:text-white shadow-lg hover:shadow-xl transform transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-socials flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/San2magar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/santu-jhankri-magar-391038350"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:jhankrisantu@gmail.com"
            className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform shadow-lg"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
